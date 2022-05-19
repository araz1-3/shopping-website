import React from 'react';

const Address = ({text , d}) => {
    return (
        <div className="flex gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={d}/>
            </svg>
            <span>{text}</span>
        </div>
    );
};

export default Address;
