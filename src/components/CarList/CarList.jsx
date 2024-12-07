import React, { useState } from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import Bike_Ninja from '../../assets/Bike_Ninja.png';
import Bike_Ducati from '../../assets/Bike_Ducati.png';
import harley from '../../assets/harley.png';
import E_Class from'../../assets/E_Class-removebg-preview.png'
import yamaha from '../../assets/yamaha-removebg-preview.png'
import Audi from'../../assets/Audi_A6 (2).png'

// List of available cars and bikes
const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    details: "Model Year: 2022 | Fuel Type: Diesel | Seats: 5 | Transmission: Automatic",
    aosDelay: "0",
    location: "Sitabuldi",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    details: "Model Year: 2021 | Fuel Type: Petrol | Seats: 7 | Transmission: Manual",
    aosDelay: "500",
    location: "Dharampeth",
  },
  {
    name: "BMW GX",
    price: 100,
    image: car3,
    details: "Model Year: 2023 | Fuel Type: Hybrid | Seats: 5 | Transmission: Automatic",
    aosDelay: "1000",
    location: "Wardha Road",
  },
  {
    name: "Ducati Panigale V4",
    price: 200,
    image: Bike_Ducati,
    details: "Model Year: 2023 | Fuel Type: Petrol | Engine: 1103cc | Transmission: Manual",
    aosDelay: "1000",
    location: "Civil Lines",
  },
  {
    name: "Kawasaki Ninja H2",
    price: 250,
    image: Bike_Ninja,
    details: "Model Year: 2023 | Fuel Type: Petrol | Engine: 998cc | Transmission: Manual",
    aosDelay: "1200",
    location: "Sadar",
  },
  {
    name: "Harley-Davidson Fat Boy",
    price: 180,
    image: harley,
    details: "Model Year: 2023 | Fuel Type: Petrol | Engine: 1746cc | Transmission: Manual",
    aosDelay: "1400",
    location: "Sitabuldi",
  },
  // New cars and bike added
  {
    name: "Audi A6",
    price: 150,
    image: Audi, // Add the image path for Audi A6
    details: "Model Year: 2022 | Fuel Type: Diesel | Seats: 5 | Transmission: Automatic",
    aosDelay: "1600",
    location: "Sitabuldi",
  },
  {
    name: "Mercedes-Benz E-Class",
    price: 220,
    image: E_Class,
    details: "Model Year: 2023 | Fuel Type: Petrol | Seats: 5 | Transmission: Automatic",
    aosDelay: "1800",
    location: "Sadar",
  },
  {
    name: "Yamaha YZF-R1",
    price: 220,
    image: yamaha, // Add the image path for Yamaha YZF-R1
    details: "Model Year: 2023 | Fuel Type: Petrol | Engine: 998cc | Transmission: Manual",
    aosDelay: "2000",
    location: "Civil Lines",
  },
];

const CarList = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Toggle form visibility on button click
  const handleGetStartedClick = () => {
    setShowForm(!showForm);
  };

  // Filter cars based on selected location
  const filteredCars = selectedLocation === "All"
    ? carList
    : carList.filter(car => car.location === selectedLocation);

  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>

        {/* Location Filter */}
        <div className="mb-6">
          <label htmlFor="location" className="text-lg font-semibold text-black dark:text-white">
            Select Location:
          </label>
          <select
            id="location"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Sitabuldi">Sitabuldi</option>
            <option value="Dharampeth">Dharampeth</option>
            <option value="Wardha Road">Wardha Road</option>
            <option value="Civil Lines">Civil Lines</option>
            <option value="Sadar">Sadar</option>
          </select>
        </div>

        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {filteredCars.map((data) => (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
                {/* Hover effect info */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-opacity-60 dark:bg-black z-10">
                  <p className="text-lg font-semibold">{data.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        
        {/* Get Started Button */}
        <div className="grid place-items-center mt-8">
          <button
            data-aos="fade-up"
            className="button-outline"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-80">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full sm:w-96">
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Rental Form
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-semibold text-black dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-semibold text-black dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="id-proof" className="block text-sm font-semibold text-black dark:text-white">
                    Proof of Identity
                  </label>
                  <input
                    type="file"
                    id="id-proof"
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
