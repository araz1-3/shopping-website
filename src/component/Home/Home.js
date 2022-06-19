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
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



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
                  <div className="lg:bg-fixed bg-scroll bg-cover w-full xs:min-h-[370px] h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-screen bg-backgroundImage">
                      <div className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-screen xs:min-h-[370px] flex justify-center items-start flex-col bg-[#1110104C] md:p-[150px] pb-5 pt-[150px] gap-y-[20px] sm:gap-y-[25px] md:gap-y-[50px]">
                          <h1 className="font-bold md:max-w-xl animate-opacities text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                              Raining Offers For Hot Summer!
                          </h1>
                          <p className=" text-white text-xl sm:text-2xl animate-opacities lg:text-3xl">25% Off On All Products</p>
                         <div className="flex gap-4 flex-col md:flex-row mb-6 md:mb-0">
                             <Link to="/products" className="bg-white animate-opacities text-center transition-all text-black py-2 md:w-32 w-screen h-10 hover:text-gray-700">SHOP NOW</Link>
                             <button className="border transition-all animate-opacities py-1 md:w-32 text-white  w-screen hover:text-black hover:bg-white">FIND MORE</button>
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

           <h1 className="text-center my-16 md:text-5xl font-bold sm:text-3xl text-2xl">Featured Products</h1>
               <div className="flex flex-wrap xl:w-[1000px] justify-center gap-6 items-center container">
                   {
                       data.length?
                           data.map(item =>(
                               <Product
                                   key={item.id}
                                   productData={item}
                               />
                           ))
                           :
                           <>
                               <Skeleton highlightColor="#f5f5f5" width={230} height={350} />

                               <Skeleton highlightColor="#f5f5f5" width={230} height={350} />

                               <Skeleton highlightColor="#f5f5f5" width={230} height={350} />
                           </>

                   }
               </div>
           <Main/>
           <Costumers/>
       </div>
    );
}

export default Home;