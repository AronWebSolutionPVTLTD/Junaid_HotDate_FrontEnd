import React, { useContext, useEffect, useState } from "react";
import Pagination from "../db_components/Pagination";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/context";
import axios from "axios";
import ModelPhotoVideo from "./ModelPhotoVideo";
import ModelAbout from "./ModelAbout";

const MembersModels = () => {
  const [modelData, setModelData] = useState({});
  const { modelId } = useContext(Context);
  const [renderComponent, setRenderComponent] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    getModel();
  }, []);

  const getModel = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/findone/${modelId}`);

    setModelData(data);
  };
  const handleclick = () => {
    setRenderComponent(false);
  };

  const handleabout = () => {
    setRenderComponent(true);
  };
  return (
    <div className="bg-black sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
      <div className="xl:w-11/12">
        <div className="relative rounded-2xl">
          <img
            src={modelData.image}
            alt="member-models"
            className="aspect-video object-cover w-full rounded-2xl"
          />
          <h3 className="text-xl sm:text-40px font-bold absolute left-0 bottom-0 p-5">
            {modelData.firstName} {modelData.lastName}
          </h3>
        </div>
        <div className="flex items-center gap-5 pb-3 border-b border-white/50 mt-6 mb-10">
          <span className="cursor-pointer" onClick={handleclick}>
            Photos & Videos
          </span>
          <span
            className="cursor-pointer inline-block ml-5"
            onClick={handleabout}
          >
            About Me
          </span>
        </div>
        {!renderComponent ? (
          <ModelPhotoVideo modelData={modelData} />
        ) : (
          <ModelAbout modelData={modelData} />
        )}

        <div className="flex flex-wrap gap-5 justify-between mt-20">
          <Link
            to="/model_form"
            className="primary_btn capitalize !font-normal"
          >
            Click here to register yourself as a model
          </Link>
          <Link className="primary_btn !font-semibold">Next Page</Link>
        </div>
      </div>
    </div>
  );
};

export default MembersModels;
