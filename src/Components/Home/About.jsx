import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Ethiopian Software Development Team Collaboration"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-600/30 to-black/20"></div>
          
          {/* Main Headline */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Building the Future of
              <br />
              <span className="text-blue-300">Ethiopian Tech</span>
            </h1>
          </div>

          {/* Developer Quotes - Hidden on small screens */}
          <div className="absolute top-1/3 left-8 text-white max-w-sm hidden md:block">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-sm md:text-base italic mb-2">
                "Code is poetry written in logic, and Sheba developers are crafting masterpieces."
              </p>
              <p className="text-xs text-blue-300">— Senior Full Stack Developer</p>
            </div>
          </div>

          <div className="absolute top-1/2 right-8 text-white max-w-sm hidden md:block">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border-l-4 border-green-400">
              <p className="text-sm md:text-base italic mb-2">
                "Innovation happens when tradition meets technology. That's the Ethiopian way."
              </p>
              <p className="text-xs text-green-300">— Tech Lead & Architect</p>
            </div>
          </div>

          <div className="absolute bottom-32 left-1/4 text-white max-w-sm hidden lg:block">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border-l-4 border-purple-400">
              <p className="text-sm md:text-base italic mb-2">
                "Every line of code we write is a step towards Ethiopia's digital transformation."
              </p>
              <p className="text-xs text-purple-300">— Mobile App Developer</p>
            </div>
          </div>

          <div className="absolute bottom-32 right-8 text-white max-w-sm hidden lg:block">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border-l-4 border-yellow-400">
              <p className="text-sm md:text-base italic mb-2">
                "The best programs are written when the programmer is supposed to be working on something else."
              </p>
              <p className="text-xs text-yellow-300">— Melinda Varian, IBM Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;