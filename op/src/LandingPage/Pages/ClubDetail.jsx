import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

import {

  RiDeleteBin6Line,
} from "react-icons/ri";
import { getPreciseDistance } from "geolib";
const ClubDetail = () => {
  const [clubData, setClubData] = useState({});
  const { clubId } = useContext(Context);
  const { userInfo, eventId, savedCred, setSavedCred } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies] = useCookies(["cookie-name"]);
  const [toggleRequest, setToggleRequest] = useState(false);
const [popup,setPopup]=useState(false)
  const navigate = useNavigate();

  const calculatePreciseDistance = (fLong, sLong, fLat, sLat) => {
    var pdis = getPreciseDistance(
      { latitude: Number(fLat), longitude: Number(fLong) },
      { latitude: Number(sLat), longitude: Number(sLong) }
    );
    const factor = 0.621371;
    return ((pdis / 100) * factor).toFixed(2);
  };

  console.log(userInfo, "user")

  const getClub = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/getClub/${clubId}`);
    setClubData(data);
  };
  useEffect(() => {
    getClub();
  }, []);
  const handleSave = async () => {
      setPopup(true);
      return;
    }

  const deleteclub = (e) => {
    axios.delete(`${BASE_URL}/api/delete_club/${e}`).then((res) => {
      console.log(res);
      if (res.data === "Club deleted successfully") {
        toast.success("Club deleted successfully");
        navigate("/club-page");
      }
    });
  };

  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
       <div
        className={`fixed top-0 left-0 w-full h-screen items-center justify-center z-[9999] bg-black/70 ${
          popup ? "flex" : "hidden"
        } `}
      >
        <div className="w-full max-w-md p-4 rounded-md shadow-lg bg-zinc-600 color-white grid justify-items-center">
          <h3 className="text-2xl text-center font-semibold">
         Write a review
          </h3>
          <p className="mt-2">Rate this bussiness</p>
<div class="flex items-center space-x-1 mt-4 gap-2">
    <svg class="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-6 h-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

<textarea id="message" rows="4" class="mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

          <span
            className="primary_btn gradient mt-5 px-8 bg-gradient-to-r from-[#F79220] to-[#F94A2B] rounded-lg py-2 cursor-pointer"
            onClick={() => setPopup(false)}
          >
            Ok
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-7xl">
        <h3 className="clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold mb-5 pt-5">
          Club Details
        </h3>
        <div className="flex flex-wrap gap-4 justify-end">

          <span onClick={handleSave} className="primary_btn cursor-pointer !text-sm !py-2">
            Write a review
          </span>
          <span className="primary_btn cursor-pointer !text-sm !py-2">
            Messages
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch max-w-7xl">
        <div className="w-full md:w-[45%] p-5 bg-light-grey rounded-2xl">
          <img
            src={clubData?.mainImage}
            alt=""
            className="w-full aspect-4/3 rounded-2xl object-cover border-[3px] border-white"
          />
        </div>
        <div className="w-full md:w-[55%] md:pl-10 mt-5 md:mt-0">
          <div className="text-white h-full bg-light-grey rounded-2xl ">
            <div className="p-5">
              <div className="flex items-center justify-between gap-5 mb-4">
                <h3 className="text-2xl sm:text-4xl font-semibold">
                  {clubData?.clubname}
                </h3>


                {clubData?.ownerId?._id === userInfo._id &&

                  <div className="flex gap-2">
                    <Link
                      className="inline-flex items-center text-2xl"
                      to={"/editclubpage"}
                    >
                      <MdOutlineModeEditOutline />
                    </Link>
                    <div
                      className="inline-flex items-center text-2xl"

                      onClick={() => deleteclub(clubData._id)}
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                }

              </div>

              <div className="flex items-center text-sm font-body_font my-4">
                <span className="flex items-center text-lg mr-3">
                  <SlLocationPin />
                </span>

                {clubData?.location?.display_name}
              </div>

              <div className="my-4">
                <p className="text-lg text-orange font-semibold">Distance</p>
                {calculatePreciseDistance(
                  clubData?.location?.lon,
                  savedCred.long,
                  clubData?.location?.lat,
                  savedCred.lat
                ).slice(0, 3)}  miles
              </div>

              <div>
                <p className="text-lg font-semibold pb-2 border-b border-white">
                  INFORMATION
                </p>

                <p className="text-base my-2">

                  {clubData?.clubtype === "Public Place" ? (
                    <span className="text-red-500">{clubData?.clubtype} </span>
                  ) : (
                    <span className="text-green-500">{clubData?.clubtype} </span>
                  )}
                  <span className="font-body_font">
                    by : {clubData.ownerId?.username}

                  </span>
                </p>
                <div className="text-base my-2">
                  <span >Introduction</span> : <span className="font-body_font">
                    {clubData?.introduction}
                  </span>
                </div>

                <div className="text-base my-2">
                  <span >Contact</span> : <span className="font-body_font">
                    {clubData?.contact}
                  </span>
                </div>

                <div className="text-base my-2">
                  <span >Email</span> : <span className="font-body_font">
                    {clubData?.email}
                  </span>
                </div>
                <div className="text-base my-2">
                  <span >Website</span> : <span className="font-body_font">
                    {clubData?.website}
                  </span>
                </div>



              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <span
                className={`inline-block px-2 py-3 rounded-lg  cursor-pointer hover:bg-gray-100  ${!toggleRequest ? "bg-orange" : "hover:text-orange"
                  }`}
                aria-current="page"
                onClick={() =>
                  navigate("/club-detail-media", {
                    state: {
                      photos: clubData?.image,
                      vidoes: clubData?.video,
                    },
                  })
                }
              >
                Photos & Videos
              </span>
            </li>

          </ul>
        </div>
        <div className="my-5 w-full p-5 bg-light-grey rounded-lg">
          <p className="text-lg text-orange font-semibold mb-3">DESCRIPTION</p>
          <p className="text-base font-body_font">
            {clubData?.description}
          </p>
        </div>
        <div className="p-1">
        <p className="text-lg text-orange font-semibold mb-3">COMMENTS</p>
<article>
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <div class="space-y-1 font-medium dark:text-white">
            <p>Ritul</p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        {/* <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3> */}
    </div>
    {/* <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer> */}
    <p class="mb-2 text-gray-500 dark:text-gray-400">This is a dummycomment.This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
   
</article>
<article>
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <div class="space-y-1 font-medium dark:text-white">
            <p>Shivam </p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        {/* <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3> */}
    </div>
    {/* <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer> */}
    <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    {/* <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
      
    </aside> */}
</article>
</div>
</div>

    </div>
  );
};
export default ClubDetail;
