import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/Home/HeroBanner";
import Technologies from "../components/Home/Technologies";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Features from "../components/Home/Features";
import CustomCursor from "../components/CustomCursor";
import Product from "../components/Product";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  const [showCursor, setShowCursor] = useState(false);

  const enableCursor = () => setShowCursor(true);
  const disableCursor = () => setShowCursor(false);

  return (
    <>
      <CustomCursor visible={showCursor} />

      <div className="gray-bg">
        <Navbar />
        <HeroBanner />

        <div onMouseEnter={enableCursor} onMouseLeave={disableCursor}>
          <Technologies />
        </div>
        <About />

        <div onMouseEnter={enableCursor} onMouseLeave={disableCursor}>
          <Features />
        </div>
        <div onMouseEnter={enableCursor} onMouseLeave={disableCursor}>
          <Product />
        </div>
      </div>

      <Contact />
      <ParallaxProvider>
      {/* Other components */}
      <Footer />
    </ParallaxProvider>
    </>
  );
};

export default Home;
