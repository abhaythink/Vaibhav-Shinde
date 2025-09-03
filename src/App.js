import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import UseReduceComp from "./components/UseReducer/UseReduceComp";
import AuthContext from "./components/store/auto-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (userLoggedInInfo == "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "0");
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
    }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
