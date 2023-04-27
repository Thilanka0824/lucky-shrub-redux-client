import React, { useEffect } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { checkAuthToken } from "../lib/checkAuthToken";
import AppBar from "./AppBar";
import ElevationScroll from "./ElevationScroll";

import { authCheck } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Layout = (props) => {
  // verify token exists
  //
  // let auth = checkAuthToken()
  //
  // check authentication with backend
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheck());
  }, []);

  return (
    <>
      {/* <AppBar /> */}
      <ElevationScroll {...props} />
      {/* {auth ? <Outlet /> : <Navigate to='/login' />} */}
      <Outlet />
    </>
  );
};

export default Layout;
