import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { calculateAge } from "../../utils/CalculateAge";
import api from "../../utils/api";
import ConfirmPopUP from "../popup/ConfirmPopUP";


const CoupleDetailId = ({id}) => {
  const [ userInfo, setUserInfo ] = useState([]);
  const [age, setAge] = useState(null);
  const [age2,setage2]=useState(null)
  const[addfriend,setAddFriend]=useState(false)
  const [pendingusers,setPending]=useState('')
  const [popup, setPopup] = useState(false)
const ref = useRef(null)
  const data = useParams()

  useEffect(() => {
    api.get(`/userdetail/${id}`).then((res)=>{
        setUserInfo(res.data)
        if (res.data.profile_type === "couple"){
          setAge(calculateAge(res.data?.couple?.person1.DOB));
  setage2(calculateAge(res.data?.couple?.person2.DOB));
        }
    })
  }, []);


  const RenderedStyle = {
    color: `${
      userInfo.couple?.person1?.gender === "male"
        ? "#3A97FE"
        : userInfo.couple?.person1?.gender === "female"
        ? "#FF2A90"
        : "#f139f1"
    }`,
  };

  const RenderStyle2 = {
    color: `${
      userInfo.couple?.person2?.gender === "male"
        ? "#3A97FE"
        : userInfo.couple?.person2?.gender === "female"
        ? "#FF2A90"
        : "#f139f1"
    }`,
  };

  const userDetails = async (token) => {
    const { data } = await api.get(`/findone/${token._id}`);
    setUserInfo(data);
  };
  const formattedDate = new Date(userInfo.createdAt).toLocaleDateString(
    "en-GB"
  );


 

  useEffect(()=>{
  api.get(`/check_req/${data.id}`).then((res)=>{setPending(res.data.status)
    ref.current=res.data?.existingRequest._id
  }).catch((err)=>console.log(err))
  },[addfriend])
  
 
  
  const handlefriendrequest=async()=>{
    try{
   const {data}= await api.post(`/add_friend/${userInfo?._id}`,{})
 toast("Friend request sent!")
   setAddFriend(!addfriend)
    }
  catch(err){
    console.log(err)
  }
  }
  
  const handlecancelrequest=async()=>{
    setPopup(true)

  }
  
const handleDeleteConfirm=async()=>{
      try{
      const {data}= await api.patch(`/cancel-pending-request/${ref.current}`,{})
      toast("Cancelled friend request!")
      setAddFriend(!addfriend)
      setPopup(false)
       }
     catch(err){
       console.log(err)
     }
}

  return (
    <div className="bg-black-20">
      <div className="min-h-[130px] md:min-h-[130px] flex justify-center items-end bg-black rounded-b-50px">
        {/* <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">User Details</h3>
          <p className="text-lg">Lorem Ipsum is dummy content</p>
        </div> */}
      </div>
      <div className="pt-10 container px-5 mx-auto">
        <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-stretch bg-black rounded-2xl ">
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
                </div>
                <div className="text-lg flex items-center gap-2  mt-1 font-body_font">
                  {/* <span>
                    {userInfo.age}
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
                  |<span>{userInfo.country}</span> */}
                  <span style={RenderedStyle}>{age}</span>
                  |
                  <span style={RenderStyle2}>{age2}</span>
                </div>
              </div>
              <div className="flex gap-3">
              {pendingusers=="same"?<></>: pendingusers=="approved"? <div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer" >You are Friends</div>: pendingusers!=="pending"  ?    <div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer  " onClick={handlefriendrequest}>Friend request</div>
                         :<div className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer "onClick={handlecancelrequest} >Cancel Request</div>}
             

             {pendingusers!=="same" && <span className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer">Message</span>}
            </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-light-grey rounded-xl mt-6">
            <h3 className="text-2xl text-orange">Slogan</h3>
        <p className="text-lg font-body_font my-2">{userInfo.slogan}</p>
        <h3 className="text-2xl text-orange mt-5">Introduction</h3>
            <p className="text-lg font-body_font my-2">{userInfo.introduction}</p>
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
                    to="/editcouple-detail"
                    className="cursor-pointer text-xs sm:text-lg"
                  >
                    Edit
                  </Link> */}
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 mb-2">
                  <span className="block font-body_font text-lg">
                    Interest :
                  </span>
                  <span
                    className={`block text-right font-body_font male_login_data`}
                  ></span>
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px] ">
                  <span>Male</span>
                  <div>
                    <span className="block text-right">
                      {userInfo.interests?.male?.map((el, i) => (
                        <span key={i}>
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
                  <span>Male Female</span>
                  <div>
                    <span className="block text-right">
                      {userInfo.interests?.male_female?.map((el, i) => (
                        <span key={i}>
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
                  <span>Female </span>
                  <div>
                    <span className="block text-right">
                      {userInfo.interests?.female?.map((el, i) => (
                        <span key={i}>
                          {" "}
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 border-b border-[#666] py-[5px]">
                  <span>Female Female </span>
                  <div>
                    <span className="block text-right">
                      {userInfo.interests?.female_female?.map((el, i) => (
                        <span key={i}>
                          {" "}
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="text-sm sm:text-lg grid grid-cols-2 gap-3 ">
                  <span>Male Male</span>
                  <div>
                    <span className="block text-right">
                      {userInfo.interests?.male_male?.map((el, i) => (
                        <span key={i}>
                          {" "}
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-black-20 rounded-2xl">
                <div className="grid grid-cols-3 gap-3 font-normal pb-3 mb-3 border-b border-orange">
                  <p className="text-base sm:text-2xl">Details</p>

                  {/* <p className={`text-right flex items-center justify-end text-xl`} style={RenderedStyle}>
               
               {userInfo.gender==="male"?(<img src="images/male.png" alt="Male" className="h-[26px] mr-1" />):userInfo.gender==="female"? (<img src="images/female.png" alt="Male" className="h-[26px] mr-1" />)
               :(<img src="images/trans.png" alt="trans" className="h-[26px] mr-1" />)}
                {userInfo.personName}</p> */}

                  <p
                    className={`text-center flex items-center justify-center text-xl`}
                    style={RenderedStyle}
                  >
                    {userInfo.couple?.person1?.gender === "female" ? (
                      <img
                        src="/images/Female.png"
                        alt="Female"
                        className="h-[26px] mr-1"
                      />
                    ) : userInfo.couple?.person1?.gender === "male" ? (
                      <img
                        src="/images/Male.png"
                        alt="male"
                        className="h-[26px] mr-1"
                      />
                    ) : (
                      <img
                        src="/images/Trans.png"
                        alt="trans"
                        className="h-[26px] mr-1"
                      />
                    )}
                    {userInfo.couple?.person1?.person1_Name}
                  </p>

                  <p
                    className={`text-center flex items-center justify-end text-xl`}
                    style={RenderStyle2}
                  >
                    {userInfo.couple?.person2?.gender === "female" ? (
                      <img
                        src="/images/Female.png"
                        alt="Female"
                        className="h-[26px] mr-1"
                      />
                    ) : userInfo.couple?.person2?.gender === "male" ? (
                      <img
                        src="/images/Male.png"
                        alt="male"
                        className="h-[26px] mr-1"
                      />
                    ) : (
                      <img
                        src="/images/Trans.png"
                        alt="trans"
                        className="h-[26px] mr-1"
                      />
                    )}
                    {userInfo.couple?.person2?.person2_Name}
                  </p>
                </div>
                <div className="grid">
                  {/* <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px]">
                    <span className="block font-body_font">Member Since:</span>
                    <span className={`block text-center font-body_font female_login_data_2`}>
                    10 / 05 /1996
                    </span>
                    <span className={`block text-right font-body_font male_login_data`}>
                      {formattedDate}
                    </span>
                  </div> */}
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Birthday:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.DOB}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.DOB}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px] border-b border-[#666]">
                    <span className="block font-body_font">Gender:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.gender}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.gender}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Body Hair:</span>
                    <div className="block text-center">
                      {userInfo.couple?.person1?.body_hair?.map((el, i) => (
                        <span
                          className={` font-body_font`}
                          style={RenderedStyle}
                          key={i}
                        >
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      {userInfo.couple?.person2?.body_hair.map((el, i) => (
                        <span
                          className={`block  font-body_font`}
                          style={RenderStyle2}
                          key={i}
                        >
                          {i !== 0 && <span>, </span>}
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Height:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.height}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.height}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Weight:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.weight}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.weight}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Body Type:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.body_type}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.body_type}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">
                      Ethnic Background:
                    </span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.ethnic_background}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.ethnic_background}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Smoking:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.smoking}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.smoking}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Piercings:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.piercings}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.piercings}
                    </span>
                  </div>

                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Tattoos:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.tattoos}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.tattoos}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Circumcised:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.circumcised}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.circumcised}
                    </span>
                  </div>

                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Looks:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.looks_important}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.looks_important}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Intelligence:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.intelligence}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.intelligence}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 border-b border-[#666] py-[5px] ">
                    <span className="block font-body_font">Sexuality</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.sexuality}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.sexuality}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px] border-b border-[#666] ">
                    <span className="block font-body_font">Relation:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.relationship_status}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.relationship_status}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3  py-[5px]  border-b border-[#666]">
                    <span className="block font-body_font">Experience:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.experience}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.experience}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px] border-b border-[#666] ">
                    <span className="block font-body_font">Drinking</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.Drinking}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.Drinking}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px] border-b border-[#666] ">
                    <span className="block font-body_font">Drugs</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.Drugs}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.Drugs}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px] border-b border-[#666] ">
                    <span className="block font-body_font">
                      Relationship Status:
                    </span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.Relationship}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.Relationship}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg grid grid-cols-3 gap-3 py-[5px]">
                    <span className="block font-body_font">Language:</span>
                    <span
                      className={`block text-center font-body_font`}
                      style={RenderedStyle}
                    >
                      {userInfo.couple?.person1?.Language}
                    </span>
                    <span
                      className={`block text-right font-body_font`}
                      style={RenderStyle2}
                    >
                      {userInfo.couple?.person2?.Language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          <h2 className="text-white text-base sm:text-2xl md:text-3xl xl:text-40px">
            #1 Adult Dating Site
          </h2>
        </div>
      </div>
      <ConfirmPopUP popup={popup} setPopup={setPopup} handleDeleteConfirm={handleDeleteConfirm}/>
    </div>
  );
};

export default CoupleDetailId;
