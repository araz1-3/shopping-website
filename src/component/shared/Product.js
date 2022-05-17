import React, {useContext} from 'react';

import {shorten,isInCart,quantityCount,FavIsSelected} from "../../helper/functions";
import {Link} from "react-router-dom";

import {CartContext} from "../../Context/CartContextProvider";
import {FavoriteContext} from "../../Context/FavoriteContextProvider";

import Trash from "../../assets/icon/trash.svg"
import favorite1 from  "../../assets/icon/heart-solid.svg"
import favorite2 from  "../../assets/icon/heart-regular.svg"


const Product = ({productData}) => {


    const {state,dispatch}= useContext(CartContext)

    const {FavState , FavDispatch} = useContext(FavoriteContext)



    return (
        <div className="border relative border-gray-200 hover:shadow-2xl border-solid rounded bg-white w-[250px] transition-all ease-in overflow-hidden mt-0 mb-[50px] mx-[10px] text-center">
            {
                FavIsSelected(FavState,productData.id)?
                    <button className="absolute top-3 right-5 pointer rounded-[50%] overflow-hidden hover:bg-blue-700 w-12 h-12 bg-blue-500" onClick={()=>FavDispatch({type:"REMOVE_FAVORITE" ,  payload:productData})}><img className="w-[30px]  ml-2 text-center cursor-pointer" src={favorite1}  alt="favorite"/></button>:
                    <button className="absolute top-3 right-5 pointer rounded-[50%] overflow-hidden hover:bg-blue-700 w-12 h-12 bg-blue-500" onClick={()=>FavDispatch({type:"ADD_FAVORITE",  payload:productData})}><img className="w-[30px] ml-2 text-center cursor-pointer" src={favorite2}  alt="favorite" /></button>
            }
            <img className="m-[10px] w-[230px] h-[200px]" alt="product" src={productData.image} />
            <h3 className="text-[#404040] text-left mt-[25px] text-[1.1rem] mx-[20px] mb-[15px]">{shorten(productData.title)}</h3>
            <p className="font-bold text-[#404040] text-left my-[15px] mx-[20px] text-[0.9rem]">{`${productData.price} $`}</p>
            <div className="flex justify-between items-center mt-[35px] mb-[20px] mx-[20px]">
                <Link className="text-[#1a73e8] text-[0.95rem]" to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCount(state,productData.id) > 1 && <button className="w-[30px] hover:bg-[#0b499b] text-[1.6rem] font-bold leading-[30px] transition-all duration-200 ease-in h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                    {quantityCount(state,productData.id) === 1 && <button className="w-[30px] pl-1 hover:bg-red-700 text-[1.6rem] font-bold leading-[30px] transition-all duration-200 ease-in h-[30px] bg-red-600  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"   onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img alt="trash" src={Trash} className="w-[20px] text-center"/></button>}
                    {quantityCount(state,productData.id) > 0 && <span className="inline-block pt-2 w-[20px] font-bold ml-[5px] text-[1.2rem] text-[#1a73e8]">{quantityCount(state,productData.id)}</span>}
                    {
                        isInCart(state,productData.id)
                            ? <button className="w-[30px] text-[1.6rem] hover:bg-[#0b499b] font-bold leading-[30px] transition-all duration-200 ease-in h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"  onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>
                            : <button className="w-[120px] text-[0.9rem] hover:bg-[#0b499b] transition-all duration-200 ease-in h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add to Cart</button>
                    }
                </div>
            </div>


        </div>
    );
}

export default Product;