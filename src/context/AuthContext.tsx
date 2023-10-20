import { createContext, useState,useEffect } from "react";
import Cookies from 'universal-cookie';




type AuthContextTypes = {
  auth: {
    role?: string;
    id?: string;
    accessToken?: string;
    refreshToken?: string;
  };
  setAuth: React.Dispatch<
    React.SetStateAction<{
      role?: string | undefined;
      id?: string;
      accessToken?: string | undefined;
      refreshToken?: string | undefined;
    }>
  >;

}

const AuthContext = createContext<AuthContextTypes>({
  auth: {},
  setAuth: () => {},
 
});

type AuthContextProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [auth, setAuth] = useState({});

//   const cookies = new Cookies(); 
//   const accessToken = cookies.get("accessToken");
//   const refreshToken = cookies.get("refreshToken");
//   const role = jwtDecode(accessToken)?.role;

// setAuth({role, accessToken,refreshToken})
// console.log(auth,"auth");

useEffect(() => {
  const cookies = new Cookies();
  const res = cookies.get('response')
  const role = res?.role;
  const accessToken = res?.accessToken;
  const refreshToken = res?.refreshToken;
  const name = res?.name;
  const id= res?.id;
  // console.log(res,"res");
  


  setAuth({ role, id,accessToken, refreshToken,name });
}, [setAuth]); 


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;