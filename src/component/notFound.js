import React from 'react';

import {useNavigate} from "react-router-dom"

import error from "../assets/gif/error404.gif"

const NotFound = () => {

    const navigate =useNavigate()

    const redirectHandler =()=>{
        navigate("/products")
    }

    return (
        <div className="mt-150px flex-col mb-8 flex items-center justify-center">
            <img src={error} alt="notfound"/>
            <button
                className="py-1 animate-bounce px-8 mb-8 rounded font-bold text-white bg-blue-600 hover:bg-blue-700"
                onClick={redirectHandler}>
                Go Back
            </button>
        </div>
    );
};

export default NotFound;