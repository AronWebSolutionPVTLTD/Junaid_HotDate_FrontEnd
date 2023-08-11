import React, { useContext, useEffect, useState } from "react";
import ClubCard from "../db_components/ClubCard";
import Pagination from "../db_components/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/context";

const ClubPage = () => {
  const [clubs, setClubs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { searchquery } = useContext(Context);
  const navigate = useNavigate();
  const getClubs = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/search_club?q=${searchquery}`
    );
    setClubs(data);
  };

  useEffect(() => {
    getClubs();
  }, [searchquery]);

  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = clubs.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl rounded-r-none min-h-full">
      <div className="sticky top-0 bg-black z-[9] py-5 flex justify-between">
        <div className="flex items-center text-center flex-wrap gap-2 sm:gap-5 flex-1">
          <div className="gradient p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer">
            <div className="bg-black h-16 md:h-[100px] flex items-center justify-center rounded-t-3xl md:rounded-t-50px">
              <h3 className="px-5 py-2 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-3xl lg:text-5xl font-bold">
                Clubs
              </h3>
            </div>
          </div>
          <div className="bg-white-shade p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer">
            <div className="bg-black justify-center h-16 md:h-[100px] flex items-center rounded-t-3xl md:rounded-t-50px">
              <h3 className="px-5 py-2 rounded-t-50px bg-transparent text-white-shade text-base sm:text-3xl md:text-3xl lg:text-5xl font-bold">
                Members Services
              </h3>
            </div>
          </div>
          <div className="flex-none grid items-center gap-2">
            <div className="w-5 sm:w-6">
              <img
                src="images/add-icon.png"
                alt="add-icon"
                className="max-w-full cursor-pointer"
                onClick={() => navigate("/create_club")}
              />
            </div>
            <div className="w-5 sm:w-6">
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
    </div>
  );
};

export default ClubPage;
