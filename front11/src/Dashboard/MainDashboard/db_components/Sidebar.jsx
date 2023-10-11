import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Context } from "../../../Context/context";
import "./sidebars.css";
const Submenu = ({ items, isOpen }) => (
  <ul className={`submenu ${isOpen ? "open" : ""}`}>
    {items.map((item, index) => (
      <li key={index}>
        {item.title}
        {item.submenus && <Submenu items={item.submenus} isOpen={isOpen} />}
      </li>
    ))}
  </ul>
);
const MenuItem = ({
  title,
  submenus,
  path,
  activeMenuItem,
  setActiveMenuItem,
}) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath == path) {
      setActiveMenuItem(title);
      return;
    }
  }, [currentPath]);

  const toggleSubmenu = () => {
    if (submenus.length !== 0) {
      setShowSubmenu(!showSubmenu);
    }

    // if (title === "Log Out") {
    //   removeCookie("token");
    //   navigate("/login");
    // }

    if (path) {
      setActiveMenuItem(title);
      navigate(path);
    }
  };

  useEffect(() => {
    const token = cookies["token"];
    if (token) {
      const decodedToken = jwtDecode(token);
      if (!decodedToken) {
        console.log("Invalid Token");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <li className="menu-item">
      <span
        className={`title_submenu ${activeMenuItem === title ? "active" : ""}`}
        onClick={toggleSubmenu}
      >
        {title}{" "}
        {submenus.length > 0 && (
          <i
            className={`fas fa-chevron-down`}
            style={{ transform: `${showSubmenu ? "scaleY(-1)" : ""}` }}
          ></i>
        )}
      </span>
      {showSubmenu && submenus && (
        <div className="submenu-container">
          <ul>
            {submenus.length > 0 &&
              submenus.map((submenu, index) => (
                <MenuItem
                  key={index}
                  setActiveMenuItem={setActiveMenuItem}
                  activeMenuItem={activeMenuItem}
                  title={submenu.title}
                  path={submenu.path}
                  submenus={submenu.submenus}
                />
              ))}
          </ul>
        </div>
      )}
    </li>
  );
};
const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const menuItems = [
    {
      title: "Home",
      submenus: [],
      path: "/home",
    },

    {
      title: "My Interactions",
      submenus: [
        {
          title: "Messages",
          submenus: [
            { title: "Inbox", submenus: [] },
            { title: "Sent", submenus: [] },
          ],
        },
        {
          title: "Friends",
          submenus: [
            { title: "Sent", submenus: [] },
            { title: "Received", submenus: [] },
          ],
        },
        {
          title: "Hot List",
          submenus: [
            { title: "Sent", submenus: [] },
            { title: "Received", submenus: [] },
          ],
        },
        {
          title: "Gifts/Tips",
          submenus: [
            { title: "Sent", submenus: [] },
            { title: "Received", submenus: [] },
          ],
        },
      ],
    },
    {
      title: "Search",
      submenus: [
        {
          title: "Who viewed me",
          submenus: [],
        },
        { title: "Newest matches", submenus: [] },
        { title: "Near matches", submenus: [] },
        { title: "Who is on", submenus: [] },
      ],
    },
    {
      title: "Actions",
      submenus: [
        {
          title: "Speed date ",
          submenus: [],
        },
        { title: "Events", submenus: [], path: "/event-page" },
        { title:"My Events",submenus:[], path:"/my-event"},
        { title: "Clubs", submenus: [], path: "/club-page" },
        { title: "Hot or Not (tinder)", submenus: [] },
        { title: "Travel calendar", submenus: [], path: "/travel-page" },
        {
          title: "Live action",
          submenus: [
            { title: "Member webcam", submenus: [] },
            { title: "Model webcam", submenus: [] },
          ],
        },
      ],
    },
    {
      title: "FAQ",
      submenus: [
        { title: "Know Your Kinky ABCs!", submenus: [], path: "/faq" },
      ],
    },
    {
      title: "Shop",
      submenus: [],
    },
    {
      title: "Travel",
      submenus: [],
      path: "/travel-page",
    },
    {
      title: "Setting",
      submenus: [
        { title: "My profile", submenus: [], path: "/user-detail" },
        { title: "My posts", submenus: [] },
        { title: "Edit profile", submenus: [], path: "/edit-detail" },
        { title: "Pictures", submenus: [] },
        { title: "Account", submenus: [] },
        { title: "Preferences", submenus: [] },
        {
          title: "My Points",
          submenus: [{ title: "Top up points", submenus: [] }],
        },
        { title: "Billing", submenus: [] },
        { title: "Support", submenus: [] },
        { title: "About", submenus: [], path: "/about" },
        { title: "Blocked", submenus: [] },
        // { title: "Log Out", submenus: [] },
      ],
    },
  ];
  const { userInfo, setUserInfo } = useContext(Context);
  // const [userInfo, setUserInfo] = useState({});
  const [userToken, setUserToken] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const token = cookies["token"];
    console.log(token,"TOKEN")
    setUserToken(token)
    if (token) {
      const decodedToken = jwtDecode(token);
      userDetails(decodedToken);
    } else {
      navigate("/login");
    }
  }, []);

  const userDetails = async (token) => {
    const id = token._id;
    console.log(id)
    try {
      const { data } = await axios.get(`${BASE_URL}/api/findone/${id}`,{
        headers:{
          token:userToken
        }
      });
      console.log(data,"dsagjhgdsja")
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlelogout = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <div className="sidebar xl:w-60">
      <div>
        <img
          src={userInfo.image}
          className="hidden aspect-square object-cover xl:block"
        />
        <div className="pt-0 pb-8 xl:py-4">
          <h3 className="font-semibold text-22px mb-3 ">{userInfo.username}</h3>
          <p className="flex items-center justify-between gap-4 mb-3 hover:text-orange font-body_font text-lg">
            {userInfo.country || "Country name"}
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
        {/* <ul className="pt-8">
          <li className={`mb-3 ${pathname === ""} hover:text-orange`}>
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/msg-icon.png" />
              </span>
              Messenger
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "/event-page" ? "text-orange" : "text-white"
            } hover:text-orange`}
          >
            <Link to="/event-page" className="inline-flex items-center gap-3 ">
              <span className="block w-6">
                <img src="images/event-icon.png" />
              </span>
              Events
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "/club-page" ? "text-orange" : "text-white"
            } hover:text-orange`}
          >
            <Link to="/club-page" className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/club-icon.png" />
              </span>
              Clubs
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "/travel-page" ? "text-orange" : "text-white"
            } hover:text-orange`}
          >
            <Link className="inline-flex items-center gap-3" to="/travel-page">
              <span className="block w-6">
                <img src="images/travel-icon.png" />
              </span>
              Travel Calender
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "" ? "text-orange" : "text-white"
            } hover:text-orange`}
          >
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/member.png" />
              </span>
              Members
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "/model-page" ? "text-orange" : "text-white"
            } hover:text-orange`}
          >
            <Link to="/model-page" className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/model-icon.png" />
              </span>
              Models
            </Link>
          </li>
          <li
            className={`mb-3 ${
              pathname === "" ? "text-orange" : "text-white"
            } hover:text-orange`}
            onClick={handleLogout}
          >
            <Link className="inline-flex items-center gap-3">
              <span className="block w-6">
                <img src="images/logout-icon.png" />
              </span>
              Logout
            </Link>
          </li>
        </ul> */}
        <nav className="menu">
          <ul className="gap_lists">
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                setActiveMenuItem={setActiveMenuItem}
                activeMenuItem={activeMenuItem}
                title={menuItem.title}
                path={menuItem.path}
                submenus={menuItem.submenus}
              />
            ))}
            <li>
              <button
                className="menu-item primary_btn logout_btn !p-3 !flex !justify-start !text-sm  sm:!text-base w-full"
                onClick={handlelogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
