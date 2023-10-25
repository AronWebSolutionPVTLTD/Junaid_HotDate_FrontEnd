import React, { useContext, useEffect, useState,useRef } from "react";
import { MdClose, MdCheck } from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";
import { Context } from "../../Context/context";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CoupleDetailPage from "./CoupleDetailPage";
import CoupleDetailId from "./CoupleDetailid";
import { calculateAge } from "./CalculateAge";
import { toast } from "react-toastify";
import ConfirmPopUP from "../../Dashboard/MainDashboard/db_components/ConfirmPopUP";

const UserDetailId = () => {
  const [favmodel, setFavModel] = useState([]);
  const [userInfo,setUserInfo] = useState([]);
  const [age, setAge] = useState(null);
const{UserToken,setUserToken}=useContext(Context)
const [pendingusers,setPending]=useState([])
const[addfriend,setAddFriend]=useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  const ref = useRef(null)
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [popup, setPopup] = useState(false)
  const data = useParams()
 
  useEffect(() => {

    const token = cookies["token"];
    setUserToken(token);
  }, []);


  useEffect(() => {
  axios.get(`${BASE_URL}/api/userdetail/${data.id}`).then((res) => {
      setUserInfo(res.data);
  

      if (res.data.profile_type === "single") {
        setAge(calculateAge(res.data.DOB));
      }

    });
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


//   const userDetails = async (token) => {
//     const { data } = await axios.get(`${BASE_URL}/api/findone/${token._id}`);
//     setUserInfo(data);
//   };
  const formattedDate = new Date(userInfo.createdAt).toLocaleDateString(
    "en-GB"
  );

const config ={
  headers:{
    token:UserToken
  }
}

useEffect(()=>{
  if(UserToken){
axios.get(`${BASE_URL}/api/check_req/${data.id}`,config).then((res)=>{setPending(res.data.status)
  ref.current=res.data?.existingRequest?._id

}).catch((err)=>console.log(err))}
},[UserToken,addfriend])

console.log(pendingusers,UserToken)



const handlefriendrequest=async()=>{

  try{
 const {data}= await axios.post(`${BASE_URL}/api/add_friend/${userInfo?._id}`,{},{
    headers:{
      token:UserToken
    }
 })
 toast("Friend request sent!")
 setAddFriend(!addfriend)
  }
catch(err){
  console.log(err)
}
}
const handlecancelrequest=async()=>{
  setPopup(true)
//   try{
//     const data= await axios.patch(`${BASE_URL}/api/cancel-pending-request/${ref.current}`,{},{
//        headers:{
//          token:UserToken
//        }
//     })
//     toast("Cancelled friend request!")
//      setAddFriend(!addfriend)
//  console.log(data,"cancel")
//      }
//    catch(err){
//      console.log(err)
//    }

}

const handleDeleteConfirm=async()=>{
  try{
        const data= await axios.patch(`${BASE_URL}/api/cancel-pending-request/${ref.current}`,{},{
           headers:{
             token:UserToken
           }
        })
        toast("Cancelled friend request!")
         setAddFriend(!addfriend)
     console.log(data,"cancel")
     setPopup(false);
         }
       catch(err){
         console.log(err)
       }
}

  return (<>

{userInfo.profile_type==="single"?
 <div className="bg-black-20">
 <div className="min-h-[130px] md:min-h-[130px] flex justify-center items-end bg-black rounded-b-50px">
   {/* <div className="container mx-auto pb-20 text-center">
     <h3 className="font-secondary_font text-40px">User Details</h3>
     <p className="text-lg">Lorem Ipsum is dummy content</p>
   </div> */}
 </div>
 <div className="pt-10 container px-5 mx-auto">
    <div className="max-w-5xl mx-auto">
   <div className="flex flex-wrap items-stretch bg-black rounded-2xl">
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
             {/* <span>
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
           
                 <img src="/images/Male.png" alt="Male" className="h-[26px] mr-1" />
               </span>
             ) : userInfo.gender === "female" ? (
               <span className="flex items-center text-pink-400">
        
                 <img src="/images/Female.png" alt="female" className="h-[26px] mr-1" />
               </span>
             ) : (
              <img src="/images/Trans.png" alt="trans" className="h-[26px] mr-1" />
             )}
             */}
             <span style={RenderedStyle}>{age}</span>
           </div>
         </div>
         
         <div className="flex gap-3">


             {pendingusers=="same"?<></>: pendingusers=="approved"? <div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer" >You are Friends</div>: pendingusers!=="pending"  ?    <div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer  " onClick={handlefriendrequest}>Friend request</div>
                         :<div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer "onClick={handlecancelrequest} >Cancel Request</div>}

             

                <span className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer">Message</span>
            </div>
       </div>
     </div>
   </div>
   <div className="p-5 bg-light-grey rounded-xl mt-6">
    <h3 className="text-2xl text-orange">Slogan</h3>
   <p className="text-lg font-body_font my-2">{userInfo.slogan}</p>
   <h3 className="text-2xl text-orange mt-5">Introduction</h3>
    <p className="text-lg font-body_font my-2" dangerouslySetInnerHTML={{ __html: userInfo?.introduction?.replace(/\n/g, '<br />') }}></p>
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
             {/* <Link
               to="/edit-detail"
               className="cursor-pointer text-xs sm:text-lg"
             >
               Edit
             </Link> */}
           </div>
         
           <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 mb-2">
               <span className="block font-body_font text-lg">Interest :</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
           
               </span>
             </div>
           <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
               <span>Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male?.map((el,i)=>(
                   <>
            
            <span key={i}>{i !== 0 && <span>, </span>}{el}</span>
       
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
              
               <span key={i}>{i !== 0 && <span>, </span>}{el}</span>
         
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
                   <span key={i}> {i !== 0 && <span>, </span>}{el}</span>
                 ))}
                 </span>
                 </div>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span>Female Female </span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.female_female?.map((el,i)=>(
               <span key={i}> {i !== 0 && <span>, </span>}{el}</span>
                 ))}
                 </span>
                 </div>
             </div> 
              <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 ">
               <span>Male Male</span>
                 <div>
                 <span className="block text-right">
                 {userInfo.interests?.male_male?.map((el,i)=>(
                   <span key={i}> {i !== 0 && <span>, </span>}{el}</span>
                 ))}
                 </span>
                 </div>
             </div> 
         </div>
         <div className="p-5 bg-black-20 rounded-2xl">
           <div className="grid grid-cols-2 gap-3 font-normal pb-3 mb-3 border-b border-orange">
             <p className="text-base sm:text-2xl">Details</p>
             <p className={`text-right flex items-center justify-end text-xl`} style={RenderedStyle}>
               
               {userInfo.gender==="male"?(<img src="/images/Male.png" alt="Male" className="h-[26px] mr-1" />):userInfo.gender==="female"? (<img src="/images/Female.png" alt="Male" className="h-[26px] mr-1" />)
               :(<img src="/images/Trans.png" alt="trans" className="h-[26px] mr-1" />)}
                {userInfo.personName}</p>
           </div>
           <div className="grid">
             {/* <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
               <span className="block font-body_font">Member Since:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {formattedDate}
               </span>
             </div> */}
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
               <span className="block text-right">
               {userInfo.body_hair?.map((el, i) => (
                 <span className={` font-body_font`} style={RenderedStyle} key={i}>
           {i !== 0  && <span>, </span>}
                   {el}
                 </span>
               ))}
               </span>
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
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px] border-b border-[#666]">
               <span className="block font-body_font">Relation:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.relationship_status}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px] border-b border-[#666]">
               <span className="block font-body_font">Drinking:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.Drinking}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px] border-b border-[#666]">
               <span className="block font-body_font">Drugs:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.Drugs}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px] border-b border-[#666] ">
               <span className="block font-body_font">Relationship Status:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.Relationship}
               </span>
             </div>
             <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 py-[5px]">
               <span className="block font-body_font">Language:</span>
               <span className={`block text-right font-body_font`} style={RenderedStyle}>
                 {userInfo.Language}
               </span>
             </div>
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

<ConfirmPopUP popup={popup} setPopup={setPopup} handleDeleteConfirm={handleDeleteConfirm}/>
</div>:
<CoupleDetailId id={data.id}/>
}
   
    </>
  );
};

export default UserDetailId;
