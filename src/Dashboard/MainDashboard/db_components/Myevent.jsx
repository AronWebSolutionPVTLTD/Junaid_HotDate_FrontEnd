import React, { useContext, useEffect, useState } from "react";
import EventCard from "../db_components/EventCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";

const Myevents = () => {
  const [event, setEvent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const { searchquery,userInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)

  const getEvent = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/events?q=${searchquery}`);
    const allEvents = data.data;

    const verifiedEvents = allEvents.filter((event) => event.userId === userInfo._id);
    const newestPostFirst = verifiedEvents.reverse();
    setEvent(newestPostFirst);
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true)
    getEvent();
  }, [searchquery]);

  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = event.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      {!loading?
      <>

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
            {/* <div className="w-5 sm:w-6">
              <img
                src="images/filter-icon.png"
                alt="filter-icon"
                className="max-w-full cursor-pointer"
              />
            </div>
            <div className="w-5 sm:w-6">
              <img
                src="images/bell-icon.png"
                alt="bell-icon"
                className="max-w-full cursor-pointer"
              />
            </div> */}
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
      </>:
       <div className="w-full min-h-screen text-3xl flex items-center justify-center">
       <div className="transform -translate-y-[90px]">
       <svg aria-hidden="true" role="status" class="inline mr-3 w-10 h-10 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
   </svg>
   Loading...
       </div>
     </div>
     }
    </div> 
  );
};

export default Myevents;
