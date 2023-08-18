import { GrStar } from "react-icons/gr";
import { BiFemale } from "react-icons/bi";

const TravelCard2 = ({ travel }) => {
  console.log(travel);
  return (
    <div
      className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex 
        flex-wrap sm:grid grid-cols-2"
    >
      <div className="w-2/5 sm:w-full">
        {/* <img
              src="images/travel-card-2.png"
              alt="travel-card"
              className="w-full object-cover h-full aspect-11/10 rounded-2xl"
            /> */}

        <img
          className="w-full object-cover h-full aspect-11/10 rounded-2xl"
          src={travel.image}
        />
      </div>
      <div className="w-3/5 sm:w-full px-4 grid content-between relative gap-2">
        <div className="flex items-center gap-1 text-xs">
          <p className="flex items-center gap-1">
            <span className="flex text-light-yellow">
              <GrStar />
            </span>
          </p>
          <p className="text-[12px] font-medium text-bright-orange">
            {travel.userName}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[12px] gap-1 flex items-center">
            <span className="text-bright-orange">{travel.person_1_age}</span>
            <span className="w-[1px] h-3 bg-white block"></span>
            <span>{travel.person_2_age}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/desk_icon.png"
                alt="desk_icon"
                className="max-w-full"
              />
            </span>
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/mob_icon.png"
                alt="mob_icon"
                className="max-w-full"
              />
            </span>
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/cal_icon.png"
                alt="cal_icon"
                className="max-w-full"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center text-xl">
          <span className="flex items-center text-bright-orange">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#FF0000]">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#FF4B26]">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#167EE6]">
            <BiFemale />
          </span>
        </div>
        <div>
          <p className="text-[12px] flex items-center">
            <span className="inline-flex items-center pr-1">
              <img src="images/loc-icon.png" alt="Location-icon" />
              {/* Delhi, IND */}
              {travel.locationfrom}
            </span>
            <span className="px-1 inline-block border-l border-white">
              {/* 146 min */}
            </span>
          </p>
        </div>
        <div className="flex text-[#FF0000] text-[12px] flex-wrap gap-1 leading">
          <span>{travel.locationto},</span>
          {/* <span>14min</span> */}
          <span>|</span>
          <span>
            {travel.startDate} - {travel.endDate}
          </span>
        </div>
        <p className="text-s font-light">{travel.description}</p>
      </div>
    </div>
  );
};

export default TravelCard2;
