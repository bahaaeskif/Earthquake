import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/Footer";


const SharedLayout = () => {
    return (
        <>

            <Navbar />
            <div className="bahaa relative min-h-screen">
                <Outlet />
            </div>
            <Footer />

        </>
    );
}

export default SharedLayout;