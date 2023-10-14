import React from 'react'
import useDetails from '../../hooks/useDetails'

const BioDetials = () => {
  const {details} = useDetails()
  console.log(details?.id);
  console.log(details.statistics?.games_played);
  
  
  return (
    <section className='bg-yellow-400 h-[70vh] w-[100%] mt-8'>
      <div className='bg-red-500   h-full'>
              <div className='flex items-end'>
                <div className='w-10 h-10 bg-black rounded-full'/>
              </div>

            <div className='flex bg-green-500'>
                      <div>
                            <div>
                             
                            </div>
                            <div>
sdfasd
                            </div>
                        </div>

                      <div>
                            <div>

                            </div>
                            <div>

                            </div>

                       </div>


          </div>
      </div>
    </section>
  )
}

export default BioDetials