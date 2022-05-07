import React, {useContext} from 'react';


import {ProductContext} from "../Context/ProductsContextProvider";
import {Link} from "react-router-dom";


const ProductDetails = (props) => {



    const id = props.match.params.id
    const data = useContext(ProductContext)
    const product = data[id - 1]
    const {image,title,description,price,category} = product

    return (
        <div className=" container flex flex-col lg:flex-row justify-center lg:justify-between mt-150px mb-[50px] p-[20px] border-solid border-[1px] rounded-xl bg-white items-center border-gray-400">
            <img className="lg:w-[450px] w-[170px] mb-[50px]" alt="product" src={image}/>
            <div className="text-left lg:ml-[30px] m-0 p-[20px] border-solid border-[1px] rounded-xl border-gray-400">
                <h3 className="text-[#1a73e8] mb-[30px] mt-[30px]">{title}</h3>
                <p className="text-[#3E3E3EFF] mb-[30px]">{description}</p>
                <p className="text-[#3E3E3EFF] mb-[50px] font-bold"><span className="text-[#FFA500FF] text-[1rem]">Category : </span>{category}</p>
                <div className="flex justify-between items-center">
                    <span className="secondShadow inline-block bg-[#34a853] py-[7px] px-[16px] text-white font-bold rounded mb-[20px]">{price} $</span>
                    <Link  className="secondShadow inline-block bg-[#1a73e8] py-[7px] px-[16px] text-white hover:bg-[#0b499b] font-bold rounded mb-[20px] transition-all duration-150 ease-in" to="/products">back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;