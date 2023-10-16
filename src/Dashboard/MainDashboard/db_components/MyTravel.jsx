import React, { useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useContext } from "react";
import { GrStar } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { TiPlus } from "react-icons/ti";


export default function MyTravel(){
  const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [travel,setTravel]=useState([])
    const { userInfo,travelid,setTravelid} = useContext(Context);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:5000/api/search_travel?q=").then((res)=>{
            const data = res.data
            const filterData = data.filter((data)=>data.userId===userInfo._id)
            setTravel(filterData)
        })
    },[])

    const formatDate = (dateString) => {
        const originalTimestamp = dateString;
        const date = new Date(originalTimestamp);
        const formattedDate = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
        
        return formattedDate;
      };

     


const deleteTravel=(id)=>{
axios.delete(`${BASE_URL}/api/delete_travel/${id}`).then((res)=>{
  if(res.data==="travel delete successfully"){
    toast.success("Travel deleted successfully");
    navigate("/travel-page")
  }
})
}

const handleEdit=(id)=>{
  setTravelid(id)
}
console.log(userInfo,"info")
console.log(travel,"trav")
    return(
        <>
        <div className="bg-black py-8 px-6 rounded-2xl xl:rounded-r-none">
        <div className="flex gap-2 flex-wrap justify-end mb-5">
        <span
            className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/create_travel")}
          >
            <span className="flex items-center">
              <TiPlus />
            </span>
            Travel Plan
          </span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
        {travel.map((travel)=>(
        <div
        className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2"
        // onClick={handleTravel}
      >
        <div className="w-2/5 sm:w-full">
          {/* <img
                src="images/travel-card-2.png"
                alt="travel-card"
                className="w-full object-cover h-full aspect-11/10 rounded-2xl"
              /> */}
  
          <img
            className="w-full object-cover h-full aspect-11/10 rounded-2xl"
            src={travel.image}
          />
        </div>
        <div className="w-3/5 sm:w-full px-4 pr-0 grid content-between relative gap-2">
          <div className="flex items-center gap-1 text-xs">
            <p className="flex items-center gap-1">
              <span className="flex text-light-yellow">
                <GrStar />
              </span>
            </p>
            <p className="text-[12px] font-medium text-bright-orange">
              {travel.name}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[12px] gap-1 flex items-center">

              

              {userInfo.profile_type === "single" ? (
  userInfo.gender === "male" ? (
    <span className="text-navy-blue">{travel.age}</span>
  ) : userInfo.gender === "female" ? (
    <span className="text-pink-400">{travel.age}</span>
  ) : (
    <span className="text-violet">{travel.age}</span>
  )
) : (
  <div>
    {userInfo?.couple?.person1?.gender === "male" ? (
      <span className="text-navy-blue px-1">{travel.age}</span>
    ) : userInfo?.couple?.person1?.gender === "female" ? (
      <span className="text-pink-400 px-1">{travel.age}</span>
    ) : (
      <span className="text-violet px-1">{travel.age}</span>
    )} 
    |
    {userInfo?.couple?.person2?.gender === "male" ? (
      <span className="text-navy-blue px-1">{travel.age2}</span>
    ) : userInfo?.couple?.person2?.gender === "female" ? (
      <span className="text-pink-400 px-1">{travel.age2}</span>
    ) : (
      <span className="text-violet px-1">{travel.age2}</span>
    )}
  </div>
)}

        
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
                <img
                  src="images/desk_icon.png"
                  alt="desk_icon"
                  className="max-w-full"
                />
              </span>
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
                <img
                  src="images/mob_icon.png"
                  alt="mob_icon"
                  className="max-w-full"
                />
              </span>
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
                <img
                  src="images/cal_icon.png"
                  alt="cal_icon"
                  className="max-w-full"
                />
              </span>
            </div>
          </div>
          <div className="flex w-[75%] flex-wrap items-center gap-1">
              {travel?.interested.includes("M") ? (
                <img src="images/Male.png" alt="male-user" className="h-[18px]"/>
              ) : (
                ""
              )}
              {travel?.interested.includes("F") ? (
                <img src="images/Female.png" alt="woman" className="h-[18px]" />
              ) : (
                ""
              )}
              {travel?.interested.includes("MF") ? (
                <img src="images/malefemale.png" alt="couple" className="h-[15px]"  />
              ) : (
                ""
              )}
                  {travel?.interested.includes("MM") ? (
                <img src="images/malemale.png" alt="couple"  className="h-[15px]" />
              ) : (
                ""
              )}
                   {travel?.interested.includes("FF") ? (
                <img src="images/femaleFemale.png" alt="couple"  className="h-[15px]"  />
              ) : (
                ""
              )}
                       {travel?.interested.includes("T") ? (
                <img src="images/Trans.png" alt="couple"  className="h-[15px]"  />
              ) : (
                ""
              )}
            </div>
          <div>
            <p className="text-[12px] flex items-center">
              <span className="inline-flex items-center pr-1 font-body_font">
                {/* <img src="images/loc-icon.png" alt="Location-icon" /> */}
                {/* Delhi, IND */}
                {/* {travel.locationfrom} */}
              </span>
              <span className="px-1 inline-block border-l border-white">
                {/* 146 min */}
              </span>
            </p>
          </div>
          <div className="flex text-[#FF0000] text-[12px] flex-wrap gap-1 leading">
          <img src="images/loc-icon.png" alt="Location-icon" />
            <span className="font-body_font">{travel.locationto.display_name},</span>
            {/* { calculatePreciseDistance(travel?.location?.lon,savedCred.long,travel?.location?.lat,savedCred.lat).slice(0,3)}miles */}
            {/* <span>14min</span> */}
            <span>|</span>
            <span className="font-body_font">
            {formatDate(travel.startDate)} to {formatDate(travel.endDate)}
            </span>
          </div>
          <div className="flex justify-between gap-2 items-start"> 
          <p className="travel_desc text-sm font-body_font">{travel.description}</p>


          <div className="flex gap-2">
                    <Link
                      className="inline-flex items-center text-xl"
                      to={"/edit_travel"}
                      onClick={()=>handleEdit(travel?._id)}
                    >
                      <MdOutlineModeEditOutline />
                    </Link>
                    <div
                      className="inline-flex items-center text-xl"
                      onClick={() => deleteTravel(travel?._id)}
                    >
                      <RiDeleteBin6Line/>
                    </div>
                  </div>
                  </div>

        </div>
      </div>
      ))}
      </div>
      </div>
      </>
    )
}