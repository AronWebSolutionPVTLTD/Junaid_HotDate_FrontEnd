import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { FaFemale, FaMale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

const EventDetailPage = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [usertoken, setUsertoken] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const { userInfo, eventId } = useContext(Context);
  const [pendingUser, setPendingUser] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies] = useCookies(["cookie-name"]);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [updateList, setUpdateList] = useState(false);

  const getEvent = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/get_event/${eventId}`);
      setEventInfo(data);
      getPendingReq(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPendingReq = async (data) => {
    const pendingParticipants = data.participants?.filter(
      (participant) => participant.status === "Pending"
    );

    const pendingUserData = [];

    for (const el of pendingParticipants) {
      try {
        let id = el.user;
        const { data } = await axios.get(`${BASE_URL}/api/findone/${id}`);
        pendingUserData.push(data); // Add fetched data to the array
      } catch (error) {
        console.log(error);
      }
    }
    // Now you can set the entire array of pendingUserData using setPendingUserArray
    setPendingUser(pendingUserData);
  };

  useEffect(() => {
    getEvent();
    const token = cookies["token"];
    setUsertoken(token);
    // eslint-disable-next-line
  }, [updateList]);

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
      if (data) {
        if (eventInfo.type === "Private Place") {
          toast.success("Request sent");
        }
        if (eventInfo.type === "Public Place") {
          toast.success("Event Joined");
        }
        setIsJoined(true);
      } else {
        toast.error("Request Already sent");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  const hasUserJoined = eventInfo.participants?.some(
    (participant) =>
      participant.user === userInfo._id && participant.status === "Approved"
  );

  const hasUserPending = eventInfo.participants?.some(
    (participant) =>
      participant.user === userInfo._id && participant.status === "Pending"
  );
  const handlePendingUser = async (userId, status) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/events/${eventId}/${userId}`,
        { status },
        {
          headers: {
            token: usertoken,
            "Content-Type": "application/json",
          },
        }
      );

      if (data) {
        if (status === "Approved") {
          toast.success("User Added to Event");
        } else {
          toast.success("User Removed");
        }
        setUpdateList(!updateList);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              ) : eventInfo.type === "Private Event" ? (
                hasUserPending || isJoined ? (
                  <button
                    className="primary_btn !py-1 !text-sm !leading-[28px]"
                    onClick={handleJoin}
                  >
                    Request Sent
                  </button>
                ) : hasUserJoined ? (
                  <button
                    className="primary_btn !py-1 !text-sm !leading-[28px]"
                    disabled
                  >
                    Joined
                  </button>
                ) : (
                  <button
                    className="primary_btn !py-1 !text-sm !leading-[28px]"
                    onClick={handleJoin}
                  >
                    Send Join Request
                  </button>
                )
              ) : eventInfo.type === "Public Event" ? (
                hasUserJoined || isJoined ? (
                  <button
                    className="primary_btn !py-1 !text-sm !leading-[28px]"
                    disabled
                  >
                    Joined
                  </button>
                ) : (
                  <button
                    className="primary_btn !py-1 !text-sm !leading-[28px]"
                    onClick={handleJoin}
                  >
                    Join Now
                  </button>
                )
              ) : (
                ""
              )}
            </div>
            <div className="rounded-2xl bg-light-grey p-5">
              <div className="grid sm:flex flex-wrap items-start gap-1 sm:gap-5 justify-between">
                <div className="flex items-center text-sm font-body_font">
                  <span className="flex items-center text-lg mr-3">
                    <SlLocationPin />
                  </span>
                  {eventInfo.location}
                </div>
                <div className="text-sm">
                  <span className="inline-block mr-1 font-body_font">
                    EVENT DATE :
                  </span>{" "}
                  {formattedDate}
                </div>
                <div className="text-sm">
                  <span className="inline-block mr-1 font-body_font">
                    EVENT TIME :
                  </span>{" "}
                  {formattedTime}
                </div>
              </div>
              <div className="my-5">
                <p className="text-lg text-orange font-semibold">DESCRIPTION</p>
                <p className="text-lg max-w-xl font-body_font">
                  {eventInfo.description}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold pb-2 border-b border-white">
                  INFORMATION
                </p>
                <p className="text-base my-2">
                  <span className="font-semibold">{eventInfo.type} BY : </span>
                  <span className="font-body_font">
                    {eventInfo.userId?.username}
                  </span>
                </p>
                <p className="text-base my-2 flex items-center gap-5">
                  <span className="font-semibold">WELCOMING </span>
                  {eventInfo?.accepted_type?.map((el, i) => (
                    <span className="flex items-center gap-3" key={i}>
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
                  </span>
                  <span className="font-body_font">
                    {eventInfo.participants?.length - pendingUser.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <span
                className={`inline-block px-2 py-3 rounded-lg  cursor-pointer hover:bg-gray-100  ${
                  !toggleRequest ? "bg-orange" : "hover:text-orange"
                }`}
                aria-current="page"
                onClick={() => setToggleRequest(false)}
              >
                Photos & Videos
              </span>
            </li>
            {eventInfo.userId?._id === userInfo._id && (
              <li className="mr-2">
                <span
                  className={`inline-block px-2 py-3 rounded-lg  cursor-pointer hover:bg-gray-100  ${
                    toggleRequest ? "bg-orange" : "hover:text-orange"
                  }`}
                  onClick={() => setToggleRequest(true)}
                >
                  Pending Request ( {pendingUser.length} )
                </span>
              </li>
            )}
          </ul>
        </div>
        {/* Photos and Videos */}

        {toggleRequest ? (
          <div className="w-full grid gap-5 mt-5">
            {pendingUser.map((user, i) => (
              <div className="flex flex-wrap justify-between max-w-3xl" key={i}>
                <span className="w-[70%]">{user.username}</span>
                <div className="text-3xl justify-end flex gap-2 w-[30%]">
                  <span className="text-green-color">
                    <RiCheckboxCircleLine
                      onClick={() => handlePendingUser(user._id, "Approved")}
                    />
                  </span>
                  <span className="text-red-1">
                    <RiCloseCircleLine
                      onClick={() => handlePendingUser(user._id, "Rejected")}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
            {eventInfo.videos?.map((video, i) => (
              <div className="relative cursor-pointer rounded-lg" key={i}>
                <video
                  className="w-full object-cover block rounded-lg aspect-video"
                  controls
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
            {eventInfo.images?.map((el, i) => (
              <div className="relative cursor-pointer rounded-lg" key={i}>
                <img
                  src={el}
                  className="w-full object-cover block rounded-lg aspect-video"
                  alt="event-mod-2.png"
                />
              </div>
            ))}
          </div>
        )}

        {/* {!toggleRequest && (
    
        )}
     
        {toggleRequest && (
       
        )} */}
      </div>
    </div>
  );
};
export default EventDetailPage;
