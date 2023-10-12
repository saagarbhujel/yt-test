import useAuth from "./useAuth.tsx";
import {useNavigate, useLocation} from "react-router-dom";

const UseLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

  const logout = () => {
    setAuth({});

    navigate('/login', { state: { from: location.pathname } });

  };

  return logout;

};

export default UseLogout;