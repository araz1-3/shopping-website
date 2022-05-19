import React,{useState,useEffect,createContext} from 'react';

import  {getProducts} from '../services/api'

export const ProductContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [product,setProduct]=useState([])

    useEffect(()=>{
        const fetchAPI =async ()=>{
            setProduct(await getProducts())
        }
        fetchAPI()
    },[])


    return (
        <div >
            <ProductContext.Provider value={product}>
                {children}
            </ProductContext.Provider>
        </div>
    )
};

export default ProductsContextProvider;

