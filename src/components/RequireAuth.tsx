import React from 'react'
import { useLocation,Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'



type RequireAuthProps = {
  allowedRoles: string[];
};


const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth() 
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