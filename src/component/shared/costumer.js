import React from 'react';

const Costumer = ({img , title}) => {
    return (
        <div className="flex flex-col md:w-64 items-center  mt-9 gap-4">
            <img className="md:w-14 w-24" src={img} alt="costumers"/>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-center mx-10">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    );
};

export default Costumer;
