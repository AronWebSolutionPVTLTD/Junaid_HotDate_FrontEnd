import React from "react";
import { GrStar } from "react-icons/gr";
import { IoHeartCircle } from "react-icons/io5";

const WishlistCard = () => {
  return (
    <div className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2 relative">
      <span className="absolute top-3 right-1 flex items-center text-bright-orange text-2xl cursor-pointer">
        <IoHeartCircle />
      </span>
      <div className="w-2/5 sm:w-full">
        <img
          src="images/travel-card-2.png"
          alt="travel-card"
          className="w-full object-cover h-full aspect-11/10 rounded-2xl"
        />
      </div>
      <div className="w-3/5 sm:w-full px-4 grid content-between relative gap-2">
        <div className="flex items-center gap-1 text-xs">
          <p className="flex items-center gap-1">
            <span className="flex text-light-yellow">
              <GrStar />
            </span>
          </p>
          <p className="text-base font-medium text-bright-orange">SUMAN449</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base gap-1 flex items-center">
            <span className="text-bright-orange">52</span>
            <span className="w-[1px] h-3 bg-white block"></span>
            <span>53</span>
          </div>
        </div>
        <div>
          <p className="text-sm flex items-center">
            <span className="inline-flex items-center pr-1">
              <img src="images/loc-icon.png" alt="Location-icon" />
              Delhi, IND
            </span>
          </p>
        </div>
        <p className="text-xs font-light">
          We are Travelling to Chandigarh for 3 days 23 June to 25 June .
          interested couple or single Girl are welcome . we have our space
        </p>
      </div>
    </div>
  );
};

export default WishlistCard;
