import React from 'react';
import Navbar from '../components/sheard/Navbar';

import Footer from '../components/sheard/Footer';
import { Outlet } from 'react-router';


const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;