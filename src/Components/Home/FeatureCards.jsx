import React, { useEffect, useRef, useState } from 'react';
import { Smile } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally stop observing after animation triggers
          // observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          {
            bgColor: 'bg-black',
            title: (
              <div className="flex flex-col">
                <span className={`text-3xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  Discover our
                </span>
                <span className={`text-3xl font-bold text-blue-200 ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  Work
                </span>
              </div>
            ),
            description: 'These are our crafts',
            buttonText: 'Our Portfolio',
          },
          {
            bgColor: 'bg-gradient-to-b from-blue-100 to-blue-200',
            title: (
              <div className="flex justify-between items-start">
                <span className={`text-3xl font-bold text-black ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  Join us
                </span>
                <div className="text-black relative">
                  <span
                    className={`absolute -top-2 right-8 text-2xl ${isVisible ? 'animate-wiggle' : 'opacity-0'}`}
                    style={{ animationDelay: '0.6s' }}
                  >
                    ✕
                  </span>
                  <span
                    className={`absolute -top-2 right-3 text-2xl ${isVisible ? 'animate-wiggle' : 'opacity-0'}`}
                    style={{ animationDelay: '0.8s' }}
                  >
                    ✕
                  </span>
                  <Smile
                    size={40}
                    className={`mt-3 ${isVisible ? 'animate-spinIn' : 'opacity-0'}`}
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>
            ),
            description: 'The best place to work and grow',
            buttonText: 'Check open positions',
            buttonVariant: 'secondary',
          },
          {
            bgColor: 'bg-black',
            title: (
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className={`text-3xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                    Have a
                  </span>
                  <span className={`text-3xl font-bold text-blue-200 ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                    project
                  </span>
                  <span className={`text-3xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    in mind?
                  </span>
                </div>
                <div className="relative">
                  <div
                    className={`absolute -top-6 right-0 w-14 h-14 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full ${isVisible ? 'animate-pulseCircle' : 'opacity-0'}`}
                    style={{ animationDelay: '0.8s' }}
                  ></div>
                </div>
              </div>
            ),
            description: 'Reach out and let us sort it out',
            buttonText: 'Request a meeting',
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-rotate-1 hover:border-2 hover:border-blue-200/50 ${
              isVisible ? 'animate-cardFadeIn' : 'opacity-0 translate-y-10'
            } ${card.bgColor} overflow-hidden`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {card.bgColor === 'bg-black' && (
              <div className="absolute inset-0 bg-gradient-radial from-blue-200/10 to-transparent animate-pulseBg"></div>
            )}
            <FeatureCard
              bgColor="bg-transparent"
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonVariant={card.buttonVariant}
              className={`relative z-10 ${isVisible ? 'animate-buttonSlideIn' : 'opacity-0 translate-y-5'}`}
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cardFadeIn {
          animation: cardFadeIn 0.8s ease-out forwards;
        }
        @keyframes typewriter {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-typewriter {
          animation: typewriter 0.5s ease-out forwards;
        }
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 0.4s ease-in-out forwards;
        }
        @keyframes spinIn {
          from {
            opacity: 0;
            transform: rotate(180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        .animate-spinIn {
          animation: spinIn 0.6s ease-out forwards;
        }
        @keyframes pulseCircle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        .animate-pulseCircle {
          animation: pulseCircle 2s ease-in-out infinite;
        }
        @keyframes pulseBg {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulseBg {
          animation: pulseBg 4s ease-in-out infinite;
        }
        @keyframes buttonSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-buttonSlideIn {
          animation: buttonSlideIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FeatureCards;