import React from 'react';


import {Link} from "react-router-dom";

const Banners = ({banner}) => {
    return (
            <div className="relative z-[5]">
                <img className="relative h-75vh bg-no-repeat w-full"  src={banner} alt="banner"/>
              <div className="absolute flex flex-col gap-4 z-10	justify-center pt-16 pl-8 top-0 h-75vh w-full left-0 bg-lightBlack ">
                  <h2 className="text-2xl text-white md:text-3xl">Latest Eyewear For You</h2>
                  <span className="text-white">Lorem ipsum dolor sit amet consec tetur.</span>
                  <Link to="/products" className="bg-white text-center py-2 transition-all text-black w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
              </div>
            </div>
    );
};

export default Banners;