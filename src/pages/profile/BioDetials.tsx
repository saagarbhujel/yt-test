import React from 'react'
import useDetails from '../../hooks/useDetails'

const BioDetials = () => {
  const {details} = useDetails()
  // console.log(details?.id);
  // console.log(details.statistics?.games_played);
  // console.log(details?.country);
 const country = details?.country  

  const countrySelector = () => {

    if(country === 'np'){
     return 'Nepal'
    } else if(country === 'in'){
      return 'India'
    } else if(country === 'au'){
     return 'Australia'
    } else if(country === 'us'){
      return 'United States of America'
    } else if(country === 'af'){
      return 'Afghanistan'
    }else{
     return 'Country'
    }

  }
  
  const Country = countrySelector()
  // console.log(countrySelector());
  
  return (
    <section className=' h-[80vh] w-[100%] mt-8 flex justify-center items-center   '>
      <div className='flex bg-gray-600/10 w-[80%] flex-col justify-center items-center  h-[38rem] rounded-md'>
             

            <div className='flex justify-center item-center   h-[70%] w-[70%] '>
              <div className='flex justify-evenly items-center w-full  '>

             
                      <div className='flex flex-col justify-end '>
                            <div>
                                <div className='flex items-center justify-center w-[350px] h-[350px] p-9  border-black border rounded-full shadow-md '>
                                  <img className='w-[300px] h-[300px]' src="public\assets\prfilepic.png" alt="profile pic" />
                               
                                </div>
                               {
                                details?.active === true ?  <div className='w-[1.9rem] h-[1.9rem] bg-green-500 rounded-full relative left-[19rem] bottom-[6rem]' /> 
                                : <div className='w-[1.9rem] h-[1.9rem] bg-red-600 rounded-full relative left-[19rem] bottom-[6rem]' />
                               }
                               
                            </div>

                            <div >

                            <p className=' font-bold text-[3.5rem] text-center first-letter:capitalize text-blue-600'>
                                  {details?.name ? details?.name : 'Name'}
                                </p>
                              <p className=' text-center first-letter:capitalize'>
                            
                                 Country <span className='text-blue-600'>:-</span> {
                                   Country 
                                  }<span className='text-orange-500'>.</span>
                             
                              </p>
                            </div>
                        </div>

                      <div className= 'bg-blue-500/10 ml-[8rem] w-[45%]  h-[250px] flex mb-28 pt-4 rounded-md shadow-md     justify-center '>
                            
                            <div className='flex  flex-col items-center ' >
                            <p className='  first-letter:capitalize mb-2 underline font-bold text-center text-[2.8rem] text-orange-500' >
                                  statistics
                                  </p>
        

                                <ul className='flex  items-stretch flex-col text-[20px] '>
                                  
                                  <li className='mb-2'>
                                  Experience <span className='text-blue-600'>:-</span> { details?.statistics?.experience_point ? details?.statistics?.experience_point : "XP" } points<span className='text-orange-500'>.</span>
                                  </li>
                                  <li className='mb-2'>
                                    
                                       
                                     
                                  Game Played <span className='text-blue-600'>:-</span> { details?.statistics?.games_played ? details?.statistics?.games_played : "0"} games<span className='text-orange-500'>.</span>
                                     
                                  </li >
                                  <li >
                                  Game Won <span className='text-blue-600'>:-</span> { details?.statistics?.games_won ? details?.statistics?.games_won : "0"} games won<span className='text-orange-500'>.</span>
                                  </li>
                                
                                </ul>
                              </div>
                          
                            <div>
                            </div>

                            </div>

                       </div>


          </div>
      </div>
    </section>
  )
}

export default BioDetials