import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungs, faHome, faVial, faFileMedical, faUserMd, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-1 bg-opacity-90 shadow-lg text-black font-semibold">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faLungs} className="text-blue-500 text-5xl" />
        <Link to="/" className="font-extrabold text-4xl text-blue-600 font-cursive hover:text-blue-400 transition-all duration-300 group relative pl-2">
          PulmoCare
        </Link>
      </div>
      <div className="flex gap-8 items-center">
        <Link to="/" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-12"></span>
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-16"></span>
        </Link>
        <Link to="/CancerTest" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faVial} className="mr-2" /> Cancer Test
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-24"></span>
        </Link>
        <Link to="/HealthRecord" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faFileMedical} className="mr-2" /> Health Records
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-28"></span>
        </Link>
        <Link to="/FindDocter" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faUserMd} className="mr-2" /> Find Doctor
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-24"></span>
        </Link>
        <Link to="/SignUp" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faUserMd} className="mr-2" /> Sign Up
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-24"></span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
