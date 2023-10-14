import { useState,useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";


const useDetails = () => {  
const axiosPrivate = useAxiosPrivate();
  let isMounted = true;
  const controller = new AbortController();


const [details, setDetails] = useState<any>([]);    


useEffect(()=>{
    const fetchDetails = async () => {
        
        const res = await axiosPrivate.get("/player", {
          signal: controller.signal,
        });
        console.log(res?.data);
        setDetails(res?.data);
        console.log(res?.data?.statistics);
        
    

    }

    fetchDetails();
    return () => {
        isMounted = false;
        // controller.abort();
    }
},[])


return {details};


   

}

export default useDetails;
