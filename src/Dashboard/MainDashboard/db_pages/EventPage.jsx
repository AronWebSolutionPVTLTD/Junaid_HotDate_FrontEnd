import React, { useContext, useEffect, useRef, useState } from "react";
import EventCard from "../db_components/EventCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";
import ClubPage from "./ClubPage";
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";
import { getPreciseDistance } from "geolib";

const EventPage = () => {
  const [event, setEvent] = useState([]);
  const [events, setNew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const[loading,setLoading]=useState(false)
  const [recordsPerPage] = useState(8);
  const Wrapref = useRef(null);
  const { searchquery,savedCred,setSavedCred } = useContext(Context);
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
    setLoading(false)
  };

  // ____________CALculate the distance_______

  const calculateDistance = (fLong, sLong, fLat, sLat) => {
    var pdis = getPreciseDistance(
      { latitude: Number(fLat), longitude: Number(fLong) },
      { latitude: Number(sLat), longitude: Number(sLong) }
    );
    const factor = 0.621371
    return ((pdis / 100) * factor).toFixed(2);
  };


  useEffect(() => {
    setLoading(true)
    getEvent();
  }, [searchquery]);



// console.log(event,"asfbbbA")
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
      filtered = filtered.filter((event) =>event.location?.display_name===filter.location
   
      );
    }
    if (filter.date) {
    
      filtered = filtered.filter((event) => {
        const formattedDate = `${event.Startdate.split('T')[0]}`;
        return formattedDate === filter.date;

      }
      )
    }
    if (filter.distance) {
      const userLatitude = savedCred?.lat
      const userLongitude = savedCred?.long;
      const location = filtered.map((event) => event?.location)

     
      const filteredByDistance = filtered.filter((event) => {
        const eventDistance = calculateDistance(
          userLongitude,
          event.location.lon,
          userLatitude,
          event.location.lat
        );
        
const Distance=eventDistance.slice(0,3)
        return Distance <= filter.distance;
      });

      // Update the filtered events
      filtered = filteredByDistance;
    }
   
    setEvent(filtered);
  }
    setFilterDropdown(false)
  }

const handleReset=()=>{
  setFilter({
    public: false,
    private: false,
    open_for: "",
    location: "",
    date: "",
    distance: "",
  })
  setEvent(events)
  setFilterDropdown(false)
}


  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = event.slice(firstPostIndex, lastPostIndex);


  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      {!loading?
      <>
   
      <div className="sticky top-0 bg-black z-[9] py-5 flex justify-between">
        <div className="flex flex-wrap gap-2 sm:gap-5 flex-1 justify-end">
          {/* <div className="gradient p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer">
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
          </div> */}
          <div className="flex gap-8 items-center">
            <div className="inline-flex gap-1 items-center cursor-pointer" onClick={() => navigate("/create_event")}>
              <img
                src="images/add-icon.png"
                alt="add-icon"
                className="max-w-full cursor-pointer w-5"
                
              />
              <span>Add Event</span>
            </div>
            <div className="inline-flex gap-1 items-center relative " >
              <span className="inline-flex gap-1 items-center cursor-pointer" onClick={() => setFilterDropdown(!filterDropdown)}>
              <img
                src="images/filter-icon.png"
                alt="filter-icon"
                className="max-w-full cursor-pointer w-5"
              />
              
              <span>Filter</span>
              </span>
              <div className={`filter_dropdown absolute w-[250px] right-0 bg-[#2A2D37] top-full ${filterDropdown ? 'Active' : ''}`}>
                <div  className="flex justify-end text-red">
                <button onClick={handleReset}>Reset</button>
                </div>
              
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
                        <option value=''>Please Select</option>
                      <optgroup label="Single">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="T">Transgender</option>
                      </optgroup>
                      <optgroup label="Couple">
                        <option value="MM">MaleMale</option>
                        <option value="MF">MaleFemale</option>
                        <option value="FF">FemaleFemale</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="distance_filter">
                    <label htmlFor="distance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCE</label>
                    {filter?.distance}miles
                    <input type="range" className="w-full mb-6 h-[3px]" id="distance" name="distance"
                      value={filter.distance}
                      onChange={handleChange}
                      min={200} max={1050} />
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
            {/* <div className="w-5 sm:w-6">
              <img
                src="images/bell-icon.png"
                alt="bell-icon"
                className="max-w-full cursor-pointer"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
        {currentPost.map((el, i) => (
          // <EventCard key={i} event={el} />
          <>
          <div className="h-full bg-light-grey rounded-2xl" key={i}>
          <EventCard key={i} event={el} />
        </div>
        {(i!==7 && ((i + 1) % 4 === 0)) && (
          <div className="event_promo_ban">
            {/* Banner image */}
            <img className="w-full" src="images/banner.jpg" alt="Banner" />
          </div>
        )}
        </>
        ))}
      </div>
      <Pagination
        totalPosts={event.length}
        postsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
         </>:
             <div className="w-full min-h-screen text-3xl flex items-center justify-center">
             <div className="transform -translate-y-[90px]">
             <svg aria-hidden="true" role="status" class="inline mr-3 w-10 h-10 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
         </svg>
         Loading...
             </div>
           </div>}
    </div>
  );
};

export default EventPage;
