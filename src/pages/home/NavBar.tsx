import React from 'react'
import useDetails from '../../hooks/useDetails'


const NavBar = () => {
  const {details} = useDetails()

  const greettings =()=>{
    if(new Date().getHours() < 12){
      return "Good Morning"
    }else if(new Date().getHours() < 18){
      return "Good Afternoon"
    }else{
      return "Good Evening"
    }
  }
  return (
    <nav className=" w-[80vw] h-20 flex items-end">
      <div className="ml-8 flex flex-row ">
        <p className="font-bold text-black text-[30px] ">
          {greettings()}, <span className='text-green-500 capitalize'>{details?.name ? details?.name : "Player"}</span>
        </p>
      </div>
    </nav>
  );
}

export default NavBar