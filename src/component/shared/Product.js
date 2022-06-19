import React, {useContext} from 'react';

import {shorten,isInCart,quantityCount,FavIsSelected} from "../../helper/functions";
import {Link} from "react-router-dom";

//context
import {CartContext} from "../../Context/CartContextProvider";
import {FavoriteContext} from "../../Context/FavoriteContextProvider";

//icons
import Trash from "../../assets/icon/trash.svg"
import favorite1 from  "../../assets/icon/heart-solid.svg"
import favorite2 from  "../../assets/icon/heart-regular.svg"


const Product = ({productData}) => {


    const {state,dispatch}= useContext(CartContext)
    const {FavState , FavDispatch} = useContext(FavoriteContext)



    return (
        <div className="border relative animate-opacities border-gray-300 hover:shadow-2xl border-solid rounded bg-white w-[250px] transition-all ease-in overflow-hidden mt-0 mb-[50px] mx-[10px] text-center">
            {
                FavIsSelected(FavState,productData.id)?
                    <button className="absolute top-3 right-5 pointer rounded-[50%] overflow-hidden hover:bg-blue-700 w-12 h-12 bg-blue-500" onClick={()=>FavDispatch({type:"REMOVE_FAVORITE" ,  payload:productData})}><img className="w-[30px]  ml-2 text-center cursor-pointer" src={favorite1}  alt="favorite"/></button>:
                    <button className="absolute top-3 right-5 pointer rounded-[50%] overflow-hidden hover:bg-blue-700 w-12 h-12 bg-blue-500" onClick={()=>FavDispatch({type:"ADD_FAVORITE",  payload:productData})}><img className="w-[30px] ml-2 text-center cursor-pointer" src={favorite2}  alt="favorite" /></button>
            }
            <img className="m-[10px] w-[230px] h-[200px]" alt="product" src={productData.image} />
            <h3 className="text-[#404040] text-left mt-[25px] text-[1.1rem] mx-[20px] mb-[15px]">{shorten(productData.title)}</h3>
            <p className="font-bold text-[#404040] text-left my-[15px] mx-[20px] text-[0.9rem]">{`${productData.price} $`}</p>
            <div className="flex justify-between items-center mt-[35px] mb-[20px] mx-[20px] h-[40px]">
                <Link className="text-[#1a73e8] text-[0.95rem]" to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCount(state,productData.id) > 1 && <button className="w-[30px] pl-[5px] hover:bg-[#0b499b] text-[1.6rem] font-bold leading-[30px] transition-colors ease-in duration-100 h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"DECREASE",payload:productData})}>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>}
                    {quantityCount(state,productData.id) === 1 && <button className="w-[30px] pl-[5px] hover:bg-red-700 text-[1.6rem] font-bold leading-[30px] transition-colors ease-in duration-100 h-[30px] bg-red-600  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"   onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img alt="trash" src={Trash} className="w-[20px] text-center"/></button>}
                    {quantityCount(state,productData.id) > 0 && <span className="inline-block pt-2 w-[20px] font-bold ml-[5px] text-[1.2rem] text-[#1a73e8]">{quantityCount(state,productData.id)}</span>}
                    {
                        isInCart(state,productData.id)
                            ? <button className="w-[30px] text-[1.6rem] hover:bg-[#0b499b] pl-[5px] font-bold transition-colors ease-in duration-100 h-[30px] bg-[#1a73e8] text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"  onClick={()=>dispatch({type:"INCREASE",payload:productData})}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            : <button className="w-[120px] text-[0.9rem] hover:bg-[#0b499b] h-[30px] bg-[#1a73e8] transition-colors ease-in duration-100  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;