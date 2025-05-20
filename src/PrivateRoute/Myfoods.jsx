import React, { useContext, useEffect, useState } from 'react';
import { AuthUse } from '../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import AxiosSecure from './../AuthContext/AxiosSecure';

const Myfoods = () => {
    const [foods, setFoods] = useState([]);
    const { user } = useContext(AuthUse);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const AxiosSecureInstance = AxiosSecure();


    useEffect(() => {
        if (user?.email) {
            AxiosSecureInstance.get(`/myproduct?email=${user.email}`)
                .then(response => {
                    setFoods(response.data);
                    setLoading(false);
                });
        }
    }, [user?.email, AxiosSecureInstance]);

    // useEffect(() => {
    //     fetch("https://server-site-restaurant.vercel.app/users")
    //         .then(response => response.json())
    //         .then(data => {
    //             const myFoods = data.filter(food => food.email === user?.email);
    //             setFoods(myFoods);
    //             setLoading(false);
    //         })

    // }, [])

    const handelDeltet = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://server-site-restaurant.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const availableData = foods.filter((item) => item._id !== id)
                        setFoods(availableData);

                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }



    return (
        <div>
            <div className='mb-8'>
                <h2 className="text-3xl md:text-4xl font-bold text-center psans py-5">
                    Explore All Our Delicious Foods
                </h2>
                <p className='text-center mx-auto psans w-[80%]'>
                    Discover a world of flavors at Flavory – where every dish tells a story, every spice sings, and every bite brings you home. From traditional favorites to bold new tastes, our curated menu is crafted with love, passion, and the finest ingredients. Taste the magic. Feel the flavor. Only at Flavory.
                </p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[95%]  mx-auto overflow-hidden gap-3'>
                {
                    foods.length === 0 ?
                        <div className=' h-screen w-svw flex flex-col justify-center items-center'>
                            <h1 className='  text-7xl font-bold text-red-600 text-center'>You did not add any food.</h1>
                            <button onClick={() => navigate("/addfood")} type="submit" className="btn  px-5 py-10 mt-5 bg-orange-600 text-3xl text-white font-bold rounded-xl hover:bg-orange-700">
                                Go to food adding page
                            </button>
                        </div>
                        :
                        foods.map((food, index) =>
                            <div className='my-10' key={index}>

                                <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-gray-800 mx-auto pb-5">
                                    <img className="w-full h-48 object-cover" src={food.image} alt="Food Image" />
                                    <div className="px-6 py-6">
                                        <div className="font-bold  mb-4 text-white text-2xl psans h-14">{food.name}</div>
                                        <div className='flex justify-between my-1'>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                                Origin: <span className="font-semibold">{food.rating}</span>
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                                Price: <span className="font-semibold">${food.price}</span>
                                            </p>
                                        </div>
                                        <div className='flex justify-between my-1'>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                                Taste: <span className="font-semibold">{food.taste}</span>
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                                Quantity: <span className="font-semibold">{food.quantity}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-actions justify-between mx-5">
                                        <Link to={`update/${food._id}`}><button className="bg-sky-600 text-lg text-white font-semibold hover:bg-sky-700 btn rounded-lg btn-md"><FaEdit />Update</button></Link>
                                        <button onClick={() => handelDeltet(food._id)} className="bg-red-500 text-lg text-white font-semibold hover:bg-red-700 btn rounded-lg btn-md"><MdDelete />Delete</button>
                                    </div>
                                </div>
                            </div>

                        )
                }
            </div>
        </div>
    );
};

export default Myfoods;