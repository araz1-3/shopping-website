import React from 'react';

import img1 from "../assets/images/appstore-img.png"
import img2 from "../assets/images/playstore-img.png"
import FooterLinks from "./shared/FooterLinks";

const Footer = () => {
    return (
        <div className="bg-white border-t border-gray-400 border-solid">
            <div className="container">
                <div className="flex justify-evenly xs:flex-col gap-5 flex-wrap flex-row items-center py-12">

                    <FooterLinks
                        link1="/" link2="/products" link3="/cart" link4="/about" link5="/contact"
                        title="Quick Links" text1="Home" text2="Products" text3="Cart" text4="About" text5="Contact"
                    />

                    <FooterLinks
                        link1="/products" link2="/products" link3="/products" link4="/products" link5="/products"
                        title="For Her" text1="Women Jeans" text2="Tops and Shirts" text3="Women Jackets" text4="Heels and Flats" text5="Women Accessories"
                    />

                    <FooterLinks
                        link1="/products" link2="/products" link3="/products" link4="/products" link5="/products"
                        title="For Him" text1="Men Jeans" text2="Men Shoes" text3="Men Shirts" text4="Men Accessories" text5="Men Jackets"
                    />

                    <div className="flex flex-col mt-5 gap-5">
                        <img src={img1} alt="img"/>
                        <img src={img2} alt="img"/>
                    </div>
                </div>
                <div className="flex justify-around flex-col md:flex-row items-center gap-8 py-6 border-t border-gray-300 border-solid">
                    <span>Copyright © 2022 Brandstore</span>
                    <span>Powered by Brandstore</span>
                </div>
            </div>
        </div>

    );
};

export default Footer;