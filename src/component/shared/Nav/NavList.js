import React from 'react';
import {Link,useLocation} from "react-router-dom";

const NavList = ({name,path}) => {
    const location = useLocation()
    return (
            <li>
                <Link className={location.pathname === path?
                    "text-[19px] font-bold  transition-all ease-in duration-300 text-[#0b499b]"
                    :"text-[19px] text-[#1a73e8] transition-all ease-in duration-300 hover:text-[#0b499b]"} to={path}>
                    {name}
                </Link>
            </li>
    );
};

export default NavList;