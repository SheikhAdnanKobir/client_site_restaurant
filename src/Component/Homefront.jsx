import React from 'react';
import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import bng from '../assets/banner.jpg'
import bng1 from '../assets/banner1.jpg'
import bng2 from '../assets/banner2.jpg'
import bng3 from '../assets/banner3.jpg'
import bng4 from '../assets/banner4.jpg'
import bng5 from '../assets/banner5.jpg'
import bng6 from '../assets/banner6.jpg'
import bng7 from '../assets/banner7.jpg'
import { FaArrowTurnDown } from "react-icons/fa6";
import best1 from '../assets/Best selling 1.jpg';
import best2 from '../assets/Best selling 2.jpg';
import best3 from '../assets/Best selling 3.jpg';
import best4 from '../assets/Best selling 4.jpg';
import best5 from '../assets/Best selling 5.jpg';
import best6 from '../assets/Best selling 6.jpg';


const Homefront = () => {

    useEffect(() => {
        // Glide.js ইনিশিয়ালাইজ করুন
        const glide = new Glide('.glide', {
            type: "carousel",
            perView: 2, // প্রতি স্লাইডে 2টি স্লাইড দেখা যাবে
            gap: 1, // স্লাইডের মধ্যে ১px গ্যাপ
            autoplay: 3000, // ৩ সেকেন্ড পরপর স্লাইড হবে
        });

        glide.mount(); // স্লাইডারটি মাউন্ট করুন
    }, []);

    const scrollToSection = () => {
        const section = document.getElementById('exploreSection');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div>
                <h1 className='md:text-7xl lg:text-7xl text-4xl text-center psans mt-5'>Welcome Our <span className='text-orange-500 font-extrabold'>𝓡𝓮𝓼𝓽𝓪𝓾𝓻𝓪𝓷𝓽</span></h1>
                <p className=' max-w-[850px] text-center mx-auto my-5 psans'>Enjoy delicious, authentic food made with fresh, organic ingredients. From traditional recipes to modern favorites, we serve every meal with care and love. Experience warm hospitality, cozy ambiance, and unforgettable flavors. Taste the difference. Feel at home. Come hungry — leave happy. Your satisfaction is our priority.</p>
                <div className='text-center'>
                    <button className='text-lg font-semibold text-white bg-orange-600 p-3 rounded-lg shadow-orange-400 mb-10'><span className='flex items-center justify-center gap-2'>Step into Flavory<FaArrowTurnDown /></span></button>
                </div>
            </div>
            {/* Atropos component */}
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides" data-glide-el="controls">
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng1}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng2}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng3}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng4}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng5}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng6}></img></li>
                        <li className="glide__slide"><img className='max-h-[600px] w-full object-cover ' src={bng7}></img></li>
                    </ul>
                </div>
            </div>

            {/* Second section most saleable Meal */}
            <div className='my-20'>
                <div className=''>
                    <h2 className='md:text-7xl lg:text-7xl text-4xl psans font-bold text-center'>
                        Our All-Time Bestsellers
                    </h2>
                    <p className='lg:text-xl md:text-xl text-center mt-3 mb-10'>
                        <span className='text-orange-700 font-bold'>Warning</span>: These dishes may cause serious cravings! Taste at your own <span className='text-red-500  text-2xl font-bold'>risk</span>.🤤
                    </p>
                </div>
                <div className='bg-slate-200 py-5 max-w-[80%] rounded-xl mx-auto'>
                    <div className="grid grid-cols-8 grid-rows-6 max-w-[95%] h-[600px] mx-auto gap-5">
                        <div className="relative row-span-2 col-span-4 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best1} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                                    Spicy Grilled Chicken Skewers
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-2 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best2} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                                    Cheesy Stuffed Crust Pizza
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-4 col-span-2 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best3} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                                    Butter Garlic Shrimp Pasta
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-6 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best4} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                                    Smoky BBQ Beef Ribs
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-4 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best5} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                                    Creamy Chicken Mushroom Risotto
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-4 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best6} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                                    Molten Chocolate Lava Cake
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Homefront;