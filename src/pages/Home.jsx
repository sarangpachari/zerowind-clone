import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/Home/HeroBanner";
import Technologies from "../components/Home/Technologies";
import About from "../components/Home/About";

const Home = () => {
  return (
    <>
      <div className="gray-bg">
        <Navbar />
        <HeroBanner />
        <Technologies />
        <About />
      </div>
    </>
  );
};

export default Home;
