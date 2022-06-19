import React, {useContext} from 'react';


import {ProductContext} from "../Context/ProductsContextProvider";
import {Link,useParams} from "react-router-dom";
import {isInCart, quantityCount} from "../helper/functions";
import Trash from "../assets/icon/trash.svg";
import {CartContext} from "../Context/CartContextProvider";
import Product from "./shared/Product";


const ProductDetails = () => {

    const params =useParams()
    const id = params.id
    const data = useContext(ProductContext)
    const product = data[id - 1]
    const {image,title,description,price,category} = product

    const {state,dispatch}= useContext(CartContext)
    return (
        <div className="container">
            <div className="flex animate-opacities flex-col lg:flex-row justify-center lg:justify-between mt-150px mb-[50px] p-[20px] border-solid border-[1px] rounded-xl bg-white items-center border-gray-400">
                <img className="lg:w-[450px] w-[170px] mb-[50px]" alt="product" src={image}/>
                <div className="text-left lg:ml-[30px] m-0 p-[20px] border-solid border-[1px] rounded-xl border-gray-400">
                    <h3 className="text-[#1a73e8] mb-[30px] mt-[30px]">{title}</h3>
                    <p className="text-[#3E3E3EFF] mb-[30px]">{description}</p>
                    <p className="text-[#3E3E3EFF] mb-[50px] font-bold"><span className="text-[#FFA500FF] text-[1rem]">Category : </span>{category}</p>
                    <div className="flex justify-between gap-5 flex-wrap flex-row xs:flex-col items-center">
                        <div className="flex items-start pb-1 flex-row xs:flex-col justify-center">
                            <span className="secondShadow inline-block bg-[#34a853] py-[7px] px-[16px] text-white font-bold rounded mb-[20px]">{price} $</span>
                            <div className="mt-[1px]">
                                {quantityCount(state,product.id) > 1 && <button className="w-[30px] pl-[5px]  hover:bg-[#0b499b] text-[1.6rem] font-bold leading-[30px] transition-colors ease-in duration-100 h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"DECREASE",payload:product})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                     </button>}
                                {quantityCount(state,product.id) === 1 && <button className="w-[30px] pl-[5px] hover:bg-red-700 text-[1.6rem] font-bold leading-[30px] transition-colors ease-in duration-100 h-[30px] bg-red-600  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"   onClick={()=>dispatch({type:"REMOVE_ITEM",payload:product})}><img alt="trash" src={Trash} className="w-[20px] text-center"/></button>}
                                {quantityCount(state,product.id) > 0 && <span className="inline-block pt-2 pl-1 w-[20px] font-bold ml-[5px] text-[1.2rem] text-[#1a73e8]">{quantityCount(state,product.id)}</span>}
                                {
                                    isInCart(state,product.id)
                                        ? <button className="w-[30px] text-[1.6rem] hover:bg-[#0b499b] font-bold pl-[5px]  leading-[30px] transition-colors ease-in duration-100 h-[30px] bg-[#1a73e8]  text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow"  onClick={()=>dispatch({type:"INCREASE",payload:product})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                             </svg>
                                         </button>
                                        : <button className="w-[120px] text-[0.9rem] hover:bg-[#0b499b] transition-colors ease-in duration-100 h-[30px] bg-[#1a73e8] mt-[2px] text-white rounded-[4px] cursor-pointer ml-[5px] shadow-newShadow" onClick={()=>dispatch({type:"ADD_ITEM",payload:product})}>Add to Cart</button>
                                }
                            </div>
                        </div>

                        <Link  className="secondShadow inline-block bg-red-600 py-[7px] px-[16px] text-white hover:bg-red-700 font-bold rounded mb-[20px] transition-all duration-150 ease-in" to="/products">back to shop</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-gray-900 pb-5 pl-5">Related products</h1>
               <div className="flex flex-wrap lg:justify-start justify-center items-center">
                   {
                       data.filter((item)=> item.category === category && item.id !== product.id).map(product =>
                           <Product
                               key={product.id}
                               productData={product}
                           />
                       )
                   }
               </div>
            </div>
        </div>
    );
};

export default ProductDetails;