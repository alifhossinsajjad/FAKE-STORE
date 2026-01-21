import React from 'react';
import Navbar from '../components/sheard/Navbar';

import Footer from '../components/sheard/Footer';
import { Outlet } from 'react-router';


const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;