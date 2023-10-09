import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {BiChevronDown} from 'react-icons/bi'
import { IoCloseCircleSharp } from "react-icons/io5";

const EditUserDetailsPage = () => {
  const [image, setImage] = useState();
  const [countries, setCountries] = useState([]);
  const [newData]=useState([])
  const [ ctmSelect, setCtmSelect ] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    DOB: "",
    gender: "",
    body_hair: "",
    body_type: "",
    height: "",
    weight: "",
    Drinking:"",
    Drugs:"",
    Relationship:"",
    Language:"",
    ethnic_background: "",
    smoking: "",
    piercings: "",
    tattoos: "",
    circumcised: "",
    looks_important: "",
    intelligence: "",
    sexuality: "",
    relationship_status: "",
    experience: "",
    introduction: "",
    image: "",

    // age: "",
    // looking_for: "",
    // country: "",
    // marital_status: "",
    // race: "",
    // speaks: "",
    // sexual_orientation: "",


  });
  // const [bodyhair, SetBodyHair] = useState([]);
  const [usertoken, setUsertoken] = useState("");
  const { userInfo, setUserInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  const Id = userInfo._id;
  const weights = [];

  for (let kg = 36; kg <= 182; kg++) {
    const lbs = (kg * 2.20462).toFixed(2);
    weights.push(`${kg} kg (${lbs} lbs)`);
  }
  const hair = [
    {
      name: "Arms",
      label: "arm",
    },
    {
      name: "Bikni",
      label: "bikni",
    },
    {
      name: "Buns",
      label: "buns",
    },
    {
      name: "Tummy",
      label: "tummy",
    },
    {
      name: "Chest",
      label: "chest",
    },
    {
      name: "Everywhere",
      label: "everywhere",
    },
    {
      name: "Treasure",
      label: "treasure",
    },
    {
      name: "Arm Pit",
      label: "arm pit",
    },
    {
      name: "Shave",
      label: "shave",
    },
    {
      name: "Smooth",
      label: "smooth",
    },
  ];
  const heights = [
    "4'1\" (124.46 cm)",
    "4'2\" (127.00 cm)",
    "4'3\" (129.54 cm)",
    "4'4\" (132.08 cm)",
    "4'5\" (134.62 cm)",
    "4'6\" (137.16 cm)",
    "4'7\" (139.70 cm)",
    "4'8\" (142.24 cm)",
    "4'9\" (144.78 cm)",
    "4'10\" (147.32 cm)",
    "4'11\" (149.86 cm)",
    "5'0\" (152.40 cm)",
    "5'1\" (154.94 cm)",
    "5'2\" (157.48 cm)",
    "5'3\" (160.02 cm)",
    "5'4\" (162.56 cm)",
    "5'5\" (165.10 cm)",
    "5'6\" (167.64 cm)",
    "5'7\" (170.18 cm)",
    "5'8\" (172.72 cm)",
    "5'9\" (175.26 cm)",
    "5'10\" (177.80 cm)",
    "5'11\" (180.34 cm)",
    "6'0\" (182.88 cm)",
    "6'1\" (185.42 cm)",
    "6'2\" (187.96 cm)",
    "6'3\" (190.50 cm)",
    "6'4\" (193.04 cm)",
    "6'5\" (195.58 cm)",
    "6'6\" (198.12 cm)",
    "6'7\" (200.66 cm)",
    "6'8\" (203.20 cm)",
    "6'9\" (205.74 cm)",
    "6'10\" (208.28 cm)",
    "7'0\" (210.82 cm)",
    "7'1\" (213.36 cm)",
    "7'2\" (215.90 cm)",
    "7'3\" (218.44 cm)",
    "7'4\" (220.98 cm)",
    "7'5\" (223.52 cm)",
    "7'6\" (226.06 cm)",
    "7'7\" (228.60 cm)",
    "7'8\" (231.14 cm)",
    "7'9\" (233.68 cm)",
    "7'10\" (236.22 cm)",
    "7'11\" (238.76 cm)",
    "8'0\" (241.30 cm)",
  ];
  const Birthday = userInfo.DOB?.replace(/\//g, '-');


useEffect(()=>{
if(userInfo.image){
  setImage(userInfo?.image)
 
}
},[])

  useEffect(() => {
    getData();
    const token = cookies["token"];
    setUsertoken(token);
    
    if (userInfo) {

      
      setUserDetails({
        userId: userInfo._id,
        email: userInfo.email || "",
        username: userInfo.username || "",
        DOB: Birthday || "",
        gender: userInfo.gender || "",
        body_hair: userInfo?.body_hair || "",
        body_type: userInfo.body_type || "",
        height: userInfo.height || "",
        weight: userInfo.weight || "",
        Drinking: userInfo.Drinking || "",
        Language: userInfo?.Language || "" ,
        Drugs: userInfo.Drugs || "",
        Relationship: userInfo.Relationship || "",
        ethnic_background: userInfo.ethnic_background || "",
        smoking: userInfo.smoking || "",
        piercings: userInfo.piercings || "",
        tattoos: userInfo.tattoos || "",
        circumcised: userInfo.circumcised || "",
        looks_important: userInfo.looks_important || "",
        intelligence: userInfo.intelligence || "",
        sexuality: userInfo.sexuality || "",
        relationship_status: userInfo.relationship_status || "",
        experience: userInfo.experience || "",
        introduction: userInfo.introduction||"",
      
      });
    
    }
  }, []);
 
  
  const getData = () => {
    fetch("countries.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setCountries(myJson);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };





  const handleImageChange = async (e) => {
    const file = e.target.files[0];


    if (!file) {
      return;
    } else {
      setImage(URL.createObjectURL(e.target.files[0]));
    }




    const formData = new FormData();

    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.put(
        `${BASE_URL}/api/upload_image/${Id}`,
        formData,
        config
      );

      if (data) {
        setUserInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();

    // let formData = new FormData();
    // formData.append("userId", userInfo._id);
    // formData.append("email", userDetails.email);
    // formData.append("username", userDetails.username);
    // formData.append("sexual_orientation", userDetails.sexual_orientation);
    // formData.append("marital_status", userDetails.marital_status);
    // formData.append("body_type", userDetails.body_type);
    // formData.append("race", userDetails.race);
    // formData.append("gender", userDetails.gender);
    // formData.append("speaks", userDetails.speaks);
    // formData.append("DOB", userDetails.dob);
    // formData.append("age", userDetails.age);
    // formData.append("looking_for", userDetails.looking_for);
    // formData.append("country", userDetails.country);
    // formData.append("introduction", userDetails.introduction);
    // formData.append("image", userDetails.image);

    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/update`,
        { userId: Id, ...userDetails },
        {
          headers: {
            token: usertoken,
          },
        }
      );
      if (data) {
        setUserInfo(data);
        navigate("/user-detail");
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/user-detail");
  };


  const handleBodyhair = (e) => {
    let data = newData;
    if (data.includes(e.target.value)) {
      const filter_data = data.filter((el) => el !== e.target.value);
      setUserDetails({...userDetails,['body_hair']:filter_data});
    } else {
      data.push(e.target.value);
     setUserDetails({...userDetails,['body_hair']:data});
    }
  };

  console.log(image,"image")
  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">Edit User Details</h3>
          <p className="text-lg">Lorem Ipsum is dummy content</p>
        </div>
      </div>
      <div className="container mx-auto">
        <form className=" max-w-7xl mx-auto mt-10" autoComplete="off">
          <div className="grid md:grid-cols-2 gap-x-10 justify-stretch items-start md:justify-center gap-y-4 sm:gap-y-6">
            <div className="grid gap-y-4 md:gap-y-6">
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="email"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="username"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userDetails.username}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="DOB"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                Birthday
                  </label>
                  <input
                    type="date"
                    id="DOB"
                    name="DOB"
                    value={userDetails.DOB}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="gender"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="grid items-center ctm_select_drop rounded-md input_fields relative">
                <div className="p-2 rounded-lg input_field">
                  <label
                    htmlFor="body_hair"
                    className="flex justify-between items-center w-full bg-black-20 items-stretch"
         
                  ><span className="gradient gradient rounded-l-md w-full md:w-[120px] xl:w-[195px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Body Hair</span>

                  <div
                     
                     className="select_label bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                     name="body_hair"
                     value={userDetails.body_hair}
                     onChange={handleChange}
                          onClick={()=>setCtmSelect(!ctmSelect)}
                   >
                     {userDetails.body_hair.length === 0
                       ? userDetails.body_hair|| "Please select"
                       : userDetails?.body_hair.map((el,i) => 
                   
                       <span>{i !== 0  && <span>, </span>}
                        {el}</span>)
                 }
                        <span className="select_label_icon"><BiChevronDown /></span>
                   </div>
                     
                  </label>
                </div>

                
                <div className={`select_ctmBox ${ctmSelect ? 'active' : ''}`}>
                  <div className="select_label" name="body_hair">
                      <span></span>
                        
                    </div>
                  <div className="select_options">
                  <div className="optionBox">Please select</div>
                    {hair.map((el, i) => (
                      <div className="optionBox" key={i}>
                        <span>{el.name}</span>
                        <div className="input_option">
                          <input
                            id={el.label}
                            type="checkbox"
                            name={el.name}
                            value={el.name}
                            onChange={handleBodyhair}
                          />
                          <label htmlFor={el.label}></label>
                        </div>
                      </div>
                    ))}
                    </div>
                </div>
                
                {/* <select
                  name="body_hair"
                  id="body_hair"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.body_hair}
                  onChange={handleChange}
               
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Arms">Arms</option>
                  <option value="Bikni">Bikni</option>
                  <option value="Buns">Buns</option>
                  <option value="Tummy">Tummy</option>
                  <option value="Chest">Chest</option>
                  <option value="Everywhere">Everywhere</option>
                  <option value="Treasure">Treasure</option>
                  <option value="Arm Pit">Arm Pit</option>
                  <option value="Shave">Shave</option>
                  <option value="Smooth">Smooth</option>
                </select> */}
              </div>


  

              {/* <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="email"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Sexual Orientation
                  </label>
                  <select
                    name="sexual_orientation"
                    id="reason"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.sexual_orientation}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div> */}

              {/* <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="marital_status"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Marital Status
                  </label>
                  <select
                    name="marital_status"
                    id="marital_status"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.marital_status}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="unmarried">Unmarried</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </div> */}
                        <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="body_type"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
             Body Type
                </label>
                <select
                  name="body_type"
                  id="body_type"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.body_type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Slim">Slim</option>
                  <option value="Athletic">Athletic</option>
                  <option value="Average">Average</option>
                  <option value="AthlNicely Shapedetic">Nicely Shaped</option>
                  <option value="More of me to Love">More of me to Love</option>
                  <option value="Huggable and heavy">Huggable and heavy</option>
                </select>
                
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="height"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Height
                  </label>
                  <select
                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        name="height"
                        value={userDetails.height}
                        onChange={handleChange}
                      >
                        <option value="">Please Select</option>
                        {heights.map((height, i) => (
                          <option key={i} value={height}>
                            {height}
                          </option>
                        ))}
                      </select>
                </div>

              </div>
              <div>       <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="race"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Weight
                </label>
                <select
                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        name="weight"
                        value={userDetails.weight}
                        onChange={handleChange}
                      >
                        <option value="">Please Select</option>
                        {weights.map((weight, i) => (
                          <option key={i} value={weight}>
                            {weight}
                          </option>
                        ))}
                      </select>
              </div></div>

<div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="tattoos"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                Ethnic Background
                </label>
                <select
                  name="ethnic_background"
                  id="ethnic_background"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.ethnic_background}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Caucasian">Caucasian</option>
                  <option value="Hispanic/Latin">Hispanic/Latin</option>
                  <option value="Black/African-American">Black/African-American</option>
                  <option value="Asian">Asian</option>
                  <option value="Indian">Indian</option>
                  <option value="Indigenous">Indigenous</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="smoking"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Smoking
                </label>
                <select
                  name="smoking"
                  id="smoking"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.smoking}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Occasionaly">Occasionaly</option>

                </select>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="tattoos"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Tattoos
                </label>
                <select
                  name="tattoos"
                  id="tattoos"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.tattoos}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="A few">A few</option>
                </select>
              </div>
              <div>
                <label className="flex w-full min-h-[53px] bg-gray-900 py-[10px] px-4 text-lg justify-center items-center cursor-pointer rounded-md">
                  <span className="w-6 block mr-2">
                    <img src="images/gallery-icon.png" alt="gallery-icon" />
                  </span>
                  Edit Profile Image
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
                <div className="block mt-5">
                  
                    <div className="relative inline-block"> {image &&
                      <><img src={image} className="w-[64px]" />
                     <span
                    className="preview_close absolute top-0 transform
                     translate-x-[40%] -translate-y-[50%] right-0 object-contain text-xl z-[1] w-5
                      h-5 rounded-full bg-orange text-black cursor-pointer" 
                      onClick={(e)=>setImage('')}><IoCloseCircleSharp /></span></>}
                    </div>
                    </div>

              </div>

              
            </div>
            <div className="grid gap-y-4 md:gap-y-6 items-start content-start">

            <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="piercings"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Piercings
                </label>
                <select
                  name="piercings"
                  id="piercings"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.piercings}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>

                </select>
              </div>
              

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="circumcised"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Circuncised
                </label>
                <select
                  name="circumcised"
                  id="circumcised"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.circumcised}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>

                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="looks_important"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Looks
                </label>
                <select
                  name="looks_important"
                  id="looks_important"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.looks_important}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="low importance">Low Importance</option>
                  <option value="medium importance">
                    Medium Importance
                  </option>
                  <option value="very importance">Very Importance</option>
                  <option value="no">No</option>

                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="intelligence"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Intelligence
                </label>
                <select
                  name="intelligence"
                  id="intelligence"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.intelligence}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="low importance">Low Importance</option>
                  <option value="medium importance">
                    Medium Importance
                  </option>
                  <option value="very importance">Very Importance</option>
                  <option value="no">No</option>

                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="sexuality"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Sexuality
                </label>
                <select
                  name="sexuality"
                  id="sexuality"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.sexuality}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="straight">Straight </option>
                  <option value="bi-sexual">Bi-Sexual</option>
                  <option value="bi-curious">Bi-Curious</option>
                  <option value="gay">Gay</option>
                  <option value="pansexual">Pansexual</option>

                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="relationship_status"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Realation
                </label>
                <select
                  name="relationship_status"
                  id="relationship_status"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.relationship_status}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="monogamous">Monogamous</option>
                  <option value="open-minded"> Open-Minded</option>
                  <option value="swinger">Swinger</option>
                  <option value="polyamorous">Polyamorous</option>

                </select>
              </div>

              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="experience"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Experience
                </label>
                <select
                  name="experience"
                  id="experience"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.experience}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Curious">Curious</option>
                  <option value="Newbie"> Newbie</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>

                </select>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="Drinking"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Drinking
                </label>
                <select
                  name="Drinking"
                  id="Drinking"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.Drinking}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Not your business">Not your business</option>
                  <option value="Like a cactus"> Like a cactus</option>
                  <option value="I drink if offered">I drink if offered</option>
                  <option value="Like a fish">Like a fish</option>

                </select>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="Drugs"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Drugs
                </label>
                <select
                  name="Drugs"
                  id="Drugs"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.Drugs}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Not your business">Not your business</option>
                  <option value="No, thanks">No, thanks</option>
                  <option value="Yes, thanks">Yes, thanks</option>
                  <option value="More, thanks">More, thanks</option>

                </select>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="Drugs"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Relationship
                </label>
                <select
                  name="Relationship"
                  id="Relationship"
                  className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  value={userDetails.Relationship}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="FWB">FWB</option>
                  </select>
              </div>
              <div className="flex flex-wrap rounded-md input_field">
                <label
                  htmlFor="Language"
                  className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                >
                  Language
                </label>
                <input className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between" id="Language" type="text" placeholder="Languages"  onChange={handleChange} name="Language" value={userDetails.Language}></input>
              </div>

              {/* <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="age"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={userDetails.age}
                    onChange={handleChange}
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="looking_for"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Looking for
                  </label>
                  <select
                    name="looking_for"
                    id="looking_for"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.looking_for}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="couple">Couple</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap rounded-md input_field">
                  <label
                    htmlFor="country"
                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                  >
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                    value={userDetails.country}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {countries.map((country, i) => (
                      <option
                        key={i}
                        value={country.name}
                        className="font-semibold"
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                    </div>*/}

              <div>
                <label
                  htmlFor="intro_msg"
                  className="gradient w-full h-[53px] flex items-center justify-center xl:text-base text-white  font-normal leading-29 rounded-md mb-6"
                >
                  Introduction
                </label>
                <div className="p-[2px] gradient rounded-md">
                  <textarea
                    type="text"
                    id="intro_msg"
                    rows={4}
                    name="introduction"
                    value={userDetails.introduction}
                    onChange={handleChange}
                    className="bg-black-20 focus:outline-none focus-visible:none w-full border-gradient3 text-white font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 items-center flex justify-between"
                  ></textarea>
                </div>
              </div>
              
            </div>
          </div>
          <button
            className="gradient !py-3 w-full max-w-xs mx-auto md:mx-0 md:ml-auto !text-lg xl:!text-25px capitalize !font-bold mt-10 !flex justify-center items-center text-white rounded-xl primary_btn"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
        <div className="audit-dating__block relative py-16">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
            {/* <img
              src="images/avn_award2-1.png"
              alt="award"
              className="max-w-200px md:max-w-full"
            /> */}
            <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
              #Best Adult Dating Site
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetailsPage;
