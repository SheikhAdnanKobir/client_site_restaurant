import React, { useState } from 'react';
import galla1 from '../gallery/gal1.jpg';
import galla2 from '../gallery/gal2.jpg';
import galla3 from '../gallery/gal3.jpg';
import galla4 from '../gallery/gal4.png';
import galla5 from '../gallery/gal5.jpg';
import galla6 from '../gallery/gal6.jpg';
import galla7 from '../gallery/gal7.jpg';
import galla8 from '../gallery/gal8.jpg';
import galla9 from '../gallery/gal9.jpg';
import galla10 from '../gallery/gal10.jpg';
import galla11 from '../gallery/gal11.jpg';
import galla12 from '../gallery/gal12.jpg';
import galla13 from '../gallery/gal13.jpg';
import galla14 from '../gallery/gal14.jpg';
import galla15 from '../gallery/gal15.jpg';
import galla16 from '../gallery/LoginPix.jpg';

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        galla1, galla2, galla3, galla4, galla5, galla6, galla7, galla8,
        galla9, galla10, galla11, galla12, galla13, galla14, galla15, galla16
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    return (
        <div className='py-20'>
            <div>
                <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-7xl mb-3 lg:mb-5'>
                    Flavory Moments <span className='text-red-500 font-extrabold'>C̷a̷p̷t̷u̷r̷e̷d̷</span>
                </h2>
                <p className='text-center text-lg psans mb-8'>
                    Browse our gallery of handcrafted dishes, cozy ambiance, and the moments that make Flavory special.
                </p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-[95%] mx-auto rounded-xl p-5'>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`gallery-${index}`}
                            className="h-full w-full object-cover cursor-pointer rounded"
                            onClick={() => handleImageClick(img)}
                        />
                    </div>
                ))}
            </div>

            {isOpen && selectedImage && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                    <img
                        src={selectedImage}
                        alt="zoom"
                        className="md:w-[50%] h-[70%] sm:w-[85%] xs:w-[85%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
