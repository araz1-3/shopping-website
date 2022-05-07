import React from 'react';
import {Link} from "react-router-dom";

import img1 from "../assets/images/appstore-img.png"
import img2 from "../assets/images/playstore-img.png"

const Footer = () => {
    return (
        <div className="bg-white border-t border-gray-400 border-solid">
            <div className="container">
                <div className=" flex justify-evenly flex-col md:flex-row items-center py-12">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold mt-5">Quick Links</h2>
                        <div className="flex flex-col gap-2">
                            <Link className="hover:text-blue-500" to="/">Home</Link>
                            <Link className="hover:text-blue-500" to="/products">Products</Link>
                            <Link className="hover:text-blue-500" to="/cart">Cart</Link>
                            <Link className="hover:text-blue-500" to="/about">About</Link>
                            <Link className="hover:text-blue-500" to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold mt-5">For Her</h2>
                        <div className="flex flex-col gap-2">
                            <Link className="hover:text-blue-500" to="/products">Women Jeans</Link>
                            <Link className="hover:text-blue-500" to="/products">Tops and Shirts</Link>
                            <Link className="hover:text-blue-500" to="/products">Women Jackets</Link>
                            <Link className="hover:text-blue-500" to="/products">Heels and Flats</Link>
                            <Link className="hover:text-blue-500" to="/products">Women Accessories</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold mt-5">For Him</h2>
                        <div className="flex flex-col gap-2">
                            <Link className="hover:text-blue-500" to="/products">Men Jeans</Link>
                            <Link className="hover:text-blue-500" to="/products">Men Shoes</Link>
                            <Link className="hover:text-blue-500" to="/products">Men Shirts</Link>
                            <Link className="hover:text-blue-500" to="/products">Men Accessories</Link>
                            <Link className="hover:text-blue-500" to="/products">Men Jackets</Link>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 gap-5">
                        <img src={img1} alt="image"/>
                        <img src={img2} alt="image"/>
                    </div>
                </div>
                <div className="flex justify-around flex-col md:flex-row items-center gap-8 py-6 border-t border-gray-300 border-solid">
                    <span>Copyright © 2022 Brandstore</span>
                    <span>Powered by Brandstore</span>
                </div>
            </div>
        </div>

    );
};

export default Footer;