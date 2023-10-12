
import {Link} from "react-router-dom";
import Player from './Player'
import useLogout from "../hooks/useLogout.ts";

const Home = () => {
    const logout = useLogout()
    const handleClick = () => {
    logout()
    }
  return (
    <div>Home
     <Player />
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
       < button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home