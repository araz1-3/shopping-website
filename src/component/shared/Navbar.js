import React,{useContext, useState} from 'react';


//context
import {CartContext} from "../../Context/CartContextProvider";
import {FavoriteContext} from "../../Context/FavoriteContextProvider";

//icons
import shopIcon from "../../assets/icon/shop.svg"
import favorites from "../../assets/icon/heart-regular.svg"

//components
import NavList from "./NavList";
import NavIcon from "./NavIcon";


const Navbar = () => {

    const {state}=useContext(CartContext)
    const {FavState}=useContext(FavoriteContext)

    const [navbar , setNavbar] = useState(false)

    window.addEventListener('scroll',()=>{
        if (window.scrollY > 0  ) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    })
    return (
        <div className={navbar ? "bg-gray-700 mb-[100px] w-full h-[70px] fixed top-0 z-10 shadow-2xl"
            :"bg-transparent transition-all ease-in delay-600 mb-[100px] w-full h-[70px] fixed top-0 z-10 "}
        >

            <div className="container flex justify-between h-[60px] py-[20px] px-[180px]">
                <div className="flex gap-10 ">
                    <NavList name="Home" path='/'/>
                    <NavList name="Products" path='/products'/>
                    <NavList name="About" path='/about'/>
                    <NavList name="Contact" path='/contact'/>
                </div>
               <div className="flex gap-8">
                   <NavIcon state={FavState.favoriteCounter} path="/favorites" image={favorites} alt="favorite"/>
                   <NavIcon state={state.itemsCenter} path="/cart" image={shopIcon} alt="shopIcon"/>
               </div>
            </div>
        </div>
    );
};

export default Navbar;