import React from 'react';

const Team = ({image,name,work}) => {
    return (
       <div className="bg-gray-100 border rounded border-solid border-gray-200 w-64 lg:w-64 md:w-48 h-64">
           <div className="flex flex-col justify-center items-center gap-2">
               <img className="w-24 my-7 " src={image} alt="img"/>
               <p className="font-bold text-xl">{name}</p>
               <span className="text-gray-700">{work}</span>
           </div>
       </div>
    );
};

export default Team;