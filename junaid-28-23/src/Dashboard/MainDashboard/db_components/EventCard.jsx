import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./eventCard.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../../Context/context";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import {FiUsers} from 'react-icons/fi'
const EventCard = ({ event }) => {
  const [username, setUserName] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [usertoken, setUsertoken] = useState("");
  const { setEventId, userInfo } = useContext(Context);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  useEffect(() => {
    getUser();
    const token = cookies["token"];
    setUsertoken(token);
  }, []);
  const getUser = async () => {
    const id = event.userId || event._id;
    const { data } = await axios.get(`${BASE_URL}/api/findOne/${event.userId}`,{
      headers:{
        Token:usertoken
      }
    });
    setUserName(data.username);
  };
  const handleEvent = (id) => {
    setEventId(id);
    navigate("/event-detail");
  };
  const handleJoinEvent = async (id) => {
    let eventId = id;
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
        if (event.type == "Private Place") {
          toast.success("Request sent");
        }
        if (event.type == "Public Place") {
          toast.success("Event Joined");
        }
        setIsJoined(true);
      }
    } catch (error) {
      toast.error("Request already sent");
      console.log(error);
    }
  };
console.log(event.participants.length)
  const hasUserJoined = event.participants?.some(
    (participant) =>
      participant.user === userInfo._id && participant.status === "Approved"
  );
  const hasUserPending = event.participants?.some(
    (participant) =>
      participant.user === userInfo._id && participant.status === "Pending"
  );
  return (
    <div className="w-full cursor-pointer">
      <img
        src={event?.mainImage}
        alt="event-img"
        className="w-full object-cover aspect-11/10 rounded-t-2xl"
         onClick={() => handleEvent(event._id)}
      />
      <div className="bg-light-grey p-4 rounded-b-2xl">
        <div className="flex flex-wrap justify-between gap-x-3 gap-y-2">
          <h3 className="text-2xl font-semibold">{event?.eventName}</h3>
          <div className="date_picker relative ">
            <img
              src="images/calendar-icon.png"
              alt="calendar-icon"
              className="absolute top-1/2 left-0 transform -translate-y-1/2"
            />
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={new Date(event?.date)}
              className="font-body_font"
            />
          </div>
        </div>
        <p className="text-md my-3">
          <span className="font-body_font">{event?.type} by </span>
          <span className="text-yellow-2 font-body_font">{username}</span>
        </p>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 font-light text-md font-body_font">
            {/* {event.accepted_type(includes) } */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 18 19"
              fill="none"
            >
              <mask
                id="mask0_47_207"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="15"
                height="16"
              >
                <path d="M0 0.5H18V18.5H0V0.5Z" fill="white" />
              </mask>
              <g mask="url(#mask0_47_207)">
                <path
                  d="M9 17.9727C6.89063 14.8086 3.19922 10.5195 3.19922 6.82812C3.19922 3.62957 5.80145 1.02734 9 1.02734C12.1986 1.02734 14.8008 3.62957 14.8008 6.82812C14.8008 10.5195 11.1094 14.8086 9 17.9727Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 9.46484C7.54618 9.46484 6.36328 8.28194 6.36328 6.82812C6.36328 5.37431 7.54618 4.19141 9 4.19141C10.4538 4.19141 11.6367 5.37431 11.6367 6.82812C11.6367 8.28194 10.4538 9.46484 9 9.46484Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            {event?.location}
          </p>
          <div className="flex items-center gap-1">
            {event?.accepted_type.includes("m") ? (
              <img src="images/Male.png" alt="male-user" className="h-[26px]"/>
            ) : (
              ""
            )}
            {event?.accepted_type.includes("f") ? (
              <img src="images/Female.png" alt="woman" className="h-[26px]" />
            ) : (
              ""
            )}
            {event?.accepted_type.includes("mf") ? (
              <img src="images/malefemale.png" alt="couple" className="h-[22px]"  />
            ) : (
              ""
            )}
                {event?.accepted_type.includes("mm") ? (
              <img src="images/malemale.png" alt="couple"  className="h-[22px]" />
            ) : (
              ""
            )}
                 {event?.accepted_type.includes("ff") ? (
              <img src="images/femaleFemale.png" alt="couple"  className="h-[22px]"  />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          {/* {userInfo._id !== event.userId ? (
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
                onClick={() => handleJoinEvent(event._id)}
              >
                Join Now
              </button>
            )
          ) : (
            ""
          )} */}
          {userInfo._id !== event.userId ? (
            event.type == "Public Event" ? (
              hasUserJoined || isJoined ? (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  // onClick={() => handleJoinEvent(event._id)}
                  disabled
                >
                  Joined
                </button>
              ) : (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  onClick={() => handleJoinEvent(event._id)}
                >
                  Join Now
                </button>
              )
            ) : event.type == "Private Event" ? (
              hasUserPending || isJoined ? (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  onClick={() => handleJoinEvent(event._id)}
                >
                  Request Sent
                </button>
              ) : hasUserJoined ? (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  // onClick={() => handleJoinEvent(event._id)}
                  disabled
                >
                  Joined
                </button>
              ) : (
                <button
                  className="primary_btn !py-1 !text-sm !leading-[28px]"
                  onClick={() => handleJoinEvent(event._id)}
                >
                  Send Join Request
                </button>
              )
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <button
            className="primary_btn !py-1 !text-sm !leading-[28px]"
            onClick={() => handleEvent(event._id)}
          >
            View Details
          </button>
          <div className="flex items-center gap-3 text-lg">
            <FiUsers/><span>{event.participants.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;