import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const EmailVerified = () => {
  const { id } = useParams();
  const [cookies, setCookie,removeCookie] = useCookies();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    removeCookie('token')
    verifyEmail();

  }, []);
  const verifyEmail = async() => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/user_verify/${id}`);
    console.log(data);
    } catch (error) {
      console.log(error)
    }
    
  };
  console.log(id);
  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">Email Verified</h3>
          <p className="text-xl">Your Email address has been verified</p>
          <p className="text-md">
            Click here to{" "}
            <Link to="/login" className="text-orange underline">
              Login
            </Link>{" "}
            with your credentials
          </p>
        </div>
      </div>
      <div className="pt-10 container mx-auto"></div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          <img
            src="images/avn_award2-1.png"
            alt="award"
            className="max-w-200px md:max-w-full"
          />
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #1 Adult Dating Site
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
