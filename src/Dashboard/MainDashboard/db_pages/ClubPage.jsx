import React, { useContext, useEffect, useState } from "react";
import ClubCard from "../db_components/ClubCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/context";
import { getPreciseDistance } from "geolib";

const ClubPage = () => {
  const [clubs, setClubs] = useState([]);
  const [club, setNew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [recordsPerPage] = useState(8);
  const [loading,setLoading]=useState(false)
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { searchquery, savedCred, setSavedCred } = useContext(Context);
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    public: false,
    private: false,

    location: "",

    distance: "",

  })

  const handlereset = () => {
    setFilter({
      public: false,
      private: false,

      location: "",

      distance: "",

    })
    setFilterDropdown(false)
    setClubs(club)
  }

  const getClubs = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_club?q=${searchquery}`
    );
    const allclubs = data
    const verifiedClubs = allclubs.filter((el) => el.isverify === true);
    const newestPostFirst = verifiedClubs.reverse();
    setClubs(newestPostFirst);
    setNew(newestPostFirst)
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    getClubs();

  }, [searchquery]);

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

  const calculateDistance = (fLong, sLong, fLat, sLat) => {
    var pdis = getPreciseDistance(
      { latitude: Number(fLat), longitude: Number(fLong) },
      { latitude: Number(sLat), longitude: Number(sLong) }
    );
    const factor = 0.621371
    return ((pdis / 100) * factor).toFixed(2);
  };


  const handleCheck = (e) => {

    e.preventDefault()
    let filtered = club;

    if (filter.public && filter.private) {
      setClubs(filtered)
    }
    else {

      if (filter.public) {
        filtered = filtered.filter((el) => el.clubtype === "Public Place");

      }
      if (filter.private) {
        filtered = filtered.filter((el) => el.clubtype === "Private Place");

      }





      if (filter.location) {

        filtered = filtered.filter((el) =>
          el.location?.display_name === filter.location
        );
      }

      if (filter.distance) {
        const userLatitude = savedCred?.lat
        const userLongitude = savedCred?.long;



        const filteredByDistance = filtered.filter((event) => {
          const eventDistance = calculateDistance(
            userLongitude,
            event.location.lon,
            userLatitude,
            event.location.lat
          );

          const Distance = eventDistance.slice(0, 3)
          return Distance <= filter.distance;
        });

        // Update the filtered events
        filtered = filteredByDistance;
      }

      setClubs(filtered);
    }

    setFilterDropdown(false)
  }









  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = clubs.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl rounded-r-none min-h-full">
      {!loading?
      <>
      <div className="sticky top-0 bg-black z-[9] py-5 flex justify-between">
        <div className="flex justify-end items-center text-center flex-wrap gap-2 sm:gap-5 flex-1">

          <div className="flex gap-8 items-center">
            <div className="inline-flex gap-1 items-center cursor-pointer" onClick={() => navigate("/create_club")}>
              <img
                src="images/add-icon.png"
                alt="add-icon"
                className="max-w-full cursor-pointer w-5"

              />
              <span>Add Club</span>
            </div>
            <div className="inline-flex gap-1 items-center relative">
              <span className="inline-flex gap-1 items-center cursor-pointer" onClick={() => setFilterDropdown(!filterDropdown)}>
                <img
                  src="images/filter-icon.png"
                  alt="filter-icon"
                  className="max-w-full cursor-pointer w-5"

                />
                <span>Filter</span>
              </span>
              <div className={`filter_dropdown absolute w-[250px] right-0 bg-[#2A2D37] top-full ${filterDropdown ? 'Active' : ''}`}>
                <div className="flex justify-end text-red">
                  <button onClick={handlereset}>Reset</button>
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

                  <div className="distance_filter">
                    <label htmlFor="distance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCE</label>
                    {filter?.distance}miles
                    <input type="range" className="w-full mb-6 h-[3px]" id="distance" name="distance"
                      value={filter.distance}
                      onChange={handleChange}
                      min={200} max={1050} />
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
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {currentPost.map((el, i) => (
          <ClubCard key={i} clubs={el} />
        ))}
      </div>
      <Pagination
        totalPosts={clubs.length}
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

export default ClubPage;
