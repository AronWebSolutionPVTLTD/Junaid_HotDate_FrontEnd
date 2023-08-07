import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [userInfo, setUserInfo] = useState({
    gender: "",
    looking_for: "",
    age: "",
    country: "",
  });
  const navigate = useNavigate();
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
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleJoinNow = (e) => {
    e.preventDefault();
    localStorage.setItem("userinfo", JSON.stringify(userInfo));
    navigate("/signup");
  };
  return (
    <section className="relative signup_section text-black">
      <div className="container mx-auto">
        <div className="p-[3px] gradient relative rounded-2xl sm:rounded-50px -mt-16 z-[99]">
          <div className="p-2 bg-black rounded-2xl sm:rounded-50px">
            <div className="grid lg:grid-cols-2 bg-black rounded-2xl sm:rounded-50px items-center ">
              <div className="py-8 px-3 sm:py-16 sm:px-10 xl:px-20 text-white">
                <p className="font-secondary_font text-3xl sm:text-5xl">
                  Sign Up Now!
                </p>
                <h3 className="text-2xl sm:text-35px font-bold">
                  Have some fun tonight!
                </h3>
                <div className="grid grid-cols-2 max-w-md mt-5">
                  <div>
                    <span className="block max-w-[42px] h-1 bg-white mb-1"></span>
                    <p className="text-lg sm:text-3xl font-bold">98,897,765</p>
                    <p className="text-sm sm:text-lg font-normal">HOT PHOTOS</p>
                  </div>
                  <div>
                    <span className="block max-w-[42px] h-1 bg-white mb-1"></span>
                    <p className="text-lg sm:text-3xl font-bold">3,594,914</p>
                    <p className="text-sm sm:text-lg font-normal">
                      CONNECTIONS
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 sm:p-10 rounded-2xl sm:rounded-50px h-full">
                <h3 className="text-3xl sm:text-5xl text-center font-secondary_font">
                  Find Your Date
                </h3>
                <form>
                  <div className="grid sm:grid-cols-2 gap-x-14 gap-y-2 mt-8">
                    <div>
                      <label className="block text-lg">I am a</label>
                      <div className="p-[1px] gradient rounded-xl">
                        <select
                          name="gender"
                          id="cars"
                          className="w-full bg-white rounded-xl p-2 px-3 outline-0"
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="male">M</option>
                          <option value="female">F</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg">Looking for</label>
                      <div className="p-[1px] gradient rounded-xl">
                        <select
                          name="looking_for"
                          id="cars"
                          className="w-full bg-white rounded-xl p-2 px-3 outline-0"
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="male">M</option>
                          <option value="female">F</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg">Age</label>
                      <div className="p-[1px] gradient rounded-xl">
                        <select
                          name="age"
                          id="cars"
                          className="w-full bg-white rounded-xl p-2 px-3 outline-0"
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="18">18</option>
                          <option value="above 18"> &gt; 18</option>
                          <option value="below 18"> &lt; 18 </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg">Country</label>
                      <div className="p-[1px] gradient rounded-xl">
                        <select
                          name="country"
                          id="cars"
                          className="w-full bg-white rounded-xl p-2 px-3 outline-0"
                          onChange={(e) => handleChange(e)}
                        >
                          {countries.map((country, i) => (
                            <option key={i} value={country.name}>
                              {country.name}
                            </option>
                          ))}

                          {/* <option value="saab">Australia</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    className="primary_btn w-full mt-8 !font-bold !text-2xl uppercase"
                    onClick={(e) => handleJoinNow(e)}
                  >
                    Join Now !
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
