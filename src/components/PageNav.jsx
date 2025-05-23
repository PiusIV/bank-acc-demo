import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="bg-gray-800 text-white flex justify-between p-5 items-center fixed top-0 z-10 w-full">
        <Logo />
        <div className="">
          {/* <ul className="hidden md:flex md:items-center space-x-6">
            <li className="text-white hover:text-gray-300">Home</li>
            <li className="text-white hover:text-gray-300">About</li>
            <li className="text-white hover:text-gray-300">Services</li>
            <li className="text-white hover:text-gray-300">Contact</li>
          </ul> */}
          <ul className="hidden md:flex md:items-center space-x-6">
            <li className="text-white hover:text-gray-300 py-2 hover:font-bold">
              <NavLink to="/personal">Personal</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/business">Business</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink>Corporate</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
              <NavLink to="/login">Login/SignUp</NavLink>
            </li>
          </ul>
        </div>
        <button
          className="font-extrabold md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>{" "}
      {/* mobile Nav */}
      <div
        className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
  md:hidden absolute w-full bg-gray-600 overflow-hidden 
  transition-all duration-300 ease-in-out z-0`}
      >
        <ul className="container mx-auto px-4 py-2.5 flex flex-col space-y-3 text-center">
          <li className="text-white hover:text-gray-300 py-2 hover:font-bold">
            <NavLink to="/personal">Personal</NavLink>
          </li>
          <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
            <NavLink to="/business">Business</NavLink>
          </li>
          <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
            <NavLink>Corporate</NavLink>
          </li>
          <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="text-white hover:text-gray-300 py-2  hover:font-bold">
            <NavLink to="/login">Login/SignUp</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageNav;
