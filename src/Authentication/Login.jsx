import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { SiGooglecloud } from "react-icons/si";
import { Helmet } from 'react-helmet';
import { AuthUse } from '../AuthContext/AuthContext';
import Lottie from 'lottie-react';
import LottieAnimation from "../assets/Lottie.json"
import BG from "../assets/output.jpg"
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const { authSignIn, handelGoogleSingIn,user } = useContext(AuthUse);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();



    const handelVidible = () => {
        setVisible(!visible)
    }

    const handelSignIn = e => {
        e.preventDefault();
        // console.log("Sign in button clicked");

        const clicked = e.target;
        const email = clicked.email.value;
        const password = clicked.password.value;
        console.log(email, password);

        authSignIn(email, password)
    }


    const google = () => {
        handelGoogleSingIn()
       
    }

    useEffect(() => {
        if (user) {
            navigate("/foods");
        }
    }, [user, navigate]);

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden'
        }}>

            <div>
                <img className='z-0 absolute h-screen w-screen object-cover blur-md' src={BG} alt="" />
            </div>

            <div className='relative flex justify-center items-center h-dvh z-10'>
                <div className=' flex justify-center items-center mt-20 mx-auto '>
                    <Helmet>
                        <title>Login</title>
                    </Helmet>
                    <div className="mx-auto">
                        <div className=" bg-green-900/40 py-10 px-16 lg:rounded-l-lg md:rounded-l-2xl  xs:rounded-sm flex flex-col">
                            <div className="">
                                <h1 className="text-4xl font-bold text-center text-white">Welcome Back</h1>
                                <h1 className="text-lg text-center text-white">Login to your account</h1>

                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <form onSubmit={handelSignIn} className="">
                                    <div className='flex flex-col gap-4'>
                                        <div className="">
                                            <label className="label">
                                                <span className="label-text text-white font-bold text-xl mb-1">Email</span>
                                            </label><br />
                                            <input type="text" name='email' placeholder="email" className="input input-bordered w-80" required />
                                        </div>
                                        <div className="">
                                            <label className="label">
                                                <span className="label-text text-white font-bold text-xl mb-1">Password</span>
                                            </label><br />
                                            <input type={visible ? "text" : "password"} name='password' placeholder="password" className=" input input-bordered w-80 relative" required />
                                            <button type='button' onClick={handelVidible} className='absolute -ml-5 mt-3 2'>{visible ? <FaEye /> : <FaEyeSlash />}</button>

                                        </div>
                                    </div>
                                    <label className="label">
                                        <Link to={"/passwordreset"} className="text-white">Forgot password?</Link>
                                    </label>
                                    <div className="mt-6 flex flex-col gap-2">
                                        <button className="p-2 rounded-xl text-xl font-bold border-2 text-white hover:text-black hover:bg-white border-white">Login</button>
                                        <button type='button' onClick={google} className="p-1 rounded-xl text-xl font-bold  bg-white text-black border-2 border-white  hover:bg-white/0 hover:text-white  flex items-center gap-2 "><span className='mx-auto flex justify-center items-center gap-2'><FcGoogle className='h-10 w-10' /> Login with Google</span></button>
                                    </div>
                                </form>
                                <h4 className='text-center my-5'>
                                    <span className='text-white text-lg'>Don't have an account?</span> <Link to={"/signup"} className="text-blue-500 hover:text-blue-800 font-bold">Sign up</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 h-96 absolute ml-10 sm:hidden xs:hidden md:block lg:block'></div>
                    <div className='  bg-green-900/40 h-[530px] rounded-r-lg w-96  md:block lg:block sm:hidden xs:hidden'><Lottie className='h-full w-ful' animationData={LottieAnimation}></Lottie></div>
                </div>
            </div>
        </div >
    );
};

export default Login;