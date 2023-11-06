import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { calculateAge } from "../../utils/CalculateAge";
import { useSelector } from "react-redux";
function CurrentlyOnUser() {
  const { user: data } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState(data);
  useEffect(() => {
    setUserInfo(data);
  }, []);
  const [user, setuser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getapi();
  }, []);

  const getapi = async () => {
    try {
      const { data } = await api.get(`/active_users`);
      const fiterdData = data?.users?.filter((el) => el?._id !== userInfo?._id);
      setuser(fiterdData);
    } catch (err) {
      console.log(err);
    }
  };

  const handledetail = (id) => {
    navigate(`/user-detail/${id}`);
  };

  return (
    <div className="bg-black py-8 px-6 rounded-2xl h-full">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
        {user?.map((user) => (
          <div
            className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap"
            onClick={() => handledetail(user?._id)}
          >
            <div className="w-[35%]">
              <img
                className="w-full object-cover h-full aspect-11/10 rounded-2xl"
                src={user?.image}
              />
            </div>
            <div className="w-[65%] px-4 pr-0 grid content-between relative gap-2">
              <div className="flex flex-wrap sm:flex-nowrap justify-between sm:gap-5">
                <h3 className="flex items-start text-lg sm:text-xl font-medium font-body_font w-full">
                  <p className="w-[75%] break-all">{user?.username}</p>
                  <p className="w-[70px] pl-2 flex flex-wrap items-center text-xs mt-[6px] font-light gap-1">
                    <span className="block w-2 h-2 rounded-full bg-green-500 font-body_font"></span>
                    Online
                  </p>
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                  <div className="text-[12px] gap-1 flex items-center">
                    <span
                      className={
                        user?.gender === "male"
                          ? "text-[#3A97FE]"
                          : user?.gender === "female"
                          ? "text-[#FF2A90]"
                          : "text-[#cf00cf]"
                      }
                    >
                      {user?.profile_type === "single" &&
                        calculateAge(user?.DOB)}
                    </span>
                    {user?.profile_type === "couple" && (
                      <>
                        <span
                          className={
                            user?.couple?.person1?.gender === "male"
                              ? "text-[#3A97FE]"
                              : user?.couple?.person1?.gender === "female"
                              ? "text-[#FF2A90]"
                              : "text-[#cf00cf]"
                          }
                        >
                          {calculateAge(user?.couple?.person1?.DOB)}
                        </span>
                        |
                        <span
                          className={
                            user?.couple?.person2?.gender === "male"
                              ? "text-[#3A97FE]"
                              : user?.couple?.person2?.gender === "female"
                              ? "text-[#FF2A90]"
                              : "text-[#cf00cf]"
                          }
                        >
                          {calculateAge(user?.couple?.person2?.DOB)}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
                    <img
                      src="images/desk_icon.png"
                      alt="desk_icon"
                      className="max-w-full"
                    />
                  </span>
                </div>
              </div>

              <div>
                <span>
                  {user?.profile_type === "single" ? (
                    <div>
                      {user?.gender === "male" ? (
                        <img src="images/Male.png" className="h-[25px]" />
                      ) : user?.gender === "female" ? (
                        <img className="h-[25px]" src="images/Female.png " />
                      ) : (
                        <img className="h-[22px]" src="images/Trans.png" />
                      )}
                    </div>
                  ) : (
                    <div className="flex">
                      {user?.couple?.person1?.gender === "male" ? (
                        <img className="h-[25px]" src="images/Male.png" />
                      ) : user?.couple?.person1?.gender === "female" ? (
                        <img className="h-[25px]" src="images/Female.png" />
                      ) : (
                        <img className="h-[22px]" src="images/Trans.png" />
                      )}
                      |
                      {user?.couple?.person2?.gender === "male" ? (
                        <img className="h-[25px]" src="images/Male.png" />
                      ) : user?.couple?.person2?.gender === "female" ? (
                        <img className="h-[25px]" src="images/Female.png" />
                      ) : (
                        <img className="h-[22px]" src="images/Trans.png" />
                      )}
                    </div>
                  )}
                </span>
              </div>

              <p className="travel_desc text-sm font-body_font">
                {user?.slogan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CurrentlyOnUser;
