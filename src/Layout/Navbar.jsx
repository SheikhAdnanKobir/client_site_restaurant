import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.jpg'
import { AuthUse } from '../AuthContext/AuthContext';

const Navbar = () => {
    const { user, handelSingOut } = useContext(AuthUse);
    // console.log(user);


    const [hoverColorAdd, setHoverColorAdd] = useState("/")

    const singOutClicked = () => {
        handelSingOut()
    }

    const colorHandel = (active) => {
        setHoverColorAdd(active)
    }

    const location = useLocation();
    // console.log(location.pathname);




    return (
        <div className=''>
            <div className={`flex  ${location.pathname === "/login"? 'bg-green-900/40 absolute z-10' : ''} ${location.pathname === "/signup"? 'bg-green-900/40 absolute z-10' : ''}  justify-between navbar text-white`}>
                <div className='flex gap-4'>
                    <div className="w-16">
                        <img src={logo} className='w-full rounded-full ' alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-5 mr-5'>
                            <Link onClick={() => colorHandel("/")} className={hoverColorAdd === "/" ? "underline   rounded-full" : " underline   rounded-full  lg:"} to={"/"}>Home</Link>
                            <Link onClick={() => colorHandel("coustomer")} className={hoverColorAdd === "coustomer" ? "underline    bg-purple-800 rounded-full" : "     rounded-full  underline"} to={"/coustomer"}>Satisfy customer</Link>
                            <Link onClick={() => colorHandel("sponsor")} className={hoverColorAdd === "sponsor" ? "underline     bg-purple-800 rounded-full" : "     rounded-full  underline"} to={"/sponsor"}>Our Sponsor</Link>
                        </div>
                        <div className=' gap-5 justify-center items-center xs:hidden sm:hidden md:hidden lg:flex lg:gap-5' >
                            {
                                user ? <Link onClick={() => colorHandel("accessories")} className={`${hoverColorAdd === "accessories" ? "underline" : "  underline "} `} to={"private/accessories"}>All Sports Equipment</Link> : ''

                            }
                            {
                                user ? <Link onClick={() => colorHandel("adminadding")} className={hoverColorAdd === "adminadding" ? "underline" : " underline  "} to={"private/adminadding"}>Add Equipment</Link>
                                    : ''

                            }
                            {
                                user ? <Link onClick={() => colorHandel("adminaccessories")} className={hoverColorAdd === "adminaccessories" ? "underline" : " underline  "} to={"private/adminaccessories"}>My Equipment List</Link>
                                    : ''

                            }
                        </div>
                    </div>
                </div>
                <div className="z-50">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-sky-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <div className=' justify-center items-center mb-5 lg:hidden flex flex-col gap-5' >
                                        {
                                            user ? <Link onClick={() => colorHandel("accessories")} className={hoverColorAdd === "accessories" ? " underline w-full text-center font-sans font-bold rounded-full text-white" : " text-center underline font-sans   rounded-full  w-full"} to={"private/accessories"}>All Sports Equipment</Link> : ''

                                        }
                                        {
                                            user ? <Link onClick={() => colorHandel("adminadding")} className={hoverColorAdd === "adminadding" ? "  underline w-full text-center font-sans font-bold rounded-full text-white" : " text-center underline font-sans   rounded-full  w-full"} to={"private/adminadding"}>Add Equipment</Link>
                                                : ''

                                        }
                                        {
                                            user ? <Link onClick={() => colorHandel("adminaccessories")} className={hoverColorAdd === "adminaccessories" ? "  underline w-full text-center font-sans font-bold rounded-full text-white" : " text-center underline font-sans   rounded-full  w-full"} to={"private/adminaccessories"}>My Equipment List</Link>
                                                : ''

                                        }
                                    </div>

                                    <div className='flex flex-col justify-center items-center '>
                                        <li>
                                            <a className="justify-between font-bold">
                                                {user?.displayName}
                                                {/* <span className="badge">New</span> */}
                                            </a>
                                        </li>
                                        <li className='border border-white  rounded-lg hover: hover:text-red-600' onClick={singOutClicked}><a className='font-sans font-extrabold text-lg'>Logout</a></li>
                                    </div>

                                </ul>
                            </div> : <div className="dropdown dropdown-end text-lg font-bold mr-3">
                                <Link to={"/login"}>Login</Link>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;