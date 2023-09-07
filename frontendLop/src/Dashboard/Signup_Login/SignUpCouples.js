import React from "react";
import "./signup.css";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const SignUpCouple = () => {
  const navigate = useNavigate();
  const { userId } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [person1, setPerson1] = useState({
    Month: "",
    Day: "",
    Year: "",
  });
  console.log(person1, "p1dob");
  const [person2, setPerson2] = useState({
    Month_p2: "",
    Day_p2: "",
    Year_p2: "",
  });
  console.log(person2, "p2dob");
  const [bodyhair, SetBodyHair] = useState([]);
  const [bodyhair2, SetBodyHair2] = useState([]);
  const [interest, setInterest] = useState({
    male: [], // Initialize the "male" key as an empty array
    male_male: [],
    female: [],
    female_female: [],
    male_female: [],
    transgender: [],
  });
  const [form, setForm] = useState({
    body_type: "",
    height: "",
    weight: "",
    ethnic: "",
    smoking: "",
    piercing: "",
    tattoo: "",
    circumcised: "",
    looks: "",
    intelligence: "",
    sexuality: "",
    relationship: "",
    experience: "",
    image: "",
    slogan: "",
    introduction: "",
  });

  const [form2, setForm2] = useState({
    body_type_2: "",
    height_2: "",
    weight_2: "",
    ethnic_2: "",
    smoking_2: "",
    piercing_2: "",
    tattoo_2: "",
    circumcised_2: "",
    looks_2: "",
    intelligence_2: "",
    sexuality_2: "",
    relationship_2: "",
    experience_2: "",
  });
  const ref = useRef(null);
  const weights = [
    "36 kg (79.37 lbs)",
    "37 kg (81.57 lbs)",
    "38 kg (83.77 lbs)",
    "39 kg (85.98 lbs)",
    "40 kg (88.18 lbs)",
    "41 kg (90.39 lbs)",
    "42 kg (92.59 lbs)",
    "43 kg (94.80 lbs)",
    "44 kg (97.00 lbs)",
    "45 kg (99.21 lbs)",
    "46 kg (101.41 lbs)",
    "47 kg (103.62 lbs)",
    "48 kg (105.82 lbs)",
    "49 kg (108.02 lbs)",
    "50 kg (110.23 lbs)",
    "51 kg (112.43 lbs)",
    "52 kg (114.64 lbs)",
    "53 kg (116.84 lbs)",
    "54 kg (119.05 lbs)",
    "55 kg (121.25 lbs)",
    "56 kg (123.46 lbs)",
    "57 kg (125.66 lbs)",
    "58 kg (127.87 lbs)",
    "59 kg (130.07 lbs)",
    "60 kg (132.28 lbs)",
    "61 kg (134.48 lbs)",
    "62 kg (136.69 lbs)",
    "63 kg (138.89 lbs)",
    "64 kg (141.10 lbs)",
    "65 kg (143.30 lbs)",
    "66 kg (145.51 lbs)",
    "67 kg (147.71 lbs)",
    "68 kg (149.92 lbs)",
    "69 kg (152.12 lbs)",
    "70 kg (154.33 lbs)",
    "71 kg (156.53 lbs)",
    "72 kg (158.74 lbs)",
    "73 kg (160.94 lbs)",
    "74 kg (163.15 lbs)",
    "75 kg (165.35 lbs)",
    "76 kg (167.56 lbs)",
    "77 kg (169.76 lbs)",
    "78 kg (171.97 lbs)",
    "79 kg (174.17 lbs)",
    "80 kg (176.38 lbs)",
    "81 kg (178.58 lbs)",
    "82 kg (180.79 lbs)",
    "83 kg (183.00 lbs)",
    "84 kg (185.20 lbs)",
    "85 kg (187.41 lbs)",
    "86 kg (189.61 lbs)",
    "87 kg (191.82 lbs)",
    "88 kg (194.02 lbs)",
    "89 kg (196.23 lbs)",
    "90 kg (198.43 lbs)",
    "91 kg (200.64 lbs)",
    "92 kg (202.84 lbs)",
    "93 kg (205.05 lbs)",
    "94 kg (207.25 lbs)",
    "95 kg (209.46 lbs)",
    "96 kg (211.66 lbs)",
    "97 kg (213.87 lbs)",
    "98 kg (216.07 lbs)",
    "99 kg (218.28 lbs)",
    "100 kg (220.48 lbs)",
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
  const ethnic = [
    "Caucasian",

    "hispanic/latin",

    "black/african-american",

    "asian",

    "indian",

    "indigenous",

    "middle eastern",

    "other",
  ];
  const bodytype = [
    "Slim",

    "athletic",

    "average",

    "nicely shaped",

    "more of me to love",

    "huggable and heavy",
  ];
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

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  // Generate an array of days (1-31)
  const days = Array.from({ length: 31 }, (_, i) => {
    const dayValue = (i + 1).toString().padStart(2, "0");
    return { value: dayValue, label: (i + 1).toString() };
  });
  // Generate an array of years (adjust the range as needed)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => {
    const yearValue = (currentYear - i).toString();
    return { value: yearValue, label: yearValue };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
        setIsActive2(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenOptions = (e) => {
    setIsActive(true);
  };

  //   _____DOB handler____________
  const handlechange = (e) => {
    const { name, value } = e.target;
    setPerson1({ ...person1, [name]: value });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);

  const handleBodyhair = (e) => {
    const data = bodyhair;
    if (data.includes(e.target.value)) {
      const filter_data = data.filter((el) => el !== e.target.value);
      SetBodyHair(filter_data);
    } else {
      data.push(e.target.value);
      SetBodyHair(data);
    }
  };
  const handleimage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("image", file);
    const { data } = await axios.put(
      `${BASE_URL}/api/upload_image/${userId}`,
      formData,
      config
    );
    if (data) {
      toast.success("Image Uploaded");
    } else {
      toast.error("failed to Upload Image");
    }
  };
console.log(userId)
  const handleInterest = (event) => {
    const { name, value, checked } = event.target;

    const updatedInterest = { ...interest };

    if (checked) {
      updatedInterest[name] = [...updatedInterest[name], value];
    } else {
      updatedInterest[name] = updatedInterest[name]?.filter(
        (item) => item !== value
      );
    }

    setInterest(updatedInterest);
  };

  //   console.log(interest);
  console.log(form, "preson111111111111111111111111");

  //   ___________________PERSON 2_______________________________________

  const handleOpenOptions2 = (e) => {
    setIsActive2(true);
  };

  //   _____DOB handler for person 2____________
  const handlechange2 = (e) => {
    const { name, value } = e.target;
    setPerson2({ ...person2, [name]: value });
  };

  const handleBodyhair_Person2 = (e) => {
    const data = bodyhair2;
    if (data.includes(e.target.value)) {
      const filter_data = data.filter((el) => el !== e.target.value);
      SetBodyHair2(filter_data);
    } else {
      data.push(e.target.value);
      SetBodyHair2(data);
    }
  };

  const handleInput_person2 = (e) => {
    const { name, value } = e.target;
    setForm2({ ...form2, [name]: value });
  };
  console.log(form2, "person2222222222222222");

  console.log(bodyhair2);

  //  ________________________________Api fetching_________________________

  const { Month, Day, Year } = person1;
  const date = new Date(`${Year}-${Month}-${Day}`);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to month because it's zero-indexed
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  const formattedDate1 = `${year}/${month}/${day}`;

  const { Month_p2, Day_p2, Year_p2 } = person2;
  const date1 = new Date(`${Year_p2}-${Month_p2}-${Day_p2}`);
  const year1 = date1.getFullYear();
  const month1 = (date1.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to month because it's zero-indexed
  const day1 = date1
    .getDate()
    .toString()
    .padStart(2, "0");
  const formattedDate2 = `${year1}/${month1}/${day1}`;

  const handleSave = async () => {
    const couple = {
      person1: {
        DOB: formattedDate1,
        body_hair: bodyhair,
        height: form.height,
        weight: form.weight,
        body_type: form.body_type,
        ethnic_background: form.ethnic,
        smoking: form.smoking,
        tattoos: form.tattoo,
        piercings: form.piercing,
        circumcised: form.circumcised,
        looks_important: form.looks,
        intelligence: form.intelligence,
        sexuality: form.sexuality,
        relationship_status: form.relationship,
        experience: form.experience,
      },

      person2: {
        DOB: formattedDate2,
        body_hair: bodyhair2,
        height: form2.height_2,
        weight: form2.weight_2,
        body_type: form2.body_type_2,
        ethnic_background: form2.ethnic_2,
        smoking: form2.smoking_2,
        tattoos: form2.tattoo_2,
        piercings: form2.piercing_2,
        circumcised: form2.circumcised_2,
        looks_important: form2.looks_2,
        intelligence: form2.intelligence_2,
        sexuality: form2.sexuality_2,
        relationship_status: form2.relationship_2,
        experience: form2.experience_2,
      },
    };

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("interests", JSON.stringify(interest));
    formData.append("slogan", form.slogan);
    formData.append("introduction", form.introduction);
    formData.append("couple", JSON.stringify(couple));

    try {
      const config = {
        headers: {
          Content_Type: "multipart/form-data",
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/update`,
        formData,
        config
      );

      if (data) {
        navigate("/verify_email");
        setForm({
          body_type: "",
          height: "",
          weight: "",
          ethnic: "",
          smoking: "",
          piercing: "",
          tattoo: "",
          circumcised: "",
          looks: "",
          intelligence: "",
          sexuality: "",
          relationship: "",
          experience: "",
          image: "",
          slogan: "",
          introduction: "",
        });
        setForm2({
          body_type_2: "",
          height_2: "",
          weight_2: "",
          ethnic_2: "",
          smoking_2: "",
          piercing_2: "",
          tattoo_2: "",
          circumcised_2: "",
          looks_2: "",
          intelligence_2: "",
          sexuality_2: "",
          relationship_2: "",
          experience_2: "",
        });
        setPerson1({
          Month: "",
          Day: "",
          Year: "",
        });
        setPerson2({
          Month_p2: "",
          Day_p2: "",
          Year_p2: "",
        });
        SetBodyHair([]);
        SetBodyHair2([]);
        setInterest({
          male: [],
          male_male: [],
          female: [],
          female_female: [],
          male_female: [],
          transgender: [],
        });
      } else {
        toast.error("cannot update");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-black-20 text-white grid content-between">
      <div className="overflow-hidden">
        {/* <Header /> */}
        <div className="sign_up__block pt-65px mt-40">
          <div className="container mx-auto relative z-1">
            <div className="sign-up__header pt-10 pb-20 bg-white flex flex-col justify-center items-center rounded-t-3xl md:rounded-t-86">
              <p className="text-2xl sm:text-3xl xl:text-40px text-black  font-normal">
                Sign Up
              </p>
              <p className="text-lg text-black  font-body_font">
                Get Started it’s easy
              </p>
            </div>
            <div className="sign-up__body px-5 lg:px-10 rounded-3xl md:rounded-t-58 md:rounded-r-58 bg-black mt-[-50px] md:rounded-58 relative  border-b-2 border-t-[1px] border-orange">
              <form>
                <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6 mt-10">
                  PHOTOS
                </h2>
                <div>
                  <label htmlFor="add_photos">
                    <input
                      id="add_photos"
                      type="file"
                      className="hidden"
                      name="image"
                      onChange={handleimage}
                    />
                    <span
                      className="primary_btn gradient  px-8 bg-gradient-to-r from-[#F79220]
 to-[#F94A2B] rounded-lg py-2"
                    >
                      Add Photos
                    </span>
                  </label>
                  <span className="px-5">jpg/png, max 25MB/Photo</span>
                </div>
              </form>

              <div className="my-4">
                <h1 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold ">
                  INTERESTS
                </h1>

                <form>
                  <div className="grid grid-cols-3 mb-5">
                    <span className="text-sm font-light ">
                      Select all that apply
                    </span>
                    <span className="text-sm font-normal text-center">
                      SWINGERS
                    </span>
                    <span className="text-sm font-normal text-center">
                      HOOKUPS / MEETUPS
                    </span>
                  </div>

                  <div className="grid grid-cols-3 mt-3">
                    <span className="text-sm font-semi-bold">
                      Couple Male/Female
                    </span>

                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers"
                        name="male_female"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.male_female.includes("swingers")}
                      />
                      <label htmlFor="swingers" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups"
                        name="male_female"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.male_female.includes("hookup")}
                      />
                      <label htmlFor="Hookups" className="check__box"></label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-3">
                    <span className="text-sm font-semi-bold">
                      Couple Female/Female
                    </span>

                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers1"
                        name="female_female"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.female_female.includes("swingers")}
                      />
                      <label htmlFor="swingers1" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups1"
                        name="female_female"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.female_female.includes("hookup")}
                      />
                      <label htmlFor="Hookups1" className="check__box"></label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-3">
                    <span className="text-sm font-semi-bold">
                      Couple Male/Male
                    </span>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers2"
                        name="male_male"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.male_male.includes("swingers")}
                      />
                      <label htmlFor="swingers2" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups2"
                        name="male_male"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.male_male.includes("hookup")}
                      />
                      <label htmlFor="Hookups2" className="check__box"></label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-3">
                    <span className="text-sm font-semi-bold">Female</span>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers3"
                        name="female"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.female.includes("swingers")}
                      />
                      <label htmlFor="swingers3" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups3"
                        name="female"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.female.includes("hookup")}
                      />
                      <label htmlFor="Hookups3" className="check__box"></label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-3">
                    <span className="text-sm font-semi-bold">Male</span>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers4"
                        name="male"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.male.includes("swingers")}
                      />
                      <label htmlFor="swingers4" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups4"
                        name="male"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.male.includes("hookup")}
                      />
                      <label htmlFor="Hookups4" className="check__box"></label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-3 ">
                    <span className="text-sm font-semi-bold">Transgender</span>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="swingers5"
                        name="transgender"
                        value="swingers"
                        onChange={handleInterest}
                        checked={interest.transgender.includes("swingers")}
                      />
                      <label htmlFor="swingers5" className="check__box"></label>
                    </div>
                    <div className="it_checkbox">
                      <input
                        type="checkbox"
                        id="Hookups5"
                        name="transgender"
                        value="hookup"
                        onChange={handleInterest}
                        checked={interest.transgender.includes("hookup")}
                      />
                      <label htmlFor="Hookups5" className="check__box"></label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <h1 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold ">
                  TEXTS
                </h1>
                <div className="">
                  <input
                    placeholder="Your dummmy slogan"
                    className="w-full border-2 border-orange rounded-[5px] h-[40px] text-black px-5 font-light"
                    type="text"
                    name="slogan"
                    id="slogan"
                    value={form.slogan}
                    onChange={handleInput}
                    maxLength={100}
                  />
                  <h1 className="font-light text-sm py-2">
                    {100 - form.slogan.length} characters left
                  </h1>
                </div>
                <div>
                  <textarea
                    placeholder="Introduction"
                    className="w-full border-2 border-orange h-[80px] rounded-[5px] text-black px-5 py-6 font-light"
                    type="text"
                    name="introduction"
                    value={form.introduction}
                    onChange={handleInput}
                    maxLength={500}
                  />
                  <h1 className="font-light text-sm py-2">
                    {500 - form.introduction.length} characters left
                  </h1>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold ">
                    DETAILS
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* ____________________________FORM 1_________________________ */}
                  <form className="my-10">
                    <p className="text-end">Person 1</p>
                    <div className="bg-[#202020] grid grid-cols-2   px-10 pt-5">
                      <p className="">Birthday *</p>
                      <div className="text-end">
                        <select
                          className="bg-[#202020]"
                          name="Month"
                          value={person1.Month}
                          onChange={handlechange}
                        >
                          <option value="">Month</option>
                          {months.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>

                        <select
                          className="bg-[#202020]"
                          name="Day"
                          value={person1.Day}
                          onChange={handlechange}
                        >
                          <option value="">Day</option>
                          {days.map((day) => (
                            <option key={day.value} value={day.value}>
                              {day.label}
                            </option>
                          ))}
                        </select>

                        <select
                          className="bg-[#202020]"
                          name="Year"
                          value={person1.Year}
                          onChange={handlechange}
                        >
                          <option value="">Year</option>
                          {years.map((year) => (
                            <option key={year.value} value={year.value}>
                              {year.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#202020] flex justify-between px-10 pt-5">
                      <span>Body Hair</span>
                      <div
                        ref={ref}
                        className={`select_ctmBox ${isActive ? "active" : ""}`}
                      >
                        <div
                          className="select_label"
                          name="bodyhair"
                          onClick={handleOpenOptions}
                        >
                          {bodyhair.length === 0
                            ? "Please select"
                            : bodyhair.map((el) => <span>{el},</span>)}
                        </div>

                        <div className="select_options">
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
                    </div>

                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Body Type</span>
                      <select
                        className="bg-[#202020] text-white text-end "
                        name="body_type"
                        value={form.body_type}
                        onChange={handleInput}
                      >
                        <option>Please select</option>
                        {bodytype.map((body, i) => (
                          <option key={i} value={body}>
                            {body}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Ethnic background</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="ethnic"
                        value={form.ethnic}
                        onChange={handleInput}
                      >
                        <option>Please select</option>
                        {ethnic.map((ethnic, i) => (
                          <option key={i} value={ethnic}>
                            {ethnic}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Height</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="height"
                        value={form.height}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        {heights.map((height, i) => (
                          <option key={i} value={height}>
                            {height}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Weight</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="weight"
                        value={form.weight}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        {weights.map((weight, i) => (
                          <option key={i} value={weight}>
                            {weight}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Smoking</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="smoking"
                        value={form.smoking}
                        onChange={handleInput}
                      >
                        <option>Please Select </option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        <option value="occasionaly">Occasionaly</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Piercings</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="piercing"
                        value={form.piercing}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="no"> No</option>
                        <option value="yes"> Yes</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Tattoos</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="tattoo"
                        value={form.tattoo}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="no">No</option>
                        <option value="yes"> Yes</option>
                        <option value="a few">A Few</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Circumcised</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="circumcised"
                        value={form.circumcised}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Looks are important?</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="looks"
                        value={form.looks}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="low importance">Low Importance</option>
                        <option value="medium importance">
                          Medium Importance
                        </option>
                        <option value="very importance">Very Importance</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Intelligence is important?</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="intelligence"
                        value={form.intelligence}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="low importance">Low Importance</option>
                        <option value="medium importance">
                          Medium Importance
                        </option>
                        <option value="very importance">Very Importance</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Sexuality</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="sexuality"
                        value={form.sexuality}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="straight">Straight </option>
                        <option value="bi-sexual">Bi-Sexual</option>
                        <option value="bi-curious">Bi-Curious</option>
                        <option value="gay">Gay</option>
                        <option value="pansexual">Pansexual</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Relationship Orientation</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="relationship"
                        value={form.relationship}
                        onChange={handleInput}
                      >
                        <option>Please Select</option>
                        <option value="monogamous">Monogamous</option>
                        <option value="open-minded"> Open-Minded</option>
                        <option value="swinger">Swinger</option>
                        <option value="polyamorous">Polyamorous</option>
                      </select>
                    </div>
                    <div className="bg-[#202020]  px-10 py-5 ">
                      <div>
                        <span>Experience Level</span>
                      </div>

                      <div className="flex  gap-24 text-end py-4">
                        <label>
                          <input
                            type="radio"
                            name="experience"
                            id="curious"
                            value="curious"
                            onChange={handleInput}
                            checked={form.experience === "curious"}
                          />
                          Curious
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="experience"
                            id="newbie"
                            value="newbie"
                            onChange={handleInput}
                            checked={form.experience === "newbie"}
                          />
                          Newbie
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="experience"
                            id="intermediate"
                            value="intermediate"
                            onChange={handleInput}
                            checked={form.experience === "intermediate"}
                          />
                          Intermediate
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="experience"
                            id="advanced"
                            value="advanced"
                            onChange={handleInput}
                            checked={form.experience === "advanced"}
                          />
                          Advanced
                        </label>
                      </div>
                    </div>
                  </form>
                  {/* ____________________________FORM 2_________________________ */}

                  <form className="my-10">
                    <p className="text-end">Person 2</p>
                    <div className="bg-[#202020] grid grid-cols-2   px-10 pt-5">
                      <p className="">Birthday *</p>
                      <div className="text-end">
                        <select
                          className="bg-[#202020]"
                          name="Month_p2"
                          value={person2.Month_p2}
                          onChange={handlechange2}
                        >
                          <option value="">Month</option>
                          {months.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>

                        <select
                          className="bg-[#202020]"
                          name="Day_p2"
                          value={person2.Day_p2}
                          onChange={handlechange2}
                        >
                          <option value="">Day</option>
                          {days.map((day) => (
                            <option key={day.value} value={day.value}>
                              {day.label}
                            </option>
                          ))}
                        </select>

                        <select
                          className="bg-[#202020]"
                          name="Year_p2"
                          value={person2.Year_p2}
                          onChange={handlechange2}
                        >
                          <option value="">Year</option>
                          {years.map((year) => (
                            <option key={year.value} value={year.value}>
                              {year.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="bg-[#202020] flex justify-between px-10 pt-5">
                      <span>Body Hair</span>
                      <div
                        ref={ref}
                        className={`select_ctmBox ${isActive2 ? "active" : ""}`}
                      >
                        <div
                          className="select_label"
                          name="bodyhair_2"
                          onClick={handleOpenOptions2}
                        >
                          {bodyhair2.length === 0
                            ? " Please select"
                            : bodyhair2.map((el, i) => (
                                <span key={i}>{el},</span>
                              ))}
                        </div>

                        <div className="select_options">
                          {hair.map((el, i) => (
                            <div className="optionBox" key={i}>
                              <span>{el.name}</span>
                              <div className="input_option">
                                <input
                                  id={`el.label ${i}`}
                                  type="checkbox"
                                  name={el.name}
                                  value={el.name}
                                  onChange={handleBodyhair_Person2}
                                />
                                <label htmlFor={`el.label ${i}`}></label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Body Type</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="body_type_2"
                        value={form2.body_type_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please select</option>
                        {bodytype.map((body, i) => (
                          <option key={i} value={body}>
                            {body}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Ethnic background</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="ethnic_2"
                        value={form2.ethnic_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please select</option>
                        {ethnic.map((ethnic) => (
                          <option value={ethnic}>{ethnic}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Height</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="height_2"
                        value={form2.height_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select </option>
                        {heights.map((height) => (
                          <option value={height}>{height}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Weight</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="weight_2"
                        value={form2.weight_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select </option>
                        {weights.map((weight) => (
                          <option value={weight}>{weight}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Smoking</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="smoking_2"
                        value={form2.smoking_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select </option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        <option value="occasionaly">Occasionaly</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Piercings</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="piercing_2"
                        value={form2.piercing_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="no"> No</option>
                        <option value="yes"> Yes</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Tattoos</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="tattoo_2"
                        value={form2.tattoo_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="no">No</option>
                        <option value="yes"> Yes</option>
                        <option value="a few">A Few</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Circumcised</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="circumcised_2"
                        value={form2.circumcised_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Looks are important?</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="looks_2"
                        value={form2.looks_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="low importance">Low Importance</option>
                        <option value="medium importance">
                          Medium Importance
                        </option>
                        <option value="very importance">Very Importance</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Intelligence is important?</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="intelligence_2"
                        value={form2.intelligence_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="low importance">Low Importance</option>
                        <option value="medium importance">
                          Medium Importance
                        </option>
                        <option value="very importance">Very Importance</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Sexuality</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="sexuality_2"
                        value={form2.sexuality_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select </option>
                        <option value="straight">Straight </option>
                        <option value="bi-sexual">Bi-Sexual</option>
                        <option value="bi-curious">Bi-Curious</option>
                        <option value="gay">Gay</option>
                        <option value="pansexual">Pansexual</option>
                      </select>
                    </div>
                    <div className="bg-[#202020] grid grid-cols-2 px-10 pt-5">
                      <span>Relationship Orientation</span>
                      <select
                        className="bg-[#202020] text-white text-end"
                        name="relationship_2"
                        value={form2.relationship_2}
                        onChange={handleInput_person2}
                      >
                        <option>Please Select</option>
                        <option value="monogamous">Monogamous</option>
                        <option value="open-minded"> Open-Minded</option>
                        <option value="swinger">Swinger</option>
                        <option value="polyamorous">Polyamorous</option>
                      </select>
                    </div>
                    <div className="bg-[#202020]  px-10 py-5 ">
                      <div>
                        <span>Experience Level</span>
                      </div>

                      <div className="flex  gap-24 text-end py-4">
                        <label>
                          <input
                            type="radio"
                            name="experience_2"
                            id="curious"
                            value="curious"
                            checked={form2.experience_2 === "curious"}
                            onChange={handleInput_person2}
                          />
                          Curious
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="experience_2"
                            id="newbie"
                            value="newbie"
                            checked={form2.experience_2 === "newbie"}
                            onChange={handleInput_person2}
                          />
                          Newbie
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="experience_2"
                            id="intermediate"
                            value="intermediate"
                            checked={form2.experience_2 === "intermediate"}
                            onChange={handleInput_person2}
                          />
                          Intermediate
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="experience_2"
                            id="advanced"
                            value="advanced"
                            checked={form2.experience_2 === "advanced"}
                            onChange={handleInput_person2}
                          />
                          Advanced
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center my-5">
                  <button
                    className="px-8 bg-gradient-to-r from-[#F79220] to-[#F94A2B] rounded-lg py-2 w-[50%] mx-auto"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="audit-dating__block relative my-16">
              <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
                <img
                  src="images/avn_award2-1.png"
                  alt="award"
                  className="max-w-200px md:max-w-full"
                />
                <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
                  #1 Adult Dating Site
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignUpCouple;
