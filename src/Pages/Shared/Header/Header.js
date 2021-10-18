import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.jpg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const collapseMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="bg-white shadow max-w-7xl mx-auto mt-6 sticky top-0 z-10 rounded">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                onClick={collapseMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"*/}

                <svg
                  className={menu ? "hidden h-6 w-6" : "block h-6 w-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className={menu ? "block h-6 w-6" : "hidden h-6 w-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="lg:block md:h-20 h-12 w-auto"
                  src={logo}
                  alt="Workflow"
                />
                <span
                  className="font-bold sm:text-xl text-md mr-20 md:mr-0"
                  style={{ lineHeight: "0.8" }}
                >
                  Happy
                  <br /> Mom.
                </span>
              </div>
              <div className="hidden sm:block  sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <NavLink
                    to="/home"
                    className="text-black px-3 py-8 text-md font-medium"
                    aria-current="page"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/doctors"
                    className="text-black px-3 py-8 text-md font-medium"
                  >
                    Doctors
                  </NavLink>

                  <NavLink
                    to="/testimonials"
                    className="text-black px-3 py-8 text-md font-medium"
                  >
                    Testimonials
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/login">
                <button className="bg-black md:px-3 md:py-2 py-1 px-2 text-sm md:text-md  rounded mr-3 button-2">
                  Login
                </button>
              </Link>
              <button className="bg-black md:px-3 md:py-2 py-1 px-2 text-sm md:text-md  text-white rounded button">
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={menu ? "sm:hidden block" : "hidden sm:hidden"}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/home"
              className="text-black block px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/doctors"
              className="text-black block px-3 py-2 text-base font-medium"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/testimonials"
              className="text-black block px-3 py-2 text-base font-medium"
            >
              Testimonials
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
