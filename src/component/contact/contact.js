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
                         <div className="flex gap-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                             </svg>
                             <span>info@example .com</span>
                         </div>
                         <div className="flex gap-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                             </svg>
                             <span>1800 123 4567</span>
                         </div>
                         <div className="flex gap-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             <span>Monday to Saturday - 9:00 am to 7:00 pm</span>
                         </div>
                         <div className="flex gap-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             <span>Sunday - 10:00 am to 5:00 pm</span>
                         </div>
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