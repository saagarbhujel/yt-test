import useSocket from "./useSocket";
import { useState } from "react";
import axios from "../api/axios";


interface Message {
  id: string;
  sender_id: string;
  message: string;
  created_at: string;
}

interface Room {
  name: string;
  players: {
    id: string;
    name: string;
  }[];
}

const useRoomChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [players, setPlayers] = useState<Map<string, string>>(new Map());
  const [activePlayers, setActivePlayers] = useState<Map<string, string>>(
    new Map()
  );
  const [isLoadingRooms, setIsLoadingRooms] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(false);
  const [receiver, setReceiver] = useState("");

  const socket = useSocket();

  const joinRoom = (roomName: string) => {
    socket?.emit("join_room", { roomName }, () => {
      socket.emit("message_all", {
        message: JSON.stringify({
          event: "join_room",
          roomName,
        }),
      });
    });
  };

  const getRooms = async () => {
    setIsLoadingRooms(true);

    try {
      const response = await axios.get("/chats/allRoom");
      if (response.status === 200) {
        const rooms: Room[] = response.data;
        setRooms(rooms);
      }
    } catch (err) {
      console.error("Error fetching rooms:", err);
    } finally {
      setIsLoadingRooms(false);
    }
  };


  const getPlayers = async (players: string) => {
    setIsLoadingPlayers(true)
    try {
      const res = await fetch(`/player/${players}`)
      const map = new Map()

      if (res.ok) {
        const data = await res.json()

        if (Array.isArray(data)) {
          for (const player of data) {
            map.set(player.id, player.name)
          }
        } else {
          map.set(data.id, data.name)
        }
      }
      return map
    } catch (err) {
      console.error('Error fetching players:', err)
    } finally {
      setIsLoadingPlayers(false)
    }
  }

  const leaveRoom = (roomName: string) => {
    if (roomName !== "") {
      socket?.emit("leave_room", { roomName }, () => {
        socket.emit("message_all", {
          message: JSON.stringify({
            event: "leave_room",
            roomName,
          }),
        });
      });
    }
  };



  
  
  const sendRoomMessage = (roomName: string, message: string) => {
      if (message.trim() === "") return;
      
      socket?.emit("message_room", {
          roomName : roomName,
          message: message.trim(),
        });
    };
    
    
    const getRoomMessages = async (roomName: string) => {
        setIsLoadingMessages(true)
    
        if (roomName !== receiver) {
          setMessages([])
          setReceiver(roomName)
        }
        try {
          const res = await fetch(`/chats/room?roomName=${roomName}`)
    
          if (res.ok && res.headers.get('content-type')?.includes('application/json')) {
            const json = await res.json()
            const messages: Message[] = json.chats
            messages.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    
            const active = new Map()
    
            for (const player of json.players) {
              active.set(player.id, player.name)
            }
            setActivePlayers(active)
    
            const players = new Set(messages.map((message) => message.sender_id))
    
            const map = await getPlayers(Array.from(players).join(','))
            if (map) {
              setPlayers((prev) => new Map([...prev, ...map, ...active]))
            }
    
            setMessages(messages)
          }
        } catch (err) {
          console.error('Error getting messages:', err)
        } finally {
          setIsLoadingMessages(false)
        }
      }

  const getPrivateMessages = async (senderId: string, recipientId: string) => {
    setIsLoadingMessages(true)
    if (recipientId !== receiver) {
      setMessages([])
      setReceiver(recipientId)
    }

    try {
      const res = await fetch(`/chats/personal?senderId=${senderId}&receiverId=${recipientId}`)
      if (res.ok) {
        const messages: Message[] = await res.json()

        messages.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
        setMessages(messages)
      }
    } catch (err) {
      console.error('Error fetching private messages:', err)
    } finally {
      setIsLoadingMessages(false)
    }
  }

  const sendPrivateMessage = (recipientId: string, message: string) => {
    if (message.trim() === '') return

    socket?.emit('privateMessage', {
      message: message.trim(),
      recipientId,
    })
  }

  return {
    joinRoom,
    leaveRoom,
    getRooms,
    getRoomMessages,
    getPlayers,
    setPlayers,
    sendRoomMessage,
    setMessages,
    rooms,
    messages,
    players,
    activePlayers,
    socket,
    isLoadingRooms,
    isLoadingMessages,
    isLoadingPlayers,
    receiver,
    getPrivateMessages,
    sendPrivateMessage,
  };
};
export default useRoomChat;
