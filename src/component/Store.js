import React,{useContext,useState,useEffect} from 'react';

//context
import {ProductContext} from "../Context/ProductsContextProvider";
import Product from "./shared/Product";
import Loader from "./shared/Loader";



const Store = () => {
    const products = useContext(ProductContext)
    const [search , setSearch] = useState("")
    const [select , setSelect] = useState("")
    const [sort , setSort] = useState("")
    const [filter , setFilter] =useState(products)

    useEffect(()=>{
        setFilter(products)
    },[products])

    const changeHandler =(e)=>{
        setSearch(e.target.value)
    }

    const selectHandler=(e)=>{
        setSelect(e.target.value)
        if (e.target.value === "all"){
            setFilter(products)
        }else {
            const updating = products.filter((item)=> item.category === e.target.value)
            setFilter(updating)
        }

    }
    const sortHandler =(e)=>{
        setSort(e.target.value)

        const sorting = filter.sort((a,b)=>{
            if (e.target.value === "highest"){
                return (b.price - a.price)
            }else if (e.target.value === "lowest"){
                return (a.price - b.price)
            }else if (e.target.value === "a-z" && (b.title.toLowerCase()) > (a.title.toLowerCase())) {
                return -1
            }else if (e.target.value === "z-a" && (a.title.toLowerCase()) > (b.title.toLowerCase())) {
                return -1
            }else {
                return (a.id - b.id)
            }
        })
        setFilter(sorting)
    }

    let searchFilter = filter.filter(item =>item.title.toLowerCase().includes(search.toLowerCase()))
    console.log(filter)

    return (

       <div className="mt-150px container min-h-[50vh]">
           <div className="flex justify-around items-center">
               <div className="w-2/5 h-12 ">
                   <input className="w-full border border-solid focus:bg-white border-gray-500 bg-gray-100 h-full rounded p-2" type="text" placeholder="Search here..." onChange={changeHandler}/>
               </div>

               <select onChange={selectHandler}>
                   <option value="all">All</option>
                   <option value="men's clothing">men's clothing</option>
                   <option value="jewelery">jewelery</option>
                   <option value="electronics">electronics</option>
                   <option value="women's clothing">women's clothing</option>
               </select>
               <select onChange={sortHandler}>
                   <option value="default">default</option>
                   <option value="highest">highest</option>
                   <option value="lowest">lowest</option>
                   <option value="a-z">Name(A-Z)</option>
                   <option value="z-a">Name(Z-A)</option>
               </select>
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