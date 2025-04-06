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
        <div className='bg-white '>
            <div className={`flex  ${location.pathname === "/login"? 'bg-green-900/40 absolute z-10' : ''} ${location.pathname === "/signup"? 'bg-green-900/40 absolute z-10' : ''}  justify-between navbar text-white`}>
                <div className='flex gap-10'>
                    <div className="w-12">
                        <img src={logo} className='w-full rounded-full ' alt="" />
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='flex gap-5 mr-5 '>
                            <Link onClick={() => colorHandel("/")} className={location.pathname === "/" ? "underline underline2 " : " underline "} to={"/"}><span  className={`font-semibold ${location.pathname === "/login"? 'text-white' : 'text-black'} ${location.pathname ===  "/signup"? 'text-white' : 'text-black'} `}>Home</span></Link>
                            <Link onClick={() => colorHandel("/foods")} className={location.pathname === "/foods" ? "underline  underline2  " : "      underline"} to={"/foods"}><span className={`font-semibold ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname ===  "/signup"? 'text-white' : 'text-black'}`}>All Foods</span></Link>
                            <Link onClick={() => colorHandel("/gallery")} className={location.pathname === "/gallery" ? "underline underline2 " : "      underline"} to={"/gallery"}><span  className={`font-semibold ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname ===  "/signup"? 'text-white' : 'text-black'}`}>Gallery</span></Link>
                        </div>
                    </div>
                </div>
                <div className="z-50">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  border-green-700">
                                    <div className="w-10">
                                        <img
                                            className='rounded-full '
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-sky-700 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                    <div className=' justify-center items-center mb-5 bg-green-900/40 py-5 rounded-xl flex flex-col gap-5' >
                                        {
                                            user ? <Link onClick={() => colorHandel("accessories")} className={`font-semibold ${hoverColorAdd === "accessories" ? " underline text-center font-sans font-bold text-white" : " text-center underline font-sans    "}`} to={"private/accessories"}>All Sports Equipment</Link> : ''

                                        }
                                        {
                                            user ? <Link onClick={() => colorHandel("adminadding")} className={`font-semibold ${hoverColorAdd === "accessories" ? " underline text-center font-sans font-bold text-white" : " text-center underline font-sans    "}`} to={"private/adminadding"}>Add Equipment</Link>
                                                : ''

                                        }
                                        {
                                            user ? <Link onClick={() => colorHandel("adminaccessories")} className={`font-semibold ${hoverColorAdd === "accessories" ? " underline text-center font-sans font-bold text-white" : " text-center underline font-sans    "}`} to={"private/adminaccessories"}>My Equipment List</Link>
                                                : ''

                                        }
                                    </div>

                                    <div className='flex flex-col justify-center items-center '>
                                        <li>
                                            <a className="justify-between text-lg font-bold">
                                                {user?.displayName}
                                                {/* <span className="badge">New</span> */}
                                            </a>
                                        </li>
                                        <li className='border border-white my-3 rounded-lg hover: hover:text-red-600' onClick={singOutClicked}><a  className={`font-sans font-extrabold text-lg  `}>Logout</a></li>
                                    </div>

                                </ul>
                            </div> : <div className="dropdown dropdown-end text-lg font-bold mr-3">
                                <Link  onClick={() => colorHandel("/login")} to={"/login"} className={`underline  `} ><span className={`${location.pathname === "/login"  && " underline2 " } ${location.pathname === "/login"? 'text-white' : 'text-black'} ${location.pathname ===  "/signup"? 'text-white' : 'text-black'}`}>Login</span></Link>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;