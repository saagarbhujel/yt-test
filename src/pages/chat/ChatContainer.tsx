import React, { useState, useEffect } from "react";
import useRoomChat from "../../hooks/useRoomChat";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Messages from "./Messages";

const ChatContainer = () => {
  const { auth } = useAuth();

  const user = auth;

  const navigate = useNavigate();

  const [roomName, setRoomName] = useState<string>("");
  const [message, setMessage] = useState("");

  const {
    messages,
    players,
    socket,
    isLoadingMessages,
    joinRoom,
    leaveRoom,
    getRoomMessages,
    sendRoomMessage,
    setMessages,
  } = useRoomChat();

  useEffect(() => {
    socket?.on(
      "message_room",
      ({
        id,
        message,
        senderId,
      }: {
        id: string;
        message: string;
        senderId: string;
      }) => {
        const newMessage = {
          id,
          message,
          sender_id: senderId,
          created_at: new Date().toUTCString(),
        };
        const clone = messages ? [...messages, newMessage] : [newMessage];
        setMessages(clone);
      }
    );
    socket?.on(
      "message",
      ({ message, senderId }: { message: string; senderId: string }) => {
        const json = JSON.parse(message);

        if (json.event === "join_room") {
          if (json.roomName === roomName) {
            getRoomMessages(roomName);
          }
        }

        if (json.event === "delete_message") {
          setMessages(messages.filter((message) => message.id !== json.id));
        }

        if (json.event === "leave_room") {
          if (json.roomName) {
            getRoomMessages(json.roomName);

            if (senderId === user.id) {
              navigate("/chat");
            }
          }
        }

        if (json.event === "update_message") {
          if (json.roomName) {
            getRoomMessages(json.roomName);
          }
        }
      }
    );

    return () => {
      socket?.off("message_room");
      socket?.off("message");
      socket?.off("join_room");
    };
  }, [socket, roomName, messages]);

  const handleRoomname = () => {
    if (roomName) {
      joinRoom(roomName);
    }
  };

  const handleSendMsg = () => {
    if (message) {
      sendRoomMessage(roomName, message);
      setMessage("");
    }
  };

  const handleLeaveRoom = () => {
    leaveRoom(roomName);
    navigate("/chat");
  };
  return (
    <div className="w-full relative h-full">
      <div className="flex w-full justify-between h-full">
        <div className="flex flex-col w-full h-full justify-between">
          <div className="flex flex-col gap-2 py-4  ">
            <div className="flex justify-between  ">
              <div className="flex mt-2 ">
                <input
                  placeholder="Enter room name"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="border outline-none border-r-0 border-gray-400 mt-4 p-1  rounded-l-md "
                />
                <button
                  onClick={handleRoomname}
                  className="border border-l-0 outline-none border-gray-400 mt-4 p-1 rounded-r-md text-white hover:bg-green-500  bg-green-500/90"
                >
                  Join
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  className=" border pl-2 pr-2 rounded-md bg-orange-500/90 hover:bg-orange-500 text-white "
                  title="Leave Room"
                  onClick={() => {
                    handleLeaveRoom();
                  }}
                >
                  Leave Chat
                </button>
              </div>
            </div>
          </div>

          <div className="flex h-[70vh]">
            <div className="flex flex-col px-2 w-full flex-1 h-full justify-end">
              <Messages
                userId={user.id}
                messages={messages}
                players={players}
                isLoading={isLoadingMessages}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input foor message */}
      <div className=" h-[6vh]  flex ">
        <input
          className="border border-r-0 rounded-l outline-none w-[60vw]  h-full  pl-4 shadow-sm "
          id="message"
          placeholder="Write message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMsg}
          className="h-full border bg-blue-500/90 hover:bg-blue-500 text-white pl-2 pr-2 rounded-r border-l-0"
        >
          Send
        </button>
      </div>
    </div>
  );

  // );
};

export default ChatContainer;
