import React, { useContext, useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthUse } from '../AuthContext/AuthContext';
import axios from 'axios';

const Purchase = () => {
    const food = useLoaderData(); // comes from loader function
    // console.log(food);
    const { user } = useContext(AuthUse);
    const [quantityInput, setQuantityInput] = useState(1);
    const [liveQuntity, setLiveQuantity] = useState(food.quantity);
    // console.log(liveQuntity,quantityInput);
    

    

    const {
        _id,
        name,
        image,
        price,
        quantity: availableQuantity,
        email: ownerEmail
    } = food;



    const handlePurchase = async (e) => {
        e.preventDefault();

        const priceAdd = e.target.price1.value;

        if(quantityInput > liveQuntity){
            toast.error("Your order items higher than our quantity...!");
            return;
        }

        if(quantityInput <= liveQuntity){
            setLiveQuantity(liveQuntity - quantityInput);
        }

        if (user?.email === ownerEmail) {
            toast.error("You cannot purchase your own food item.");
            return;
        }

        if (quantityInput <= 0) {
            toast.error("Please enter a valid quantity.");
            return;
        }

        if (quantityInput > liveQuntity) {
            toast.error(`Only ${availableQuantity} items are available.`);
            return;
        }


        //Readable time formatting
        // if you want to format the date in a readable way, you can use libraries like dayjs or moment.js
        {
            // npm install dayjs

            //const dayjs = require('dayjs');

            // const timestamp = 1745414431192;
            // const formatted = dayjs(timestamp).format('MMMM D, YYYY [at] h:mm A');

            // console.log(formatted);


            //<p>Ordered At: {moment(orderTime).format("LLLL")}</p>
            // Output:
            // Tuesday, April 22, 2025 11: 53 PM
        }

        const orderData = {
            foodId: _id,
            foodName: name,
            price: priceAdd,
            quantity: quantityInput,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyingDate: Date.now(), // backend can also do this
            image
        };



        console.log(_id);
        // Please purchase a Section
        axios.patch(`http://localhost:5000/users/${_id}`,{
            purchaseQuantity: quantityInput,
        })
            .then(res => {
                console.log(res.data);
                toast.success("Purchase successful!");
            })
            .catch(error => {
                console.error("Purchase failed", error);
                toast.error("Something went wrong!");
            });
            

        axios.post('http://localhost:5000/orders', orderData)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('Order placed successfully!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                } else {
                    toast.error("Failed to place order. Please try again.");
                }
            })

    };

    return (
        <div>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Purchase: {name}</h2>
                <form onSubmit={handlePurchase} className="space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-200">Food Name</label>
                        <input type="text" value={name} readOnly className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-200">Price</label>
                        <input name='price1'  type="number" value={`${price * quantityInput}`} readOnly className="input input-bordered w-full " />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Single quantity price: {price}</p>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-200">Quantity</label>
                        <input
                            defaultValue={1}
                            type="number"
                            placeholder='Enter quantity'
                            onChange={(e) => setQuantityInput(Number(e.target.value))}
                            className="input input-bordered w-full"
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Available: {liveQuntity}</p>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-200">Buyer Name</label>
                        <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-200">Buyer Email</label>
                        <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                    </div>

                    <button
                        type="submit"
                        disabled={availableQuantity <= 0 || user?.email === ownerEmail}
                        className={`clickd w-full py-3 mt-4 font-semibold rounded-xl ${availableQuantity <= 0 || user?.email === ownerEmail
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-400 to-green-600 hover:opacity-90 text-white'
                            }`}
                    >
                        {availableQuantity <= 0 ? 'Out of Stock' : `${user.email === ownerEmail ? 'You cannot purchase your own food' : 'Purchase'}`}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;