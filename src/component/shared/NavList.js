import React from 'react';
import {Link,useLocation} from "react-router-dom";

const NavList = ({name,path}) => {
    const location = useLocation()
    return (
            <Link className={location.pathname === path?
                "lg:text-[20px]  font-bold transition-all ease-in delay-100  text-[#0b499b]"
                :"lg:text-[20px] text-[#1a73e8] transition-all ease-in delay-100  hover:text-[#0b499b]"} to={path}>
                {name}
            </Link>
    );
};

export default NavList;