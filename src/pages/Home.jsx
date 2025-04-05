import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/Home/HeroBanner";
import Technologies from "../components/Home/Technologies";

const Home = () => {
  return (
    <>
      <div className="gray-bg">
        <Navbar />
        <HeroBanner />
        <Technologies />
      </div>
    </>
  );
};

export default Home;
