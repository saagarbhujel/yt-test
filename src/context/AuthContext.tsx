import { createContext, useState } from "react";


type AuthContextTypes = {
  auth:any;
  setAuth: any;

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

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;