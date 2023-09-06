import React, { useContext, useEffect, useState } from "react";
import "../db_components/form.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { Context } from "../../../Context/context";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
const EditEventPage = () => {
  const [event, setEvent] = useState({
    event_name: "",
    Date: "",
    Location: "",
    Description: "",
    event_type: "",
  });
  const [types, setTypes] = useState();
  const [selectedImage, setselectedImage] = useState(null);
  const [selectedVideo, setselectedVideo] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();
  const { userInfo, eventId } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies] = useCookies(["cookie-name"]);
  const options = ["m", , "f", "mf", "mm", "ff"];

  const getEventInfo = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/get_event/${eventId}`);
      setEvent({
        event_name: data.eventName,
        Date: data.date,
        Location: data.location,
        Description: data.description,
        event_type: data.type,
      });
      setSelectedOption(data.accepted_type);
      setTypes(data.accepted_type);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = cookies["token"];
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setUserToken(token);
      } else {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
    getEventInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
    console.log(event);
  };

  const handleImageChange = (e) => {
    setselectedImage(Array.from(e.target.files));
  };

  const handleVideoChange = (e) => {
    setselectedVideo(Array.from(e.target.files));
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (selectedImage) {
      selectedImage.forEach((image) => formData.append("images", image));
    }
    if (selectedVideo) {
      selectedVideo.forEach((video) => formData.append("videos", video));
    }

    formData.append("eventName", event.event_name);
    formData.append("date", event.Date);
    formData.append("location", event.Location);
    formData.append("description", event.Description);

    formData.append("type", event.event_type);
    // formData.append("userId", userInfo._id);
    formData.append("accepted_type", JSON.stringify(types));

    const headers = {
      "Content-Type": "multipart/form-data",
      token: userToken,
    };
    try {
      const data = await axios.put(
        `${BASE_URL}/api/update_event/${eventId}`,
        formData,
        {
          headers: headers,
        }
      );
      if (!data) {
        toast.error("🦄 Failed to Edit Event!", {
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
        toast.success("Event Edited Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setEvent({
          event_name: "",
          Date: "",
          Location: "",
          Description: "",
          event_type: "",
        });
        setselectedImage(null);
        setselectedVideo(null);
        setSelectedOption([]);
        navigate("/event-detail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (data) => {
    let data2 = [];
    console.log(data);
    data2.push(...data);
    // data.map((option) => data2.push(option.value));
    // console.log(data2, data);
    setSelectedOption(data);
    setTypes(data);
  };

  return (
    <div className="bg-white rounded-40px">
      <div className="text-center p-5 py-10 text-black">
        <h3 className="text-2xl sm:text-4xl mb-2">
          Event/Hot date registration
        </h3>
        <p className="text-lg">Edit your Event / Hot Date</p>
      </div>
      <div className="flex flex-wrap bg-black rounded-40px ">
        <div className="w-full md:w-3/5 xl:w-full 2xl:w-3/5 ">
          <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
            <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">
              Find Your Date
            </h2>

            <form
              className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
              autocomplete="off"
            >
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="event_name"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                lg:text-start"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="event_name"
                  name="event_name"
                  onChange={(e) => handleChange(e)}
                  value={event.event_name}
                  autocomplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  required
                />
              </div>
              {/* <p>{formErrors.email}</p> */}
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="Date"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                lg:text-start"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  id="Date"
                  name="Date"
                  onChange={(e) => handleChange(e)}
                  value={event.Date}
                  autocomplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-wrap rounded-md input_field_2">
                <label
                  htmlFor="Location"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                lg:text-start"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  onChange={(e) => handleChange(e)}
                  value={event.Location}
                  autocomplete="off"
                  className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  required
                />
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
                    name="Description"
                    onChange={(e) => handleChange(e)}
                    value={event.Description}
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
                  Upload Event Images
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleImageChange(e)}
                  />
                </label>
                <label className="flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md">
                  <span className="w-6 block mr-2">
                    <img
                      src="images/video-upload-icon.png"
                      alt="gallery-icon"
                    />
                  </span>
                  Upload Event Videos
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleVideoChange(e)}
                  />
                </label>
              </div>
              <p className="text-lg">TYPE *</p>
              <div className="radio_btn_wrapper">
                <div className="radio_field">
                  <input
                    type="radio"
                    id="private_place"
                    className="hidden"
                    name="event_type"
                    value="Private Event"
                    onChange={handleChange}
                    checked={event.event_type === "Private Event"}
                  />
                  <label htmlFor="private_place">
                    <span className="radio_circle"></span>
                    <span className="radio_text">Private Event</span>
                  </label>
                </div>
                <div className="radio_field">
                  <input
                    type="radio"
                    id="public_place"
                    className="hidden"
                    name="event_type"
                    value="Public Event"
                    onChange={handleChange}
                    checked={event.event_type === "Public Event"}
                  />
                  <label htmlFor="public_place">
                    <span className="radio_circle"></span>
                    <span className="radio_text">Public Event</span>
                  </label>
                </div>
                <div className="radio_field">
                  <input
                    type="radio"
                    id="virtual_date"
                    className="hidden"
                    name="event_type"
                    value="Virtual Event"
                    onChange={handleChange}
                    checked={event.event_type === "Virtual Event"}
                  />
                  <label htmlFor="virtual_date">
                    <span className="radio_circle"></span>
                    <span className="radio_text">Virtual Event</span>
                  </label>
                </div>
              </div>

              {/* <p>{formErrors.introduction}</p> */}
              <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={selectedOption} // Preselected value to persist in dropdown
                onSelect={handleSelect} // Function will trigger on select event
                onRemove={handleSelect} // Function will trigger on remove event
                // displayValue="label" // Property name to display in the dropdown options
                isObject={false}
              />
              <button
                className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                onClick={handleUpdateEvent}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-2/5 xl:w-full 2xl:w-2/5">
          <img
            src="images/create-event-page.png"
            alt="create-event"
            className="block h-full w-full rounded-b-40px md:rounded-b-none md:rounded-br-40px md:rounded-r-40px xl:rounded-b-40px xl:rounded-tr-none 2xl:rounded-l-none 2xl:rounded-r-40px object-cover aspect-video md:aspect-auto xl:aspect-video 2xl:md:aspect-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default EditEventPage;
