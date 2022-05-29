import React,{useContext,useEffect} from 'react';

//context
import {ProductContext} from "../Context/ProductsContextProvider";
import {FilterContext} from "../Context/FilterContextProvider";

//components
import Product from "./shared/Product";
import Loader from "./shared/Loader";



const Store = () => {
    const products = useContext(ProductContext)
    const {state,dispatch}= useContext(FilterContext)

    useEffect(()=>{
        dispatch({type:"LOAD_PRODUCTS",payload:products})
    },[products,dispatch])

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORT_PRODUCTS" });
    }, [dispatch, state.sort, state.filter]);

    console.log(state)

    const handleFilterChange = (e) => {
        const name = e.target.name;
        let value =
            e.target.value ||
            e.target.textContent
        if (name === "price") {
            value = Number(value);
        }
        dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    };

    return (

       <div className="mt-150px container min-h-[50vh]">
           <div className="flex justify-around items-center">
               <div className="w-2/5 h-12 ">
                   <input
                       className="w-full border border-solid focus:bg-white border-gray-500 bg-gray-100 h-full rounded p-2"
                       value={state.filter.text}
                       type="text"
                       placeholder="Search here..."
                       name="text"
                       onChange={handleFilterChange} />
               </div>

               <select name="category" onChange={handleFilterChange}>
                   <option value="all">All</option>
                   <option value="men's clothing">Men's clothing</option>
                   <option value="jewelery">Jewelery</option>
                   <option value="electronics">Electronics</option>
                   <option value="women's clothing">Women's clothing</option>
               </select>

               <select onChange={(e)=>{dispatch({type:"UPDATE_SORT", payload:e.target.value})}}>
                   <option value="default">Default</option>
                   <option value="price-highest">highest Price</option>
                   <option value="price-lowest">lowest Price</option>
                   <option value="name-a">Name(A-Z)</option>
                   <option value="name-z">Name(Z-A)</option>
               </select>

             <div className="flex flex-col">
                 <h3 className="font-bold text-xl">Price</h3>
                 <span>${state.filter.price}</span>
                 <input
                     name="price"
                     onChange={handleFilterChange}
                     min={state.filter.minPrice}
                     max={state.filter.maxPrice + 0.01}
                     value={state.filter.price}
                     type="range" />
             </div>
               <button
                   onClick={() => {dispatch({ type: "CLEAR_FILTERS" })}}>
                   clear filters
               </button>

           </div>

           <div className="flex flex-wrap justify-between items-center mt-[50px] px-[150px]">

               {
                   products.length?
                       state.filteredProducts.map(product =>
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