import React from 'react';

import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-mainBanner w-[90%] bg-cover bg-scroll md:bg-fixed h-[40vh] md:h-[50vh] lg:h-[60vh] min-h-[400px] container my-[50px] mx-auto">
           <div className="bg-[#1110104C] flex flex-col w-full items-start md:py-20 md:px-24 py-5 px-5 gap-5 min-h-[400px] text-white h-[40vh] md:h-[50vh] lg:h-[60vh]">
               <p className="md:text-[22px] text-[17px] sm:text-[18px] sm:text-center font-bold">Limited Time Offer</p>
               <h1 className="md:text-[40px] text-[23px] sm:text-[25px]">Special Edition</h1>
               <span className="sm:text-[16px] text-[14px] md:max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
               <p className="md:text-[22px] sm:text-[18px] font-bold">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
               <Link to="/products" className="bg-white text-center py-2 transition-all text-black w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
           </div>
        </div>
    );
};

export default Main;