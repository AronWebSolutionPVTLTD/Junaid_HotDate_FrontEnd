import React, { useContext, useEffect, useRef, useState } from "react";
import EventCard from "../db_components/EventCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";
import ClubPage from "./ClubPage";
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";

const EventPage = () => {
  const [event, setEvent] = useState([]);
  const [events, setNew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [recordsPerPage] = useState(8);
  const Wrapref = useRef(null);
  const { searchquery } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    public: false,
    private: false,
    open_for: "",
    location: "",
    date: "",
    distance: "",

  })

  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/events?q=${searchquery}`);
    const allEvents = data.data;
    const verifiedEvents = allEvents.filter((event) => event.isverify === true);
    const newestPostFirst = verifiedEvents.reverse();
    setEvent(newestPostFirst);
    setNew(newestPostFirst)
  };




  useEffect(() => {
    getEvent();
  }, [searchquery]);



console.log(event,"asfbbbA")
  const handleChange = (e) => {
    const { value, name } = e.target;
    // setFilter({...filter,[name]:value})
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
   
  }

  const Handlepublicprivate = (e) => {
    const { checked, name } = e.target;

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
   
  }

  const handleCheck = (e) => {
 
    e.preventDefault()
    let filtered = events;
  
    if(filter.public && filter.private){
      setEvent(filtered)
    }
    else{

    if (filter.public) {
      filtered = filtered.filter((event) => event.type === "Public Event");
      console.log(filtered)
    }
    if (filter.private) {
      filtered = filtered.filter((event) => event.type === "Private Event");
 
    }
    if (filter.open_for) {
    let data=[];
    filtered.forEach((event) => event.accepted_type.map((el)=> {
    if(el === filter.open_for){
      data.push(event);
    }}
    ));
    filtered = data;
    }
    if (filter.location) {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(filter.location.toLowerCase())
      );
    }
    if (filter.date) {
    
      filtered = filtered.filter((event) => {
        const formattedDate = `${event.Startdate.split('T')[0]}`;
        return formattedDate === filter.date;

      }
      )
    }
   
    setEvent(filtered);
  }
    setFilterDropdown(false)
  }




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
                onClick={() => setFilterDropdown(!filterDropdown)}
              />
              <div className={`filter_dropdown absolute w-[250px] right-0 bg-[#2A2D37] top-full ${filterDropdown ? 'Active' : ''}`}>
                <form>
                  <div className="filter_dropbox">
                    <div className="filter_item">
                      <input type="checkbox"
                        id="private"
                        checked={filter.private}
                        name="private"
                        onChange={Handlepublicprivate}
                      />

                      <label className="toggle_switch" htmlFor="private">
                        <span className="toggle_circle"></span>
                      </label>
                      <span>Private Event</span>
                    </div>

                    <div className="filter_item">
                      <input type="checkbox"
                        id="public"
                        name="public"
                        checked={filter.public}
                        onChange={Handlepublicprivate}
                      />
                      <label className="toggle_switch" htmlFor="public">
                        <span className="toggle_circle"></span>
                      </label>
                      <span>Public Event</span>
                    </div>
                  </div>
                  <div className="my-4 mb-6">
                    <label for="cars">Open For :</label>
                    <select name="open_for" id="open_for"
                      value={filter.open_for}
                      onChange={handleChange}
                      className="w-full mt-2 py-2 px-3 border border-black bg-[#2A2D37] rounded-[5px]">
                      <optgroup label="Single">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="t">Transgender</option>
                      </optgroup>
                      <optgroup label="Couple">
                        <option value="mm">MaleMale</option>
                        <option value="mf">MaleFemale</option>
                        <option value="ff">FemaleFemale</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="distance_filter">
                    <label htmlFor="distance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCE</label>
                    <input type="range" className="w-full mb-6 h-[3px]" id="distance" name="distance"
                      value={filter.distance}
                      onChange={handleChange}
                      min={0} max={50} />
                  </div>
                  <div>
                    <label htmlFor="date">DATE</label>
                    <input type="date" className="bg-transparent mt-2 border border-black py-2 px-3 w-full"
                      placeholder="Date" id="date" value={filter.date} name="date" onChange={handleChange} />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="location">LOCATION</label>
                    <input type="text" id="location" className="outline-none rounded-[30px] mt-2 bg-white text-black border border-black py-2 px-3 w-full" placeholder=""
                      name="location"
                      value={filter.location}
                      onChange={handleChange} />
                    <input type="submit" id="submit"
                      className="outline-none rounded-[30px] mt-2 bg-[#0075ff] text-white border-none py-2 px-3 w-full cursor-pointer"
                      value="Ok"
                      onClick={handleCheck} />
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
