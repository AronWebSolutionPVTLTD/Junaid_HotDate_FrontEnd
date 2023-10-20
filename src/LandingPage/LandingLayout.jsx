import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./landingpage.css";
import Footer2 from "../Dashboard/Signup_Login/Footer";

const LandingLayout = () => {
  const [Lplayout, setLplayout] = useState("dark_layout");
  const [LpFooterlayout, setLpFooterlayout] = useState("footer_layout_1");
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if (pathname === "/contact") {
      setLplayout("light_layout");
    } else {
      setLplayout("dark_layout");
    }
    // footer layout
    if (pathname === "/") {
      setLpFooterlayout("footer_layout_1");
    } else {
      setLpFooterlayout("footer_layout_2");
    }
  }, [Lplayout, pathname]);
  return (
    <div
      className={`${
        Lplayout === "dark_layout"
          ? "bg-black text-white"
          : "bg-white text-black"
      } min-h-screen overflow-hidden grid content-between`}
    >
      <div className="min-h-[calc(100vh-409px)]">
        <Header Lplayout={Lplayout} />
        <Outlet />
      </div>
      {LpFooterlayout === "footer_layout_1" ? <Footer /> : <Footer2 />}
    </div>
  );
};

export default LandingLayout;
