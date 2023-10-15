import React, {useRef, useEffect,useState} from 'react'
import { io, Socket } from 'socket.io-client'
import InputForm from './InputForm'
import ChatContainer from './ChatContainer'
import SideNav from './SideNav'
import useAuth from '../../hooks/useAuth'

interface MessageEvent<T = any>
  extends Pick<Event, 'type' | 'target' | 'currentTarget'> {
  data: T;
}
type DefaultEventsMap = {
  // Define your socket events here
  // For example, if you have an event named 'privateMessage' that takes an object as an argument:
  privateMessage: { message: string; recipientId: string };
  message_room: { roomName: string; message: string };
  // Add more events as needed
};

const Chat = () => {
  const {auth} = useAuth()
  console.log(auth?.accessToken);
  

  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);

  const [message, setMessage] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [roomMessages, setRoomMessages] = useState<string[]>([]);
  const [sseMessages, setSseMessages] = useState<string[]>([]);
  const [privateMessages, setPrivateMessages] = useState<string[]>([]);


  

  useEffect(() => {
    // Connect to the Socket.io server when the component mounts
    const socket = io('http://localhost:8080', {
      extraHeaders: {
        authorization:
        `Bearer ${auth?.accessToken}`
      }
    });
    setSocket(socket);

       // make connection on private message and send message hlo in console
        socket.on("private message", (data) => {
          setPrivateMessages(data)
          console.log(data);
          
        });

        // make connection on private message and send message hlo in console
        socket.on("message_room", (data) => {
          setMessage(data)
        });

        
    
    return () => {
      // Clean up the socket and eventSource when the component unmounts
      socket.disconnect();
     
    };
  }, []);

 







  return (
    <section className="  w-[100vw]  ">
      <div className="flex">
        <div className="w-[20vw] h-full ">
          <SideNav />
        </div>

        <div className="w-[80vw] ">
          <div className="fixed bg-white w-full">
            <h2 className="text-[2rem] pl-4  border-b">Chats</h2>
          </div>
          <div className="overflow-scroll  h-[87vh] py-4 mt-4 mb-4 ">
            <ChatContainer />
          </div>
          <div className="fixed bottom-2 ">
            <InputForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat