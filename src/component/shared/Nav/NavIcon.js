import React from 'react';
import {Link} from "react-router-dom";

const NavIcon = ({state,path,navbar}) => {

    return (
        <div className="relative w-[38px] text-[#1a73e8]">
            <Link to={path}>
                {
                    path === "/cart"
                        ? <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 20 20" fill={navbar?"white":"black"}>
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                          </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill={navbar?"white":"black"}>
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                }
            </Link>
            <span className="bg-blue-600 text-white rounded-[50%] absolute top-0 right-0 w-[18px] h-[18px] pl-[1px] text-center text-[0.75rem] font-bold">
                {state}
            </span>
        </div>
    );
};

export default NavIcon;