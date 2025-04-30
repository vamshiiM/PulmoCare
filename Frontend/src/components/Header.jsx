import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLungs,
  faHome,
  faVial,
  faFileMedical,
  faUserMd,
  faInfoCircle,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { auth } from "../backend/firebase"; // Adjust the import based on your Firebase setup
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Added username state
  const [message, setMessage] = useState({ type: "", text: "" });
  const [user, setUser] = useState(null); // Track user state
  const navigate = useNavigate(); // Use navigate hook to handle redirection

  // Check for authentication state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser); // Update user state when auth state changes
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!");
        setMessage({ type: "success", text: "Account created successfully!" });
        console.log("Account created successfully");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Signed in successfully!");
        setMessage({ type: "success", text: "Signed in successfully!" });
        console.log("Signed in successfully");
        navigate("/"); // Redirect to home after successful login
      }
    } catch (error) {
      const errorMessage = error.message.includes("auth")
        ? "Invalid credentials or account already exists"
        : error.message;
      toast.error(errorMessage);
      setMessage({ type: "error", text: errorMessage });
      console.error("Auth error:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
      setMessage({ type: "success", text: "Signed out successfully!" });
      navigate("/"); // Redirect to home after sign out
    } catch (error) {
      toast.error("Failed to sign out");
      setMessage({ type: "error", text: "Failed to sign out" });
    }
  };

  return (
    <div className="relative">
      {/* HEADER */}
      <div className="flex justify-between px-6 py-3 bg-opacity-90 shadow-lg text-black font-semibold z-10 relative">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLungs} className="text-blue-500 text-5xl" />
          <Link
            to="/"
            className="font-extrabold text-4xl text-blue-600 font-cursive hover:text-blue-400 transition-all duration-300 group relative pl-2"
          >
            PulmoCare
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <HeaderLink to="/" icon={faHome} label="Home" width="w-12" />
          <HeaderLink to="/about" icon={faInfoCircle} label="About" width="w-16" />
          <HeaderLink to="/CancerTest" icon={faVial} label="Cancer Test" width="w-24" />
          <HeaderLink to="/HealthRecords" icon={faFileMedical} label="Health Records" width="w-28" />
          <HeaderLink to="/FindDoctors" icon={faUserMd} label="Find Doctors" width="w-24" />
        </div>

        {/* SIGN IN / SIGN OUT Button */}
        <div className="flex items-center">
          {user ? (
            <button
              onClick={handleSignOut}
              className="relative flex items-center text-lg font-semibold text-gray-700 transition duration-300 group"
            >
              <StyledWrapper>
                <div className="animated-button">
                  <span className="text">SIGN OUT</span>
                  <FontAwesomeIcon icon={faCircleUser} className="arr-1" />
                </div>
              </StyledWrapper>
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="relative flex items-center text-lg font-semibold text-gray-700 transition duration-300 group"
            >
              <StyledWrapper>
                <div className="animated-button">
                  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">SIGN IN</span>
                  <span className="circle" />
                  <FontAwesomeIcon icon={faCircleUser} className="arr-1" />
                </div>
              </StyledWrapper>
            </button>
          )}
        </div>
      </div>

      {/* LOGIN / REGISTER FORM */}
      <AnimatePresence>
        {showLogin && (
          <>
            {/* Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogin(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Centered Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed top-35 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 shadow-2xl rounded-2xl w-[90%] max-w-md p-8 sm:p-10"
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                {isRegistering ? "Create an Account" : "Welcome Back"}
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {isRegistering && (
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Username</label>
                    <input
                      type="text"
                      placeholder="JohnDoe"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-md"
                >
                  {isRegistering ? "Register" : "Sign In"}
                </button>
              </form>

              {/* Toast Notification */}
              <AnimatePresence>
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 px-4 py-2 rounded text-sm border shadow-sm text-center ${message.type === "success"
                      ? "bg-green-100 text-green-700 border-green-400"
                      : "bg-red-100 text-red-700 border-red-400"
                      }`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 text-sm text-center text-gray-600">
                {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {isRegistering ? "Sign in here" : "Register here"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ToastContainer />

    </div>
  );
};

// Reusable Header Link
const HeaderLink = ({ to, icon, label, width }) => (
  <Link to={to} className="hover:text-blue-400 transition duration-300 group relative">
    <FontAwesomeIcon icon={icon} className="mr-2" /> {label}
    <span className={`absolute left-7 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:${width}`}></span>
  </Link>
);

// Styled SIGN IN Button
const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    height: 50px;
    width: 160px;
    padding: 5px 30px;
    border: 4px solid transparent;
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
    width: 30px;
    height: 30px;
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
  }
`;

export default Header;
