import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { FaFemale, FaMale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import {
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { getPreciseDistance } from "geolib";
const EventDetailPage = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [usertoken, setUsertoken] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const { userInfo, eventId, savedCred, setSavedCred } = useContext(Context);
  const [pendingUser, setPendingUser] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies] = useCookies(["cookie-name"]);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const navigate = useNavigate();
  const data = useParams()
  const eventid = data.id
  const calculatePreciseDistance = (fLong, sLong, fLat, sLat) => {
    var pdis = getPreciseDistance(
      { latitude: Number(fLat), longitude: Number(fLong) },
      { latitude: Number(sLat), longitude: Number(sLong) }
    );
    const factor = 0.621371;
    return ((pdis / 100) * factor).toFixed(2);
  };

  const [cancleRequest, setCancleRequest] = useState(false);
 
  console.log(eventId)
  const getEvent = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/get_event/${eventid}`);
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
    console.log(" Hitting it now");
    getEvent();
    const token = cookies["token"];
    setUsertoken(token);
    // eslint-disable-next-line
  }, [updateList, cancleRequest]);

  let formattedTime;
  let formattedEndTime;
  const EndDateString = eventInfo.EndDate;
  const inputDateString = eventInfo.Startdate;
  const parsedDate = new Date(inputDateString);
  const parseEndDate = new Date(EndDateString);
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
  const handleCancle = () => {
    const requestData = {
      eventId: eventId,
      userId: userInfo._id,
    };
    axios.post(`${BASE_URL}/api/delPart/`, requestData).then((res) => {
      setCancleRequest(true);
      setIsJoined(false);
set
    });
  };
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

  const endday = parseEndDate.getDate();
  const endmonthIndex = parseEndDate.getMonth();
  const endyear = parseEndDate.getFullYear();
  const endformattedDate = `${monthNames[endmonthIndex]} ${endday} ${endyear}`;
  if (EndDateString) {
    const time = EndDateString.split("T")[1];
    const [hours, minutes] = time.split(":");
    const date = new Date(0, 0, 0, hours, minutes);
    formattedEndTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  console.log(endformattedDate);
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

  const deleteEvent = (e) => {
    axios.delete(`${BASE_URL}/api/delete_event/${e}`).then((res) => {
      console.log(res);
      if (res.data === "Event is deleted successfully") {
        toast.success("Event deleted successfully");
        navigate("/event-page");
      }
    });
  };
  // const locationData=JSON.parse(eventInfo?.location)
  console.log(eventInfo, "l");

  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      <div className="flex justify-between items-center max-w-7xl">
        <h3 className="clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold mb-5 pt-5">
          Event Details
        </h3>
        <div className="flex flex-wrap gap-4 justify-end">
          <span className="primary_btn cursor-pointer !text-sm !py-2" onClick={()=>navigate('/event-participants')}>
            Guest list
          </span>
          <span className="primary_btn cursor-pointer !text-sm !py-2">
            Message
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch max-w-7xl">
        <div className="w-full md:w-[45%] p-5 bg-light-grey rounded-2xl">
          <img
            src={eventInfo.mainImage}
            alt=""
            className="w-full aspect-4/3 rounded-2xl object-cover border-[3px] border-white"
          />
        </div>
        <div className="w-full md:w-[55%] md:pl-10 mt-5 md:mt-0">
          <div className="text-white h-full bg-light-grey rounded-2xl ">
            <div className="p-5">
              <div className="flex items-center justify-between gap-5 mb-4">
                <h3 className="text-2xl sm:text-4xl font-semibold">
                  {eventInfo.eventName}
                </h3>
                {eventInfo.userId?._id === userInfo._id ? (
                  <div className="flex gap-2">
                    <Link
                      className="inline-flex items-center text-2xl"
                      to={`/event_edit/${eventInfo._id}`}
                    >
                      <MdOutlineModeEditOutline />
                    </Link>
                    <div
                      className="inline-flex items-center text-2xl"
                      onClick={() => deleteEvent(eventInfo._id)}
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                ) : eventInfo.type === "Private Event" || eventInfo.type === "Public Event"  ? (
                  hasUserPending || isJoined ? (
                    <div className="flex gap-2">
                      <button
                        className="primary_btn !py-1 !text-sm !leading-[28px]"
                        disabled
                      >
                        Request Sent
                      </button>
                      <button
                        className="primary_btn !py-1 !text-sm !leading-[28px]"
                        onClick={handleCancle}
                      >
                        Cancle Request
                      </button>
                    </div>
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
                  
                ) : (
                  ""
                )}
              </div>
              <div className="grid sm:flex flex-wrap items-start gap-1 sm:gap-1 justify-between">
                <div className="text-sm">
                  <span className="inline-block mr-1 font-body_font">
                    Start Date :
                  </span>{" "}
                  {formattedDate} {formattedTime}
                </div>
                <div className="text-sm">
                  <span className="inline-block mr-1 font-body_font">
                    End Date :
                  </span>
                  {endformattedDate} {formattedEndTime}
                </div>
              </div>
              <div className="flex items-center text-sm font-body_font my-4">
                <span className="flex items-center text-lg mr-3">
                  <SlLocationPin />
                </span>

                {eventInfo?.location?.display_name}
              </div>

              <div className="my-4">
                <p className="text-lg text-orange font-semibold">Distance</p>
                {calculatePreciseDistance(
                  eventInfo?.location?.lon,
                  savedCred.long,
                  eventInfo?.location?.lat,
                  savedCred.lat
                ).slice(0, 3)}
                miles
              </div>

              <div>
                <p className="text-lg font-semibold pb-2 border-b border-white">
                  INFORMATION
                </p>
                <p className="text-base my-2">
                  {/* <span className="font-semibold">{eventInfo.type} BY : </span> */}
                  {eventInfo?.type === "Public Event" ? (
                    <span className="text-red-500">{eventInfo?.type} </span>
                  ) : (
                    <span className="text-green-500">{eventInfo?.type} </span>
                  )}
                  <span className="font-body_font">
                    by : {eventInfo.userId?.username}
                  </span>
                </p>
                <p className="text-base my-2 flex items-center gap-2">
                  <span className="font-semibold">WELCOMING </span>
                  <span className="flex items-center gap-1">
                    {eventInfo?.accepted_type?.map((el, i) => (
                      <>
                        {el === "M" && (
                          <img
                            src="/images/Male.png"
                            alt="male-user"
                            className="h-[26px]"
                          />
                        )}
                        {el === "F" && (
                          <img
                            src="/images/Female.png"
                            alt="woman"
                            className="h-[26px]"
                          />
                        )}
                        {el === "MM" && (
                          <img
                            src="/images/malemale.png"
                            alt="couple"
                            className="h-[22px]"
                          />
                        )}
                        {el === "FF" && (
                          <img
                            src="/images/femaleFemale.png"
                            alt="couple"
                            className="h-[22px]"
                          />
                        )}
                        {el === "MF" && (
                          <img
                            src="/images/malefemale.png"
                            alt="couple"
                            className="h-[22px]"
                          />
                        )}
                        {el === "T" && (
                          <img
                            src="/images/Trans.png"
                            alt="trans"
                            className="h-[22px]"
                          />
                        )}
                      </>
                    ))}
                  </span>
                </p>
                <p className="text-base">
                  <span className="font-semibold">
                    Total Number of Participants :{" "}
                    <span className="font-body_font font-normal">
                      {eventInfo.participants?.length - pendingUser.length}
                    </span>
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
                onClick={() =>
                  navigate("/event-detail-media", {
                    state: {
                      photos: eventInfo.images,
                      vidoes: eventInfo.videos,
                    },
                  })
                }
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
        <div className="my-5 w-full p-5 bg-light-grey rounded-lg">
          <p className="text-lg text-orange font-semibold mb-3">DESCRIPTION</p>
          <p className="text-base font-body_font" dangerouslySetInnerHTML={{ __html: eventInfo?.description?.replace(/\n/g, '<br />') }}></p>


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
          <div></div>
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
