import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungs, faHome, faVial, faFileMedical, faUserMd, faInfoCircle, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from 'styled-components';

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-3 bg-opacity-90 shadow-lg text-black font-semibold">
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
        <Link to="/FindDocters" className="hover:text-blue-400 transition duration-300 group relative">
          <FontAwesomeIcon icon={faUserMd} className="mr-2" /> Find Doctors
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-24"></span>
        </Link>

      </div>
      <div className="flex items-center ">
        <Link
          to="/SignUp"
          className="relative flex items-center text-lg font-semibold text-gray-700 transition duration-300 group"
        >
          <StyledWrapper>
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">SIGN IN</span>
              <span className="circle" />
              <FontAwesomeIcon icon={faCircleUser} className="arr-1" />
            </button>
          </StyledWrapper>
        </Link>
      </div>

    </div>

  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    height: 50px;
    width:160px;
    padding: 5px 30px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: blue;
    box-shadow: 0 0 0 2px blue;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 30px;
    fill: blue;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    width :30px;
    height:30px;
    right: 20px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: blue;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-5px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: white;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 110px;
    fill: white;
  }

  .animated-button:hover .text {
    transform: translateX(-10px);
  }

  .animated-button:hover svg {
    fill: #212121;
  }

  .animated-button:active {
    scale: 0.95;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;

export default Header;
