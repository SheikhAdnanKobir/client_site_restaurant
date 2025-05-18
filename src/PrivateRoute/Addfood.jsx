import React, { useContext } from 'react';
// import { auth } from '../Firebase/Firebase.init.js';
import Swal from 'sweetalert2'
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthUse } from '../AuthContext/AuthContext.jsx';

const Addfood = () => {

    //npm install react-firebase-hooks (add this pakage)
    // const [user]=useAuthState(auth)
    const {user,addtheme} = useContext(AuthUse)
    console.log(user);

    const addData = e => {
        e.preventDefault();
        console.log("hello2");

        const email = e.target.email.value;
        const userName = e.target.userName.value;
        const image = e.target.image.value;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;

        // split(',') → ইনপুটে যেখানেই কমা থাকবে, সেখান থেকে কাটবে।
        // map(item => item.trim()) → প্রতিটি উপাদানের আগে-পিছে স্পেস মুছে দেবে।
        const ingredient = e.target.ingredient.value.split(',').map(item => item.trim());//This item create a Array

        const cookstyle = e.target.cookstyle.value;
        const taste = e.target.taste.value;
       

        const objfoods = { email, userName, image, name, description, price, rating, quantity,taste,cookstyle,ingredient};
        console.log(objfoods);

        Swal.fire({
            title: "Do you want to Add these item?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                fetch("https://server-site-restaurant.vercel.app/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(objfoods)
                })
                    .then(res => res.json())
                    .then(dataAdd => {
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
                            icon: "success",
                            title: "Item adding successfully"
                        });
                        console.log(dataAdd)
                    })

                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("This ITEM is not adding", "", "info");
            }
        });


    }



    return (
        <div className='mx-auto bg-cyan-500 py-10'>
            <Helmet>
                <title>Add Equipment</title>
            </Helmet>
            <h1 className='text-4xl mb-5 font-rubik text-center font-semibold text-white psans'>Add a New Dish</h1>
            <form onSubmit={addData} className="font-rubik grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto p-6 bg-green-900/20 text-white rounded-lg">
                {/* User Email (read-only) */}
                <label className="grid grid-cols-1 w-full   gap-1">
                    <span className="font-medium">User Email</span>
                    <input type="email" name='email' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} defaultValue={user?.email} placeholder="User email (read-only)" readOnly />
                </label>

                {/* User Name (read-only) */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">User Name</span>
                    <input type="text" name='userName' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} defaultValue={user?.displayName} placeholder="User name (read-only)" readOnly />
                </label>
                {/* Image URL */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Image URL</span>
                    <input type="url" name='image' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter image URL" />
                </label>

                {/* Item Name */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Dish Name</span>
                    <input type="text" name='name' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter dish name" />
                </label>

                {/* Description */}
                <label className="grid grid-cols-1 w-full  gap-1 md:col-span-2">
                    <span className="font-medium">Description</span>
                <textarea name='description' className={`w-full textarea textarea-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter description" rows="3" ></textarea>
                </label>

                {/* Ingredient উল্লেখযোগ্য উপকরণ: চিকেন, রসুন, ঘি, মরিচ ইত্যাদি*/}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Ingredients</span>
                    <input type="text" name='ingredient' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter ingredients" />
                </label>

                {/* Cooking style  গ্রিলড, ফ্রাইড, বেকড, স্টিমড, হ্যান্ড-মেড ইত্যাদি*/}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Cooking Style</span>
                    <input type="text" name='cookstyle' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter Cooking Style" />
                </label>

                {/* Taste or flavour ঝাল, মিষ্টি, টক, কড়কড়ে ইত্যাদি*/}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Taste/Flavor</span>
                    <input type="text" name='taste' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter Taste/Flavor" />
                </label>


                {/* Rating */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Food Origin (Country)</span>
                    <input type="text" name='rating' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Food Origin" />
                </label>
                
                {/* Price */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Price</span>
                    <input type="number" name='price' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter price" />
                </label>

                {/* Stock Status */}
                <label className="grid grid-cols-1 w-full  gap-1">
                    <span className="font-medium">Stock Status (available product quantity)</span>
                    <input type="number" name='quantity' className={` w-full input input-bordered ${addtheme?'text-white':'text-black'}`} placeholder="Enter stock quantity" />
                </label>

                {/* Submit Button */}
                <div className="md:col-span-2 text-center">
                    <button type="submit" className="btn hover:bg-sky-800 p-3 bg-sky-700 text-xl text-white w-full">
                        <BsDatabaseFillAdd />Add to Database
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Addfood;

