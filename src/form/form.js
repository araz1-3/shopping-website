import React,{useState,useEffect} from 'react';


import {validate} from "./validate";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toast";

const Form = () => {

    const [data ,setData] = useState({
        name:"",
        subject:"",
        email:"",
        massage :""
    })

    const [ touch , setTouch ] = useState({})
    const [errors , setErrors] = useState({})


    const changeHandler =(e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }

    useEffect(()=>{
        setErrors(validate(data))
    },[data,touch])

    const focusHandler = (e)=>{
        setTouch({...touch,[e.target.name]:true})
    }

    const submitHandler =(event)=>{
        event.preventDefault()
        if (!Object.keys(errors).length){
            notify("massage send successfully","success")
            setData({
                name:"",
                subject:"",
                email:"",
                massage :""
            })
            setTouch({
                name:false,
                email:false,
                massage :false
            })
        }else{
            notify("invalid data!","error")
            setTouch({
                name:true,
                email:true,
                massage :true
            })
        }
    }

    return (
        <div className="md:w-6/12">
            <form className="bg-white shadow-2xl flex flex-col w-full md:px-10  h-[700px] px-12  gap-[15px]" onSubmit={submitHandler}>
                <h1 className="mt-9 text-xl md:text-2xl lg:text-3xl  font-bold">Have any Queries? We're here to help.</h1>
                <div className="flex flex-col h-[68px] ">
                    <input className="h-10 border border-solid border-gray-200 focus:bg-white rounded bg-gray-100 w-full  p-5" type="text"
                           placeholder="NAME" name="name" onChange={changeHandler} value={data.name} onFocus={focusHandler}/>
                    {errors.name && touch.name && <span className="bg-red-400 text-red-700 text-[12px] w-fit px-[2px] mt-2 ml-1 rounded font-bold">{errors.name}</span>}
                </div>
            <div className="flex flex-col h-[68px] ">
                <input className="h-10 border border-solid border-gray-200 focus:bg-white rounded bg-gray-100 w-full p-5" type="text"
                       placeholder="SUBJECT" name="subject" onChange={changeHandler} value={data.subject} onFocus={focusHandler}/>
                {errors.subject && touch.subject && <span className="bg-red-400 text-red-700 text-[12px] w-fit px-[2px] mt-2 ml-1 rounded font-bold">{errors.subject}</span>}
            </div>
               <div className="flex flex-col h-[68px] ">
                   <input className="h-10 border border-solid border-gray-200 focus:bg-white rounded bg-gray-100 w-full p-5" type="text"
                          placeholder="EMAIL" name="email" onChange={changeHandler} value={data.email} onFocus={focusHandler}/>
                   {errors.email && touch.email && <span className="bg-red-400 text-red-700 text-[12px] w-fit px-[2px] mt-2 ml-1 rounded font-bold">{errors.email}</span>}
               </div>
             <div className="flex flex-col h-[186px] ">
                    <textarea className="h-40 border border-solid border-gray-200 focus:bg-white rounded bg-gray-100 w-full p-5"
                              placeholder="MESSAGE" name="massage" onChange={changeHandler} value={data.massage} onFocus={focusHandler}/>
                 {errors.massage && touch.massage && <span className="bg-red-400 text-red-700 text-[12px] w-fit px-[2px] mt-2 ml-1 rounded font-bold">{errors.massage}</span>}
             </div>
                <button type="submit" className="w-56 bg-blue-500 hover:bg-blue-600 text-white my-4 py-2">SEND MESSAGE</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Form;