import React from 'react'
import { useLocation,Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import jwt_decode from "jwt-decode";



type RequireAuthProps = {
  allowedRoles: string[];
};
type AuthToken = {
  role: string;

};

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth()
  const location = useLocation();
  const decoded:AuthToken | undefined = auth.accessToken ? jwt_decode(auth.accessToken) : undefined
  // console.log(decoded?.role)
  const role = decoded?.role ? decoded?.role : undefined
  // console.log(role)

  return (
      role && allowedRoles?.includes(role) ?
    <Outlet />
   : !auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
  )
};



export default RequireAuth