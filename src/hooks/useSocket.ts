import {useState, useEffect} from 'react'
import {io, Socket} from 'socket.io-client'
import useAuth from './useAuth'


const useSocket = () => {
const {auth} = useAuth()

const [socket, setSocket] = useState<Socket>()


useEffect(() => {
    const socket = io('http://localhost:8080',{
        extraHeaders: {
            authorization: `Bearer ${auth?.accessToken}`
        }
    })
    socket.on('connect', () => {
        console.log('connected')
    })   

    socket.on('disconnect', () => {
        console.log('disconnected')
    })
    setSocket(socket)
    return () => {
        socket.disconnect()
    }
},[auth])
return socket
}

export default useSocket