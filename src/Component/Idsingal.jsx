import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Idsingal = () => {

    const singleData = useLoaderData();
    // console.log(singleData);

    const { name, email, userName, image, description, price, rating, quantity, taste, cookstyle, ingredient, purchaseCount,_id } = singleData
    // console.log(name,email,userName,image,description,price,rating,quantity,taste,cookstyle,ingredient);


    const navigate = useNavigate();

    const handlePurchaseClick = () => {
        if (quantity === 0) {
            toast.error('Sorry! This item is out of stock.');
            return;
        }
        navigate(`/purchase/${_id}`);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <Helmet>
                <title>Foods Details</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl object-cover w-full h-full"
                />
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{name}</h1>
                    <p className="text-gray-600 dark:text-gray-300">{description}</p>

                    <div className="flex flex-wrap gap-4 mt-3">
                        <span className="badge bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Taste: {taste}
                        </span>
                        <span className="badge bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Cookstyle: {cookstyle}
                        </span>
                        <span className="badge bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Quantity: {quantity}
                        </span>
                        <span className="badge bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                            Price: ${price}
                        </span>
                        <span className="badge bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                            Food Origin (Country): {rating}
                        </span>
                        <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                            Purchased: {purchaseCount || 0} times
                        </span>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Ingredients:</h2>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                            {ingredient.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 space-y-2">
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Added By:</strong> {userName}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Email:</strong> {email}
                        </p>
                    </div>

                    <button
                        onClick={handlePurchaseClick}
                        disabled={quantity <= 0}
                        className={`mt-4 w-full py-3 rounded-xl font-semibold text-white ${quantity <= 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-pink-500 to-red-500 psans hover:opacity-90'
                            }`}
                    >
                        {quantity <= 0 ? 'Out of Stock' : 'Purchase Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Idsingal;