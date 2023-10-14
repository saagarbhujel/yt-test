import React from 'react'


const NavBar = () => {

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
      <div className="ml-8">
        <h2 className="font-bold text-black text-[30px] ">
          {greettings()}, <span className='text-green-500'>Player Name</span>
        </h2>
      </div>
    </nav>
  );
}

export default NavBar