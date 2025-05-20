import axios from 'axios';
import React, { useEffect } from 'react';
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ food }) => {

    // const navigate = useNavigate();

    const { name, price, rating, quantity, taste, image, _id } = food
    // console.log(food);

    // useEffect(()=>{
    //     axios.get(`https://server-site-restaurant.vercel.app/users`)
    //     .then((response) => {
    //         // console.log(response.data);
    //     })
    // })

    // const ditelsHandel = (id) => {
    //     // console.log(id);
    //     // axios.get(`https://server-site-restaurant.vercel.app/users/${id}`)
    //     // .then((response) => {
    //     //     console.log(response.data);
    //     // })
    //     // navigate(`details/${id}`)

    // }

    return (
        <div>

            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-gray-800 mx-auto  hover:scale-[1.02] transition-transform duration-300">
                <img className="w-full h-48 object-cover" src={image} alt="Food Image" />
                <div className="px-6 py-6">
                    <div className="font-bold  mb-4 text-white text-2xl psans h-14">{name}</div>
                    <div className='flex justify-between my-1'>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Origin: <span className="font-semibold">{rating}</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Price: <span className="font-semibold">${price}</span>
                        </p>
                    </div>
                    <div className='flex justify-between my-1'>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Taste: <span className="font-semibold">{taste}</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Quantity: <span className="font-semibold">{quantity}</span>
                        </p>
                    </div>
                </div>
                <div className="px-6 py-4 flex justify-center items-center ">
                    <Link className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-11/12 flex justify-center items-center gap-2 py-3 text-lg rounded-xl' to={`details/${_id}`}>
                        <TbListDetails className='text-2xl font-extrabold' /> Details
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Card;