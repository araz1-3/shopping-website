import React from 'react';

import banner5 from "../../assets/images/slide-image-free-img.jpg"
import Team from "./team";

import img1 from "../../assets/images/team1-free-img.png"
import img2 from "../../assets/images/team2-free-img.png"
import img3 from "../../assets/images/team3-free-img.png"
import img4 from "../../assets/images/team4free-img.png"
import img5 from "../../assets/images/team5-free-img.png"
import img6 from "../../assets/images/team6-free-img.png"
import Costumers from "../Home/costumers";

const About = () => {
    return (
        <div>
            <div className="bg-aboutBanner lg:bg-fixed bg-scroll bg-cover w-full h-[50vh] md:h-[60vh] lg:h-[75vh]">
                <div className="bg-lightBlack w-full h-[50vh] md:h-[60vh] lg:h-[75vh] flex items-center justify-center">
                    <h1 className="text-center font-bold  text-4xl md:text-6xl text-white">About Us</h1>
                </div>
            </div>
          <div className="container w-10/12  md:h-50vh my-16 bg-white">
              <div className="flex w-full flex-col gap-5 md:flex-row justify-between ">
                  <div className="md:w-1/2">
                      <h1 className="my-9 font-bold mx-10 md:mt-16 lg:mt-24 text-left lg:text-5xl md:text-4xl sm:text-3xl text-2xl ">Who We Are</h1>
                      <p className="text-justify px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                          , pulvinar dapibus leo.Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                  </div>
                  <div className="md:w-1/2">
                      <img className="w-full md:h-[50vh] h-fit" src={banner5} alt="banner"/>
                  </div>
              </div>
          </div>
            <div className="bg-white py-32">
                <div className="flex flex-col gap-8 items-center">
                    <p className="text-center text-2xl font-bold">A Few Words About</p>
                    <h1 className="text-center md:text-5xl sm:text-4xl text-3xl font-bold">Our Team</h1>
                    <span className="text-center w-1/2">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</span>
                    <div className="flex flex-wrap xl:w-[1000px] justify-center gap-4 items-center container">
                        <Team image={img2} name="Harvey Spector" work="Founder - CEO"/>
                        <Team image={img1} name="Jessica Pearson" work="COO"/>
                        <Team image={img3} name="Rachel Zain" work="Marketing Head"/>
                        <Team image={img4} name="Luise Litt" work="Lead Developer"/>
                        <Team image={img5} name="Katrina Bennett" work="Intern Designer"/>
                        <Team image={img6} name="Mike Ross" work="Intern Designer"/>
                    </div>
                </div>
            </div>
            <Costumers/>
        </div>
    );
};

export default About;