import React from 'react';

import costumer1 from "../../assets/images/globe-free-img.png"
import costumer2 from "../../assets/images/lock-free-img.png"
import costumer3 from "../../assets/images/quality-free-img.png"
import costumer4 from "../../assets/images/tag-free-img.png"
import Costumer from "../shared/costumer";

const Costumers = () => {
    return (
        <div className="container my-32 flex justify-evenly flex-wrap items-center  gap-4">
           <Costumer img={costumer1} title="Worldwide Shipping"/>
           <Costumer img={costumer2} title="Best Quality"/>
           <Costumer img={costumer3} title="Best Offers"/>
           <Costumer img={costumer4} title="Secure Payments"/>
        </div>
    );
};

export default Costumers;