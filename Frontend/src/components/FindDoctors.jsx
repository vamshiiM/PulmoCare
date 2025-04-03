import React, { useState, useRef, useEffect } from "react";
import { doctors } from "../data/doctors.js";
import DoctorCard from "./DoctorCard.jsx";

function FindDoctors() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Location options for the dropdown
  const locationOptions = [
    { value: "all", label: "All Locations" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "others", label: "Other Locations" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get the label of currently selected location
  const selectedLocationLabel = locationOptions.find(
    (option) => option.value === selectedLocation
  )?.label;

  // Filter doctors based on selected location and search term
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesLocation =
      selectedLocation === "all" ||
      (selectedLocation === "others" &&
        !["Mumbai", "Delhi", "Chandigarh"].includes(
          doctor.location.split(",")[0]
        )) ||
      doctor.location.includes(selectedLocation);

    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesLocation && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://www.manipalhospitals.com/delhi/uploads/page-banners/default-page-banner.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

        <div className="px-4 mx-auto container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-blue-300 text-3xl font-bold mb-4 md:text-5xl leading-tight drop-shadow-md">
              Find Lung Cancer Specialists
            </h1>
            <p className="bg-blue-900 text-white rounded-3xl  text-lg md:text-sm max-w-2xl drop-shadow-md p-2">
              Connect with top oncologists and pulmonologists specializing in
              lung cancer detection and treatment .
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 mx-auto container bg-sky-50 bg-opacity-100">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search bar */}
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search by name, specialty, or keyword"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Location dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full md:w-56 px-4 py-3 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selectedLocationLabel}</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {locationOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedLocation(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                        selectedLocation === option.value
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results summary */}
          <p className="text-gray-600">
            {filteredDoctors.length}{" "}
            {filteredDoctors.length === 1 ? "specialist" : "specialists"} found
            {selectedLocation !== "all" && ` in ${selectedLocationLabel}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctorsinfo) => (
              <DoctorCard key={doctorsinfo.id} {...doctorsinfo} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">
                No doctors match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedLocation("all");
                  setSearchTerm("");
                }}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindDoctors;
