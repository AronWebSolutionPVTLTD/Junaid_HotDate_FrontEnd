import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../Signup_Login/Header";
import Footer from "../../Signup_Login/Footer";

const ModelDetailForm = () => {
  const [model, setModel] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    looking_for: "",
    marital_status: "",
    body_type: "",
    language: "",
    booking_price: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    introduction: "",
    age: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [countries, setCountries] = useState([]);
  const [SelectedImage, setSelectedImage] = useState(null);
  const [SelectedVideo, setSelectedVideo] = useState(null);
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies] = useCookies(["cookie-name"]);

  const getData = () => {
    fetch("countries.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCountries(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const token = cookies["token"];
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     if (decodedToken) {
  //       setUserToken(token);
  //     } else {
  //       navigate("/");
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModel({ ...model, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setError({ ...error, email: "invalid email address" });
      } else {
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        setError({
          ...error,
          password: "Password must be atleast 6 character",
        });
      } else {
        setError({ ...error, password: "" });
      }
    }
    if (name === "confirmPassword") {
      if (value !== model.password) {
        setError({ ...error, confirmPassword: "Password didn't Match" });
      } else {
        setError({ ...error, confirmPassword: "" });
      }
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(Array.from(e.target.files));
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(Array.from(e.target.files));
  };
  const handleModel = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (SelectedImage) {
      SelectedImage.forEach((image) => formData.append("images", image));
    }
    if (SelectedVideo) {
      SelectedVideo.forEach((video) => formData.append("videos", video));
    }

    formData.append("firstName", model.first_name);
    formData.append("lastName", model.last_name);
    formData.append("DOB", model.dob);
    formData.append("looking_for", model.looking_for);
    formData.append("marital_status", model.marital_status);
    formData.append("body_type", model.body_type);
    formData.append("language", model.language);
    formData.append("booking_price", model.booking_price);
    formData.append("username", model.username);
    formData.append("email", model.email);
    formData.append("password", model.password);
    formData.append("confirm_password", model.confirmPassword);
    formData.append("country", model.country);
    formData.append("introduction", model.introduction);
    formData.append("age", model.age);
    const headers = {
      "Content-Type": "multipart/form-data",
      token: userToken,
    };

    try {
      const data = await axios.post(`${BASE_URL}/api/addModel`, formData, {
        headers,
      });
      if (!data) {
        toast.error("🦄 Failed to Create Model!", {
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
        setModel({
          first_name: "",
          last_name: "",
          dob: "",
          looking_for: "",
          marital_status: "",
          body_type: "",
          language: "",
          booking_price: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          country: "",
          introduction: "",
          age: "",
        });
        toast.success("🦄 Model Created Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black-20 text-white grid content-between">
      <div className="overflow-hidden">
        <Header />
        <div className="container mx-auto mb-20 mt-40">
          <div className="bg-white rounded-40px">
            <div className="text-center p-5 py-10 text-black">
              <h3 className="text-2xl sm:text-4xl">Model Details</h3>
            </div>
            <div className="flex flex-wrap bg-black rounded-40px ">
              <div className="w-full md:w-3/5 xl:w-full 2xl:w-3/5 ">
                <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                  <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">
                    Fill your Details
                  </h2>

                  <form
                    className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
                    autoComplete="off"
                  >
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="first_name"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={model.first_name}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="last_name"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={model.last_name}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="last_name"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        min="18"
                        max="100"
                        id="age"
                        name="age"
                        oninput="validity.valid||(value='');"
                        value={model.age}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                          htmlFor="body_type"
                          className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={model.email}
                          onChange={handleChange}
                          autoComplete="off"
                          className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                          required
                        />
                      </div>
                      <p>{error.email}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                          htmlFor="body_type"
                          className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          id="password"
                          name="password"
                          value={model.password}
                          onChange={handleChange}
                          autoComplete="off"
                          className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                          required
                        />
                      </div>
                      <p>{error.password}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                          htmlFor="body_type"
                          className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={model.confirmPassword}
                          onChange={handleChange}
                          autoComplete="off"
                          className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                          required
                        />
                      </div>
                      <p>{error.confirmPassword}</p>
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="dob"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        D.O.B
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={model.dob}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="body_type"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={model.username}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="looking_for"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Looking For
                      </label>
                      {/* <input
                  type="text"
                  id="looking_for"
                  name="looking_for"
                  value={model.looking_for}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  required
                /> */}
                      <select
                        name="looking_for"
                        id="looking_for"
                        value={model.looking_for}
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="male" className="font-semibold">
                          M
                        </option>
                        <option value="female" className="font-semibold">
                          F
                        </option>
                        <option value="male female" className="font-semibold">
                          MF
                        </option>
                        <option value="female female" className="font-semibold">
                          FF
                        </option>
                        <option value="male male" className="font-semibold">
                          MM
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="marital_status"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Marital Status
                      </label>
                      <input
                        type="text"
                        id="marital_status"
                        name="marital_status"
                        value={model.marital_status}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="body_type"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Booking Price
                      </label>
                      <input
                        type="number"
                        id="body_type"
                        name="booking_price"
                        value={model.booking_price}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="body_type"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Body Type
                      </label>
                      <input
                        type="text"
                        id="body_type"
                        name="body_type"
                        value={model.body_type}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="language"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Language
                      </label>
                      <input
                        type="text"
                        id="language"
                        name="language"
                        value={model.language}
                        onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="language"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start"
                      >
                        Country
                      </label>

                      <select
                        name="country"
                        id="cars"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        onChange={(e) => handleChange(e)}
                      >
                        {countries.map((country, i) => (
                          <option
                            key={i}
                            value={country.name}
                            className="font-semibold"
                          >
                            {country.name}
                          </option>
                        ))}

                        {/* <option value="saab">Australia</option> */}
                      </select>
                    </div>

                    <div className="flex flex-wrap rounded-md input_field_2">
                      <label
                        htmlFor="language"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center
                                            lg:text-start"
                      >
                        Introduction
                      </label>
                      {/* <input
                  type="text"
                  id="introduction"
                  name="introduction"
                  value={model.introduction}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  required
                /> */}
                    </div>
                    <div className="p-[2px] gradient rounded-md">
                      <textarea
                        type="text"
                        id="introduction"
                        rows={3}
                        name="introduction"
                        value={model.introduction}
                        onChange={handleChange}
                        className="bg-black focus:outline-none focus-visible:none w-full border-gradient3 text-gray font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 text-center md:text-start items-center flex justify-between"
                        required
                      ></textarea>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md">
                        <span className="w-6 block mr-2">
                          <img
                            src="images/gallery-icon.png"
                            alt="gallery-icon"
                          />
                        </span>
                        Upload Images
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={handleImageChange}
                        />
                      </label>
                      <label className="flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md">
                        <span className="w-6 block mr-2">
                          <img
                            src="images/video-upload-icon.png"
                            alt="gallery-icon"
                          />
                        </span>
                        Upload Videos
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={handleVideoChange}
                        />
                      </label>
                    </div>
                    <button
                      className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                      onClick={handleModel}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:w-2/5 xl:w-full 2xl:w-2/5">
                <img
                  src="images/model-detail.png"
                  alt="create-event"
                  className="block h-full w-full rounded-t-40px md:p-0 p-5 rounded-b-40px md:rounded-b-none md:rounded-br-40px md:rounded-r-40px xl:rounded-b-40px xl:rounded-tl-40px 2xl:rounded-l-none 2xl:rounded-r-40px object-cover object-center aspect-square md:aspect-auto xl:aspect-square 2xl:md:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetailForm;