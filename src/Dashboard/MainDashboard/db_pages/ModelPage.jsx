import React from "react";
import TravelCard2 from "../db_components/TravelCard2";
import { Link, useNavigate } from "react-router-dom";
import { RiEqualizerLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import Pagination from "../db_components/Pagination";
import ModelCard from "../db_components/ModelCard";

const ModelPage = () => {
  const navigate = useNavigate();
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
        <ModelCard />
        {/* <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 />
        <TravelCard2 /> */}
      </div>
      <Pagination />
    </div>
  );
};

export default ModelPage;
