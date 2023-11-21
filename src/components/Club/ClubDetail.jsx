import axios from "axios";
import { getPreciseDistance } from "geolib";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import {
  RiDeleteBin6Line,
} from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import { toast } from "react-toastify";
import { Context } from "../../Context/context";
import api from "../../utils/api";
import { FaArrowLeft } from "react-icons/fa6";
const ClubDetail = () => {
  const [clubData, setClubData] = useState({});
  const {savedCred } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [toggleRequest, setToggleRequest] = useState(false);
const [popup,setPopup]=useState(false)
const [load,setLoad]=useState(false)
const [rating, setRating] = useState(0)
const[edit,setEdit]=useState(false)
const [desc,setdesc]= useState("")
  const navigate = useNavigate();
  const[reviewId,setReviewId]=useState(null)
  const data = useParams()
  const clubid = data.id
  const calculatePreciseDistance = (fLong, sLong, fLat, sLat) => {
    var pdis = getPreciseDistance(
      { latitude: Number(fLat), longitude: Number(fLong) },
      { latitude: Number(sLat), longitude: Number(sLong) }
    );
    const factor = 0.621371;
    return ((pdis / 100) * factor).toFixed(2);
  };
const {user} = useSelector((state)=>state.auth);
const [userInfo,setUserInfo]=useState(user);
useEffect(()=>{
  setUserInfo(user)
},[])


  const getClub = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/getClub/${clubid}`);
    setClubData(data);
    
  };

  useEffect(() => {
    getClub();
  }, [popup,load]);
  const handleSave = async () => {
      setPopup(true);
      setdesc("")
      return;
    }

  const deleteclub = async(e) => {
   await api.delete(`/delete_club/${e}`).then((res) => {
      // console.log(res);
      if (res.data === "Club deleted successfully") {
        toast.success("Club deleted successfully");
        navigate("/club-page");
      }
    });
  };
  const handleRating = (rate) => {

    setRating(rate)
  }

  const handleChange = (e)=>{
    setdesc(e.target.value)
  }

  const submitReview = async() =>{

if(edit){
  await api.patch(`/edit-review/${clubData?._id}`,{reviewId,rating,desc}).then((res)=>{}).catch((err)=>console.log(err))
  setEdit(false)
}
else{
  const data = {
    title:userInfo.username,
    createdBy:userInfo._id,
    rating:rating,
    desc:desc
  }
   await api.put(`/reviewPost/${clubData._id}`,data).then((res)=>{
    
   }).catch((err)=>console.log(err))
}
setPopup(false);
setdesc("")
setRating(0)
  }

  const formatDate = (dateString) => {
    const originalTimestamp = dateString;
    const date = new Date(originalTimestamp);
    const formattedDate = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
    
    return formattedDate;
  };


  const DeleteComment=async(id,reviewId)=>{
  
await api.put(`/delete-review/${id}`,{reviewId}).then((res)=>{ console.log(res.data) 
  setLoad(!load);
  toast(res.data)}).catch((err)=>console.log(err))
  }


  const handleEdit=async(review)=>{
// console.log(review)
setReviewId(review?._id)
setdesc(review?.desc)
setRating(review?.rating)
  }

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
<div class=" space-x-1 mt-4 gap-2"> 
        <Rating size={50}  initialValue={rating}
        onClick={handleRating}
      />
</div>

<textarea id="message" rows="4" class="mt-4 block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black" placeholder="Write your thoughts here..." onChange={handleChange} value={desc} ></textarea>
<div className="flex gap-4 justify-between w-full">
          <span
            className="primary_btn gradient mt-5 px-8 bg-gradient-to-r from-[#F79220] to-[#F94A2B] rounded-lg py-2 cursor-pointer"
            onClick={submitReview}
          >
            Post
          </span> <span
            className="primary_btn gradient mt-5 px-8 rounded-lg py-2 cursor-pointer align-end"
            onClick={()=>setPopup(false)}
          >
           Cancel
          </span>
        </div> 
        </div>
      </div>
      <span className="primary_btn cursor-pointer !text-sm !py-2 !px-3 !leading-none !py-3" onClick={()=>navigate(-1)}>
        <span className="text-sm inline-flex items-center mr-2"><FaArrowLeft /></span>Back
      </span>
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
                      to={`/editclubpage/${clubData._id}`}
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
                  <span >Introduction</span> : <span className="font-body_font" dangerouslySetInnerHTML={{ __html: clubData?.introduction?.replace(/\n/g, '<br />') }}>
             
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
          <p className="text-base font-body_font" dangerouslySetInnerHTML={{ __html: clubData?.description?.replace(/\n/g, '<br />') }}></p>
           
        </div>
        <div className="p-1">
        <p className="text-lg text-orange font-semibold mb-3">COMMENTS</p>
      {clubData?.reviews?.map((reviews)=>(
<article>
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <div class="space-y-1 font-medium dark:text-white">
            <p>{reviews.title}</p>
            <p className="text-xs text-white/60">{formatDate(reviews.created)}</p>
        </div>
        {userInfo?._id === reviews?.createdBy?._id &&   
        <div className="flex items-center gap-1">
          <buton class="p-1 gradient rounded py-0 cursor-pointer" onClick={()=>(setPopup(true), setEdit(true),handleEdit(reviews)) }><MdOutlineModeEditOutline /></buton>
          <buton className="p-1 gradient rounded py-0 cursor-pointer" onClick={()=>DeleteComment(clubData._id,reviews?._id)}><RiDeleteBin6Line /></buton>
        </div>
        }
      
    </div>
    <div class="flex items-center mb-1">
    <Rating size={20} initialValue={reviews.rating} readonly/>
        {/* <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3> */}
    </div>
    {/* <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer> */}
    <p class="mb-2 text-gray-500 dark:text-gray-400">{reviews.desc}</p>
</article>
))}
</div>
</div>

    </div>
  );
};
export default ClubDetail;
