import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./signup_login.css";
import Footer from "./Footer";
import axios from "axios";
import { useCookies } from "react-cookie";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [cookies, setCookie] = useCookies(["cookie-name"]);
  const [rememberMe, setRememberMe] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    if (login.email || login.password) {
      setLoginErrors(validate(login));
    }
  }, [login]);

  const validate = (value) => {
    let errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.email) {
      errors.email = "email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "Please enter the valid email";
    }
    if (!value.password) {
      errors.password = "password is required";
    }
    return errors;
  };
  useEffect(() => {
    const token = cookies["token"];
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        console.log(decodedToken);
        navigate("/home");
      }
    }
    // eslint-disable-next-line
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (Object.keys(loginErrors).length === 0) {
      try {
        const { data } = await axios.post(`${BASE_URL}/api/login`, {
          ...login,
        });
        if (!data) {
          toast.error("🦄 Login Failed!", {
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
          setCookie("token", data.data.token, { maxAge: 60 * 60 * 24 });
          if (rememberMe) {
            setCookie("token", data.data.token, { maxAge: 60 * 60 * 24 * 7 });
          }
          setLogin({ email: "", password: "" });
          setRememberMe(false);
          toast.success("🦄 Login Successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/home");
        }
      } catch (error) {
        toast.error("🦄 Unable to login!", {
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

  const handleGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      setCookie("token", credentialResponse.credential);
      navigate("/");
    },
    onError: () => {
      toast.error("🦄 Login Failed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    flow: "auth-code",
  });

  return (
    <div className="min-h-screen bg-black-20 text-white grid content-between">
      <div className="overflow-hidden">
        <Header />
        <div className="sign_up__block pt-65px mt-8 sm:mt-16">
          <div className="container mx-auto relative z-1">
            <div className="sign-up__header pt-14 pb-24 bg-white flex flex-col justify-center items-center rounded-t-3xl md:rounded-t-86">
              <p className="text-2xl sm:text-3xl xl:text-40px text-black  font-normal">
                Login
              </p>
              <p className="text-lg text-black  font-normal">Welcome Back</p>
            </div>
            <div className="sign-up__body grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-t-58 md:rounded-r-58 bg-black mt-[-50px] md:rounded-58 relative  border-b-2 border-t-[1px] border-orange">
              <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-start font-bold mb-6">
                  Nice to see you again
                </h2>
                <form
                  className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
                  autoComplete="off"
                >
                  <div>
                    <div className="flex flex-wrap rounded-md input_field">
                      <label
                        htmlFor="username"
                        className="rounded-l-md sm:w-[100px] xl:w-[195px] mb-1 sm:mb-0 sm:h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                      >
                        Login
                      </label>
                      <input
                        name="email"
                        value={login.email}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        id="username"
                        autoComplete="off"
                        className="bg-black border rounded-md sm:border-none sm:border-l-2 border-orange focus:outline-none focus-visible:none w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg sm:rounded-none sm:rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        placeholder="Email or Phone Number"
                        required
                      />
                    </div>
                    {loginErrors.email && (
                      <p className="w-full capitalize text-xs p-1">
                        {loginErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap rounded-md input_field">
                    <label
                      htmlFor="password"
                      className="rounded-l-md sm:w-[100px] xl:w-[195px] mb-1 sm:mb-0 sm:h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={login.password}
                      onChange={(e) => handleChange(e)}
                      id="password"
                      autoComplete="off"
                      placeholder="Enter Password"
                      className="bg-black border rounded-md sm:border-none sm:border-l-2 border-orange focus:outline-none focus-visible:none w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg sm:rounded-none sm:rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                      required
                    />
                  </div>
                  <div className="flex flex-wrap gap-y-5 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          onChange={() => setRememberMe(!rememberMe)}
                          value={rememberMe}
                          className="sm:w-[29px] sm:h-[31px] border border-gray-300 rounded bg-gray-50 focus:ring-3
                                                        focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                                        dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm md:text-lg font-normal text-gray"
                      >
                        Remember Me{" "}
                      </label>
                    </div>
                    <p className="text-sm xl:text-lg font-normal leading-29 forgot-password-text bg-gradient-to-r from-orange to-red-500 bg-clip-text cursor-pointer">
                      <Link to="/forgot">Forgot Password?</Link>
                    </p>
                  </div>
                  <button
                    className="gradient !py-3 w-full !text-lg xl:!text-25px uppercase !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                  <div className="or-block flex justify-center items-center gap-6">
                    <div className="line-1 w-full h-[1px] bg-white"></div>
                    <div className="text-white px-1">OR</div>
                    <div className="line-1 w-full h-[1px] bg-white"></div>
                  </div>
                  <button
                    onClick={() => handleGoogle()}
                    className="w-full bg-gray-900 sign-up-google flex justify-center items-center text-white rounded-md text-base sm:text-lg xl:text-25px font-light py-3"
                  >
                    Sign up with Google{" "}
                    <img
                      src="images/google-1.png"
                      alt="google image"
                      className="ms-3"
                    />
                  </button>
                  {/* <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      setCookie("token", credentialResponse.credential);
                      navigate("/");
                    }}
                    onError={() => {
                      toast.error("🦄 Login Failed!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    }}
                  /> */}
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

export default Login;
