import React from 'react'
import useDetails from '../../hooks/useDetails'
import { useNavigate, useLocation } from 'react-router-dom'
import EventHandle from '../../components/admin/components/EventSource'


const NavBar = () => {
  const {details} = useDetails()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard';



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
    <nav className=" w-[100%] h-20 md:w-[80vw] xl:[80vw] flex justify-between items-center  fixed md:mr-10 ">
      <div className="ml-4 md:ml-8 md:flex flex-row ">
        <p className=" font-semibold md:font-bold text-black md:text-[30px] ">
          {greettings()},{" "}
          <span className="text-green-500 capitalize">
            {details?.name ? details?.name : "Player"}
          </span>
        </p>
      </div>
      <div className='mt-4  '>
       {/* <Search /> */}
       <EventHandle />
      </div>
      <div className=' mr-6 md:mr-10 md:mt-4'>
        <button
        onClick={
          ()=>{
            navigate(from, { replace: true });
          }
        }
        className=" bg-green-500 hover:bg-green-500/90 pl-4 md:pl-6 pr-4 md:pr-6 text-white pt-2 md:pt-3 pb-2 md:pb-3 rounded-md shadow-md md:text-[18px] md:font-semibold ">
          Dashboard
        </button>
      </div>
      
    </nav>
  );
}

export default NavBar