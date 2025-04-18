import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainSection = () => {
    return (
        <div>
            <header><Navbar></Navbar></header>

            <main><Outlet></Outlet></main>

            <footer><Footer></Footer></footer>
        </div>
    );
};

export default MainSection;