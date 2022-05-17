import React from 'react';
import NavList from "./NavList";

const NavUl = ({isShown}) => {
    return (
        <div>
            <ul
                className={
                    isShown
                        ? "flex  flex-col transition-all duration-300 ease-linear items-center pt-8 gap-8"
                        : "flex transition-all pt-1 duration-300 ease-linear items-center gap-8"
                }
            >
                <NavList name="Home" path='/'/>
                <NavList name="Products" path='/products'/>
                <NavList name="About" path='/about'/>
                <NavList name="Contact" path='/contact'/>
            </ul>
        </div>
    );
};

export default NavUl;

