

import useAuth from './useAuth'
import axios from '../api/axios'




const useRefreshToken = () => {
   const { setAuth,auth} = useAuth();
   const refreshToken = auth?.refreshToken as string
  //  console.log(refreshToken);
   
    const refresh = async () => {


    const res = await axios.post('/common/generaterefresh',{
      refreshToken: refreshToken
    },{
    withCredentials: true,
    }
  )
  // console.log(res?.data.accessToken);

        setAuth((prev: string[]) => {
            
            // console.log(JSON.stringify(prev));
            // console.log(res?.data?.accessToken);

            return {
                ...prev,
                role: res.data.role,
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken
            }
        });
  return res.data.accessToken

    
  }
  return refresh
   

   
}

export default useRefreshToken




