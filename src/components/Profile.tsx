import {Link} from "react-router-dom";


const Profile = () => {
    return (
        <div>
            Profile of player
            <Link to={"/"}>Home</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </div>
    );
};

export default Profile;