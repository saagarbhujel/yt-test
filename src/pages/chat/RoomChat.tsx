import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
 
   
   


const RoomChat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/chatRoom';

const handleClick = () => {
 navigate( from, { replace: true })
}
  
  return (
    <section>
        <button onClick={handleClick} className='bg-blue-500/20 hover:bg-blue-500/30 p-4 w-[10vw] h-[15vh] rounded-md shadow-md mr-16'>
            Room Chat
        </button>
 
            
      
    </section>
  )
}

export default RoomChat