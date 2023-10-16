import useAuth from "./useAuth";
import axios from "../api/axios";
import Cookies from "universal-cookie";

type prevType = {

    role?: string ;
    accessToken?: string 
    refreshToken?: string ;


}

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const cookies = new Cookies();

  const refreshToken= auth?.refreshToken;
 
  

  const refresh = async () => {

    try{
      const res = await axios.post(
        "/common/generaterefresh",
        {
          refreshToken: refreshToken,
        },
        {
          withCredentials: true,
        }
      );
     
  
      setAuth((prev: prevType) => {
        return {
          ...prev,
          role: res.data.role,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          
        };
      });
     
  
  
      cookies.set("accessToken", res?.data?.accessToken, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      cookies.set("refreshToken", res?.data?.refreshToken, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      
    return res.data.accessToken;
    }
    catch(error){
      console.log(error)
    }


  };
  return refresh;
};

export default useRefreshToken;
