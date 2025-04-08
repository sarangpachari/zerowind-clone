import React, { useRef } from "react";
import "../components/footer.css";
import Marquee from "react-fast-marquee";
import newsletter from "../assets/images/home-newsletter/newsletter.mp4";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { once: false, margin: "-100px" });


  return (
    <div className="w-screen footer-color">
      {/* Marquee Section */}
      <div className="overflow-hidden w-full px-4 sm:px-8 py-6">
        <Parallax speed={-20}>
          <motion.div
            ref={marqueeRef}
            initial={{ marginBottom: "5rem", opacity: 0 }}
            animate={{
              marginBottom: isInView ? "5rem" : "4rem",
              opacity: isInView ? 1 : 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            <Marquee
              className="gt-america-exp-black text-[8vw] sm:text-4xl md:text-5xl"
              speed={60}
              gradient={false}
            >
              {Array(4)
                .fill("better in motion")
                .map((text, index) => (
                  <div
                    key={index}
                    className="me-7 text-transparent uppercase font-extrabold whitespace-nowrap text-stroke-1 text-stroke-[#272727]"
                  >
                    {text}
                  </div>
                ))}
            </Marquee>
          </motion.div>
        </Parallax>
      </div>


      {/* Footer Main Content */}
      <footer className="px-6 py-32 mt-10 md:px-40 bg-[#E2DE00] gt-america-regular">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Left Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mt-10 md:mt-24 px-4 sm:px-8">
            <div>
              <h5 className="text-lg font-semibold">Tecnologie</h5>
              <ul className="mt-4 space-y-1 text-sm text-[#272727]">
                <li>FIT</li>
                <li>Motion</li>
                <li>Power</li>
                <li>Brave</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold">Features</h5>
              <ul className="mt-4 space-y-1 text-sm text-[#272727]">
                <li>Relife</li>
                <li>ZWR</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold">Zerowind</h5>
              <ul className="mt-4 space-y-1 text-sm text-[#272727]">
                <li>Contact</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold">Contatti</h5>
              <ul className="mt-4 space-y-1 text-sm text-[#272727]">
                <li>info@zerowind.it</li>
                <li>+39 045 92 16 888</li>
              </ul>
            </div>
          </div>


          {/* Right Section - Newsletter with Video */}
          <div className="relative w-9/12 h-72 overflow-hidden rounded-xl hidden md:block">
            {/* Background video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={newsletter} type="video/mp4" />
            </video>

            {/* Overlay content */}
            <div className="relative z-10 h-full w-full  text-white p-6 flex flex-col gap-x-1 justify-center gap-3">
              <h4 className="text-xl font-bold mb-2">Newsletter</h4>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: '300px' }}
                  className=" h-13 mt-1 pr-28 p-3 text-black rounded-md border-white border-2"
                />
                <button className="bg-[#E2DE00]  text-black  py-4 px-8 rounded-md absolute top-1 right-1 text-sm">
                  Subscribe me
                </button>
              </div>

              <label className="text-xs  flex items-start mt-2">
                <input type="checkbox" className="mr-2 mt-1 bg-[#E2DE00] " />
                <span className="text-gray-500"> Dichiaro di aver letto e di accettare il trattamento dei dati personali</span>
              </label>
            </div>
          </div>
        </div>

      </footer>
      {/* bottom section */}
      <div className="bg-[#E2DE00] px-6 md:px-40 py-6 lg:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <a href="/privacy-policy" className="hover:underline">
              PRIVACY POLICY
            </a>
            <a href="/cookie-policy" className="hover:underline">
              COOKIE POLICY
            </a>
            <a href="/manage-cookies" className="underline">
              MANAGE COOKIES
            </a>
            <a href="/credits" className="hover:underline">
              CREDITS
            </a>
          </div>
          <p className="text-center sm:text-right mt-2 sm:mt-0">
            ZEROWIND® REA VR69979 – P.IVA 00215260233 | VIA DELLA MECCANICA 29, 37067 VERONA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;