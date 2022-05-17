import React,{useContext, useState} from 'react';


//context
import {CartContext} from "../../Context/CartContextProvider";
import {FavoriteContext} from "../../Context/FavoriteContextProvider";


//components
import NavUl from "./Nav/NavUl";
import NavIcon from "./Nav/NavIcon";



const Navbar = () => {

    const {state}=useContext(CartContext)
    const {FavState}=useContext(FavoriteContext)

    const [navbar , setNavbar] = useState(false)

    const [ isShown , setIsShown ] = useState(false)

    window.addEventListener('scroll',()=>{
        if (window.scrollY > 0  ) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    })

    const showHandler = ()=>{
        setIsShown(!isShown)
    }


    return (
        <nav className={navbar
            ? "bg-gray-900 mb-[100px] w-full h-[70px] fixed top-0 z-10 shadow-2xl"
            : "bg-transparent transition-all ease-in delay-600 mb-[100px] w-full h-[70px] fixed top-0 z-10 "}
        >
            <div className="container py-4 flex justify-between h-[60px] ">

                <div className={isShown
                    ? "hidden"
                    : " fixed cursor-pointer z-50 md:hidden"
                }
                     onClick={showHandler}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24"
                         stroke={navbar?"white":"black"}
                         strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </div>


                <div className={
                    isShown
                        ? "gap-10 flex bg-gray-900 pt-20 fixed top-0 left-0 flex-col  w-[250px] h-screen transition-all ease-linear duration-300 translate-x-0"
                        : "flex transition-all ease-linear duration-300 md:translate-x-0 translate-x-[-200%] gap-10"
                }
                >
                    <div className={isShown?"absolute top-3 right-5 cursor-pointer":"hidden"} onClick={showHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <NavUl isShown={isShown} />
                </div>
               <div className={isShown
                   ? "fixed top-4 right-2  transition-all ease-linear duration-300 flex gap-8"
                   : "flex fixed top-4 right-2 md:static transition-all ease-linear duration-300 gap-8"
               }
               >
                   <NavIcon state={FavState.favoriteCounter} path="/favorites" navbar={navbar} />
                   <NavIcon state={state.itemsCenter} path="/cart" navbar={navbar} />
               </div>
            </div>
        </nav>
    );
};

export default Navbar;