import React,{useContext} from 'react';

import { CartContext } from "../../Context/CartContextProvider";
import Trash from "../../assets/icon/trash.svg"
import { shorten } from "../../helper/functions";


const Cart = (props) => {

    const {dispatch} = useContext(CartContext)
    const {image,title,price,quantity} = props.data

    return (
        <div className="flex container xs:flex-col xs:gap-3 flex-row justify-between items-center p-[15px] bg-white border border-solid border-gray-200 rounded mb-[20px]  ">
            <img className="w-[80px]" src={image} alt="product"/>
            <div className="text-left">
                <h3 className="text-[#1a73e8] mb-[10px]">{shorten(title)}</h3>
                <p className="text-[#34a853] text-center font-bold">{price} $</p>
            </div>
            <div className="flex flex-wrap items-center">
                <button
                    className={quantity > 1
                        ?"w-[30px] hover:bg-[#0b499b] text-[1.6rem] font-bold pl-[5px] leading-[30px] transition-all duration-100 ease-in h-[30px] bg-[#1a73e8] text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"
                        :"w-[30px] text-[1.6rem] font-bold leading-[30px] pl-[5px] transition-all duration-100 ease-in h-[30px] bg-gray-200 text-white rounded-[4px] cursor-pointer ml-[5px] "}
                    onClick={quantity >1?()=>dispatch({type:"DECREASE",payload:props.data}):null}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                <span className="bg-[#FFA500FF] text-white inherit px-1 py-.5 ml-1  rounded text-center leading-[25px]">{quantity}</span>

                <button className="w-[30px] h-[30px] pl-[5px] hover:bg-[#0b499b] text-[1.6rem]  text-center font-bold  leading-[30px] transition-all duration-100 ease-in  bg-[#1a73e8]
                text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"
                        onClick={()=>dispatch({type:"INCREASE",payload:props.data})}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div>

                <button className="w-[30px]  pl-[5px] hover:bg-red-700 text-[1.6rem] font-bold leading-[30px] transition-all duration-100 ease-in
                        h-[30px] bg-red-600  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"
                        onClick={()=>dispatch({type:"REMOVE_ITEM", payload:props.data})}><img className="w-[20px]" src={Trash} alt="trash" />
                </button>
            </div>
        </div>
    );
};

export default Cart;