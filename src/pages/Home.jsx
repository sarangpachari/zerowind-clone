import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/Home/HeroBanner";
import Technologies from "../components/Home/Technologies";

import Contact from "../components/Home/Contact";
import Features from "../components/Home/Features";



const Home = () => {
  return (
    <>
      <div className="gray-bg">
        <Navbar />
        <HeroBanner />
        <Technologies />
        <Features/>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
