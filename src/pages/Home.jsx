import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/Home/HeroBanner";
import Technologies from "../components/Home/Technologies";
import About from "../components/Home/About";

import Contact from "../components/Home/Contact";



const Home = () => {
  return (
    <>
      <div className="gray-bg">
        <Navbar />
        <HeroBanner />
        <Technologies />
        <About />
      </div>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
