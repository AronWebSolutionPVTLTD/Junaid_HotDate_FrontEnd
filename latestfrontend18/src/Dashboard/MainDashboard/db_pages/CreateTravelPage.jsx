import React, { useState, useContext } from "react";
import TravelPage from "./TravelPage";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CreateTravelPage = () => {
  const { userInfo } = useContext(Context);
  const navigate = useNavigate();
  const [SelectedImage, setSelectedImage] = useState(null);
  const [travel, setTravel] = useState({
    age_1: "",
    age_2: "",
    loc_from: "",
    loc_to: "",
    start_date: "",
    end_date: "",
    interests: "",
    description: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setTravel({ ...travel, [name]: value });
  };

  const handleImageChange = (e) => {
    setSelectedImage(Array.from(e.target.files));
  };

  const handleTravelSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    if (SelectedImage) {
      SelectedImage.forEach((image) => formdata.append("image", image));
    }
    formdata.append("person_1_age", travel.age_1);
    formdata.append("person_2_age", travel.age_2);
    formdata.append("locationfrom", travel.loc_from);
    formdata.append("locationto", travel.loc_to);
    formdata.append("startDate", travel.start_date);
    formdata.append("endDate", travel.end_date);
    formdata.append("interested", travel.interests);
    formdata.append("description", travel.description);
    formdata.append("userId", userInfo._id);

    try {
      const data = await axios.post(`${BASE_URL}/api/createtravel`, formdata);

      if (!data) {
        toast.error("🦄 Failed to Create Travel!", {
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
        toast.success("🦄Travel Created Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTravel({
          age_1: "",
          age_2: "",
          loc_from: "",
          loc_to: "",

          start_date: "",
          end_date: "",
          interests: "",
          description: "",
        });
        setSelectedImage(null);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(travel);
  return (
    <div className="bg-white rounded-40px">
      <div className="text-center p-5 py-10 text-black">
        <h3 className="text-2xl sm:text-4xl mb-2">Create Your Travel Page</h3>
        <p className="text-lg">Let’s Create a Notorious Travel</p>
      </div>
      <div className="flex flex-wrap bg-black rounded-40px ">
        <div className="w-full md:w-3/5 xl:w-full 2xl:w-3/5 ">
          <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-5 lg:pl-10">
            <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">
              Destination Details
            </h2>

            <form
              className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
              autoComplete="off"
            >
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="age_1"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  Person-1 Age
                </label>
                <input
                  type="text"
                  id="age_1"
                  name="age_1"
                  value={travel.age_1}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  // placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="age_2"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  Person-2 Age
                </label>
                <input
                  type="text"
                  id="age_2"
                  name="age_2"
                  value={travel.age_2}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  // placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="loc_from"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  Traveling From
                </label>
                <input
                  type="text"
                  id="loc_from"
                  name="loc_from"
                  value={travel.loc_from}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="loc_to"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  Traveling To
                </label>
                <input
                  type="text"
                  id="loc_to"
                  name="loc_to"
                  value={travel.loc_to}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  // placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="start_date"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={travel.start_date}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  // placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="end_date"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={travel.end_date}
                  onChange={handleChange}
                  autoComplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  // placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="interests"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Interests
                  </label>
                  <select
                    name="interests"
                    id="interests"
                    value={travel.interests}
                    onChange={handleChange}
                    className="bg-black border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  >
                    <option value="m">M</option>
                    <option value="f">F</option>
                    <option value="mm">MM</option>
                    <option value="ff">FF</option>
                    <option value="mf">MF</option>
                  </select>
                </div>
                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
              </div>
              <div className="flex flex-col gap-30">
                <label
                  htmlFor="Description"
                  className="gradient w-full h-[49px] flex items-center justify-center text-lg text-white  font-normal leading-29 rounded-md mb-6"
                >
                  Description
                </label>
                <div className="p-[2px] gradient rounded-md">
                  <textarea
                    type="text"
                    id="Description"
                    rows={3}
                    name="description"
                    value={travel.description}
                    onChange={handleChange}
                    className="bg-black focus:outline-none focus-visible:none w-full border-gradient3 text-gray font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 text-center md:text-start items-center flex justify-between"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md">
                  <span className="w-6 block mr-2">
                    <img src="images/gallery-icon.png" alt="gallery-icon" />
                  </span>
                  Upload Club Images
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {/* <p>{formErrors.introduction}</p> */}
              <button
                className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                onClick={handleTravelSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-2/5 xl:w-full 2xl:w-2/5  md:p-5">
          <img
            src="images/lovely-couples.png"
            alt="Create-travel"
            className="block h-full w-full rounded-40px md:p-0 p-5 rounded-b-40px  object-cover object-center aspect-square md:aspect-auto xl:aspect-square 2xl:md:aspect-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTravelPage;
