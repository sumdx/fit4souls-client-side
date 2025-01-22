import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <Loading></Loading>
    );
  }
  if(user && isAdmin){
    return children;
  }

  return <Navigate to={"/"} state={{from : location}} replace></Navigate>
};

export default AdminRoute;
