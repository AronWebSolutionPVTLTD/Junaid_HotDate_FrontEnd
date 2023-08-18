import React from "react";

const TravelCard = ({ travel }) => {
  return (
    <div className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl">
      <div>
        {/* <img
              src="images/fuck-buddies.png"
              alt="fuck-buddies"
           
            /> */}
        <img
          src={travel.image}
          className="w-full object-cover aspect-video rounded-t-2xl"
        />
      </div>
      <div className="grid sm:grid-cols-2 mt-4">
        <div className="flex flex-wrap 2xl:flex-nowrap gap-x-1 gap-y-2">
          <h3 className="text-base sm:text-lg leading-5 break-all">
            Fuckbuddies
          </h3>
          <div className="flex flex-wrap gap-1">
            <span className="flex w-4 h-[14px] bg-white text-bright-orange text-[10px] justify-center items-center">
              {travel.person_1_age}
            </span>
            <span className="flex w-4 h-[14px] bg-white text-bright-orange text-[10px] justify-center items-center">
              {travel.person_2_age}
            </span>
          </div>
        </div>
        <p className="text-[10px] sm:justify-end flex items-center">
          <span className="px-1 inline-block">
            {travel.locationfrom}, {travel.locationto}
          </span>
          {/* <span className="px-1 inline-block border-l border-white">
                146 min
              </span> */}
        </p>
      </div>
      <p className="text-xs font-light my-2 pb-2">
        {travel.locationfrom}, {travel.locationto} | {travel.startDate} -
        {travel.endDate}
      </p>
      <p className="text-xs font-light w-11/12">{travel.description}</p>
    </div>
  );
};

export default TravelCard;
