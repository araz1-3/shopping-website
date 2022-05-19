import React from 'react';
import {Link} from "react-router-dom";

const FooterLinks = ({link1,link2,link3,link4,link5,title,text1,text2,text3,text4,text5}) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold mt-5">{title}</h2>
            <div className="flex flex-col gap-2">
                <Link className="hover:text-blue-500" to={link1}>{text1}</Link>
                <Link className="hover:text-blue-500" to={link2}>{text2}</Link>
                <Link className="hover:text-blue-500" to={link3}>{text3}</Link>
                <Link className="hover:text-blue-500" to={link4}>{text4}</Link>
                <Link className="hover:text-blue-500" to={link5}>{text5}</Link>
            </div>
        </div>
    );
};

export default FooterLinks;
