import React from 'react';

import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-mainBanner w-[90%] bg-cover bg-fixed h-[70vh] container my-[50px] mx-auto">
           <div className="bg-[#1110104C] flex flex-col w-full items-start p-24 gap-5 text-white h-[70vh]">
               <p className="text-[22px] font-bold">Limited Time Offer</p>
               <h1 className="text-[40px]">Special Edition</h1>
               <span className="text-[16px] max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
               <p className="text-[22px] font-bold">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
               <Link to="/products" className="bg-white text-center py-2 transition-all text-black w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
           </div>
        </div>
    );
};

export default Main;