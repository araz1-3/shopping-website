import React,{useContext, useState} from 'react';
import {Link} from "react-router-dom";

//context
import {CartContext} from "../../Context/CartContextProvider";
import {FavoriteContext} from "../../Context/FavoriteContextProvider";

import shopIcon from "../../assets/icon/shop.svg"
import favorites from "../../assets/icon/heart-regular.svg"


const Navbar = (props) => {

    // const Url = props.history.location.pathname



    const currentUrl = window.location.href;



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
        <div className={navbar ? "bg-gray-700 mb-[100px] w-full h-[70px] fixed top-0 z-10 shadow-2xl":"bg-transparent transition-all ease-in delay-600 mb-[100px] w-full h-[70px] fixed top-0 z-10 "} >
            <div className="container flex justify-between h-[60px] py-[20px] px-[180px]">
                <div className="flex gap-10 ">
                    <Link className={currentUrl === 'http://localhost:3000/'? "lg:text-[20px]  font-bold transition-all ease-in delay-100  text-[#0b499b]":"lg:text-[20px] text-[#1a73e8] font-bold transition-all ease-in delay-100  hover:text-[#0b499b]"} to="/">Home</Link>
                    <Link className={currentUrl === 'http://localhost:3000/products'? "lg:text-[20px]  font-bold transition-all ease-in delay-100  text-[#0b499b]": "lg:text-[20px] text-[#1a73e8] font-bold transition-all ease-in delay-100  hover:text-[#0b499b]"} to="/products">Products</Link>
                    <Link className={currentUrl === 'http://localhost:3000/about'? "lg:text-[20px]  font-bold transition-all ease-in delay-100  text-[#0b499b]": "lg:text-[20px] text-[#1a73e8] font-bold transition-all ease-in delay-100  hover:text-[#0b499b]"} to="/about">About</Link>
                    <Link className={currentUrl === 'http://localhost:3000/contact'? "lg:text-[20px]  font-bold transition-all ease-in delay-100  text-[#0b499b]": "lg:text-[20px] text-[#1a73e8] font-bold transition-all ease-in delay-100  hover:text-[#0b499b]"} to="/contact">Contact Us</Link>
                </div>
               <div className="flex gap-8">
                   <div className="relative w-[38px] text-[#1a73e8]">
                       <Link to="/favorites"><img alt="favorite" src={favorites}/></Link>
                       <span className="bg-blue-600 text-white rounded-[50%] absolute top-0 right-0 w-[18px] h-[18px] pl-[1px] text-center text-[0.75rem] font-bold">{FavState.favoriteCounter}</span>
                   </div>
                   <div className="relative w-[38px] text-[#1a73e8]">
                       <Link to="/cart"><img alt="shopIcon" src={shopIcon}/></Link>
                       <span className="bg-blue-600 text-white rounded-[50%] absolute top-0 right-0 w-[18px] h-[18px] pl-[1px] text-center text-[0.75rem] font-bold">{state.itemsCenter}</span>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Navbar;