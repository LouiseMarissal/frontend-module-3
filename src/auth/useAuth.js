import { useState, useEffect, useContext } from "react";
import APIHandler from "./../api/APIHandler";
import UserContext from "./UserContext";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  useEffect(() => {
    APIHandler.get("/auth-routes/is-loggedin")
      .then(res => {
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data.currentUser);
        console.log(setCurrentUser);
      })
      .catch(err => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading };
};
