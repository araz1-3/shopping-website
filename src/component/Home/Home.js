import React,{useEffect,useState} from 'react';


import Logos from "./logos";
import banner1 from "../../assets/images/men-fashion-free-img.jpg"
import banner2 from "../../assets/images/women-fashion-free-img.jpg"
import Banners from "./Banners";
import Product from "../shared/Product";
import axios from "axios";
import Main from "./main";
import Costumers from "./costumers";
import {Link} from "react-router-dom";


const Home = () => {

    const [data , setData] = useState([])
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        axios.all([
            axios.get("https://fakestoreapi.com/products/2"),
            axios.get("https://fakestoreapi.com/products/3"),
            axios.get("https://fakestoreapi.com/products/4"),
            axios.get("https://fakestoreapi.com/products/17"),
            axios.get("https://fakestoreapi.com/products/18"),
            axios.get("https://fakestoreapi.com/products/19")
        ])
            .then(response =>setData([response[0].data,response[1].data,response[2].data,response[3].data,response[4].data,response[5].data]))
    },[])


    const scrollTOHandler=()=>{
        window.scrollTo(0,0)
    }

    window.addEventListener('scroll',()=>{
        if (window.scrollY > 300  ) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    })

            return (
       <div className="w-full">
              <div className="lg:bg-fixed bg-scroll bg-cover w-full h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-screen bg-backgroundImage">
                  <div className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-screen flex justify-center items-start flex-col bg-[#1110104C] md:p-[150px] pb-5 pt-[150px] gap-y-[25px] md:gap-y-[50px]">
                      <h1 className="font-bold md:max-w-xl text-white text-3xl md:text-5xl lg:text-6xl">
                          Raining Offers For Hot Summer!
                      </h1>
                      <p className=" text-white text-2xl lg:text-3xl">25% Off On All Products</p>
                     <div className="flex gap-4">
                         <Link to="/products" className="bg-white text-center transition-all text-black py-2 w-32 h-10 hover:text-gray-700">SHOP NOW</Link>
                         <button className="border transition-all py-1 px-4 text-white hover:text-black hover:bg-white">FIND MORE</button>
                     </div>
                  </div>
              </div>

           <button onClick={scrollTOHandler} className={scroll
               ? "transition-all hidden md:block duration-200 ease-in fixed z-50 bottom-20 pb-2 right-20 w-20 h-20 text-5xl font-bold text-white rounded-[50%] bg-[#1a73e8] hover:bg-[#0b499b]"
               :"hidden"}
           >
               &uarr;
           </button>

           <Logos/>
           <div className="container w-full md:w-4/5  gap-4 flex md:justify-evenly flex-col md:flex-row">
               <Banners banner={banner1}/>
               <Banners banner={banner2}/>
           </div>

           <h1 className="text-center my-16 text-5xl">Featured Products</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 auto-rows-auto container md:8/12 lg:w-7/12 grid-cols-1 auto-cols-max relative">
               <div className="font-bold underline hover:text-blue-600 text-xl absolute top-[-50px] md:right-[80px] right-[40px]">
                   <Link  to="/products">View All</Link>
               </div>
               {
                   data.map(item =>(
                       <Product
                           key={item.id}
                           productData={item}
                       />
                   ))
               }
           </div>
           <Main/>
           <Costumers/>
       </div>
    );
}

export default Home;