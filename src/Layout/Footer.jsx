import React from 'react';
import logo from '../assets/logo.jpg';
import { ImFacebook2 } from "react-icons/im";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <img className='w-28 mx-auto rounded-full' src={logo} alt="" />
                    <p className='text-center'>
                        Where Every Bite <br /> 
                        Tells a Story of Flavor
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a href="https://chaldal.com/juice?srsltid=AfmBOopkc_EnL3NRrNGDJP90nsE4tgYaWSH0XtY0kwq7tcgzL_dZ3c8B" target="_blank" className="link link-hover">Juicy</a>
                    <a href='https://burgerlab.com.pk/' target='_blank' className="link link-hover">Burger lab</a>
                    <a href='https://www.britannica.com/topic/seafood' target='_blank' className="link link-hover">Seafood</a>
                    <a href='https://www.fruitworldco.com/' target='_blank' className="link link-hover">Fruit world</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Our social media</h6>
                    <a className="link link-hover "><span className='w-20'><ImFacebook2 className='w-5 h-5 text-blue-500'></ImFacebook2></span></a>
                    <a className="link link-hover"><TbBrandYoutubeFilled  className='w-5 h-5 text-red-500' /></a>
                    <a className="link link-hover"><BsTwitterX  className='w-5 h-5' /></a>
                    <a className="link link-hover"><FaInstagram  className='w-5 h-5 text-red-800'/></a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;