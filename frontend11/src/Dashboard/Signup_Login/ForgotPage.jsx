import React, { useState } from "react";
import Header from "./Header";
import "./signup_login.css";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPage = () => {
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState({
    password: "",
    cpassword: "",
  });
  const [otp, setOtp] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [otpsend, setotpsend] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/api/forget`, {
        email: email,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const OtpHandler = (e) => {
    const { name, value } = e.target;
    setOtp({ ...otp, [name]: value });
  };

  const inputFocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex;
      console.log(next);
      if (next > 1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex + 2;
      console.log(next);
      if (next < 8) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const confirmOtp = async (e) => {
    e.preventDefault();
    const finalOtp =
      otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6;

    try {
      const { data } = await axios.post(`${BASE_URL}/api/verifyOtp`, {
        email: email,
        otp: finalOtp,
      });

      if (data) {
        setotpsend(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewPassword = (e) => {
    const { name, value } = e.target;
    setConfirmPassword({ ...confirmPassword, [name]: value });
  };

  const SubmitPassword = async (e) => {
    e.preventDefault();
    if (confirmPassword.password === confirmPassword.cpassword) {
      const { data } = await axios.post(`${BASE_URL}/api/reset_pass`, {
        email: email,
        new_password: confirmPassword.password,
        confirm_password: confirmPassword.cpassword,
      });
      if (data) {
        navigate("/login");
      }
    }
  };
  return (
    <div className="min-h-screen bg-black-20 text-white grid content-between">
      <div className="overflow-hidden">
        <Header />
        <div className="sign_up__block pt-65px mt-8 sm:mt-16">
          <div className="container mx-auto relative z-1 !px-0 md:!px-5">
            <div className="sign-up__header pt-14 pb-24 bg-white flex flex-col justify-center items-center rounded-t-3xl md:rounded-t-86">
              <p className="text-2xl sm:text-3xl xl:text-40px text-black  font-normal">
                Forgot Password ?
              </p>
            </div>
            <div className="sign-up__body grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-t-58 md:rounded-r-58 bg-black mt-[-50px] md:rounded-58 relative  border-b-2 border-t-[1px] border-orange">
              <div className="sign-up__form flex flex-col justify-start gap-30 py-6 px-6 lg:py-11 lg:px-14">
                <h2 className="text-white text-2xl sm:text-3xl text-start font-bold mb-6">
                  Trouble with logging in?
                </h2>
                <form
                  className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
                  autoComplete="off"
                >
                  {!otpsend && (
                    <>
                      <div>
                        <div className="flex flex-wrap rounded-md input_field">
                          <label
                            htmlFor="email"
                            className="rounded-l-md sm:w-[100px] xl:w-[195px] mb-1 sm:mb-0 sm:h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                          >
                            Email
                          </label>
                          <input
                            name="email"
                            value={email}
                            onChange={handleChange}
                            type="text"
                            id="email"
                            autoComplete="off"
                            className="bg-black border rounded-md sm:border-none sm:border-l-2 border-orange focus:outline-none focus-visible:none w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg sm:rounded-none sm:rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                            placeholder="Enter Your Email"
                            required
                          />
                        </div>
                      </div>
                      <button
                        className="gradient !py-3 w-full !text-lg xl:!text-25px uppercase !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                        onClick={sendOtp}
                      >
                        Send OTP
                      </button>
                      <div className="flex justify-center">
                        <div>
                          <input
                            maxlength="1"
                            type="text"
                            id="1st_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp1"
                            tabIndex="1"
                            value={otp.otp1}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                        <div className="pl-2 md:pl-3">
                          <input
                            maxlength="1"
                            type="text"
                            id="2nd_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp2"
                            tabIndex="2"
                            value={otp.otp2}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                        <div className="pl-2 md:pl-3">
                          <input
                            maxlength="1"
                            type="text"
                            id="3rd_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp3"
                            tabIndex="3"
                            value={otp.otp3}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                        <div className="pl-2 md:pl-3">
                          <input
                            maxlength="1"
                            type="text"
                            id="4th_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp4"
                            tabIndex="4"
                            value={otp.otp4}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                        <div className="pl-2 md:pl-3">
                          <input
                            maxlength="1"
                            type="text"
                            id="5th_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp5"
                            tabIndex="5"
                            value={otp.otp5}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                        <div className="pl-2 md:pl-3">
                          <input
                            maxlength="1"
                            type="text"
                            id="6th_num"
                            className="w-10 h-10 bg-transparent border text-center border-white/70 rounded"
                            name="otp6"
                            tabIndex="6"
                            value={otp.otp6}
                            onChange={OtpHandler}
                            onKeyUp={(e) => inputFocus(e)}
                          />
                        </div>
                      </div>
                      <button
                        className="gradient !py-3 w-full !text-lg xl:!text-25px uppercase !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                        onClick={confirmOtp}
                      >
                        Confirm OTP
                      </button>
                    </>
                  )}

                  {otpsend && (
                    <>
                      <h2 className="text-white text-2xl sm:text-3xl text-start font-bold">
                        Reset Your Password
                      </h2>
                      <div>
                        <div className="flex flex-wrap rounded-md input_field">
                          <label
                            htmlFor="password"
                            className="rounded-l-md sm:w-[100px] xl:w-[195px] mb-1 sm:mb-0 sm:h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                          >
                            New Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            onChange={handleNewPassword}
                            value={confirmPassword.password}
                            id="password"
                            autoComplete="off"
                            className="bg-black border rounded-md sm:border-none sm:border-l-2 border-orange focus:outline-none focus-visible:none w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg sm:rounded-none sm:rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap rounded-md input_field">
                          <label
                            htmlFor="conf_password"
                            className="rounded-l-md sm:w-[100px] xl:w-[195px] mb-1 sm:mb-0 sm:h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                          >
                            Confirm Password
                          </label>
                          <input
                            name="cpassword"
                            type="password"
                            id="conf_password"
                            onChange={handleNewPassword}
                            value={confirmPassword.cpassword}
                            autoComplete="off"
                            className="bg-black border rounded-md sm:border-none sm:border-l-2 border-orange focus:outline-none focus-visible:none w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg sm:rounded-none sm:rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                            required
                          />
                        </div>
                      </div>
                      <button
                        className="gradient !py-3 w-full !text-lg xl:!text-25px uppercase !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                        onClick={SubmitPassword}
                      >
                        Submit
                      </button>
                    </>
                  )}
                </form>
              </div>
              <div className="sign-up__image relative rounded-b-3xl md:rounded-r-58">
                <img
                  src="images/lovely-couples.png"
                  alt=""
                  className="rounded-b-3xl rounded-r-none md:rounded-r-58 object-cover h-full"
                />
                <div className="sign-up__image-content absolute bottom-24 left-0 px-5 md:px-20 max-w-[538px] text-start">
                  <p className="text-xl sm:text-3xl md:text-4xl xl:text-40px text-white font-secondary_font">
                    Login to the
                  </p>
                  <h2 className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-white font-bold leading-10 md:leading-45 xl:leading-65">
                    World Best Adult Dating Site
                  </h2>
                </div>
              </div>
            </div>
            <div className="audit-dating__block relative my-16">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPage;
