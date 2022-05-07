import React,{useContext} from 'react';

import {FavoriteContext} from "../Context/FavoriteContextProvider";
import Product from "./shared/Product";
import {Link} from "react-router-dom";

const Favorites = () => {

    const {FavState} =useContext(FavoriteContext)

    return (
        <div className="h-[50vh]">
            {
                FavState.favoriteItems.length?
                <div className="mt-150px flex flex-wrap justify-between items-center px-[150px]">
                    {FavState.favoriteItems.map(item => <Product key={item.id} productData={item} />)}
                </div>:
                    <div className="mt-150px flex gap-5 flex-col justify-center items-center">
                        <p className="font-bold text-2xl ">there is not any favorite items</p>
                        <Link className="text-center text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg w-32 h-9 p-1" to="/products">add items</Link>
                    </div>
            }
        </div>
    );
};

export default Favorites;