import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { AuthUse } from "../AuthContext/AuthContext";
import Swal from 'sweetalert2';
import AxiosSecure from './../AuthContext/AxiosSecure';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthUse); // Assuming you have a context for user authentication
    // console.log("User:", user); // Log the user object to see if it's defined

    const AxiosSecureInstance = AxiosSecure();

    useEffect(() => {
        AxiosSecureInstance.get(`/orders?email=${user.email}`)
            .then((response) => {
                // console.log(response.data);
                const myFoods = response.data.filter(food => food.buyerEmail === user?.email);
                setOrders(myFoods);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });

    }, [])
    // আপনি এখানে MongoDB থেকে JWT সহ অর্ডারগুলো লোড করে নিবেন

    const handleDelete = (id) => {
        // এখানে delete functionality বসান
        console.log("Delete", id);

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

                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const availableData = orders.filter((item) => item._id !== id)
                        setOrders(availableData);

                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your order is deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className="p-4 md:p-10 bg-base-200 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">🛒 My Orders</h2>
            {
                orders.length === 0 ?
                    <div className="text-center text-lg">No orders found!</div>
                    :
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-300"
                            >
                                <img
                                    src={order.image}
                                    alt={order.foodName}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {order.foodName}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Price: ${order.price}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Quantity: {order.quantity}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Ordered By: <span className="font-medium">{order.buyerName}</span>
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Date: {moment(order.date).format("MMMM Do YYYY, h:mm A")}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="absolute top-3 right-3 text-orange-500 hover:text-orange-600 bg-slate-800 rounded-full p-2 transition-colors"
                                    title="Delete Order"
                                >
                                    <FaTrashAlt size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
            }
        </div>
    );
};

export default MyOrders;
