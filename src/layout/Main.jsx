import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div className='sm:mx-24 bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-600'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;