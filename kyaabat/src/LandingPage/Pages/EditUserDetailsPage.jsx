import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const EditUserDetailsPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    sexual_orientation: "",
    gender: "",
    marital_status: "",
    body_type: "",
    race: "",
    speaks: "",
    dob: "",
    age: "",
    looking_for: "",
    relocate: "",
    introduction: "",
    image: "",
  });
  const [usertoken, setUsertoken] = useState("");
  const { userInfo, setUserInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = cookies["token"];
    setUsertoken(token);
    if (userInfo) {
      setUserDetails({
        email: userInfo.email || "",
        username: userInfo.username || "",
        sexual_orientation: userInfo.sexual_orientation || "",
        gender: userInfo.gender || "",
        marital_status: userInfo.marital_status || "",
        body_type: userInfo.body_type || "",
        race: userInfo.race || "",
        speaks: userInfo.speaks || "",
        dob: userInfo.dob || "",
        age: userInfo.age || "",
        looking_for: userInfo.looking_for || "",
        relocate: userInfo.relocate || "",
        introduction: userInfo.introduction || "",
        image: userInfo.image || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setUserDetails({ ...userDetails, image: e.target.files[0] });
  };
  const handleSave = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("email", userDetails.email);
    formData.append("username", userDetails.username);
    formData.append("sexual_orientation", userDetails.sexual_orientation);
    formData.append("marital_status", userDetails.marital_status);
    formData.append("body_type", userDetails.body_type);
    formData.append("race", userDetails.race);
    formData.append("speaks", userDetails.speaks);
    formData.append("dob", userDetails.dob);
    formData.append("age", userDetails.age);
    formData.append("looking_for", userDetails.looking_for);
    formData.append("relocate", userDetails.relocate);
    formData.append("introduction", userDetails.introduction);
    formData.append("image", userDetails.image);

    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/update_user`,
        formData,
        {
          headers: {
            token: usertoken,
          },
        }
      );
      if (data) {
        console.log(data, "NEW EDIT");
        setUserInfo(data);
        navigate("/user-detail");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userDetails);
  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">Edit User Details</h3>
          <p className="text-lg">Lorem Ipsum is dummy content</p>
        </div>
      </div>
      <div className="container mx-auto">
        <form className=" max-w-7xl mx-auto mt-10" autoComplete="off">
          <div className="grid md:grid-cols-2 gap-x-10 justify-stretch md:justify-center gap-y-4 sm:gap-y-6">
            <div className="grid gap-y-4 md:gap-y-6">
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="email"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="username"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userDetails.username}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="email"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Sexual Orientation
                  </label>
                  <select
                    name="sexual_orientation"
                    id="reason"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.sexual_orientation}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="gender"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="marital_status"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Marital Status
                  </label>
                  <select
                    name="marital_status"
                    id="marital_status"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.marital_status}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="unmarried">Unmarried</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="body_type"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Body Type
                  </label>
                  <input
                    type="text"
                    id="body_type"
                    name="body_type"
                    value={userDetails.body_type}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="race"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Race
                  </label>
                  <input
                    type="text"
                    id="race"
                    name="race"
                    value={userDetails.race}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="speaks"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Speaks
                  </label>
                  <input
                    type="text"
                    id="speaks"
                    name="speaks"
                    value={userDetails.speaks}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-y-4 md:gap-y-6 items-start content-start">
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="dob"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={userDetails.dob}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="age"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={userDetails.age}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="looking_for"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Looking for
                  </label>
                  <select
                    name="looking_for"
                    id="looking_for"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.looking_for}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="couple">Couple</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="relocate"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Relocate
                  </label>
                  <select
                    name="relocate"
                    id="relocate"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.relocate}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="intro_msg"
                  className="gradient w-full h-[53px] flex items-center justify-center xl:text-base text-white  font-normal leading-29 rounded-md mb-6"
                >
                  Introduction
                </label>
                <div className="p-[2px] gradient rounded-md">
                  <textarea
                    type="text"
                    id="intro_msg"
                    rows={4}
                    name="introduction"
                    value={userDetails.introduction}
                    onChange={handleChange}
                    className="bg-black-20 focus:outline-none focus-visible:none w-full border-gradient3 text-white font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 items-center flex justify-between"
                  ></textarea>
                </div>
              </div>
              <div>
                <label className="flex w-full min-h-[53px] bg-gray-900 py-[10px] px-4 text-lg justify-center items-center cursor-pointer rounded-md">
                  <span className="w-6 block mr-2">
                    <img src="images/gallery-icon.png" alt="gallery-icon" />
                  </span>
                  Edit Profile Image
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className="gradient !py-3 w-full max-w-xs mx-auto md:mx-0 md:ml-auto !text-lg xl:!text-25px capitalize !font-bold mt-10 !flex justify-center items-center text-white rounded-xl primary_btn"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
        <div className="audit-dating__block relative py-16">
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
  );
};

export default EditUserDetailsPage;
