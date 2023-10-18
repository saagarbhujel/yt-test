
import {Link} from "react-router-dom";


import LeftAside from "../../components/LeftAside.tsx";
import NavBar from "./NavBar.tsx";
import Hero from "./Hero.tsx";
import LeaderBoard from "../../components/admin/components/leaderBoard.tsx";

const Home = () => {
   
  return (
    <>
      <section className="flex">
        <div className="fixed">
          <LeftAside />
        </div>
        <div className=" ml-[20vw]">
          <NavBar />
          <LeaderBoard />
          {/* <Hero /> */}
        </div>
        
      </section>

    
     
 
    </>
  );
}

export default Home