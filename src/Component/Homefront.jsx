import React, { useContext } from 'react';
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
import chif1 from '../assets/Chief1.png';
import chif2 from '../assets/Chief2.jpg';
import chif3 from '../assets/Chief3.jpg';
import chif4 from '../assets/Chief4.jpg';
import chif5 from '../assets/Chief5.jpg';
import chif6 from '../assets/Chief6.jpg';
import chif7 from '../assets/Chief7.jpg';
import chif8 from '../assets/Chief8.jpg';
import chif9 from '../assets/Chief9.jpg';
import chif10 from '../assets/Chief10.jpg';
import disc1 from '../assets/Discount1.jpg';
import disc2 from '../assets/Discount2.jpg';
import disc3 from '../assets/Discount3.jpg';
import { AuthUse } from '../AuthContext/AuthContext';

const Homefront = () => {

    useEffect(() => {
        // Glide.js ইনিশিয়ালাইজ করুন
        const glide = new Glide('.glide', {
            type: "carousel",
            perView: 2, // প্রতি স্লাইডে 2টি স্লাইড দেখা যাবে
            gap: 1, // স্লাইডের মধ্যে ১px গ্যাপ
            autoplay: 2000, // 2 সেকেন্ড পরপর স্লাইড হবে
        });

        glide.mount(); // স্লাইডারটি মাউন্ট করুন
    }, []);

    const {addtheme}=useContext(AuthUse);

    return (
        <div>
            <div>
                <h1 className='md:text-7xl lg:text-7xl text-4xl text-center psans pt-5'>Welcome Our <span className='text-orange-500 font-extrabold'>𝓡𝓮𝓼𝓽𝓪𝓾𝓻𝓪𝓷𝓽</span></h1>
                <p className=' max-w-[850px] text-center mx-auto my-5 psans'>Enjoy delicious, authentic food made with fresh, organic ingredients. From traditional recipes to modern favorites, we serve every meal with care and love. Experience warm hospitality, cozy ambiance, and unforgettable flavors. Taste the difference. Feel at home. Come hungry — leave happy. Your satisfaction is our priority.</p>
                <div className='text-center'>
                    <button onClick={() => {
                        document.getElementById("discountSection").scrollIntoView({ behavior: "smooth" });
                    }} 
                    className='text-lg font-semibold text-white bg-orange-600 p-3 rounded-lg shadow-orange-400 mb-10'><span className='flex items-center justify-center gap-2'>Step into Flavory<FaArrowTurnDown /></span></button>
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
            <div id="discountSection" className='my-20'>
                <div className=''>
                    <h2 className='md:text-7xl lg:text-7xl text-4xl psans font-bold text-center'>
                        Our All-Time Bestsellers
                    </h2>
                    <p className='lg:text-xl md:text-xl text-center mt-3 mb-10'>
                        <span className='text-orange-700 font-bold'>Warning</span>: These dishes may cause serious cravings! Taste at your own <span className='text-red-500  text-2xl font-bold'>risk</span>.🤤
                    </p>
                </div>
                <div className='bg-slate-200 py-5 w-[80%] rounded-xl mx-auto'>
                    <div className="grid grid-cols-8 grid-rows-6 w-[95%] h-[600px] mx-auto gap-5">
                        <div className="relative row-span-2 col-span-4 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best1} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                    Spicy Grilled Chicken Skewers
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-2 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best2} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                    Cheesy Stuffed Crust Pizza
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-4 col-span-2 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best3} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                    Butter Garlic Shrimp Pasta
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-6 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best4} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                    Smoky BBQ Beef Ribs
                                </h2>
                            </div>
                        </div>
                        <div className="relative row-span-2 col-span-4 ">
                            <img className='w-full h-full object-cover rounded-lg' src={best5} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
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

            {/*Third section Discount product */}
            <div className='my-24'>
                <div className='mb-8'>
                    <h2 className='text-center text-4xl psans font-bold mb-5'>
                        Flavory Special <span className='text-red-500'>Discount%</span>
                    </h2>
                    <p className={`mx-auto text-center w-[450px]`}>
                        Your favorite meals just became more irresistible.
                        Explore our chef-curated discounted dishes and treat yourself without breaking the bank!
                    </p>
                </div>
                <div className="grid grid-cols-10 grid-rows-6 w-[90%] lg:w-[60%] md:w-[60%] max-h-[700px] mx-auto gap-5">
                    <div className="relative row-span-3 col-span-10 ">
                        <img className='w-full h-full rounded-lg' src={disc1} alt="" />
                        <div className="absolute flex items-center justify-center">
                            <h2 className="text-white -mt-32 -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                Spice Feast Combo
                            </h2>
                        </div>
                    </div>
                    <div className="row-span-3 col-span-5 ">
                        <img className='w-full h-full  rounded-lg' src={disc2} alt="" />
                        <div className="absolute flex items-center justify-center">
                            <h2 className="text-white -mt-32 -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                Flavory Classic Delight
                            </h2>
                        </div>
                    </div>
                    <div className="row-span-3 col-span-5 ">
                        <img className='w-full h-full  rounded-lg' src={disc3} alt="" />
                        <div className="absolute flex items-center justify-center">
                            <h2 className="text-white -mt-32 -rotate-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center ">
                                Sweet & Savory Platter
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*Fourth sectionextra this is  Our chief*/}
            <div className='py-24'>
                <div>
                    <h1 className='text-center text-4xl font-bold psans'>Our <span className='text-orange-500'>FLAVORY</span> <span className='text-red-600 font-extrabold'>Ninja's</span></h1>
                    <p className={`text-center font-semibold  ${addtheme===true?'text-slate-200/90':'text-black'}  psans mt-3 mb-10`}>The passionate hands behind every flavorful bite. Meet the magic-makers of Flavory!</p>
                </div>
                <div className='grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 w-[90%] mx-auto'>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif1} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Alain Ducasse
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif2} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Massimo Bottura
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif3} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Nobu Matsuhisa
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif4} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Julia Child
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif5} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Thomas Keller
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif6} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Heston Blumenthal
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif7} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Dominique Crenn
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif8} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                René Redzepi
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif9} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Gordon Ramsay
                            </h2>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src={chif10} alt="" />
                        <div className="absolute -mt-16 ml-20 flex items-center justify-center">
                            <h2 className="text-white text-xl  font-bold text-center ">
                                Clare Smyth
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Homefront;