import React,{useContext} from 'react';

import {FavoriteContext} from "../Context/FavoriteContextProvider";
import Product from "./shared/Product";
import {Link} from "react-router-dom";

const Favorites = () => {

    const {FavState} =useContext(FavoriteContext)

    return (
        <div className="min-h-[50vh] container">
            {
                FavState.favoriteItems.length?
                <div className="mt-150px flex flex-wrap md:justify-around justify-center items-center">
                    {FavState.favoriteItems.map(item => <Product key={item.id} productData={item} />)}
                </div>:
                    <div className="mt-150px flex gap-5 flex-col justify-center items-center">
                        <p className="font-bold text-2xl xs:text-xl">there is not any favorite items</p>
                        <Link className="text-center text-lg animate-bounce font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg w-32 h-9 p-1" to="/products">add items</Link>
                    </div>
            }
        </div>
    );
};

export default Favorites;