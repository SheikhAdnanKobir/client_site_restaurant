import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { AuthUse } from '../AuthContext/AuthContext';

const Update = () => {

    // import { useAuthState } from "react-firebase-hooks/auth";
    //npm install react-firebase-hooks (add this pakage)
    const { user,addtheme } = useContext(AuthUse)
    // console.log(user);


    const data = useLoaderData()
    console.log(typeof data._id);

    const navget = useNavigate()
    const handelBack = () => {
        navget(-1)
    }

    const updateProduct = (e) => {
        e.preventDefault();

        // ফর্ম থেকে ইনপুট ভ্যালু গুলো সংগ্রহ
        const email = e.target.email.value;
        const userName = e.target.userName.value;
        const image = e.target.image.value;
        const name = e.target.name.value;
        const taste = e.target.taste.value;
        const cookstyle = e.target.cookstyle.value;
        const ingredient = e.target.ingredient.value.split(',').map(item => item.trim());//This item create a Array
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
       
        

        // ফর্ম ডেটা অবজেক্টে সাজানো
        const updatedItem = {
            email,
            userName,
            image,
            name,
            taste,
            cookstyle,
            ingredient,
            description,
            price,
            rating,
            quantity
        };


        console.log(updatedItem);

        // SweetAlert কনফার্মেশন ডায়ালগ
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                // PATCH রিকুয়েস্ট পাঠানো
                fetch(`http://localhost:5000/users/${data._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedItem),
                })
                    .then((res) => res.json())
                    .then((response) => {
                        console.log("Update response:", response);
                        Swal.fire("Saved!", "", "success");
                    })
                    .catch((err) => {
                        console.error("Update failed:", err);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    return (
        <div className='mx-auto py-10'>
            <Helmet>
                <title>Update</title>
            </Helmet>
            <h1 className='text-center mb-10 font-rubik text-purple-700'>
                <span className="text-4xl font-bold">Update Item</span>
            </h1>
            <form onSubmit={updateProduct} className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto p-6 border-orange-600 border-2 text-white rounded-lg">

                {/* User Email */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1 ">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>User Email</span>
                    <input type="email" name='email' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={user?.email} readOnly />
                </label>

                {/* User Name */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>User Name</span>
                    <input type="text" name='userName' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={user?.displayName} readOnly />
                </label>

                {/* Image URL */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Image URL</span>
                    <input type="url" name='image' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.image} />
                </label>

                {/* Item Name */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Item Name</span>
                    <input type="text" name='name' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.name} />
                </label>

                {/* Taste */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Taste</span>
                    <input type="text" name='taste' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.taste} />
                </label>

                {/* Cook Style */}
                <label className="flex flex-col col-span-2 md:col-span-1 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Cook Style</span>
                    <input type="text" name='cookstyle' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.cookstyle} />
                </label>

                {/* Ingredients */}
                <label className="flex flex-col col-span-2 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Ingredients (comma separated)</span>
                    <input type="text" name='ingredient' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.ingredient?.join(", ")} />
                </label>

                {/* Description */}
                <label className="flex flex-col col-span-2 w-full gap-1">
                    <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Description</span>
                    <textarea name='description' className={`${addtheme?`text-white`:`text-gray-800`} textarea textarea-bordered w-full defaul`}tValue defaultValue={data?.description} rows="3" ></textarea>
                </label>

                <div className='flex flex-col col-span-2  w-full'>
                    <div className='grid grid-cols-3 gap-4'>
                        {/* Price */}
                        <label className="flex flex-col col-span-3 md:col-span-1 w-full gap-1">
                            <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Price</span>
                            <input type="number" name='price' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.price} />
                        </label>

                        {/* Rating */}
                        <label className="flex flex-col col-span-3 md:col-span-1 w-full gap-1">
                            <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Food Origin</span>
                            <input type="text" name='rating' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.rating} />
                        </label>

                        {/* Quantity */}
                        <label className="flex flex-col col-span-3 md:col-span-1 w-full gap-1">
                            <span className={`font-medium text-black ${addtheme?`text-white`:`text-black`}`}>Available Quantity</span>
                            <input type="number" name='quantity' className={`${addtheme?`text-white`:`text-gray-800`} input input-bordered w-full defaultValue`} defaultValue={data?.quantity} />
                        </label>
                    </div>
                </div>

                {/* Back Button */}
                <div className='col-span-2 w-full'>
                    <div className='grid grid-cols-2 gap-4 '>
                        <div className="mt-5 flex">
                            <button onClick={handelBack} type="button" className="mx-auto text-white text-xl font-bold btn hover:bg-orange-700 p-3 bg-orange-600 w-full">
                                <AiOutlineRollback /> Back
                            </button>
                        </div>

                        {/* Submit Button */}
                        <div className="my-5 flex">
                            <button type="submit" className="mx-auto text-white text-xl font-bold btn hover:bg-green-800 p-3 bg-green-700 w-full">
                                <GrDocumentUpdate /> Update Product
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Update;