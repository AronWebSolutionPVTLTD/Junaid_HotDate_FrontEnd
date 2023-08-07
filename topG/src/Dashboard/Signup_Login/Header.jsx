import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header
      className="Custom_header w-full z-10 pt-8 sm:pt-14 header-2"
      id="myHeader"
    >
      <div className="container mx-auto">
        <nav>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <Link href="./index.html" className="flex items-center">
              <img
                src="images/Hot-Date.png"
                className="mr-3 logo_image max-w-[150px] xl:max-w-[215px] h-auto"
                alt="Logo"
              />
            </Link>
            <div
              className={`${
                openMenu ? "navbar_open" : ""
              } navbar justify-between items-center w-full lg:flex lg:w-auto fixed lg:static`}
            >
              <ul className="lg:flex mt-4 font-medium lg:mt-0 gap-x-6 xl:gap-x-16">
                <div className="flex lg:hidden items-center justify-between gap-5 mb-10 px-4">
                  <Link className="flex items-center">
                    <img
                      src="landingPage/images/landing-logo.png"
                      className="mr-3 logo_image max-w-[100px] xl:max-w-[215px] h-auto"
                      alt="Logo"
                    />
                  </Link>
                  <span
                    className="text-xl text-black"
                    onClick={() => setOpenMenu(false)}
                  >
                    <RxCross1 />
                  </span>
                </div>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white lg:p-0 dark:text-white uppercase leading-27"
                    aria-current="page"
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/live-chat"
                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-bborder-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Live chat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-b
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                    lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                                    dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-b
                             border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                              lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                               dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 px-4 text-base lg:text-lg text-orange uppercase leading-27 border-b font-bold
                             border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                              lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                               dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Join now
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="items-center p-2 ml-1 text-3xl
                            text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <CgMenuRightAlt />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
