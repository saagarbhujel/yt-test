import React from 'react'
import { useLocation,Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

type AuthType = {
  auth: any
  role: any; // Define the type of the role property
};

type RequireAuthProps = {
  allowedRoles: string[];
};


const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth() as unknown as AuthType;
  const location = useLocation();

  return (
  auth?.role && allowedRoles?.includes(auth?.role) ? 
    <Outlet />
   : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
  )
};

export default RequireAuth