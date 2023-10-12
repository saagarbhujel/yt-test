
import useAuth from './useAuth'




const useRefreshToken = () => {
   const { auth} = useAuth();

  const refresh = auth?.refreshToken


  return refresh
   

   
}

export default useRefreshToken






    
    // const refresh= async ()=> {
    //     const res = await axios.post("/player",{
    //         withCredentials: true,  
    //     });
    //         setAuth(prev=>{
    //            console.log(JSON.stringify(prev));
    //            console.log(res?.data?.accessToken);
    //            return {...prev, accessToken: res?.data?.accessToken}
               
                
    //         })
    //         return res?.data?.accessToken
      
    // }