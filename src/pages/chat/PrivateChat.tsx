



import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
 
   
   


const PrivateChat= () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/chatPrivate';

const handleClick = () => {
 navigate( from, { replace: true })
}
  
  return (
    <section>
      <button onClick={handleClick} className='bg-green-500/20 hover:bg-green-500/30 p-4 w-[10vw] h-[15vh] rounded-md shadow-md ml-16'>
       Private Chat </button>
    </section>
  )
}

export default PrivateChat