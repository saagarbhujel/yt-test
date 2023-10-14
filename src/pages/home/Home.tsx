
import {Link} from "react-router-dom";
import Player from '../../components/Player.tsx'
import useLogout from "../../hooks/useLogout.ts";
import LeftAside from "../../components/LeftAside.tsx";
import NavBar from "./NavBar.tsx";
import Hero from "./Hero.tsx";

const Home = () => {
    const logout = useLogout()
    const handleClick = () => {
    logout()
    }
  return (
    <>
      <section className="flex">
        <div className="fixed">
          <LeftAside />
        </div>
        <div className=" ml-[20vw]">
          <NavBar />
          <Hero />
        </div>
      </section>

      {/*    
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
    </section> */}
    </>
  );
}

export default Home