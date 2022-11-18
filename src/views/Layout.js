import React from 'react'
import {Outlet} from "react-router-dom";
import AddsBar from '../components/AdsBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
      <>
          <AddsBar/>
          <Header/>
          <Outlet />
          <Footer/>
          
      </>
  )
}

export default Layout