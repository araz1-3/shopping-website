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
        let value = e.target.value;
        dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    };

    return (

       <div className="mt-150px container min-h-[50vh]">

           <div className="flex flex-col gap-5 lg:flex-row ">
               <div className="flex flex-col border-gray-300 border-solid border p-5 static lg:sticky top-24 lg:w-[30%] bg-white rounded h-fit gap-y-5 ">
                   <div className="animate-wiggle bg-gray-900 text-white p-2 rounded-xl w-fit">
                       <p>{state.filteredProducts.length} products found</p>
                   </div>
                   <div className="w-full h-12 ">
                       <input
                           className="w-full border border-solid focus:bg-white border-gray-500 bg-gray-100 h-full rounded p-2"
                           value={state.filter.text}
                           type="text"
                           placeholder="Search here..."
                           name="text"
                           onChange={(e)=>handleFilterChange(e)} />
                   </div>

                   <div>
                       <div className="flex items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                               <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                           </svg>
                           <h3 className="font-bold text-lg">Category</h3>
                       </div>
                       <select className="bg-gray-800 rounded text-white cursor-pointer" value={state.filter.category} name="category" onChange={handleFilterChange}>
                           <option value="all">All</option>
                           <option value="men's clothing">Men's clothing</option>
                           <option value="jewelery">Jewelery</option>
                           <option value="electronics">Electronics</option>
                           <option value="women's clothing">Women's clothing</option>
                       </select>
                   </div>

                   <div>
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                          </svg>
                          <h3 className="font-bold text-lg">Sort by</h3>
                      </div>
                       <select className="bg-gray-800 rounded text-white cursor-pointer" value={state.sort} onChange={(e)=>{dispatch({type:"UPDATE_SORT", payload:e.target.value})}}>
                           <option value="default">Default</option>
                           <option value="price-highest">highest Price</option>
                           <option value="price-lowest">lowest Price</option>
                           <option value="name-a">Name(A-Z)</option>
                           <option value="name-z">Name(Z-A)</option>
                       </select>
                   </div>

                   <div className="flex flex-col">
                       <div className="flex items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                               <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                           </svg>
                           <h3 className="font-bold text-xl">Price</h3>
                       </div>
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
                       className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-white"
                       onClick={() => {dispatch({ type: "CLEAR_FILTERS" })}}>
                       Clear Filters
                   </button>

               </div>

               <div className="flex flex-wrap md:justify-around justify-center items-center lg:w-[80%] ">

                   {
                       products.length?
                           state.filteredProducts.length === 0 ?
                               <p className="font-bold text-xl xs:text-lg py-12 lg:py-0 text-red-600">Sorry, no products matched your search.</p>
                               :
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

       </div>
    );
}

export default Store;