import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    if (email === "berk" && password === "berk1234") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  const logout = () => setLoggedIn(false);

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
