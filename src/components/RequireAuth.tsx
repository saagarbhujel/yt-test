import React from 'react'
import { useLocation,Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import jwt_decode from "jwt-decode";
import Cookie from 'universal-cookie';


type RequireAuthProps = {
  allowedRoles: string[];
};
type AuthToken = {
  role: string;

};

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const cookies = new Cookie();
const auth = cookies.get("response")
const accessToken = auth?.accessToken
const decoded:AuthToken | undefined = jwt_decode(accessToken)
const role = decoded?.role



  const location = useLocation();

  return (
      role && allowedRoles?.includes(role) ?
    <Outlet />
   : !auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
  )
};



export default RequireAuth