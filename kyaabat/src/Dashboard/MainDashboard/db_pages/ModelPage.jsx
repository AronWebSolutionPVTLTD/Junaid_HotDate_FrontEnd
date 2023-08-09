import React, { useContext, useEffect, useState } from "react";
import TravelCard2 from "../db_components/TravelCard2";
import { Link, useNavigate } from "react-router-dom";
import { RiEqualizerLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import Pagination from "../db_components/Pagination";
import ModelCard from "../db_components/ModelCard";
import axios from "axios";
import { Context } from "../../../Context/context";

const ModelPage = () => {
  const [model, setModel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const { searchquery, refreshModel, setRefreshModel, userInfo } =
    useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  useEffect(() => {
    getModels();
  }, [searchquery, userInfo]);
  const getModels = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/models?q=${searchquery}`);
    setModel(data.data);
  };

  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const currentPost = model.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-black py-8 px-6 rounded-2xl xl:rounded-r-none">
      <div className="flex justify-between flex-wrap gap-5 items-center mb-5">
        <h3 className="text-2xl sm:text-5xl leading-none font-bold">Models</h3>
        {/* <div className="flex gap-2 flex-wrap">
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
          <span className="inline-flex rounded-md items-center gap-1 p-2 px-6 bg-orange text-sm sm:text-xl font-semibold cursor-pointer">
            <span className="flex items-center">
              <RiEqualizerLine />
            </span>{" "}
            Filter
          </span>
          <Link className="gradient inline-flex rounded-md items-center gap-1 p-2 px-6 bg-orange text-sm sm:text-xl font-semibold cursor-pointer">
            Register
          </Link>
        </div> */}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {currentPost.map((el, i) => (
          <ModelCard props={el} key={i} />
        ))}
      </div>
      <Pagination
        totalPosts={model.length}
        postsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ModelPage;
