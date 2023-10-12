// import {useContext} from 'react';
// import AuthContext from "../context/AuthContext";

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// export default useAuth;


import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};

export default useAuth;
