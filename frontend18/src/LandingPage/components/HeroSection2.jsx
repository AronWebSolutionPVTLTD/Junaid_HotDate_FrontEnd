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
              Discover the ease and flexibility
            </p>
            <h2 class="text-2xl md:text-4xl xl:text-50px leading-75 font-bold">
              of hooking up on any device!
            </h2>
            <p class="text-sm md:text-base xl:text-lg mb-4 leading-29 text-cetner lg:text-left">
              Stay connected and never miss out on the fun with SWINXTER!
              Experience the convenience of accessing all the features you enjoy
              on your computer right from your smartphone or tablet. Browse
              Swinxter® member profiles, send email messages, view cams, and
              chat directly from your mobile device. Find hook-ups anytime,
              anywhere – it's like having a party in your pocket! Join now to
              bring the excitement with you on the go.
            </p>
            <Link class="primary_btn" to="/signup">
              Join for Free Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
