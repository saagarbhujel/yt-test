import {Link} from "react-router-dom";
import LeftAside from "../../components/LeftAside";
import NavBar from "../home/NavBar";
import BioDetials from "./BioDetials";


const Profile = () => {
    return (
      <section className="flex">
        <div className="fixed">
          <LeftAside />
        </div>
        <div className=" ml-[20vw]">
         <NavBar />
         <BioDetials />
        </div>
      </section>

      // <div>
      //     Profile of player
      //     <Link to={"/"}>Home</Link>
      //     <Link to={"/dashboard"}>Dashboard</Link>
      // </div>
    );
};

export default Profile;