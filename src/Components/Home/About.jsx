import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import Coding from "../../assets/coding.jpg";

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
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to{" "}
          <span
            className="inline-block text-2xl md:text-xl font-bold text-amber-900"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: '#b45309', // Tailwind amber-900
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              letterSpacing: "1px",
            }}
          >
            Sheba Software Solutions
          </span>
        </p>

        <AnimatedTitle
          title="CRAFTING <b>y</b>our <br /> digital <b>f</b>uture, today"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext text-center max-w-2xl mx-auto px-4">
          
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={Coding}
            alt="Software Development Environment"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;