
import {Link} from "react-router-dom";
import Player from '../../components/Player.tsx'
import useLogout from "../../hooks/useLogout.ts";
import LeftAside from "../../components/LeftAside.tsx";

const Home = () => {
    const logout = useLogout()
    const handleClick = () => {
    logout()
    }
  return (
    <>
  
   
    <section className="flex ">
   <div>
  
   </div>
    <div>
      
     <Player />
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/chat"}>Chat</Link>
       < button onClick={handleClick}>Logout</button>
    </div>
    </section>
    </>
  )
}

export default Home