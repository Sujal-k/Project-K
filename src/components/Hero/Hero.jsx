// Hero.jsx

import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme, scrollToCards, setSelectedLocation }) => {
  const [locations, setLocations] = useState([
    "Sitabuldi",
    "Dharampeth",
    "Wardha Road",
    "Civil Lines",
    "Sadar",
  ]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    AOS.refresh();
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setShowDropdown(false);
      setFilteredLocations([]);
    } else {
      const filtered = locations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowDropdown(filtered.length > 0);
    }
  };

  const handleSelectLocation = (location) => {
    setSearchValue(location);
    setShowDropdown(false);
    setSelectedLocation(location); // Update the selected location in App.jsx
    scrollToCards(); // Scroll to the CarList section
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
    if (!showDropdown && searchValue.trim() === "") {
      setFilteredLocations(locations);
    }
  };

  const handleSubmit = () => {
    if (searchValue) {
      setSelectedLocation(searchValue); // Set the selected location in App.jsx
      scrollToCards(); // Scroll to the CarList section
    }
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Looking to rent a car or bike? Find nearby rental shops for cars
              and bikes with ease! The all-new bikes and cars with fantastic
              condition, let's make driving popular!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-once="true"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
            <div className="form-section flex flex-col md:flex-row gap-4 mt-4 p-4">
              <div className="relative w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="border rounded px-3 py-2 w-full bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    value={searchValue}
                    onChange={handleInputChange}
                    onFocus={() =>
                      setShowDropdown(filteredLocations.length > 0)
                    }
                    onBlur={() =>
                      setTimeout(() => setShowDropdown(false), 200)
                    }
                  />
                  <span
                    className="absolute top-2/4 right-4 transform -translate-y-2/4 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    ▼
                  </span>
                </div>
                {showDropdown && (
                  <ul className="absolute z-10 bg-white dark:bg-gray-800 text-black dark:text-white border rounded shadow-md mt-1 w-full max-h-40 overflow-y-auto">
                    {filteredLocations.map((location, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => handleSelectLocation(location)}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="date"
                className="border rounded px-3 py-2 w-full md:w-1/4 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <input
                type="date"
                className="border rounded px-3 py-2 w-full md:w-1/4 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-black dark:text-white px-4 py-2 rounded w-full md:w-1/6"
                onClick={handleSubmit} // Handle form submission and scroll
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
