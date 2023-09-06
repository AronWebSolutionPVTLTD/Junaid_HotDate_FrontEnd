import React, { useContext, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../LandingPage/header/Header";
import "./signup_login.css";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import styles from "./GoogleLoginButton.module.css";
import { toast } from "react-toastify";
import { Context } from "../../Context/context";
const Signup = () => {
  const [form, setForm] = useState({
    profile_type: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [ProfileType, setProfileType] = useState("");
  const [loading, setLoading] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [captcha, setCaptcha] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { verifyemail, setverifyEmail, userId, setUserId } = useContext(
    Context
  );
  const [cookies, setCookie, removeCookie] = useCookies();
  const Captcha_Key = process.env.REACT_APP_CAPTCHA_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (form.email || form.username || form.password || form.confirmpassword) {
      setformErrors(validate(form));
    }
  }, [form]);

  useEffect(() => {
    CallRemoveToken();
  }, []);
  const CallRemoveToken = () => {
    removeCookie("token");
  };

  const validate = (value) => {
    let errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.email) {
      errors.email = "email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "Please enter the valid email";
    }
    if (!value.username) {
      errors.username = "username is required";
    } else if (value.username.length < 6 && value.username.length > 10) {
      errors.username = "username length should be between 6 to 10";
    }
    if (!value.password) {
      errors.password = "password is required";
    } else if (value.password.length < 8) {
      errors.password = "Minimum 8 characters password is required";
    }
    if (!value.confirmpassword) {
      errors.confirmpassword = "confirm password is required";
    } else if (value.password !== value.confirmpassword) {
      errors.confirmpassword = "password and confirmpassword must be same";
    }
    return errors;
  };
  const onChangeCaptcha = (value) => {
    setCaptcha(value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!form.profile_type) {
      toast.error("Select profile type");
      return;
    }
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      try {
        if (!captcha) {
          toast.warning("Fill the captcha");
          return;
        }
        setLoading(true);
        const { data } = await axios.post(`${BASE_URL}/api/register`, {
          ...form,
        });
        console.log(data, "DATA");
        if (!data) {
          setLoading(false);
          toast.error("🦄 Failed to Create User!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          setUserId(data._id);
          setLoading(false);
          setverifyEmail(form.email);
          setForm({
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
            profile_type: "",
          });
          CallRemoveToken();
          if (form.profile_type === "single") navigate("/single");
          if (form.profile_type === "couple") navigate("/couple");
        }
      } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setLoading(false);
      toast.error("🦄 Please fill all the fields correctly!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token} ` } }
      );

      const { data } = await axios.post(`${BASE_URL}/api/register`, {
        email: userInfo?.data.email,
        username: userInfo?.data.name,
        logintype: "google",
      });
      console.log(data);
      if (!data) {
        toast.error("Failed to Create User");
      } else {
        setverifyEmail(data.data.email);
        if (data.data.isVerify) {
          navigate("/home");
        } else {
          navigate("/verify_email");
        }
        setCookie(
          "token",
          data?.Message,
          { maxAge: 60 * 60 * 24 * 7 },
          {
            path: "/",
            secure: true, // Make sure to set secure for SameSite=None
            sameSite: "none", // SameSite attribute set to None for cross-site requests
          }
        );
        //   toast.success("🦄 Login Successful!", {
        //     position: "top-right",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        //   });
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="min-h-screen bg-black-20 text-white grid content-between">
      <div className="overflow-hidden">
        <Header />
        <div className="sign_up__block pt-65px mt-40">
          <div className="container mx-auto relative z-1">
            <div className="sign-up__header pt-10 pb-20 bg-white flex flex-col justify-center items-center rounded-t-3xl md:rounded-t-86">
              <p className="text-2xl sm:text-3xl xl:text-40px text-black  font-normal">
                Sign Up
              </p>
              <p className="text-lg text-black  font-body_font">
                Get Started it’s easy
              </p>
            </div>

            <div className="sign-up__body grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-t-58 md:rounded-r-58 bg-black mt-[-50px] md:rounded-58 relative  border-b-2 border-t-[1px] border-orange">
              <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">
                  Find Your Date
                </h2>

                <form
                  className="flex flex-col justify-center"
                  autoComplete="off"
                >
                  <div className="signup_radio justify-between mb-5 flex flex-wrap gap-y-5">
                    <p className="w-auto">Profile Type</p>
                    <div className="radio_btn_wrapper w-full xl:w-9/12">
                      <div className="radio_field">
                        <input
                          type="radio"
                          id="private_place"
                          className="hidden"
                          name="profile_type"
                          value="couple"
                          onChange={handleChange}
                        />
                        <label htmlFor="private_place">
                          <span className="radio_circle"></span>
                          <span className="radio_text">Couple</span>
                        </label>
                      </div>
                      <div className="radio_field">
                        <input
                          type="radio"
                          id="public_place"
                          className="hidden"
                          name="profile_type"
                          value="single"
                          onChange={handleChange}
                        />
                        <label htmlFor="public_place">
                          <span className="radio_circle"></span>
                          <span className="radio_text">Single</span>
                        </label>
                      </div>
                      <div className="radio_field">
                        <input
                          type="radio"
                          id="virtual_date"
                          className="hidden"
                          name="profile_type"
                          value="business"
                          onChange={handleChange}
                        />
                        <label htmlFor="virtual_date">
                          <span className="radio_circle"></span>
                          <span className="radio_text">Business</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap rounded-md input_field">
                      <label
                        htmlFor="email"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-base text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        className="bg-black border rounded-md sm:rounded-none sm:border-none sm:border-l-2 sm:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>

                    <p className="w-full capitalize text-s p-1 min-h-[24px]">
                      {formErrors.email}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap rounded-md input_field">
                      <label
                        htmlFor="username"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-base text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        className="bg-black border rounded-md sm:rounded-none sm:border-none sm:border-l-2 sm:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        placeholder=""
                        required
                      />
                    </div>

                    <p className="w-full capitalize text-s p-1 min-h-[24px]">
                      {formErrors.username}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap rounded-md input_field">
                      <label
                        htmlFor="password"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-base text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Create Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        className="bg-black border rounded-md sm:rounded-none sm:border-none sm:border-l-2 sm:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>

                    <p className="w-full capitalize text-s p-1 min-h-[24px]">
                      {formErrors.password}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap rounded-md input_field">
                      <label
                        htmlFor="ConfirmPassword"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-base text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="ConfirmPassword"
                        name="confirmpassword"
                        value={form.confirmpassword}
                        onChange={(e) => handleChange(e)}
                        className="bg-black border rounded-md sm:rounded-none sm:border-none sm:border-l-2 sm:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>

                    <p className="w-full capitalize text-s p-1 min-h-[24px]">
                      {formErrors.confirmpassword}
                    </p>
                  </div>

                  <div className="flex items-center recaptcha_field mb-6">
                    <ReCAPTCHA
                      sitekey={Captcha_Key}
                      onChange={onChangeCaptcha}
                    />
                  </div>
                  {!loading ? (
                    <button
                      className="gradient mb-6 !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                      onClick={(e) => handleSignup(e)}
                    >
                      Continue
                    </button>
                  ) : (
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  )}
                  <div className="or-block flex justify-center items-center gap-6 mb-6">
                    <div className="line-1 w-full h-[1px] bg-white"></div>
                    <div className="text-white px-1">OR</div>
                    <div className="line-1 w-full h-[1px] bg-white"></div>
                  </div>
                  <button
                    onClick={() => googleLogin()}
                    className="w-full mb-6 bg-gray-900 sign-up-google flex justify-center items-center text-white rounded-md text-base sm:text-lg xl:text-25px font-light py-3 "
                  >
                    Sign up with Google
                    <img
                      src="images/google-1.png"
                      alt="google image"
                      className="ms-3"
                    />
                  </button>

                  <button
                    className="gradient cursor-pointer !py-3 w-full !text-lg xl:!text-25px capitalize !font-normal flex justify-center items-center text-white rounded-xl primary_btn"
                    onClick={() => navigate("/model_form")}
                  >
                    Click Here To Register Yourself As a Model
                  </button>
                </form>
              </div>
              <div className="sign-up__image relative rounded-b-3xl md:rounded-r-58">
                <img
                  src="images/lovely-couple-bed-2.png"
                  alt=""
                  className="rounded-b-3xl rounded-r-none md:rounded-r-58 object-cover h-full"
                />
                <div className="sign-up__image-content absolute bottom-24 left-0 px-5 md:px-20 max-w-[538px] text-start">
                  <p className="text-xl sm:text-3xl md:text-4xl xl:text-40px text-white font-secondary_font">
                    Sign Up to the
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

export default Signup;
