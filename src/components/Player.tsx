import { useState,useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";


const Player = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState({})


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPlayer = async () => {
      try {
        const res = await axiosPrivate.get('/player/play/game',
            {
              signal: controller.signal,
            })

        console.log(res?.data);
        isMounted && setUsers(res?.data)

      } catch (error: any) {
        console.log(error,"asdfasdfasdfasdfasf")
        if (error.response?.status === 401 && error.config._isRetry) {
          console.log('Token refresh error. Logging out.');
          navigate('/login', { state: { from: location.pathname }, replace: true });
        } else {
          console.log('Request error. Try again.15465165')
        }
    }}
    getPlayer()
    return () => {
      // isMounted && controller.abort();

      isMounted = false;
      controller.abort();
    };
  }, [])


  return (
      <>
        <h1>Player</h1>
        <ul>
          {`${users} users`}
        </ul>
      </>
  )
}
export default Player