import React from "react";
import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/context";

const ClubCard = ({ clubs }) => {
  const { clubId, setClubId } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = (id) => {
    setClubId(id);
    navigate("/club-booking");
  };

  const dateString = clubs.createdAt;
  const dateObj = new Date(dateString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div
      className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2"
      onClick={() => handleClick(clubs._id)}
    >
      <div className="w-2/5 sm:w-full">
        <img
          src={clubs.image[0]}
          alt="event-img"
          className="w-full object-cover aspect-11/10 rounded-2xl"
        />
      </div>
      <div className="w-3/5 sm:w-full px-4 pr-6 grid content-between relative">
        <div className="">
          <h3 className="text-base sm:text-lg sm:leading-5 break-all max-w-[100px]">
            {clubs.clubname}
          </h3>
          <span className="text-xs">by {clubs.owner_name}</span>
        </div>
        <div className="grid text-[10px] gap-y-1">
          <p className="flex items-center gap-1 font-light">
            <img src="images/loc-icon.png" alt="Location-icon" />
            {clubs.location}
          </p>
          <p className="flex items-center gap-1 font-light">
            <img src="images/group-icon.png" alt="Group" />
            {clubs.customer.length}
          </p>
          <p className="flex items-center gap-1 font-light">
            <img src="images/date-icon.png" alt="Group" />
            Since {formattedDate}
          </p>
        </div>
        <span className="flex text-base absolute top-1/2 right-0 transform -translate-y-1/2">
          <BsChevronRight />
        </span>
      </div>
    </div>
  );
};

export default ClubCard;
