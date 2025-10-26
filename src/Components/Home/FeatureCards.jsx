import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cards = [
    {
      bgColor: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
      title: (
        <div className="flex flex-col space-y-2">
          <div className="mb-4">
            <span className={`text-sm text-blue-400 font-medium ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              Our Portfolio
            </span>
          </div>
          <span className={`text-3xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Discover Our
          </span>
          <span className={`text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Exceptional Work
          </span>
        </div>
      ),
      description: 'Explore our award-winning projects and innovative solutions that transform businesses across Ethiopia and beyond.',
      buttonText: 'View Our Portfolio',
      link: '/projects',
      stats: '50+ Projects Delivered'
    },
    {
      bgColor: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
      title: (
        <div className="flex flex-col space-y-2">
          <div className="mb-4">
            <span className={`text-sm text-blue-600 font-medium ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              Career Opportunities
            </span>
          </div>
          <span className={`text-3xl font-bold text-gray-900 ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Join Our
          </span>
          <span className={`text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Elite Team
          </span>
        </div>
      ),
      description: 'Shape the future of Ethiopian tech industry with passionate innovators and cutting-edge projects.',
      buttonText: 'Explore Careers',
      buttonVariant: 'secondary',
      link: '/careers',
      stats: '15+ Open Positions'
    },
    {
      bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-black',
      title: (
        <div className="flex flex-col space-y-2">
          <div className="mb-4">
            <span className={`text-sm text-green-400 font-medium ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              Let's Build Together
            </span>
          </div>
          <span className={`text-3xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Have a
          </span>
          <span className={`text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Vision?
          </span>
          <span className={`text-2xl font-bold text-white ${isVisible ? 'animate-typewriter' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            Let's Make It Reality
          </span>
        </div>
      ),
      description: 'Transform your ideas into powerful digital solutions that drive growth and innovation.',
      buttonText: 'Start Your Project',
      link: '#contact',
      stats: '24/7 Support Available'
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 ${
              isVisible ? 'animate-cardFadeIn' : 'opacity-0 translate-y-10'
            } ${card.bgColor} overflow-hidden border border-white/10`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Animated Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced FeatureCard */}
            <FeatureCard
              bgColor="bg-transparent"
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonVariant={card.buttonVariant}
              link={card.link}
              className={`relative z-10 ${isVisible ? 'animate-buttonSlideIn' : 'opacity-0 translate-y-5'}`}
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            />
            
            {/* Stats Badge */}
            <div className={`absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white/90 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 0.6}s` }}>
              {card.stats}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-cardFadeIn {
          animation: cardFadeIn 1s ease-out forwards;
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
          animation: typewriter 0.6s ease-out forwards;
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        @keyframes spinIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        .animate-spinIn {
          animation: spinIn 0.8s ease-out forwards;
        }
        
        @keyframes rocket {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-3px) rotate(5deg);
          }
        }
        .animate-rocket {
          animation: rocket 2s ease-in-out infinite;
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg) translateX(15px) rotate(-360deg);
          }
          to {
            transform: rotate(0deg) translateX(15px) rotate(0deg);
          }
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 3s linear infinite;
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FeatureCards;