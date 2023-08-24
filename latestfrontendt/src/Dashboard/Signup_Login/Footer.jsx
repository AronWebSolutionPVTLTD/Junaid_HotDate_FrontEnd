import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <footer className="bg-white text-black">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:w-[calc(70%-16px)] justify-center md:justify-between items-center gap-4 py-8 text-sm">
            <Link className="hover:text-orange font-body_font">
              Find Adult Singles & Swingers
            </Link>
            <Link className="hover:text-orange">Sex Dating</Link>
            <Link className="hover:text-orange">View Members</Link>
            <Link className="hover:text-orange"> Online Dating</Link>
            <Link className="hover:text-orange">
              Free Dates & Entertainment
            </Link>
          </div>
          <div className="footer-bottom flex flex-col lg:flex-row w-full py-8 gap-6 text-center md:text-start border-t-2 border-gray-900 justify-between">
            <div className="footer-content w-full md:w-[70%]">
              <p className="text-sm font-body_font">
                Please note that individuals appearing in photographs and videos
                on our platform may not be actual members. Additionally, any
                other data provided is for illustrative purposes only. We
                prioritize transparency and want to ensure our users have a
                clear understanding of the content they encounter. As always, we
                encourage genuine connections and interactions within our
                community.We would like to emphasize that Swinxter does not
                conduct criminal background screenings of its members. It is
                essential for users to exercise caution and their best judgment
                when interacting with others on the platform or any online
                platform. Prioritizing safety is crucial, and individuals should
                take appropriate measures to protect themselves during any
                online interactions.
                <p className="text-sm font-body_font">
                  Dating Safety | Protect Kids | Report Abuse Or Sexually
                  Explicit Ads | 18 U.S.C. 2257 Record Keeping Requirements
                  Compliance Statement
                </p>
                <p className="text-sm font-body_font">
                  This website is operated in the US by Swinxter, Inc. #1254
                  2500 W International Speedway Blvd Suite 900 Daytona Beach, FL
                  32114 United States
                </p>
                <p className="text-sm font-body_font">
                  Copyright © 2023 Swinxter, Inc. All rights reserved. Important
                  Notice: Our website features exclusive adult material. As a
                  condition of membership, all our users, including those
                  appearing in content, have affirmed to us that they are 18
                  years of age or older through contractual representation. Your
                  responsible browsing is appreciated, and we encourage
                  compliance with age restrictions for a secure and enjoyable
                  experience.
                </p>
              </p>
            </div>
            <div className="footer-menu text-sm w-full md:w-1/5">
              <ul className="flex flex-col gap-4 font-body_font">
                <li>
                  <Link> Friend Finder Networks</Link>
                </li>
                <li>
                  <Link> Become an Affiliate</Link>
                </li>
                <li>
                  <Link>Privacy Policy / Cookies</Link>
                </li>
                <li>
                  <Link>Terms of Use</Link>
                </li>
                <li>
                  <Link>Sitemap</Link>
                </li>
                <li>
                  <Link>Do Not Sell My Personal Information</Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`${pathname === "/about" ? "text-orange " : ""}`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`${
                      pathname === "/contact" ? "text-orange " : ""
                    }`}
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link>Questions? Call us: (669)208-0363</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section class="copyright__block py-6 bg-black text-white">
        <div class="container mx-auto">
          <p class="text-center text-sm">
            Copyright © 1998-2023 Kaizen Globe. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
