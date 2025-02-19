import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";

const DashHome = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (isAdmin) {
    return children;
  }
  return (
    <Navigate
      to={"/dashboard/profile"}
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default DashHome;
