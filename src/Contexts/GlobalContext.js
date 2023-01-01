import React, { useContext, useState } from "react";


const AppContext = React.createContext(null);
const AppProvider = ({ children }) => {




  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [islouout, setIslouout] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

 
  const toggleSidebarShow = () => {
    setToggleSidebar(!toggleSidebar);
  };
  // const logout = ()=>{
  //   setIsloading(false)
  //   setCurrentUser(null)
  //   setSuccess(null)
  //   setError(null)
  //   sessionStorage.clear()
  //   localStorage.clear()
  //   setIsloading(false)
  // }

  return (
    <AppContext.Provider
      value={{
        toggleSidebarShow,
   
        toggleSidebar,
        islouout,
        setIslouout,
        isloading,
        setIsloading,success, setSuccess,error, setError
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };