
import React, { useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import RoomChat from "./RoomChat";











const Chat = () => {
  const socket = useRef<Socket>();
  const {auth} = useAuth()

  useEffect(() => {
   socket.current = io("ws://192.168.18.127:8080", {
     transports: ["websocket"],
     extraHeaders: {
       authorization: `Bearer ${auth?.accessToken}`,
     },
   });

    console.log(socket.current);

      socket.current.on("connect", () => {
        console.log(socket.current?.id);
      });





        //  socket.current.on("disconnect", () => {
        //    console.log("Disconnected from the server");
        //  });

           socket.current.on("error", (error) => {
             console.error("Socket.io error:", error);
           });
 

      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
  },[]);

  //   
  // });
  return <div>Cha
    <RoomChat socket={socket.current} />
    t</div>;
};

export default Chat