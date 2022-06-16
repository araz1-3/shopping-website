import React,{useContext} from 'react';

import Cart from "./shared/Cart";

//context
import { CartContext } from "../Context/CartContextProvider";
import Check from "./shared/Check";

const  ShopCart = () => {

    const {state,dispatch} = useContext(CartContext)

    return (
        <div className="min-h-[40vh]">
            <div className="flex container flex-col-reverse items-start lg:flex-row lg:justify-between items-start mt-[150px] mb-[50px] transition-all ease-in duration-200">
                <div className="lg:w-[70%] w-full">
                    {state.selectItems.map(item => <Cart key={item.id} data={item} />)}
                </div>
                {
                    state.itemsCenter > 0 && <div className="lg:w-[27%] w-full mb-[20px] lg:mb-0 bg-white border border-solid border-gray-300 text-left rounded-[5px]">
                        <p className="text-[#3D3D3DFF] mt-[20px] mb-[10px] mx-[20px]"><span className=" text-[#1a73e8] font-bold">Total Items : </span>{state.itemsCenter}</p>
                        <p className="text-[#3D3D3DFF] mt-[20px] mb-[10px] mx-[20px]"><span className=" text-[#1a73e8] font-bold">Total Payment : </span>{state.total}</p>
                        <div className="flex justify-between items-baseline mt-[50px] mx-[20px] mb-[10px]">
                            <button
                                className="cursor-pointer text-red-600 bg-none text-[1rem] hover:text-red-700 transition-all ease-in duration-200"
                                onClick={()=>dispatch({type:"CLEAR"})}>
                                Clear
                            </button>

                            <button
                                className="inline-block bg-[#34a853] px-[16px] py-[7px] text-white font-bold rounded-[5px] mb-[20px] hover:bg-[#167d32] shadow-secondShadow cursor-pointer border border-solid border-gray-300"
                                onClick={()=>dispatch({type:"CHECKOUT"})}>
                                Check out
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div>
                {
                    state.checkout && <Check title="Checked out Successfully" text="Buy More"/>
                }
                {
                    !state.checkout && state.itemsCenter === 0 && <Check title="Want to Buy?" text="Back to Shop"/>
                }
            </div>
        </div>
    );
};

export default ShopCart;