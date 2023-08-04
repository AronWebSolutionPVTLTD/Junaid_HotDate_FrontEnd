import React from "react";
import { Link } from "react-router-dom";

const HeroSection2 = () => {
  return (
    <section className="hero_section2 relative">
      <img
        src="landingPage/images/women-with-device.png"
        className="w-full block object-cover inset-0 md:static"
        alt=""
      />
      <div className="static md:absolute inset-0 flex items-center justify-center">
        <div className="container pt-10 pb-20 md:pb-200px">
          <div class="inner-block text-white flex flex-col justify-center xl:justify-start items-center lg:items-start text-center xl:text-start max-w-500 me-auto ms-auto lg:ms-0 lg:me-auto">
            <p class="text-xl md:text-xl xl:text-35px leading-45 font-light">
              Hook-up on
            </p>
            <h2 class="text-2xl md:text-4xl xl:text-50px leading-75 font-bold">
              Any Device
            </h2>
            <p class="text-sm md:text-base xl:text-lg mb-4 leading-29 text-cetner lg:text-left">
              Just because you're on the go doesn't mean you have to miss out on
              all the fun. With Kaizen Globe mobile you can do all the things
              you do on your computer right from your smartphone or tablet.
              Browse KG® member profiles, send email messages, view cams, and
              chat right from your mobile device. Find hookups anywhere, anytime
              - it’s like having a party in your pocket!
            </p>
            <Link class="primary_btn">Join for Free Now!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
