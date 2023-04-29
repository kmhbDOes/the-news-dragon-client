import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/*
  **Private Route**
 
 1. Check if user is logged in or not
 2. If user is logged in then allow them to visit the route
 3. Otherwise redirect to log in page
 4. Setup private router

*/
