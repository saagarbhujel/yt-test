import React, {useRef, useEffect,useState} from 'react'
import { io, Socket } from 'socket.io-client'
import InputForm from './InputForm'
import ChatContainer from './ChatContainer'
import SideNav from './SideNav'


const Chat = () => {

  // const [connected, setConnected] = useState(false)
  // const [username, setUsername] = useState('')
  // const [connectedUsers, setConnectedUsers] = useState<string[]>([])
  // const [messages, setMessages] = useState<string[]>([])

  // const socketClient = useRef<Socket>()

  // useEffect(()=>{
  //   socketClient.current = io("ws://192.168.18.127:8080");

  //   if(socketClient.current){
  //     console.log('connected')
  //     socketClient.current.on("connect", () => {
  //       setConnected(true)
  //     })

  //     // socketClient.current.on("error", (error) => {
  //     //   console.error("WebSocket error:", error);
  //     //   // Handle the error as needed
  //     // });

  //     //it is used to get the private message
  //     socketClient.current.on("privateMessage", (data: string) => {
  //       console.log("privateMessage", data);        
  //       setMessages(prevMsg =>[...prevMsg, data])
  //     })


   

  //     //to disconnect the socket when unmount
  //     return () => {
  //       socketClient.current?.disconnect()
  //     }
  //   }
  // },[])


  //to send the message to the server
  // const sendMessage = () => {
  //   if(socketClient.current){
  //     console.log('send message');
  //     socketClient.current.emit("privateMessage", {
  //       recipientId: "12324",
  //       message: messages,
  //     });
  //     setMessages([])
  //   }
  // }

  // const handleConnection = () => {
  //   if(socketClient.current){
  //     socketClient.current.emit("handle-connection")
  //   }
  // }
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