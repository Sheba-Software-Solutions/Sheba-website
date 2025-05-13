import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    
    const header = headerRef.current;
    const text = header.textContent;
    header.innerHTML = text
      .split('')
      .map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

   
    gsap.fromTo(
      header.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 font-roboto">
      <h1
        ref={headerRef}
        className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
        You imagine it, we build it
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Sheba Software Solutions crafts custom-made, elegant websites and software
        solutions with seamless functionality. We bring your vision to life with
        precision and creativity.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
          Request Demo
        </button>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection;