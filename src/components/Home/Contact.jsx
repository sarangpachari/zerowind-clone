import React from 'react';
import newsletter from "../../assets/images/home-newsletter/newsletter.mp4";

function Contact() {
    return (
        <div className="pt-[120px] px-4 sm:px-12 h-auto bg-[#272727]">
        <div className="relative w-full min-h-[90vh] sm:h-screen overflow-hidden rounded-xl">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              src={newsletter}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover pointer-events-none"
            ></video>
          </div>
      
          {/* Text Overlay */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center px-4 sm:px-16 py-16 sm:py-0">
              {/* Left Column (Form/Text) */}
              <div className="text-white flex flex-col justify-center px-2 sm:px-16">
                <h2 className="text-xl mb-4">Subscribe to Newsletter</h2>
      
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Don't miss our events and the latest news about our products and successes.
                </h1>
      
                <form className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email *"
                      required
                      className="flex-1 bg-transparent border border-[#e2de00] rounded px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:border-[#e2de00]"
                    />
                    <button
                      type="submit"
                      className="bg-[#e2de00] text-black px-8 py-4 rounded font-semibold hover:bg-yellow-300 transition-colors"
                      aria-label="Subscribe"
                    >
                      Subscribe me
                    </button>
                  </div>
      
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1.5"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm">
                      I declare that I have read and accept the{' '}
                      <a href="#" className="underline hover:text-yellow-400">
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>
                </form>
              </div>
      
              {/* Right Column - Empty for layout */}
              <div className="hidden sm:block"></div>
            </div>
          </div>
        </div>
      
        {/* Contact Section */}
        <div className="flex items-center justify-center px-4 md:px-20 py-28">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-4xl mb-8 text-white gt-america-regular">
              Request expert advice on our products and technologies.
            </h2>
      
            <button className="relative overflow-hidden border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-[#e2de00]
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0">
              <span className="relative z-10">Contact us</span>
            </button>
          </div>
        </div>
      </div>
      

    );
}

export default Contact;
