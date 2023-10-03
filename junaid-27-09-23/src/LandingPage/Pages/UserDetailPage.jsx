import React, { useContext, useEffect, useState } from "react";
import { MdClose, MdCheck } from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";
import { Context } from "../../Context/context";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CoupleDetailPage from "./CoupleDetailPage";

const UserDetailPage = () => {
  const [favmodel, setFavModel] = useState([]);
  const { userInfo, setUserInfo } = useContext(Context);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;


  console.log(userInfo)
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      const token = cookies["token"];
      if (token) {
        const decodedToken = jwtDecode(token);
        userDetails(decodedToken);
        // getFavmodel(decodedToken);
      } else {
        navigate("/login");
      }
    }
  }, []);

  // const getFavmodel = async (token) => {
  //   try {
  //     const { data } = await axios.get(
  //       `${BASE_URL}/api/getfavModel/${token._id}`
  //     );

  //     setFavModel(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

const RenderedStyle={
"color":`${userInfo.gender=== 'male'?'#3A97FE':userInfo.gender=== 'female'?'#FF2A90':'#cf00cf'}`
}


  const userDetails = async (token) => {
    const { data } = await axios.get(`${BASE_URL}/api/findone/${token._id}`);
    setUserInfo(data);
  };
  const formattedDate = new Date(userInfo.createdAt).toLocaleDateString(
    "en-GB"
  );
  console.log(userInfo,"fuysfy gy");
  return (<>

{userInfo.profile_type==="single"?
 <div className="bg-black-20">
 <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px">
   <div className="container mx-auto pb-20 text-center">
     <h3 className="font-secondary_font text-40px">User Details</h3>
     <p className="text-lg">Lorem Ipsum is dummy content</p>
   </div>
 </div>
 <div className="pt-10 container px-5 mx-auto">
   <div className="flex flex-wrap items-stretch bg-black rounded-2xl max-w-5xl mx-auto">
     <div className="w-full sm:w-2/5 md:w-1/5">
       <img
         src={userInfo.image}
         alt="book-model"
         className="w-full h-full object-center object-cover aspect-[5/4] rounded-2xl"
       />
     </div>
     <div className="w-full sm:w-3/5 md:w-4/5 border-b-2 sm:border-b-0 sm:border-r-2 border-orange rounded-2xl">
       <div className="h-full p-5 grid content-between rounded-2xl max-w-3xl gap-y-10">
         <div>
           <div className="flex flex-wrap sm:flex-nowrap justify-between sm:gap-5">
             <h3 className="flex items-center text-lg sm:text-[22px] font-bold gap-2 font-body_font">
               {userInfo.username}
               <p className="flex items-center text-sm font-light gap-1">
                 <span className="block w-3 h-3 rounded-full bg-green-500 font-body_font"></span>
                 Online
               </p>
             </h3>
             {/* <p className="cursor-pointer text-xs sm:text-lg font-light">
               Update
             </p> */}
           </div>
           <div className="text-lg flex items-center gap-2  mt-1 font-body_font">
             <span>
               {userInfo.age}{" "}
               {userInfo.gender === "male"
                 ? "M"
                 : userInfo.gender === "female"
                 ? "F"
                 : userInfo.gender === "others"
                 ? "T"
                 : ""}
             </span>
             {userInfo.gender === "male" ? (
               <span className="flex items-center text-navy-blue">
                 <FaMale />
               </span>
             ) : userInfo.gender === "female" ? (
               <span className="flex items-center text-pink-400">
                 <FaFemale />
               </span>
             ) : (
               <></>
             )}
             |<span>{userInfo.country}</span>
           </div>
         </div>
         <p className="text-lg font-body_font">{userInfo.slogan}</p>
         <p className="text-lg font-body_font">{userInfo.introduction}</p>
       </div>
     </div>
   </div>

   <div className="max-w-5xl mx-auto pt-20">
     <div className="px-8">
       <span className="inline-block py-3 px-8 text-lg rounded-t-lg bg-white text-black min-w-[200px] text-center">
         Profile
       </span>
     </div>
     <div className="bg-white rounded-lg py-10 px-3 lg:px-8 items-start">
       <div className="grid gap-y-5">
         <div className="p-5 bg-black-20 rounded-2xl w-[100%] ">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Profile</p>
             <Link
               to="/edit-detail"
               className="cursor-pointer text-xs sm:text-lg"
             >
               Edit
             </Link>
           </div>
           {/* <p className="text-sm sm:text-lg font-body_font">Nothing</p> */}
           <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 mb-2">
               <span className="block font-body_font text-lg">Interest :</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {/* {userInfo.interests} */}
               </span>
             </div>
           <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span>Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male?.map((el,i)=>(
                   <>
               <p key={i}>{el}</p>
       
               </>
                 ))}
                 
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Male Female</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male_female?.map((el,i)=>(
                   <>
              
               <p key={i}>{i !== 0 && <span>, </span>}{el}</p>
         
               </>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Female </span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.female?.map((el,i)=>(
                   <p key={i}> {i !== 0 && <span>, </span>}{el}</p>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Female Female </span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.female_female?.map((el,i)=>(
               <p key={i}> {i !== 0 && <span>, </span>}{el}</p>
                 ))}
                 </span>
                 </div>
             </div> 
              <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 ">
               <span>Male Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male_male?.map((el,i)=>(
                   <p key={i}> {i !== 0 && <span>, </span>}{el}</p>
                 ))}
                 </span>
                 </div>
             </div> 
         </div>
         <div className="p-5 bg-black-20 rounded-2xl">
           <div className="grid grid-cols-2 gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Details</p>
             <p className={`text-right flex items-center justify-end text-xl`} style={RenderedStyle}>
               
<<<<<<< HEAD
               {userInfo.gender==="male"?(<img src="images/male.png" alt="Male" className="h-[26px] mr-1" />):userInfo.gender==="female"? (<img src="images/female.png" alt="Male" className="h-[26px] mr-1" />)
               :(<img src="images/trans.png" alt="trans" className="h-[26px] mr-1" />)}
=======
               {userInfo.gender==="male"?(<img src="images/Male.png" alt="Male" className="h-[26px] mr-1" />)
               :(<img src="images/female.png" alt="Male" className="h-[26px] mr-1" />)}
>>>>>>> 2b88261f1a0675beeebc291f237e16362a8f92be
                {userInfo.personName}</p>
           </div>
           <div className="grid">
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span className="block font-body_font">Member Since:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {formattedDate}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">
                 Ethnic Background:
               </span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.ethnic_background}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span className="block font-body_font">Experience:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.experience}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px] border-b border-[#666]">
               <span className="block font-body_font">Gender:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.gender}
               </span>
             </div>
           </div>
           <div className="grid">
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Birthdate:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.DOB}
               </span>
             </div>
             {/* <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
               <span className="block">Relocate?:</span>
               <span className="block text-right">
                 {userInfo.relocate}
               </span>
             </p> */}
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">
             Sexuality
               </span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.sexuality}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Height:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.height}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Weight:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.weight}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Body Type:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.body_type}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Body Hair:</span>
               {userInfo.body_hair?.map((el, i) => (
                 <span className={`block text-right font-body_font`} style={RenderedStyle} key={i}>
           {i !== 0 && <span>, </span>}
                   {el}
                 </span>
               ))}
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Piercings:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.piercings}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Looks:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.looks_important}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Smoking:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.smoking}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font">Tattoos:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.tattoos}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px]">
               <span className="block font-body_font">Relationship_status:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.relationship_status}
               </span>
             </div>
             {/* <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span className="block font-body_font text-3xl">Interest :</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
             
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span>Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male?.map((el,i)=>(
               <p key={i}>{el},</p>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Male Female</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male_female?.map((el,i)=>(
               <p key={i}>{el},</p>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Female </span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.female?.map((el,i)=>(
                   <p key={i}>{el},</p>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Female Female </span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.female_female?.map((el,i)=>(
               <p key={i}>{el},</p>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 ">
               <span>Male Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male_male?.map((el,i)=>(
                   <p key={i}>{el},</p>
                 ))}
                 </span>
                 </div>
             </div> */}
           </div>
         </div>
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">My Kinks</p>
           </div>
           <p className="text-sm sm:text-lg">
             You currently have no kinks
           </p>
         </div> */}
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex flex-wrap justify-between items-center font-normal pb-3 mb-3 border-b border-orange">
             <p className="w-3/5 sm:w-4/5 pr-3 text-base sm:text-2xl">
               Compatibility
             </p>
             <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-sm">
               <span className="block text-center">You</span>
               <span className="block text-center">Him</span>
             </div>
           </div>
           <div className="grid gap-y-3">
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Gender :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-white">
                   <MdClose />
                 </span>
                 <span className="flex justify-center items-center text-center text-white">
                   <MdClose />
                 </span>
               </div>
             </div>
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Distance :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-green-500">
                   <MdCheck />
                 </span>
                 <span className="flex justify-center items-center text-center text-green-500">
                   <MdCheck />
                 </span>
               </div>
             </div>
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Age :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-white">
                   <MdCheck />
                 </span>
                 <span className="flex justify-center items-center text-center text-white">
                   <MdCheck />
                 </span>
               </div>
             </div>
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Gender :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-white">
                   <MdClose />
                 </span>
                 <span className="flex justify-center items-center text-center text-white">
                   <MdClose />
                 </span>
               </div>
             </div>
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Distance :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-green-500">
                   <MdCheck />
                 </span>
                 <span className="flex justify-center items-center text-center text-green-500">
                   <MdCheck />
                 </span>
               </div>
             </div>
             <div className="text-sm sm:text-lg flex flex-wrap justify-between items-center">
               <p className="w-3/5 sm:w-4/5 pr-3">Age :</p>
               <div className="w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl">
                 <span className="flex justify-center items-center text-center text-white">
                   <MdCheck />
                 </span>
                 <span className="flex justify-center items-center text-center text-white">
                   <MdCheck />
                 </span>
               </div>
             </div>
           </div>
         </div> */}
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Bling!</p>
             <p className="cursor-pointer text-xs sm:text-lg">
               Bling Manager
             </p>
           </div>
           <p className="text-sm sm:text-lg">
             AdmaxAron currently doesn't have any Bling.
           </p>
         </div> */}
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="pb-3 mb-3 border-b border-orange">
             <div className="flex justify-between gap-3 font-normal">
               <p className="text-base sm:text-2xl">
                 Top Fans: <span>(0)</span>
               </p>
               <p className="cursor-pointer text-xs sm:text-lg flex items-center gap-1">
                 <span className="cursor-pointer">Settings</span>
                 <span>|</span>
                 <span className="cursor-pointer">View All</span>
               </p>
             </div>
             <p className="text-sm sm:text-lg mt-3 font-body_font">
               AdmaxAron currently doesn't have any Bling.
             </p>
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
             <div className="group">
               <div className="relative">
                 <img
                   src="landingPage/images/hot-woman.png"
                   alt="hot-woman"
                   className="w-full aspect-4/3"
                 />
                 <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                   <p className="text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300">
                     Be a Top Fan
                   </p>
                 </div>
               </div>
               <div className="flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1">
                 <p className="flex items-center gap-1">
                   <img
                     src="landingPage/images/star-icon.png"
                     alt="star-icon"
                     className="h-3"
                   />
                   <span>#1</span>
                 </p>
                 <p>50 pts</p>
               </div>
             </div>
             <div className="group">
               <div className="relative">
                 <img
                   src="landingPage/images/hot-woman.png"
                   alt="hot-woman"
                   className="w-full aspect-4/3"
                 />
                 <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                   <p className="text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300">
                     Be a Top Fan
                   </p>
                 </div>
               </div>
               <div className="flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1">
                 <p className="flex items-center gap-1">
                   <img
                     src="landingPage/images/star-icon.png"
                     alt="star-icon"
                     className="h-3"
                   />
                   <span>#1</span>0
                 </p>
                 <p>50 pts</p>
               </div>
             </div>
             <div className="group">
               <div className="relative">
                 <img
                   src="landingPage/images/hot-woman.png"
                   alt="hot-woman"
                   className="w-full aspect-4/3"
                 />
                 <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                   <p className="text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300">
                     Be a Top Fan
                   </p>
                 </div>
               </div>
               <div className="flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1">
                 <p className="flex items-center gap-1">
                   <img
                     src="landingPage/images/star-icon.png"
                     alt="star-icon"
                     className="h-3"
                   />
                   <span>#1</span>
                 </p>
                 <p>50 pts</p>
               </div>
             </div>
             <div className="group">
               <div className="relative">
                 <img
                   src="landingPage/images/hot-woman.png"
                   alt="hot-woman"
                   className="w-full aspect-4/3"
                 />
                 <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                   <p className="text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300">
                     Be a Top Fan
                   </p>
                 </div>
               </div>
               <div className="flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1">
                 <p className="flex items-center gap-1">
                   <img
                     src="landingPage/images/star-icon.png"
                     alt="star-icon"
                     className="h-3"
                   />
                   <span>#1</span>
                 </p>
                 <p>50 pts</p>
               </div>
             </div>
           </div>
         </div> */}
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">
               Fan of:
               <span>({favmodel.length})</span>
             </p>
             <p className="cursor-pointer text-xs sm:text-lg">View All</p>
           </div>
           {favmodel.map((el) => (
             <p className="text-sm sm:text-lg font-body_font">
               {el.firstName} {el.lastName}
             </p>
           ))}
         </div> */}
         {/* <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Activities</p>
             <p className="cursor-pointer text-xs sm:text-lg"></p>
           </div>
           <p className="text-sm sm:text-lg font-body_font">Nothing</p>
         </div> */}
       </div>
       {/* <div className="grid gap-y-3">
         <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">My Friends</p>
             <p className="cursor-pointer text-xs sm:text-lg"></p>
           </div>
           <p className="text-sm sm:text-lg font-body_font">
             You do not have friends in your network. Invite your friends
             to join!
           </p>
         </div>
         <div className="p-5 bg-black-20 rounded-2xl">
           <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Interest Groups</p>
             <p className="cursor-pointer text-xs sm:text-lg">View All</p>
           </div>
           <p className="text-sm sm:text-lg font-body_font">Nothing</p>
         </div>
       </div> */}
     </div>
   </div>
 </div>
 <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
   <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
     {/* <img
       src="images/avn_award2-1.png"
       alt="award"
       className="max-w-200px md:max-w-full"
     /> */}
     <h2 className="text-white text-base sm:text-2xl md:text-3xl xl:text-40px">
       #1 Adult Dating Site
     </h2>
   </div>
 </div>
</div>:
<CoupleDetailPage/>
}
   
    </>
  );
};

export default UserDetailPage;
