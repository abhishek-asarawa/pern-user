import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return <Outlet />;
};

export default PrivateRoute;
