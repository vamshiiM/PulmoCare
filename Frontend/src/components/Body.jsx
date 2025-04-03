import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLungs, FaUserMd, FaHandsHelping } from "react-icons/fa";
import myImage from "../images/pic1.jpg";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  const survivors = [
    { name: "John Doe", story: "I was diagnosed early and with the right treatment, I beat lung cancer.", image: "/images/person2.jpg" },
    { name: "Jane Smith", story: "Support groups and treatment helped me through the toughest times.", image: "/images/person2.jpg" },
    { name: "Mike Johnson", story: "Never give up. Early screening saved my life.", image: "/images/person3.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % survivors.length);
    }, 4000);

    // Add scroll listener with direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [survivors.length, lastScrollY]);

  // Scroll animation variants with direction awareness
  const sectionVariants = {
    hidden: (direction) => ({
      opacity: 0,
      y: direction === "up" ? -50 : 50
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction === "up" ? 50 : -50,
      transition: {
        duration: 0.4
      }
    })
  };

  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      y: direction === "up" ? -20 : 20
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg h-auto">
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            backgroundPositionY: `${scrollY * 0.3}px` // Parallax effect
          }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <FaLungs className="inline-block mb-2 text-5xl" />
          <h1 className="text-5xl font-extrabold tracking-wide">
            Lung Cancer Awareness & Treatment
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Early detection saves lives. Know the symptoms, get checked, and stay informed.
          </p>
        </motion.div>

        {/* Hero background parallax effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-40"
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundPositionY: scrollY * -0.2,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* Causes of Lung Cancer */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-gray-100 text-center"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
      >
        <h2 className="text-3xl font-semibold text-gray-800">Causes of Lung Cancer</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {["Smoking", "Air Pollution", "Genetic Factors", "Asbestos Exposure", "Second-hand Smoke", "Radiation Exposure"].map((cause, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
              custom={scrollDirection}
            >
              <div className="text-lg font-medium flex flex-col items-center">
                <FaLungs className="text-red-500 text-3xl mb-3" />
                {cause}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Survivor Stories */}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-blue-500"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
      >
        <h2 className="text-3xl font-semibold text-gray-800 ">Survivor Stories</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Read inspiring stories of people who fought lung cancer and emerged stronger.</p>
        <motion.div
          className="relative w-full flex justify-center items-center mt-8"
          variants={itemVariants}
          custom={scrollDirection}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md p-6 text-center bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <img src={survivors[currentIndex].image} alt={survivors[currentIndex].name} className="rounded-full w-24 h-24 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">{survivors[currentIndex].name}</h3>
                <p className="text-gray-600 mt-2">{survivors[currentIndex].story}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Prevention Tips */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-gray-100 text-center"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
      >
        <h2 className="text-3xl font-semibold text-gray-800">Prevention Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {["Avoid Smoking", "Exercise Regularly", "Eat a Healthy Diet", "Reduce Exposure to Pollutants", "Get Regular Screenings"].map((tip, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
              custom={scrollDirection}
            >
              <div className="text-lg font-medium flex flex-col items-center">
                <FaUserMd className="text-blue-500 text-3xl mb-3" />
                {tip}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Get Involved */}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-gray-50"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
      >
        <h2 className="text-3xl font-semibold text-gray-800">Get Involved</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Join us in raising awareness and supporting lung cancer research.</p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          variants={itemVariants}
          custom={scrollDirection}
        >
          <FaHandsHelping className="inline-block mr-2" />
          Donate & Support
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HomePage;