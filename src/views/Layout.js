import React from "react";
import { Outlet } from "react-router-dom";
import AddsBar from "../components/AdsBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserHeader from "../components/UserHeader"

const Layout = () => {
  return (
    <>
      <AddsBar />
      {/* <UserHeader /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
