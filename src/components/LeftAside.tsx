import React from 'react'
import { Link } from 'react-router-dom'

const LeftAside = () => {
  return (
  <section className='w-[18vw] h-[100vh] flex flex-col bg-[#173244] border-r  border-black'>
    <h2 className=' text-center my-3 text-[34px] font-bold text-white'>Yarsa Play</h2>
    <div className=' '>
     <div className='pl-6  text-white'>
        <h5 className='text-[18px] font-bold'>Dashboard</h5>
        <ul className=''>
            <Link to='/'> <li>Homepage</li></Link>
           <Link to='/profile'> <li>Profile</li></Link>
           <Link to='/chat'> <li>Chats</li></Link>
           <Link to='/stat'> <li>Stats</li></Link>
           
        </ul>
     </div>

    </div>

  </section>
  )
}

export default LeftAside