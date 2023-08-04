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
  const { modelId, setModelId, searchquery, search } = useContext(Context);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/events?q=${searchquery}`);
    console.log(data.data);
    setEvent(data.data);
  };
  const getClubs = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_club?q=${searchquery}`
    );
    setClubs(data);
  };

  const getModels = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/models?q=${searchquery}`);

    setModels(data.data);
  };

  useEffect(() => {
    getEvent();
    getClubs();
    getModels();
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="mb-20">
        <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
          <h3 className="text-2xl sm:text-5xl leading-none font-bold">
            Travel
          </h3>
          <Link to="/travel-page" className="primary_btn !text-sm sm:!text-xl">
            View More
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </div>
      </div>
      {model.length === 0 ? (
        ""
      ) : (
        <div className="mb-5 sm:mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Models
            </h3>
            <Link className="primary_btn !text-sm sm:!text-xl">View More</Link>
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
