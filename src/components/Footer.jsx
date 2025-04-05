import React from "react";
import "../components/footer.css";
import Marquee from "react-fast-marquee";
import newsletter from "../assets/images/home-newsletter/newsletter.mp4";

const Footer = () => {
  return (
    <div className="w-screen footer-color">
      {/* Marquee Section */}
      <div className="py-4">
        <Marquee className="gt-america-exp-black" speed={100}>
          {Array(4)
            .fill("better in motion")
            .map((text, index) => (
              <div
                key={index}
                className="me-7 text-transparent uppercase font-extrabold text-stroke-1 text-stroke-[#272727]"
              >
                {text}
              </div>
            ))}
        </Marquee>
      </div>

      {/* Footer Main Content */}
      <footer className="px-6 py-20 md:px-40 bg-[#E2DE00] gt-america-regular">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Left Section - Links */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-9 mt-0 md:mt-24">
            <div>
              <h5 className="">Tecnologie</h5>
              <ul className="mt-4 space-y-1">
                <li>FIT</li>
                <li>Motion</li>
                <li>Power</li>
                <li>Brave</li>
              </ul>
            </div>

            <div>
              <h5 className="">Features</h5>
              <ul className="mt-4 space-y-1">
                <li>Relife</li>
                <li>ZWR</li>
              </ul>
            </div>

            <div>
              <h5 className="">Zerowind</h5>
              <ul className="mt-4 space-y-1">
                <li>Contact</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h5 className="">Contatti</h5>
              <ul className="mt-4 space-y-1">
                <li>info@zerowind.it</li>
                <li>+39 045 92 16 888</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter with Video */}
          <div className="relative w-full h-72 overflow-hidden rounded-xl hidden md:block">
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
            <div className="relative z-10 h-full w-full bg-black/70 text-white p-6 flex flex-col justify-center gap-3">
              <h4 className="text-xl font-bold mb-2">Newsletter</h4>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 mt-2 pr-28 p-3 text-black rounded-md border-white border-2"
                />
                <button className="bg-[#E2DE00] text-black font-bold py-4 px-6 rounded-md absolute top-1 right-1 text-sm">
                  Iscrivimi
                </button>
              </div>

              <label className="text-xs flex items-start mt-2">
                <input type="checkbox" className="mr-2 mt-1" />
                Dichiaro di aver letto e di accettare il trattamento dei dati personali
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
