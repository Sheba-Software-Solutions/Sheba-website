import React, { useEffect, useRef, useState } from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({ mission: false, vision: false });
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardType = entry.target.dataset.card;
            setIsVisible((prev) => ({ ...prev, [cardType]: true }));
            // Optionally stop observing after animation triggers
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the card is visible
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 heading-font">
            About <span className="text-amber-900">Sheba</span> Software Solutions
          </h2>
          <div className="w-24 h-1 bg-amber-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in Addis Ababa, we are Ethiopia's premier software development company committed to driving digital transformation across industries.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sheba Software Solutions team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600 to-transparent opacity-30"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 heading-font">
              Our <span className="text-amber-900">Ethiopian</span> Heritage,{' '}
              <span className="text-accent-brown">Global</span> Standards
            </h3>
            <p className="text-gray-600 mb-6">
              Sheba Software Solutions was born from a vision to bridge the technological gap in Ethiopia while preserving our rich cultural heritage. We combine local expertise with international best practices to deliver solutions that work in the Ethiopian context.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                ref={missionRef}
                data-card="mission"
                className={`relative bg-amber-900 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.mission ? 'animate-fadeIn' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-50 rounded-xl"></div>
                <div className="relative flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <FaBullseye className="text-amber-900 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 heading-font text-lg">Our Mission</h4>
                    <p className="text-white text-sm opacity-90">
                      To empower Ethiopian businesses through innovative, locally-relevant technology solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div
                ref={visionRef}
                data-card="vision"
                className={`relative bg-amber-900 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.vision ? 'animate-fadeIn' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-50 rounded-xl"></div>
                <div className="relative flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <FaEye className="text-amber-900 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 heading-font text-lg">Our Vision</h4>
                    <p className="text-white text-sm opacity-90">
                      To be Ethiopia's leading technology partner in the digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-amber-900">
              <p className="text-gray-700 italic">
                "At Sheba Software Solutions, we believe technology should reflect the unique needs and aspirations of the Ethiopian people while connecting us to the global digital economy."
              </p>
              <p className="mt-4 font-medium text-gray-800">- CEO, Sheba Software Solutions</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;