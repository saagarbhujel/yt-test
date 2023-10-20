import { Outlet } from 'react-router-dom'
import  useAuth  from '../hooks/useAuth'
import { useState,useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'


const PresistLogin = () => {

    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(()=>{
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            }catch(error){
                // console.log(error)
            }finally{
               isMounted && setIsLoading(false)
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

        return () => {
            isMounted = false;
        }

    },[])

  return (
   <>
   {
    isLoading ? <h1>Loading...</h1> : <Outlet /> 
   }
   </>
  )
}

export default PresistLogin