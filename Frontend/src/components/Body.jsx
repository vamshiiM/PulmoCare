import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLungs, FaUserMd, FaHandsHelping, FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import myImage from "../images/pic3.jpg";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  const survivors = [
    { name: "John Doe", story: "I was diagnosed early and with the right treatment, I beat lung cancer.", image: person1 },
    { name: "carol Smith", story: "Support groups and treatment helped me through the toughest times.", image: person3 },
    { name: "Mike Johnson", story: "Never give up. Early screening saved my life.", image: person2 }
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

  // At the top of your component, before return()
  const [selectedCause, setSelectedCause] = useState(null);

  const causesData = [
    {
      title: "Smoking",
      description: `
        Smoking is the leading cause of lung cancer, responsible for approximately 85% of all cases. People who smoke are 15 to 30 times more likely to develop lung cancer compared to non-smokers, and the risk increases with the number of cigarettes smoked and the duration of smoking. Globally, lung cancer is the most common cancer, causing about 1.8 million deaths annually, which accounts for 18% of all cancer deaths. In the U.S., lung cancer is responsible for 25% of all cancer deaths. Secondhand smoke also significantly contributes to the disease, with non-smokers exposed to it being 24% more likely to develop lung cancer. While smoking rates have been declining, over 1.1 billion people worldwide still smoke, with the highest prevalence in lower and middle-income countries. Quitting smoking significantly reduces the risk; after 10 years of cessation, the risk of lung cancer is halved. Lung cancer rates are also rising among women due to increased smoking prevalence. In India, smoking-related deaths contribute significantly to the lung cancer burden, with approximately 1 million tobacco-related deaths each year.
      `
    }
    ,
    {
      title: "Air Pollution",
      description: " Air pollution is a growing global health concern and a significant contributor to lung cancer. Prolonged exposure to polluted air, especially in urban and industrial areas, increases the risk of developing respiratory illnesses, including lung cancer. Pollutants like fine particulate matter (PM2.5), nitrogen dioxide (NO₂), and polycyclic aromatic hydrocarbons (PAHs) can penetrate deep into the lungs and cause DNA damage. The International Agency for Research on Cancer (IARC), a part of the WHO, classifies outdoor air pollution as a Group 1 carcinogen. Studies have shown that people living in highly polluted areas have a 15–20% higher risk of lung cancer. According to the WHO, around 29% of lung cancer deaths are attributed to air pollution worldwide. Indoor air pollution, especially from burning solid fuels like coal or wood for cooking and heating, also contributes significantly in low-income households. Children, the elderly, and people with preexisting conditions are particularly vulnerable. Wearing masks and using air purifiers indoors can help reduce personal exposure. "
    },
    {
      title: "Genetic Factors",
      description: "Genetics can significantly influence an individual's susceptibility to lung cancer, even in the absence of external risk factors like smoking. People with a family history of lung cancer have a 2–3 times higher risk of developing the disease, suggesting a strong hereditary component. Specific inherited gene mutations, such as those affecting TP53, EGFR, and KRAS genes, can disrupt normal cell growth and lead to cancerous changes. Some individuals may also inherit a reduced ability to detoxify harmful substances from tobacco smoke or the environment. Genetic predisposition often interacts with environmental factors, amplifying overall risk. For instance, a person with a genetic mutation who also smokes is at a significantly higher risk than a smoker without the mutation. In recent years, genetic testing and counseling have helped identify high-risk individuals and enable earlier interventions. Targeted therapies have also been developed to treat specific genetic mutations in lung cancer, improving survival rates. Understanding the genetic basis of lung cancer can also guide personalized medicine and prevention strategies.  ",
    },
    {
      title: "Asbestos Exposure",
      description: "Asbestos, a group of naturally occurring minerals used in construction and insulation, is a well-documented carcinogen linked to lung cancer. Inhalation of asbestos fibers can cause chronic inflammation and scarring in the lungs, a condition known as asbestosis, which significantly raises cancer risk. The latency period between asbestos exposure and cancer development can be 20–50 years, making early detection challenging. Asbestos exposure is especially common among workers in shipbuilding, mining, construction, and automotive industries, particularly before regulations limited its use. According to the American Lung Association, asbestos exposure accounts for 4%–12% of all lung cancer cases. When combined with smoking, the risk multiplies dramatically—up to 90 times higher than in non-exposed non-smokers. Even short-term or secondary exposure (e.g., handling contaminated clothing) can be dangerous. Mesothelioma, a rare and aggressive cancer affecting the lung lining, is almost exclusively caused by asbestos.  ",
    },
    {
      title: "Second-hand Smoke",
      description: "Second-hand smoke, also known as passive or environmental tobacco smoke, is a major health hazard and a proven cause of lung cancer in non-smokers. It contains more than 7,000 chemicals, with at least 70 known carcinogens, including formaldehyde, benzene, and arsenic. The U.S. Surgeon General has confirmed that there is no safe level of second-hand smoke exposure. People living with smokers or working in smoking-permitted environments are at a 20%–30% increased risk of developing lung cancer. Children and pregnant women are particularly susceptible to its harmful effects, including impaired lung development and increased asthma risk. In the U.S. alone, second-hand smoke causes an estimated 7,300 lung cancer deaths among non-smokers each year. It also contributes to other diseases, such as heart disease, strokes, and respiratory infections. Even brief exposure—such as sitting in a smoke-filled room—can trigger harmful biological effects. Laws banning indoor smoking in public places and vehicles have significantly reduced second-hand smoke exposure in many countries.",
    },
    {
      title: "Radiation Exposure",
      description: "Radiation, particularly from radon gas, is the second leading cause of lung cancer after smoking. Radon is a naturally occurring radioactive gas that forms from the decay of uranium in soil and rocks. It seeps into buildings through cracks in floors and walls and can accumulate to dangerous levels indoors. The U.S. Environmental Protection Agency (EPA) estimates that radon causes about 21,000 lung cancer deaths each year in the United States. Exposure risk is highest in poorly ventilated basements or ground floors, especially in regions with uranium-rich soil. People who smoke and are also exposed to radon face a much higher combined risk of lung cancer. Radiation therapy for previous cancers and occupational exposure to ionizing radiation (e.g., in medical or nuclear industries) can also increase lung cancer risk. High-dose radiation damages lung tissue and can cause mutations that lead to cancer over time. Testing homes for radon and installing mitigation systems can effectively reduce indoor radon levels. Radon test kits are widely available and affordable",
    },
  ];

  const [selectedTip, setSelectedTip] = useState(null);


  const preventionTips = [
    {
      title: "Avoid Smoking",
      description: "One of the most effective ways to prevent lung cancer is by avoiding both active and passive smoking. Quitting smoking at any age significantly reduces your risk, and the longer you stay smoke-free, the greater the benefits. Even occasional smoking can damage lung tissue and lead to long-term health issues. Avoiding environments where people smoke also helps protect against second-hand smoke, which contains harmful carcinogens. Supporting smoke-free policies in public spaces and at home can create a healthier environment for everyone. Nicotine replacement therapies, counseling, and support groups can assist in quitting. The earlier you stop, the better your chances of preventing lung damage. Non-smokers should remain vigilant, too, especially around family or co-workers who smoke. Making your surroundings smoke-free is a crucial step in lung cancer prevention."
    },
    {
      title: "Exercise Regularly",
      description: "Regular physical activity is key to maintaining healthy lungs and reducing cancer risk. Exercise strengthens your respiratory system, improves circulation, and boosts your immune response. Studies have shown that people who engage in moderate to vigorous physical activity are at a lower risk of developing lung cancer, even among former smokers. Activities like walking, jogging, cycling, or swimming for at least 30 minutes a day can make a big difference. Exercise also helps in weight management, reduces inflammation, and enhances mental well-being. It promotes better oxygen use and lung capacity, making it harder for diseases to take hold. Incorporating movement into your daily routine—taking stairs, gardening, or dancing—can add up. Consistency matters more than intensity, especially when just getting started."
    },
    {
      title: "Eat a Healthy Diet",
      description: "A balanced, nutrient-rich diet supports your immune system and helps protect against lung cancer. Foods rich in antioxidants, such as fruits and vegetables, combat free radicals that can damage cells. Leafy greens, berries, carrots, tomatoes, and citrus fruits are particularly beneficial. Whole grains, legumes, and lean proteins provide essential nutrients that support lung health. Omega-3 fatty acids from fish like salmon or flaxseeds may also have protective effects. Avoiding processed foods, excessive red meat, and sugary snacks reduces inflammation and lowers cancer risk. Drinking plenty of water helps flush toxins from the body and keeps tissues hydrated. Vitamins A, C, and E, as well as selenium and zinc, have been linked to better lung function. While no single food prevents cancer, a consistent pattern of healthy eating can significantly lower the risk. A colorful plate is often a healthy one—so eat the rainbow every day!"
    },
    {
      title: "Reduce Exposure to Pollutants",
      description: "Limiting your exposure to environmental pollutants is a vital part of lung cancer prevention. Airborne toxins like vehicle exhaust, industrial emissions, and indoor pollutants can damage lung tissue over time. Use air purifiers indoors, especially if you live in a polluted area or near heavy traffic. Keep windows closed on high-pollution days and use ventilation when cooking or using household chemicals. Test your home for radon, a radioactive gas that can accumulate indoors and is a leading cause of lung cancer in non-smokers. At work, follow safety protocols when handling hazardous materials, especially in construction, mining, or manufacturing. Wear protective gear like masks and ensure proper ventilation in workspaces. Reduce exposure to second-hand smoke, mold, and dust as well. Taking steps to breathe cleaner air every day helps protect your lungs from long-term harm. Cleaner air means a healthier life—indoors and out."
    },
    {
      title: "Get Regular Screenings",
      description: "Early detection through regular health screenings can dramatically improve lung cancer outcomes. Low-dose CT scans are recommended for individuals aged 50–80 with a history of heavy smoking or other risk factors. These scans can detect cancer at an early, more treatable stage—even before symptoms appear. Regular check-ups also help monitor lung function and catch any changes early on. If you have a family history of lung cancer or have been exposed to harmful substances like asbestos or radon, talk to your doctor about screening options. The earlier lung cancer is found, the better the chances for successful treatment. Screenings are quick, non-invasive, and increasingly available through public health programs. Don’t ignore persistent symptoms like coughing, chest pain, or shortness of breath—get them checked promptly. "
    }
  ];


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
          {causesData.map((cause, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 group flex flex-col items-center"
              variants={itemVariants}
              custom={scrollDirection}
            >
              <div className="text-lg font-medium flex flex-col items-center">
                <FaLungs className="text-red-500 text-3xl mb-3" />
                <span>{cause.title}</span>
              </div>

              {/* Smoothly appearing button */}
              <motion.button
                onClick={() => setSelectedCause(cause)}
                className="mt-4 bg-red-500 text-white text-sm px-4 py-2 rounded opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-12 transition-all duration-300 overflow-hidden"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCause && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCause(null)}
              />
              <motion.div
                className="fixed top-10 left-1/3 w-[90%] max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl z-50 shadow-xl"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {selectedCause.title}
                </h3>
                <p className="text-gray-700">{selectedCause.description}</p>
                <button
                  onClick={() => setSelectedCause(null)}
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.section>



      {/* Survivor Stories */}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-blue-700"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
      >
        <h2 className="text-3xl font-semibold text-gray-900 ">Survivor Stories</h2>
        <p className="mt-4 text-lg text-gray-900 max-w-2xl mx-auto">Read inspiring stories of people who fought lung cancer and emerged stronger.</p>
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
                <img src={survivors[currentIndex].image} alt={survivors[currentIndex].name} className="rounded-full w-24 h-24 mb-4 border-2 border-blue-900" />
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
          {preventionTips.map((tip, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 group flex flex-col items-center"
              variants={itemVariants}
              custom={scrollDirection}
            >
              <div className="text-lg font-medium flex flex-col items-center">
                <FaUserMd className="text-blue-500 text-3xl mb-3" />
                <span>{tip.title}</span>
              </div>
              <motion.button
                onClick={() => setSelectedTip(tip)}
                className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-12 transition-all duration-300 overflow-hidden"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTip && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTip(null)}
              />
              <motion.div
                className="fixed top-10 left-1/3 w-[90%] max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl z-50 shadow-xl"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {selectedTip.title}
                </h3>
                <p className="text-gray-700">{selectedTip.description}</p>
                <button
                  onClick={() => setSelectedTip(null)}
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.section>


      {/* Learn About Lung*/}
      <motion.section
        className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-blue-600 to-indigo-500"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={scrollDirection}
        style={{
          backgroundImage: `url(${person4})`,
          backgroundPositionY: scrollY * -0.2,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-800">3D Lung Model</h2>
        <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">Study the anatomy of Lungs through our 3D Model</p>
        {/* <Link to="/about#3DModel"> */}
        <Link to="/about#3DModel">
          <motion.button
            className="mt-6 px-6 py-3 border border-transparent bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:border-10 hover:border-blue-900 hover:text-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.3 }}
            variants={itemVariants}
            custom={scrollDirection}
          >
            <FaSchool className="inline-block mr-2" />
            Explore 3D Model
          </motion.button>

        </Link>
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
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700  transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          variants={itemVariants}
          custom={scrollDirection}
        >
          <FaHandsHelping className="inline-block mr-2" />
          Donate & Support
        </motion.button>
      </motion.section>
    </div >
  );
};

export default HomePage;