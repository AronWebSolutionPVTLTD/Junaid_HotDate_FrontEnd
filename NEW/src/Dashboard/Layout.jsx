import React, { useEffect, useState } from "react";
import DbHeader from "./MainDashboard/header/DbHeader";
import Footer from "./Signup_Login/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./MainDashboard/db_components/Sidebar";
import "./MainDashboard/db_components/sidebar.css";
import ModelSidebarList from "./MainDashboard/db_components/ModelSidebarList";

const Layout = () => {
  const [layout, setLayout] = useState("layout-1");
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if (
      pathname === "/create_club" ||
      pathname === "/model_form" ||
      pathname === "/create_event" ||
      pathname === "/home"
    ) {
      setLayout("layout-1");
    } else if (
      pathname === "/event-page" ||
      pathname === "/club-page" ||
      pathname === "/travel-page" ||
      pathname === "/model-page" ||
      pathname === "/agency-travel-page" ||
      pathname === "/member-models"
    ) {
      setLayout("layout-2");
    }
  }, [pathname]);
  return (
    <div className="main_dashboard_wrapper bg-black-20 text-white grid content-between min-h-screen">
      <div>
        <DbHeader />
        <div className="dashboard_body flex flex-wrap items-stretch min-h-screen mt-5">
          <div className="sidebar_wrapper w-1/5 hidden xl:block">
            <div className="bg-dark-black rounded-r-2xl p-6 py-8 w-full flex justify-end sticky top-0">
              <Sidebar />
            </div>
          </div>
          <div
            className={`${
              layout === "layout-1"
                ? "w-full xl:w-3/5 sm:px-5"
                : "w-full xl:w-4/5 sm:px-5 xl:pr-0"
            }`}
          >
            <div className="sticky top-0 h-full">
              <Outlet />
            </div>
          </div>
          {layout === "layout-1" && (
            <div className="w-full xl:w-1/5">
              <div className="sticky top-0 bg-dark-black rounded-l-2xl p-6 py-8 w-full flex justify-start">
                <ModelSidebarList />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="audit-dating__block relative my-16">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
            <img
              src="images/avn_award2-1.png"
              alt="award"
              className="max-w-200px md:max-w-full"
            />
            <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
              #1 Adult Dating Site
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
