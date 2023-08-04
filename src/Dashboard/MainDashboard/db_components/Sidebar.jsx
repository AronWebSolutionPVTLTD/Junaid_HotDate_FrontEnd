import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Context } from "../../../Context/context";
const Sidebar = () => {
  const { userInfo, setUserInfo } = useContext(Context);
  // const [userInfo, setUserInfo] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = cookies["token"];
    if (token) {
      const decodedToken = jwtDecode(token);
      userDetails(decodedToken);
    } else {
      navigate("/login");
    }
  }, []);

  const userDetails = async (token) => {
    const { data } = await axios.get(`${BASE_URL}/api/findone/${token.userId}`);
    setUserInfo(data);
  };
  console.log(userInfo);
  return (
    <div className="sidebar xl:w-60">
      <div>
        <img
          src={userInfo.image}
          className="hidden aspect-square object-cover xl:block"
        />
        <div className="pt-0 pb-8 xl:py-8 border-b border-dark-grey">
          <h3 className="font-semibold text-22px mb-3">{userInfo.username}</h3>
          <p className="flex items-center justify-between gap-4 mb-3">
            Russia
            <Link className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M3.12328 12.7617C2.97928 12.7617 2.83556 12.7068 2.72559 12.5969C2.50594 12.3772 2.50594 12.0211 2.72559 11.8015L11.5158 3.0113C11.7352 2.79164 12.0915 2.79164 12.3112 3.0113C12.5308 3.23096 12.5308 3.58702 12.3112 3.80667L3.52097 12.5969C3.41128 12.7066 3.26728 12.7617 3.12328 12.7617Z"
                  fill="white"
                />
                <path
                  d="M2.25478 16.8126C2.21569 16.8126 2.17603 16.8083 2.13638 16.7999C1.83262 16.7346 1.63912 16.4357 1.70437 16.1319L2.57344 12.0811C2.63869 11.7773 2.93906 11.5844 3.24141 11.6491C3.54516 11.7143 3.73866 12.0133 3.67341 12.3171L2.80434 16.3679C2.74781 16.632 2.51437 16.8126 2.25478 16.8126Z"
                  fill="white"
                />
                <path
                  d="M6.30506 15.9434C6.16106 15.9434 6.01734 15.8886 5.90738 15.7786C5.68772 15.5589 5.68772 15.2029 5.90738 14.9832L14.6976 6.19331C14.9169 5.97365 15.2733 5.97365 15.4929 6.19331C15.7126 6.41296 15.7126 6.76903 15.4929 6.98868L6.70303 15.7786C6.59306 15.8886 6.44906 15.9434 6.30506 15.9434Z"
                  fill="white"
                />
                <path
                  d="M2.25366 16.8124C1.99406 16.8124 1.76091 16.6319 1.70409 16.3678C1.63913 16.064 1.83234 15.7651 2.13609 15.6998L6.18694 14.8308C6.49097 14.7663 6.78994 14.9593 6.85491 15.2628C6.91988 15.5665 6.72666 15.8655 6.42291 15.9307L2.37206 16.7998C2.33241 16.8085 2.29275 16.8124 2.25366 16.8124Z"
                  fill="white"
                />
                <path
                  d="M13.5042 8.74433C13.3602 8.74433 13.2162 8.68949 13.1065 8.57952L9.92475 5.39774C9.70509 5.17808 9.70509 4.82202 9.92475 4.60236C10.1441 4.38271 10.5008 4.38271 10.7201 4.60236L13.9019 7.78415C14.1216 8.0038 14.1216 8.35986 13.9019 8.57952C13.7922 8.68949 13.6482 8.74433 13.5042 8.74433Z"
                  fill="white"
                />
                <path
                  d="M15.0953 7.15348C14.9513 7.15348 14.8073 7.09864 14.6973 6.98867C14.4776 6.76901 14.4776 6.41295 14.6973 6.19301C15.0103 5.87998 15.1827 5.45614 15.1827 4.99995C15.1827 4.54376 15.0103 4.11992 14.6973 3.80689C14.384 3.49357 13.9601 3.32117 13.5039 3.32117C13.0478 3.32117 12.6239 3.49357 12.3109 3.80689C12.0915 4.02654 11.7354 4.02682 11.5152 3.80689C11.2956 3.58723 11.2956 3.23117 11.5152 3.01123C12.0406 2.48557 12.7468 2.19617 13.5039 2.19617C14.2608 2.19617 14.9673 2.48557 15.4927 3.01123C16.0183 3.5366 16.3077 4.24282 16.3077 4.99995C16.3077 5.75707 16.0183 6.46329 15.4927 6.98867C15.3833 7.09835 15.2393 7.15348 15.0953 7.15348Z"
                  fill="white"
                />
              </svg>
            </Link>
          </p>
          <p
            className="flex items-center justify-between gap-4"
            onClick={() => navigate("/user-detail")}
          >
            Edit Profile
            <Link className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <mask
                  id="mask0_47_207"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="19"
                >
                  <path d="M0 0.5H18V18.5H0V0.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_47_207)">
                  <path
                    d="M9 17.9727C6.89063 14.8086 3.19922 10.5195 3.19922 6.82812C3.19922 3.62957 5.80145 1.02734 9 1.02734C12.1986 1.02734 14.8008 3.62957 14.8008 6.82812C14.8008 10.5195 11.1094 14.8086 9 17.9727Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9.46484C7.54618 9.46484 6.36328 8.28194 6.36328 6.82812C6.36328 5.37431 7.54618 4.19141 9 4.19141C10.4538 4.19141 11.6367 5.37431 11.6367 6.82812C11.6367 8.28194 10.4538 9.46484 9 9.46484Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Link>
          </p>
        </div>
        <ul className="pt-8">
          <li className="mb-3">
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/msg-icon.png" />
              </span>
              Messenger
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/event-page" className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/event-icon.png" />
              </span>
              Events
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/club-page" className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/club-icon.png" />
              </span>
              Clubs
            </Link>
          </li>
          <li className="mb-3">
            <Link className="inline-flex items-center gap-3" to="/travel-page">
              <span className="block w-6">
                <img src="images/travel-icon.png" />
              </span>
              Travel Calender
            </Link>
          </li>
          <li className="mb-3">
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/member.png" />
              </span>
              Members
            </Link>
          </li>
          <li className="mb-3">
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/model-icon.png" />
              </span>
              Models
            </Link>
          </li>
          <li className="mb-3" onClick={handleLogout}>
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/logout-icon.png" />
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
