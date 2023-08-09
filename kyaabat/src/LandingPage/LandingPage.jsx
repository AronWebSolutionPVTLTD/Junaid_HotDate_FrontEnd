import React from "react";
import Header from "./header/Header";
import "./landingpage.css";
import HeroSection from "./components/HeroSection";
import SignUp from "./components/SignUp";
import ImageWithText from "./components/ImageWithText";
import ImageWithText2 from "./components/ImageWithText2";
import ImageWithText3 from "./components/ImageWithText3";
import ImageTextOverlay from "./components/ImageTextOverlay";
import Footer from "./Footer/Footer";
import HeroSection2 from "./components/HeroSection2";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <SignUp />
      <ImageWithText />
      <ImageWithText2 />
      <ImageWithText3 />
      <ImageTextOverlay />
      <HeroSection2 />
      <Footer />
    </div>
  );
};

export default LandingPage;
