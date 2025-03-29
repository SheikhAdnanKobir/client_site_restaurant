import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainSection = () => {
    return (
        <div>
            <header><Navbar></Navbar></header>

            <main><Outlet></Outlet></main>

            <footer></footer>
        </div>
    );
};

export default MainSection;