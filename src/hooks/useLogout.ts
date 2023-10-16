import useAuth from "./useAuth.tsx";
import {useNavigate, useLocation} from "react-router-dom";
import Cookies from 'universal-cookie';

const UseLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const cookies = new Cookies();

  const logout = () => {
    setAuth({});
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    cookies.remove('response')

    navigate('/login', { state: { from: location.pathname } });

  };

  return logout;

};

export default UseLogout;