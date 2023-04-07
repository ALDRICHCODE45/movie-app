import { useContext } from "react";
import { Authcontext } from "../auth/Context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(Authcontext);

  return (logged)
    ? children
    : <Navigate to="/login" />
};
