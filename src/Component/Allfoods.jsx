import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';
import LottieAnimation from "../assets/search_anime.json"
import { useLoaderData } from 'react-router-dom';

const Allfoods = () => {

    const [searchText, setSearchText] = useState('');
    const [foods, setFoods] = useState([]);
    // console.log(foods);


    const [itemsPrPage, setItemsPrPage] = useState(10);
    const [currentpage, setCurrentpage] = useState(0);

    const { count } = useLoaderData();
    // console.log(count);
    // const itemsPage = 10;
    const numberOfPages = Math.ceil(count / itemsPrPage);
    console.log(numberOfPages);

    const pages = [...Array(numberOfPages).keys()];

    // const page=[];
    // for (let i = 0; i < numberOfPages; i++) {
    //     page.push(i);
    // }

    const handelParPage = (e) => {
        const valu = parseInt(e.target.value);
        setItemsPrPage(valu)
        setCurrentpage(0);
    }


    // useEffect(() => {
    //     fetch(`https://server-site-restaurant.vercel.app/users?page=${currentpage}&size=${itemsPrPage}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setFoods(data)
    //         })
    // }, [currentpage, itemsPrPage]);

    useEffect(() => {

        if ((searchText.trim() !== "")) {
            axios.get(`https://server-site-restaurant.vercel.app/users?search=${searchText}`)
                .then(res => {
                    { }
                    // setFoods(res.data.filter(item => item.name.toLowerCase()
                    //     .includes(searchText
                    //         .toLowerCase())));
                    setFoods(res.data);
                    // console.log(res.data.filter(item => item.name.includes(searchText)));
                    // console.log(res.data);
                    console.log(searchText);


                })
                .catch(error => console.error(error));
        }
        else {
            fetch(`https://server-site-restaurant.vercel.app/users?page=${currentpage}&size=${itemsPrPage}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setFoods(data)
                })
        }
    }, [searchText, currentpage, itemsPrPage]);



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
            <div className='flex justify-center items-center gap-5 py-10'>
                <button onClick={() => setCurrentpage(currentpage - 1)} disabled={currentpage === 0} className="btn btn-outline btn-primary">Previous</button>
                {
                    pages.map((page, index) => <button key={index} onClick={() => setCurrentpage(index)} className={`btn btn-outline btn-primary ${currentpage === page ? "selected" : undefined}`}>{page + 1}</button>)
                }
                <select value={itemsPrPage} onChange={handelParPage} className="border-2 rounded-md p-2">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>

                <button onClick={() => setCurrentpage(currentpage + 1)} disabled={currentpage === numberOfPages - 1} className="btn btn-outline btn-primary">Next</button>
            </div>
        </div>
    );
};

export default Allfoods;