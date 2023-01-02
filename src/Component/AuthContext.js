import { createContext, useContext, useRef, useState } from "react";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [search, SetSearch] = useState("")
    const [passings, setPassings] = useState({})







  const contextData = {
  search,
  SetSearch,
  passings,
  setPassings
    
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};