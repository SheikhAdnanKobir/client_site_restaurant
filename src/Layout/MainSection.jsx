import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthUse } from '../AuthContext/AuthContext';

const MainSection = () => {
    const {addtheme,loading}=useContext(AuthUse);
    // console.log(addtheme,loading);
    
    return (
        <div>
            <header><Navbar></Navbar></header>

            <main data-theme={addtheme?"dark":"light"} ><Outlet></Outlet></main>

            <footer><Footer></Footer></footer>
        </div>
    );
};

export default MainSection;