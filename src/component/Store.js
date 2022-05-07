import React,{useContext,useState} from 'react';

//context
import {ProductContext} from "../Context/ProductsContextProvider";
import Product from "./shared/Product";
import Loader from "./shared/Loader";



const Store = () => {

    const [search , setSearch] = useState("")

    const products = useContext(ProductContext)

    const changeHandler =(e)=>{
        setSearch(e.target.value)
    }

    let searchFilter = products.filter(item =>item.title.toLowerCase().includes(search.toLowerCase()))

    return (

       <div className="mt-150px container min-h-[50vh]">
           <div className="flex justify-around items-center">
               <div className="w-2/5 h-12 ">
                   <input className="w-full border border-solid focus:bg-white border-gray-500 bg-gray-100 h-full rounded p-2" type="text" placeholder="Search here..." onChange={changeHandler}/>
               </div>
                   <button className="w-32 rounded text-xl h-12 bg-blue-600 text-white hover:bg-blue-700">Click</button>
           </div>


           <div className="flex flex-wrap justify-between items-center mt-[50px] px-[150px]">

               {
                   products.length?
                   searchFilter.map(product =>
                       <Product
                           key={product.id}
                           productData={product}
                       />
                   )
                       :
                       <Loader/>

               }
           </div>
       </div>
    );
}

export default Store;