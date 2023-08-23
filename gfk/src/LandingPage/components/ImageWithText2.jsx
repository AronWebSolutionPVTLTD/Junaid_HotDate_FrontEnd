import React from "react";
import { Link } from "react-router-dom";

const ImageWithText2 = () => {
  return (
    <section
      className="text-with-image  text-white py-6 md:py-8 lg:py-20 Hook__up-dating relative z-0
    before:absolute before:content-[''] lg:before:w-[502px] before:w-full before:h-[502px] before:left-0 lg:before:left-1/2
    before:bg-no-repeat before:bg-cover before:bg-violet before:blur-[200px] before:rounded-502 before:bottom-[-125px] before:z-[-2] before:-translate-x-1/2 before:transform"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-1 rounded-2xl sm:rounded-50px gradient">
          <div className="right-block flex justify-center items-center">
            <div className="right-block-img w-full h-full">
              <img
                src="landingPage/images/medium-shot-romantic-couple-inside-1.png"
                className="w-full object-cover h-full rounded-t-2xl sm:rounded-t-46 sm:rounded-l-46 rounded-bl-none rounded-br-none lg:rounded-bl-46 lg:rounded-tr-none lg:rounded-br-none"
                alt="partner"
              />
            </div>
          </div>
          <div className="left-block flex justify-center items-center Hookup-content rounded-b-2xl roudned-r-none lg:rounded-r-46 lg:rounded-bl-none sm:rounded-b-46 bg-2e2e2e px-5">
            <div className="inner-block px-0 py-10 lg:p-14 xl:p-16">
              <p className="text-xl md:text-xl xl:text-35px sm:leading-45 font-light max-w-xs">
                Indulge in adult dating and thrilling connections at SWINXTER®.
                Join now and experience the excitement first-hand!
              </p>
              {/* <h2 className="text-2xl md:text-4xl xl:text-50px sm:leading-75 sm:mb-0 mb-3 font-bold">
                Kaizen Globe®
              </h2> */}
              <p className="text-sm md:text-base xl:text-lg mb-4 leading-29 max-w-420px">
                Experience the ultimate convenience with adult dating at
                Swinxter! Our platform is designed to effortlessly connect you
                with your best adult dating matches, saving you time and effort.
                Whether you're seeking friends for adult dates or passionate
                encounters, Swinxter offers a wide range of local adult matches
                looking for lifestyle dating. Embrace the possibilities of
                hook-ups, online friendships, or intense connections with hot
                partners. Get ready to make your desires a reality – join
                Swinxter today and get it on!
              </p>
              <Link to="/signup" className="primary_btn">
                Join for Free Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText2;
