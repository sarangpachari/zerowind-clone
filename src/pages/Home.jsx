import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/Home/HeroBanner";

const Home = () => {
  return (
    <>
      <div className="gray-bg p-5">
        <Navbar />
        <HeroBanner />
      </div>
    </>
  );
};

export default Home;
