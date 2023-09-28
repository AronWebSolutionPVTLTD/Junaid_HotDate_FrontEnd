import React, { useContext, useEffect, useRef, useState } from "react";
import EventCard from "../db_components/EventCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const [event, setEvent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [recordsPerPage] = useState(8);
  const Wrapref = useRef(null);
  const { searchquery } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/events?q=${searchquery}`);
    const allEvents = data.data;
    const verifiedEvents = allEvents.filter((event) => event.isverify === true);
    const newestPostFirst = verifiedEvents.reverse();
    setEvent(newestPostFirst);
  };
  useEffect(() => {
    getEvent();
  }, [searchquery]);
  function handleClickOutside(event) {
    if (Wrapref.current && !Wrapref.current.contains(event.target)) {
      setFilterDropdown(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside,false);
    return () => {
      document.removeEventListener("click", handleClickOutside,false);
    };
  }, []);

  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = event.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      <div className="sticky top-0 bg-black z-[9] py-5 flex justify-between">
        <div className="flex flex-wrap gap-2 sm:gap-5 flex-1">
          <div className="gradient p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer">
            <div className="bg-black h-14 md:h-[100px] flex items-center justify-center rounded-t-3xl md:rounded-t-50px">
              <h3 className="px-5 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold">
                Hot Dates
              </h3>
            </div>
          </div>
          <div className="bg-white-shade p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer">
            <div className="bg-black justify-center h-14 md:h-[100px] flex items-center rounded-t-3xl md:rounded-t-50px">
              <h3 className="px-5 rounded-t-50px bg-transparent text-white-shade text-base sm:text-3xl md:text-5xl font-bold">
                Parties
              </h3>
            </div>
          </div>
          <div className="flex-none grid items-center">
            <div className="w-5 sm:w-6">
              <img
                src="images/add-icon.png"
                alt="add-icon"
                className="max-w-full cursor-pointer"
                onClick={() => navigate("/create_event")}
              />
            </div>
            <div className="w-5 sm:w-6 relative">
              <img
                src="images/filter-icon.png"
                alt="filter-icon"
                className="max-w-full cursor-pointer"
                onClick={()=>setFilterDropdown(!filterDropdown)}
              />
              <div className={`filter_dropdown absolute w-[250px] right-0 bg-[#2A2D37] top-full ${filterDropdown ? 'Active' : ''}`}>
                <form>
                <div className="filter_dropbox">
                  <div className="filter_item">
                  <input type="checkbox" id="private_event" name="private_event" />
                    <label className="toggle_switch" htmlFor="private_event">
                      <span className="toggle_circle"></span>
                    </label>
                    <span>Private Event</span>
                  </div>
                  <div className="filter_item">
                  <input type="checkbox" id="public_event" name="public_event" />
                    <label className="toggle_switch" htmlFor="public_event">
                      <span className="toggle_circle"></span>
                    </label>
                    <span>Public Event</span>
                  </div>
                </div>
                <div className="my-4 mb-6">
                  <label for="cars">Open For :</label>
                  <select name="open_for" id="open_for" className="w-full mt-2 py-2 px-3 border border-black bg-[#2A2D37] rounded-[5px]">
                    <optgroup label="Single">
                      <option value="single_male">Male</option>
                      <option value="single_female">Female</option>
                      <option value="single_transgender">Transgender</option>
                    </optgroup>
                    <optgroup label="Couple">
                      <option value="couple">Couple</option>
                    </optgroup>
                  </select>
                </div>
                <div className="distance_filter">
                  <label htmlFor="distance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCE</label>
                  <input type="range" className="w-full mb-6 h-[3px]" id="distance" name="distance" min={0} max={50} />
                </div>
                <div>
                  <label htmlFor="date">DATE</label>
                  <input type="date" className="bg-transparent mt-2 border border-black py-2 px-3 w-full" placeholder="Date"  />
                </div>
                <div className="mt-5">
                  <label htmlFor="location">LOCATION</label>
                  <input type="text" id="location" className="outline-none rounded-[30px] mt-2 bg-white text-black border border-black py-2 px-3 w-full" placeholder=""  />
                  <input type="submit" id="submit" className="outline-none rounded-[30px] mt-2 bg-[#0075ff] text-white border-none py-2 px-3 w-full cursor-pointer" value="Ok"  />
                </div>
                </form>
              </div>
            </div>
            <div className="w-5 sm:w-6">
              <img
                src="images/bell-icon.png"
                alt="bell-icon"
                className="max-w-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentPost.map((el, i) => (
          <EventCard key={i} event={el} />
        ))}
      </div>
      <Pagination
        totalPosts={event.length}
        postsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default EventPage;
