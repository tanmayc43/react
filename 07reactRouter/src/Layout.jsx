import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
// to dynamically pass home, about us, etc

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout