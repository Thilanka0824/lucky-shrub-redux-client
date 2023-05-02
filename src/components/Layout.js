import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import ElevationScroll from "./ElevationScroll";
import { authCheck } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";

const Layout = (props) => {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, []);

  return (
    <>
      <ElevationScroll {...props} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
