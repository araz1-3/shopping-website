import React from 'react';

import banner1 from "../../assets/images/men-fashion-free-img.jpg"
import banner2 from "../../assets/images/women-fashion-free-img.jpg"
import {Link} from "react-router-dom";

const Banners = () => {
    return (
        <div className="container w-full md:w-4/5  gap-4 flex md:justify-evenly flex-col md:flex-row">
            <div className="relative z-[5]">
                <img className=" h-75vh bg-no-repeat" src={banner2} alt="banner"/>
              <div className="absolute flex flex-col gap-4 z-10	justify-center pt-16 pl-8 top-0 h-75vh w-full left-0 bg-lightBlack ">
                  <h2 className="text-2xl text-white md:text-3xl">Latest Eyewear For You</h2>
                  <span className="text-white">Lorem ipsum dolor sit amet consec tetur.</span>
                  <Link to="/products" className="bg-white text-center py-2 transition-all text-black w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
              </div>
            </div>
            <div className="relative z-[5]">
                <img className="h-75vh bg-no-repeat" src={banner1} alt="banner"/>
                <div className="absolute flex flex-col  gap-4 z-10 	justify-center pt-16 pl-8  top-0 h-75vh w-full left-0 bg-lightBlack ">
                    <h2 className="text-2xl text-white md:text-3xl">Latest Eyewear For You</h2>
                    <span className="text-white">Lorem ipsum dolor sit amet consec tetur.</span>
                    <Link to="/products" className="bg-white text-center py-2 transition-all text-black w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Banners;