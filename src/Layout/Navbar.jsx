import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.jpg'
import { AuthUse } from '../AuthContext/AuthContext';

const Navbar = () => {
    const { user, handelSingOut, setAddtheme, addtheme } = useContext(AuthUse);
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
        <div className={`${addtheme ? "bg-gray-800" : "bg-white"} `}>
            <div className={`flex z-20  ${location.pathname === "/login" ? 'bg-green-900/40 absolute z-10' : ''} ${location.pathname === "/signup" ? 'bg-green-900/40 absolute z-10' : ''}  justify-between navbar text-white`}>
                <div className='flex gap-10'>
                    <div className="w-12">
                        <img src={logo} className='w-full rounded-full ' alt="" />
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='flex gap-5 mr-5 '>
                            <Link onClick={() => colorHandel("/")} className={location.pathname === "/" ? "underline underline2 " : " underline "} to={"/"}><span className={`font-semibold ${addtheme ? "text-white" : "text-black"} ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname === "/signup" ? 'text-white' : 'text-black'} `}>Home</span></Link>
                            <Link onClick={() => colorHandel("/foods")} className={location.pathname === "/foods" ? "underline  underline2  " : "      underline"} to={"/foods"}><span className={`font-semibold ${addtheme ? "text-white" : "text-black"} ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname === "/signup" ? 'text-white' : 'text-black'}`}>All Foods</span></Link>
                            <Link onClick={() => colorHandel("/gallery")} className={location.pathname === "/gallery" ? "underline underline2 " : "      underline"} to={"/gallery"}><span className={`font-semibold ${addtheme ? "text-white" : "text-black"} ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname === "/signup" ? 'text-white' : 'text-black'}`}>Gallery</span></Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center z-50'>
                    <div>
                        <label className={`swap swap-rotate ${location.pathname === "/login" || location.pathname === "/signup" ? "text-white" : "text-black"}`}>
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* sun icon */}
                            <svg
                                onClick={() => setAddtheme(true)}
                                className={`swap-on h-8 w-8 fill-current ${addtheme ? "text-white" : "text-black"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                onClick={() => setAddtheme(false)}
                                className={`swap-off h-8 w-8 fill-current ${addtheme ? "text-white" : "text-black"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                    <div>
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
                                                user ? <Link onClick={() => colorHandel("accessories")} className={`font-semibold underline ${location.pathname === "/addfood" ? "underline2 text-center psans font-bold text-white" : " text-center font-sans    "}`} to={"/addfood"}>Add Food</Link> : ''

                                            }
                                            {
                                                user ? <Link onClick={() => colorHandel("adminadding")} className={`font-semibold underline ${location.pathname === "/myfoods" ? "underline2 text-center font-sans font-bold text-white" : " text-center font-sans    "}`} to={"/myfoods"}>My Foods</Link>
                                                    : ''

                                            }
                                            {
                                                user ? <Link onClick={() => colorHandel("adminaccessories")} className={`font-semibold underline ${location.pathname === "/myorders" ? "underline2 text-center font-sans font-bold text-white" : " text-center font-sans    "}`} to={"/myorders"}>My Orders</Link>
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
                                            <li className='border border-white my-3 rounded-lg hover: hover:text-red-600' onClick={singOutClicked}><a className={`font-sans font-extrabold text-lg  `}>Logout</a></li>
                                        </div>

                                    </ul>
                                </div> : <div className="dropdown dropdown-end text-lg font-bold mr-3">
                                    <Link onClick={() => colorHandel("/login")} to={"/login"} className={`underline  `} ><span className={`${location.pathname === "/login" && " underline2 "} ${location.pathname === "/login" ? 'text-white' : 'text-black'} ${location.pathname === "/signup" ? 'text-white' : 'text-black'} ${addtheme ? "text-white" : "text-black"}`}>Login</span></Link>

                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;