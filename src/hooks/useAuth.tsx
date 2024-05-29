// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIfUserIsLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  useEffect(() => {
    const userLoggedIn = checkIfUserIsLoggedIn();
    setIsLoggedIn(userLoggedIn);
  }, []);

  const login = (token:any) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
