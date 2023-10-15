import React, { useState, useRef, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import useAuth from "../../hooks/useAuth";


type DefaultEventsMap = {
    privateMessage :{message:string, recipientId:string}
    message_room :{roomName:string, message:string}
};

const RoomChat = () => {
//   const socket = useRef<Socket>();
  const { auth } = useAuth();
  console.log(auth?.accessToken);
  const Token = auth?.accessToken;
  
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [room, setRoom] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");


  useEffect(()=>{
    const socket = io("http://192.168.18.127:8080",{

    extraHeaders:{
        authorization:`Bearer ${Token}`,
    }
    });
    setSocket(socket);
  },[])




  return (
    <div>
      <input
        className="border border-black"
        type="text"
        placeholder="Room"
        id="room"
        onChange={(e) => setRoom(e.target.value)}
      />

      <button className="p-4 bg-blue-700" >
        Join room
      </button>
    </div>
  );
};

export default RoomChat;
