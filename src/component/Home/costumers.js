import React from 'react';

import costumers1 from "../../assets/images/globe-free-img.png"
import costumers2 from "../../assets/images/lock-free-img.png"
import costumers3 from "../../assets/images/quality-free-img.png"
import costumers4 from "../../assets/images/tag-free-img.png"

const Costumers = () => {
    return (
        <div className="container my-32 flex justify-evenly flex-wrap items-center  gap-4">
            <div className="flex flex-col md:w-64 items-center  mt-9 gap-4">
                <img className="md:w-14 w-24" src={costumers1} alt="costumers"/>
                <h4 className="text-xl font-bold">Worldwide Shipping</h4>
                <p className="text-center mx-10">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="flex flex-col md:w-64 items-center mt-9 gap-4">
                <img className="md:w-14 w-24" src={costumers3} alt="costumers"/>
                <h4 className="text-xl font-bold">Best Quality</h4>
                <p className="text-center mx-10">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="flex flex-col md:w-64 items-center mt-9 gap-4">
                <img className="md:w-14 w-24" src={costumers4} alt="costumers"/>
                <h4 className="text-xl font-bold">Best Offers</h4>
                <p className="text-center mx-10">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="flex flex-col md:w-64 items-center mt-9 gap-4">
                <img className="md:w-14 w-24" src={costumers2} alt="costumers"/>
                <h4 className="text-xl font-bold">Secure Payments</h4>
                <p className="text-center mx-10">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    );
};

export default Costumers;