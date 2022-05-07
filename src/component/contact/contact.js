import React from 'react';
import Form from "../../form/form";


const Contact = () => {
    return (
        <div>
             <div className="bg-contactBanner bg-cover bg-fixed w-full h-75vh">
                 <div className="bg-lightBlack w-full h-75vh flex items-center justify-center">
                     <h1 className="text-center font-bold  text-4xl md:text-6xl text-white">Contact Us</h1>
                 </div>
             </div>
             <div className="flex justify-evenly w-full items-center md:flex-row flex-col gap-4 container my-24">
                 <div className="flex flex-col gap-10">
                     <div className="flex flex-col gap-4">
                         <h1 className="text-3xl font-bold ">You tell us. We listen.</h1>
                         <span>info@example .com</span>
                         <span>1800 123 4567</span>
                         <span>Monday to Saturday - 9:00 am to 7:00 pm</span>
                         <span>Sunday - 10:00 am to 5:00 pm</span>
                     </div>
                     <div className="flex flex-col gap-4">
                         <h1 className="text-xl font-bold">Need Help? Call Us.</h1>
                         <p className="text-blue-500 text-2xl font-bold">1800 123 4567</p>
                     </div>
                 </div>
                 <Form/>
             </div>
        </div>
    );
};

export default Contact;