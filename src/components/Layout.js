import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
