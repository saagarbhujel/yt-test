
import {Link} from "react-router-dom";


import LeftAside from "../../components/LeftAside.tsx";
import NavBar from "./NavBar.tsx";
import Hero from "./Hero.tsx";

const Home = () => {
   
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

    
     
 
    </>
  );
}

export default Home