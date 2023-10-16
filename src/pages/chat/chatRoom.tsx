import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";


type Message = {
  // message: string;
  // id: string;
  // roomName: string;
  // createdAt: string;
  any
};

const ChatRoom = () => {
    
  const socket = io("http://localhost:8080", {
    transports: ['websocket'],
    extraHeaders: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0OTJhMzE3LWM0MjQtNGU3Ny1hMjkxLTZmYmNhODhjNzI3YiIsInJvbGUiOiJwbGF5ZXIiLCJpYXQiOjE2OTczNzU1MzQsImV4cCI6MTY5NzQ2MTkzNH0.JSlINdzoFnGH3sdo5DECLqW5qe_oXvf0s-TgFJGDSrE",
    },
  });

 


  const [message, setMessage] = useState([]);
  const [roomMessageInput, setRoomMessageInput] = useState("");



  
 

 
  
  useEffect(() => {
    

    socket.on('connect', () => {
      console.log(`${socket.id}I'm connected with the back-end`);

          socket.on('message_room', (data:{message:any}) => {
            console.log(data);
            setMessage(data.message);
          });
    

    


        
              });
      

   

    return () => {
      socket.off('connect');
    };
    
  }, [ socket]);


  const handleSendRoomMessage = () => {
    if (roomMessageInput) {
      socket.emit("message_room", {
        roomName: "saurabRoom",
        message: roomMessageInput,
      });
      setRoomMessageInput("");
    }
  };

  return (
    <>
      <div>
        <input
          value={roomMessageInput}
          placeholder="Enter message"
          className="border border-black"
          type="text"
          onChange={(e) => setRoomMessageInput(e.target.value)}
        />
        <button onClick={handleSendRoomMessage}>Send Message</button>

        <div>
          <div id="roomMessages">
            {message.map((msg, index) => (
              <div key={index}>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
