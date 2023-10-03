import React from "react";
import Header from "../header/Header";
import HeroSection from "../components/HeroSection";
import SignUp from "../components/SignUp";
import ImageWithText from "../components/ImageWithText";
import ImageWithText2 from "../components/ImageWithText2";
import ImageWithText3 from "../components/ImageWithText3";
import ImageTextOverlay from "../components/ImageTextOverlay";
import Footer from "../Footer/Footer";
import HeroSection2 from "../components/HeroSection2";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SignUp />
      <ImageWithText />
      <ImageWithText2 />
      <ImageWithText3 />
      <ImageTextOverlay />
      <HeroSection2 />
      <div className="audit-dating__block relative my-16">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          {/* <img
            src="images/avn_award2-1.png"
            alt="award"
            className="max-w-200px md:max-w-full"
          /> */}
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #Best Adult Dating Site
          </h2>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
