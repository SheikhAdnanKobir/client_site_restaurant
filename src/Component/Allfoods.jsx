import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';
import LottieAnimation from "../assets/search_anime.json"

const Allfoods = () => {

    const [searchText, setSearchText] = useState('');
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(response => response.json())
            .then(data => {
                setFoods(data)
            })
    }, [])

    useEffect(() => {

        axios.get(`http://localhost:5000/users?search=${searchText}`)
            .then(res => {
                setFoods(res.data.filter(item => item.name.toLowerCase()
                    .includes(searchText
                        .toLowerCase())));
                // console.log(res.data.filter(item => item.name.includes(searchText)));
                console.log(res.data);

            })
            .catch(error => console.error(error));
    }, [searchText]);



    // useEffect(() => {
    //     // handleSearch(); // Optional: Load all foods initially or based on typing

    //     handleSearch();

    // }, [searchText]);

    return (

        <div className='w-[95%] mx-auto'>
            <div className="flex justify-end pt-5 mr-3">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Feeling hungry? Find something delicious!" />
                </label>
            </div>
            <div className='mb-8'>
                <h2 className="text-3xl md:text-4xl font-bold text-center psans py-5">
                    Explore All Our Delicious Foods
                </h2>
                <p className='text-center mx-auto psans w-[80%]'>
                    Discover a world of flavors at Flavory – where every dish tells a story, every spice sings, and every bite brings you home. From traditional favorites to bold new tastes, our curated menu is crafted with love, passion, and the finest ingredients. Taste the magic. Feel the flavor. Only at Flavory.
                </p>
            </div>
            {
                foods.length === 0 ?
                    <div className="h-screen flex flex-col items-center text-center px-4">
                        {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                        alt="No Result"
                        className="w-40 h-40 mb-6 opacity-80"
                    /> */}
                        <Lottie
                            animationData={LottieAnimation}
                            loop={true}
                            className="w-40 h-40 mb-6 opacity-80"
                        >
                        </Lottie>
                        <h2 className="text-4xl font-bold text-gray-700 mb-2">No Results Found</h2>
                        <p className="text-lg text-gray-500 mb-6">We couldn't find anything matching your search.</p>
                    </div>


                    :
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[95%]  mx-auto overflow-hidden gap-3 py-10'>
                        {
                            foods.map((food, index) => <Card key={index} food={food}></Card>)
                        }
                    </div>
            }

        </div>
    );
};

export default Allfoods;