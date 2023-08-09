import React from "react";
import { Link } from "react-router-dom";

const ImageWithText3 = () => {
  return (
    <section className="text-with-image  text-white py-6 md:py-8 lg:py-20 meet-member relative z-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="left-block flex justify-center lg:justify-end items-center">
            <div className="inner-block max-w-500">
              <p className="text-xl md:text-xl xl:text-35px sm:leading-45 font-light">
                Explore the exciting world of nude cam chat and connect with
                like-minded{" "}
              </p>
              <h2 className="text-2xl md:text-4xl xl:text-50px sm:leading-75 sm:mb-0 mb-3 font-bold">
                members today!
              </h2>
              <p className="text-sm md:text-base xl:text-lg mb-4 leading-29">
                Discover the thrill of online chatting at Swinxter.com! Join now
                and indulge in adult chat with passionate members around the
                clock. Experience the excitement of meeting new people and
                sharing quality time together. Our Adult Chat instant messenger
                ensures you can easily hook up with new adult friends whenever
                the mood strikes. Join us now and embrace the excitement!
              </p>
              <Link className="primary_btn" to="/signup">
                Register for free now!
              </Link>
            </div>
          </div>
          <div className="right-block flex justify-center items-center">
            <div className="right-block w-full lg:w-auto">
              <img
                src="landingPage/images/young-happy-smiling-beautiful-woman-lying-bed-speaking-phone-1.png"
                className="max-w-full w-full lg:w-auto"
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText3;
