import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "../db_components/EventCard";
import ClubCard from "../db_components/ClubCard";
import TravelCard from "../db_components/TravelCard";
import axios from "axios";
import { Context } from "../../../Context/context";

const HomePage = () => {
  const [event, setEvent] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [model, setModels] = useState([]);
  // const [savedCred,setSavedCred]=useState({long:"",lat:""})
  const [travel, setTravel] = useState([]);
  const { modelId, setModelId, searchquery, search ,savedCred,setSavedCred} = useContext(Context);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
 useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setSavedCred({long:longitude,lat:latitude})
      
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
},[])



console.log(savedCred);



  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/events?q=${searchquery}`);
    const allEvents = data.data;
    const verifyEvents = allEvents.filter((event) => event.isverify === true);
    setEvent(verifyEvents.reverse());

    verifyEvents.map((el)=> console.log(el?.location))


  };
  const getClubs = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_club?q=${searchquery}`
    );
    const verifiedClubs = data.filter((club) => club.isverify === true);
    setClubs(verifiedClubs.reverse());
  };

  const getTravel = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_travel?q=${searchquery}`
    );
    const verifyTravel = data.filter((travel) => travel.isVerify === true);
    setTravel(verifyTravel.reverse());
  };

  const getModels = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/models?q=${searchquery}`);
    setModels(data.data);
  };

  useEffect(() => {
    getEvent();
    getClubs();
    getModels();
    getTravel();
  }, [searchquery]);

 
  return (
    <div className="home_page bg-black py-8 px-6 rounded-2xl">
      {/* event section starts */}
      {event.length === 0 ? (
        ""
      ) : (
        <div className="mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Events
            </h3>
            <Link to="/event-page" className="primary_btn !text-sm sm:!text-xl">
              View More
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
            {event.slice(0, 6).map((el, i) => (
              <EventCard key={i} event={el} />
            ))}
          </div>
        </div>
      )}

      {/* clubs section starts */}
      {clubs.length === 0 ? (
        ""
      ) : (
        <div className="mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Clubs
            </h3>
            <Link to="/club-page" className="primary_btn !text-sm sm:!text-xl">
              View More
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {clubs.slice(0, 6).map((el, i) => (
              <ClubCard key={i} clubs={el} />
            ))}
          </div>
        </div>
      )}

      {/* travel section starts  */}
      {travel.length === 0 ? (
        ""
      ) : (
        <div className="mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Travel
            </h3>
            <Link
              to="/travel-page"
              className="primary_btn !text-sm sm:!text-xl"
            >
              View More
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travel.slice(0, 6).map((el, i) => (
              <TravelCard key={i} travel={el} />
            ))}
          </div>
        </div>
      )}
      {model.length === 0 ? (
        ""
      ) : (
        <div className="mb-5 sm:mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Models
            </h3>
            <Link className="primary_btn !text-sm sm:!text-xl" to="/model-page">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {model.map((el, i) => (
              <div
                className="cursor-pointer rounded-2xl"
                key={i}
                onClick={() => {
                  setModelId(el._id);
                  navigate("/member-models");
                }}
              >
                <img
                  src={el.images[0]}
                  alt="model"
                  className="rounded-2xl aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
