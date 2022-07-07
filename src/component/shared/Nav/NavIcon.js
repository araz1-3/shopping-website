import React from 'react';
import {Link} from "react-router-dom";

const NavIcon = ({state,path,navbar,d}) => {

    return (
        <div className="relative w-[38px] text-[#1a73e8]">
            <Link to={path}>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 20 20" fill={navbar?"white":"black"}>
                   <path fillRule="evenodd" d={d} clipRule="evenodd" />
               </svg>
            </Link>
            <span className="bg-blue-600 text-white rounded-[50%] absolute top-0 right-0 w-[18px] h-[18px] pl-[1px] text-center text-[0.75rem] font-bold">
                {state}
            </span>
        </div>
    );
};

export default NavIcon;