import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { VscPlayCircle } from "react-icons/vsc";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { FaFemale, FaMale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";

const EventDetailPage = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [usertoken, setUsertoken] = useState("");
  const { userInfo, eventId } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const navigate = useNavigate();
  const getEvent = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/get_event/${eventId}`);
      console.log(data);
      setEventInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
    const token = cookies["token"];
    setUsertoken(token);
  }, []);
  console.log(eventInfo);

  let formattedTime;
  const inputDateString = eventInfo.date;
  const parsedDate = new Date(inputDateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = parsedDate.getDate();
  const monthIndex = parsedDate.getMonth();
  const year = parsedDate.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day} ${year}`;

  if (inputDateString) {
    const time = inputDateString.split("T")[1];
    const [hours, minutes] = time.split(":");
    const date = new Date(0, 0, 0, hours, minutes);
    formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const handleJoin = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/events/${eventId}/participants`,
        {},
        {
          headers: {
            token: usertoken,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      if (data) {
        toast.success("Request sent");
      } else {
        toast.error("Request Already sent");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  console.log(eventInfo);
  console.log(userInfo);
  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      <h3 className="clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold mb-5 pt-5">
        Event Details
      </h3>
      <div className="flex flex-wrap items-center max-w-7xl">
        <div className="w-full md:w-[45%]">
          <img
            src={eventInfo.mainImage}
            alt=""
            className="w-full aspect-4/3 rounded-2xl object-cover border-[3px] border-white"
          />
        </div>
        <div className="w-full md:w-[55%] md:pl-10 mt-5 md:mt-0">
          <div className="text-white">
            <div className="flex items-center justify-between gap-5 mb-4">
              <h3 className="text-2xl sm:text-5xl font-semibold">
                {eventInfo.eventName}
              </h3>
              {eventInfo.userId?._id === userInfo._id ? (
                <Link
                  className="inline-flex items-center text-2xl"
                  to={"/event_edit"}
                >
                  <MdOutlineModeEditOutline />
                </Link>
              ) : (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  onClick={handleJoin}
                >
                  Join Now
                </button>
              )}
            </div>
            <div className="rounded-2xl bg-light-grey p-5">
              <div className="grid sm:flex flex-wrap items-start gap-1 sm:gap-5 justify-between">
                <div className="flex items-center text-sm">
                  <span className="flex items-center text-lg mr-3">
                    <SlLocationPin />
                  </span>
                  {eventInfo.location}
                </div>
                <div className="text-sm">
                  <strong className="inline-block mr-1">EVENT DATE :</strong>{" "}
                  {formattedDate}
                </div>
                <div className="text-sm">
                  <strong className="inline-block mr-1">EVENT TIME :</strong>{" "}
                  {formattedTime}
                </div>
              </div>
              <div className="my-5">
                <p className="text-lg text-orange font-semibold">DESCRIPTION</p>
                <p className="text-lg max-w-xl">{eventInfo.description}</p>
              </div>
              <div>
                <p className="text-lg font-semibold pb-2 border-b border-white">
                  INFORMATION
                </p>
                <p className="text-base my-2">
                  <span className="font-semibold">{eventInfo.type} BY : </span>
                  {eventInfo.userId?.username}
                </p>
                <p className="text-base my-2 flex items-center gap-5">
                  <span className="font-semibold">WELCOMING </span>
                  {eventInfo?.accepted_type?.map((el) => (
                    <span className="flex items-center gap-3">
                      {/* <img src="images/group-1.png" alt="group-1" /> */}
                      {/* <img src="images/group-2.png" alt="group-1" /> */}
                      {el === "m" && <FaMale />}

                      {el === "f" && <FaFemale />}
                      {el === "mm" && (
                        <>
                          <FaMale />
                          <FaMale />
                        </>
                      )}
                      {el === "ff" && (
                        <>
                          <FaFemale />
                          <FaFemale />
                        </>
                      )}
                      {el === "mf" && (
                        <>
                          <BiMaleFemale />
                        </>
                      )}
                    </span>
                  ))}
                </p>
                <p className="text-base">
                  <span className="font-semibold">
                    Total Number of Participants :
                  </span>{" "}
                  {eventInfo.participants?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
          {eventInfo.videos?.map((video) => (
            <div className="relative cursor-pointer rounded-lg">
              <video
                className="w-full object-cover block rounded-lg aspect-video"
                controls
              >
                <source src={video} type="video/mp4" />
              </video>

              {/* <span className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-xl sm:text-5xl">
              <VscPlayCircle />
            </span> */}
            </div>
          ))}
          {eventInfo.images?.map((el) => (
            <div className="relative cursor-pointer rounded-lg">
              <img
                src={el}
                className="w-full object-cover block rounded-lg aspect-video"
                alt="event-mod-2.png"
              />
            </div>
          ))}

          {/* <div className="relative cursor-pointer rounded-lg">
            <img
              src="images/event-mod-2.png"
              className="w-full object-cover block rounded-lg aspect-video"
              alt="event-mod-2.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default EventDetailPage;
