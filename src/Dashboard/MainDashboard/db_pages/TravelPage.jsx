import React, { useEffect, useState, useContext } from "react";
import { TiPlus } from "react-icons/ti";
import { RiEqualizerLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import TravelCard2 from "../db_components/TravelCard2";
import Pagination from "../db_components/Pagination";
import { Context } from "../../../Context/context";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const TravelPage = () => {
  const [travel, setTravel] = useState([]);
  const [travels,setNew]=useState([])
  const navigate = useNavigate();
  const [recordsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const { searchquery,userInfo } = useContext(Context);
  const [filter, setFilter] = useState({
   
    open_for: "",
    location: "",
    date: "",
   })



   const handleChange = (e) => {
    const { value, name } = e.target;
    // setFilter({...filter,[name]:value})
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
   
  }

  const handleCheck=(e)=>{
    e.preventDefault()
    let filtered = travels;
    if(filter.open_for){
  
    filtered = filtered.filter((el) =>
    el.interested.some((interest) => interest === filter.open_for)
  );
    }

    if (filter.date) {
    
      filtered = filtered.filter((el) =>{
        const formattedDate = `${el?.startDate?.split('T')[0]}`;
   
        return formattedDate === filter.date;

      }
      )
    }

    if(filter.location){
      // filtered=filtered.filter((el)=>el.locationto?.display_name===filter.location)
      const filterKeywords = filter.location.split(' ');

  filtered = filtered.filter((el) => {
    return filterKeywords.some(keyword => {
      return el?.locationto?.display_name?.includes(keyword);
    });
  });
    }

    setTravel(filtered);
    setFilterDropdown(false)
  }



  const handleReset=()=>{
    setFilter({
      open_for: "",
      location: "",
      date: "",
    });
   
    setTravel(travels);
    setFilterDropdown(false)
  }
  const getTravel = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_travel?q=${searchquery}`
    );
    const newPost=data.reverse();
    setTravel(newPost);
    setNew(newPost)
  };




  useEffect(() => {
    getTravel();
  }, [searchquery]);

  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = travel.slice(firstPostIndex, lastPostIndex);
  const isUserTravelPlan = currentPost?.some(el => el?.userId?._id === userInfo._id);



  return (
    <div className="bg-black py-8 px-6 rounded-2xl xl:rounded-r-none">
      <div className="flex justify-between flex-wrap gap-5 items-center mb-5">
        <h3 className="text-2xl sm:text-5xl leading-none font-bold">Travel</h3>
        <div className="flex gap-2 flex-wrap">
          <span
            className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/create_travel")}
          >
            <span className="flex items-center">
              <TiPlus />
            </span>
            Travel Plan
          </span>
          <span className="inline-flex rounded-md items-center gap-1 p-2 px-6 bg-red-color text-sm sm:text-xl font-semibold cursor-pointer">
            <span className="flex items-center">
              <img
                src="images/map-icon.png"
                alt="map-icon"
                className="w-6 block"
              />
            </span>{" "}
            Map
          </span>
          <div className="inline-flex relative rounded-md items-center gap-1 p-2 px-6 bg-orange text-sm sm:text-xl font-semibold cursor-pointer">
            <span className="inline-flex gap-1" onClick={() => setFilterDropdown(!filterDropdown)}>
            <span className="flex items-center">
              <RiEqualizerLine />
            </span>
            <span>Filter</span>
            </span>
            <div className={`filter_dropdown absolute w-[250px] right-0 bg-[#2A2D37] top-full ${filterDropdown ? 'Active' : ''}`}>
              <button onClick={handleReset}>Reset</button>
                <form>
                
                  <div className="my-4 mb-6">
                    <label for="cars">Open For :</label>
                    <select name="open_for" id="open_for"
                      value={filter.open_for}
                      onChange={handleChange}
                      className="w-full mt-2 py-2 px-3 border border-black bg-[#2A2D37] rounded-[5px]">
                       
                  <option value="">Please Select</option>
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
                  {/* <div className="distance_filter">
                    <label htmlFor="distance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCE</label>
                    {filter?.distance}
                    miles
                    <input type="range" className="w-full mb-6 h-[3px]" id="distance" name="distance"
                      value={filter.distance}
                      onChange={handleChange}
                      min={200} max={1050} />
                  </div> */}
                  <div>
                    <label htmlFor="date">DATE</label>
                    <input type="date" className="bg-transparent mt-2 border border-black py-2 px-3 w-full"
                      placeholder="Date" id="date" 
                      value={filter.date} 
                      name="date" 
                      onChange={handleChange} 
                      />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="location">LOCATION</label>
                    <input type="text" id="location" className="outline-none rounded-[30px] mt-2 bg-white text-black border border-black py-2 px-3 w-full" placeholder=""
                      name="location"
                      value={filter.location}
                      onChange={handleChange} 
                      />
                    <input type="submit" id="submit"
                      className="outline-none rounded-[30px] mt-2 bg-[#0075ff] text-white border-none py-2 px-3 w-full cursor-pointer"
                      value="Ok"
                      onClick={handleCheck} 
                      />
                  </div>
                </form>
              </div>
          </div>
          {isUserTravelPlan && (
            <Link to="/my-travel" className="gradient inline-flex rounded-md items-center gap-1 p-2 px-6 bg-orange text-sm sm:text-xl font-semibold cursor-pointer">
              My Travel Plans
            </Link>
          )}
          
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
        {currentPost.map((el, i) => (
          <TravelCard2 key={i} travel={el} />
        ))}
      </div>
      <Pagination
        totalPosts={travel.length}
        postsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TravelPage;
