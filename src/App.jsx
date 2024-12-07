import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [selectedLocation, setSelectedLocation] = useState("");

  const element = document.documentElement;

  const scrollToCards = () => {
    const carListSection = document.getElementById("car-list-section");
    if (carListSection) {
      carListSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} scrollToCards={scrollToCards} setSelectedLocation={setSelectedLocation} />
      <About />
      <Services />
      <div id="car-list-section">
        <CarList selectedLocation={selectedLocation} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
