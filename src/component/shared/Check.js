import React from 'react';
import {Link} from "react-router-dom";

const Check = ({text,title}) => {
    return (
        <div className="flex gap-5 flex-col justify-center items-center mb-[100px]">
            <h3 className="text-2xl xs:text-xl font-bold">
                {title}
            </h3>

            <Link className="pt-[2px] animate-bounce bg-[#1a73e8] leading-[30px] shadow-newShadow  text-center w-32 hover:bg-[#08499d] text-white cursor-pointer h-9 font-bold rounded-lg transition-all ease-in duration-100" to="/products">
                {text}
            </Link>
        </div>
    );
};

export default Check;
