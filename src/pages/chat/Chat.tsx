import React from 'react'


const Chat = () => {
  return (
   <>
    <section className="chat w-[83vw]  h-[100vh] bg-red-800 ">
      <h2 className='text-[2rem] ml-4'>Chats</h2>
     <div className=' bg-yellow-400 h-[94.8vh]'>
     <div className= 'flex items-center justify-center absolute bottom-2 h-12 bg-black  w-[83vw] '>
      <input className='border border-black w-[75vw] h-full rounded-md pl-4' id='chat' type="text" />
     
     </div>
     </div>
    </section>
   </>
  )
}

export default Chat