import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api"

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  
  useEffect(() => {
    auth().catch(() => setIsAuthorized(false))
  }, [])
  
  const refreshToken = async () => {
    const refreshedToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      //send a request to backend for new refresh token

      const res = await api.post("/api/token/refresh/", {
        refresh: refreshedToken,
      });

      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true)
      } else {
        setIsAuthorized(false)
      }
    } catch (error) {
      setIsAuthorized(false);
      console.log(error);
    }
  };

  const auth = async () => {
    // checks for access token and its expiration
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    //has token

    const decoded = jwtDecode(token);

    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
