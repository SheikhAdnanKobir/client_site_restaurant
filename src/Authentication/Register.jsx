import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import bgImg from "../assets/output.jpg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { AuthUse } from '../AuthContext/AuthContext';
import Lottie from 'lottie-react';
import LottieAnimatios from '../assets/lottie_animation.json'



const Register = () => {

    const { authSignUp } = useContext(AuthUse);

    const [visible, setVisible] = useState(false);

    const handelVidible = () => {
        setVisible(!visible)
    }

    const bgimg = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(15px)', // শুধু ব্যাকগ্রাউন্ডে ব্লার
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1, // ব্যাকগ্রাউন্ডকে পেছনে রাখুন
    };


    const handelevent = event => {
        event.preventDefault()
        console.log('sign up clicked');

        const clicked = event.target;
        const name = clicked.name.value;
        const photoUrlAdd = clicked.photo.value;
        const email = clicked.email.value;
        const password = clicked.password.value;
        const check = clicked.checkbox.checked;

        const objValue = { name, email, password, photoUrlAdd }
        // console.log(objValue);


        if (!email && !password) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Please fill in all fields"
            });
            return;
        }

        if (!email.includes('@')) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Please enter a valid email address"
            });
            return;
        }

        if (password.length < 6) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Password must be at least 6 characters long"
            });
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regex.test(password)) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Contain at least one uppercase,Lowercase,Number and a special character"
            });

            return;
        }

        if (!check) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Please accept the terms and conditions"
            });

            return;
        }

        authSignUp(email, password, name, photoUrlAdd);
        // authSignUp(objValue)

    }

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div style={bgimg}></div>
            <Helmet>
                <title>Sign up</title>
            </Helmet>
            <div className=" flex justify-center items-center h-dvh z-10 mt-12">
                <div className='flex justify-center items-center mx-auto'>
                    <div className='mx-auto'>
                        <div className=" bg-green-900/40 py-5 px-10 lg:rounded-l-lg md:rounded-l-2xl  xs:rounded-sm flex flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl text-center font-bold text-white"><span className="text-4xl">Sign up now and start</span><br></br>enjoying exclusive offers!</h1>
                            </div>
                            <form onSubmit={handelevent} className="flex flex-col justify-center items-center">
                                <div className='flex flex-col gap-4'>
                                    <div className="flex flex-col gap-1">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-xl">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered w-80" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-xl">Photo URL</span>
                                        </label>
                                        <input type="url" name='photo' placeholder="photoURL" className="input input-bordered w-80" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-xl">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-xl">Password</span>
                                        </label>
                                        <input type={visible ? "text" : "password"} name='password' placeholder="password" className="input input-bordered relative w-80" />
                                        <button type='button' onClick={handelVidible} className='absolute mt-[47px] ml-[298px]'>{visible ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>
                                    <div className="">
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-white font-bold">Accept our terms and condition ?</span>
                                            <input type="checkbox" name='checkbox' className="checkbox checkbox-success border-[3px] border-white" />
                                        </label>
                                    </div>
                                </div>

                                <div className=" mt-6">
                                    <button className="py-1 w-80 rounded-md text-2xl font-extrabold text-orange-400 signup-btn bg-white border-2">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-center my-5'>
                                <span className='text-white text-lg'>Already have account?</span><Link to={"/login"} className="text-lg font-bold "> sign In</Link>
                            </p>
                        </div>
                    </div>
                    <div className='border-2 h-96 absolute ml-10 sm:hidden xs:hidden md:block lg:block'></div>
                    <div className='  bg-green-900/40 h-[634px] rounded-r-lg w-96  md:block lg:block sm:hidden xs:hidden'>
                        <Lottie className='h-full w-full' animationData={LottieAnimatios}></Lottie>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;