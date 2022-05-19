import React from 'react';

const Input = ({name,data,changeHandler,focusHandler,error ,placeholder ,touch}) => {
    return (
        <div className="flex flex-col h-[68px] ">
            <input className="h-10 border border-solid border-gray-200 focus:bg-white rounded bg-gray-100 w-full  p-5" type="text"
                   placeholder={placeholder} name={name} onChange={changeHandler} value={data} onFocus={focusHandler}/>
            {error && touch && <span className="bg-red-400 text-red-700 text-[12px] w-fit px-[2px] mt-2 ml-1 rounded font-bold">{error}</span>}
        </div>
    );
};

export default Input;
