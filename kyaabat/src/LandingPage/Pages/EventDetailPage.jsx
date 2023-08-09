import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { LuEdit2 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
const EventDetailPage = () => {
  const [eventInfo, setEventInfo] = useState({});
  const { eventId } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/get_event/${eventId}`);
    setEventInfo(data);
  };

  useEffect(() => {
    getEvent();
  }, []);
  console.log(eventInfo);
  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      <div>
        <h3 className="px-5 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold">
          Event Details
        </h3>
      </div>
      <div className="flex">
        <div className="px-5 py-5 w-[50%] ">
          <img
            src={eventInfo.images}
            alt=""
            className=" w-[550px] h-[370px] rounded-lg border-[3px]"
          />
        </div>
        <div className="flex flex-col w-[50%] px-5 py-5">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-semibold">{eventInfo.eventName}</h1>
            <LuEdit2 />
          </div>
          <div className="bg-[#2A2D37] h-full rounded-lg mt-[20px]">
            <div className="flex gap-2 items-center ">
              <SlLocationPin />
              <p>{eventInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
