import React from 'react';

// Gif
import spinner from "../../assets/gif/Spinner.gif"

const Loader = () => {
    return (
        <div className="w-full flex items-start  justify-center h-screen">
            <img src={spinner} alt="Loading" />
        </div>
    );
};

export default Loader;