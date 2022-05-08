import React from 'react';
import {Link} from "react-router-dom";

const NavIcon = ({state,path,image,alt}) => {

    return (
        <div className="relative w-[38px] text-[#1a73e8]">
            <Link to={path}><img alt={alt} src={image}/></Link>
            <span className="bg-blue-600 text-white rounded-[50%] absolute top-0 right-0 w-[18px] h-[18px] pl-[1px] text-center text-[0.75rem] font-bold">
                {state}
            </span>
        </div>
    );
};

export default NavIcon;