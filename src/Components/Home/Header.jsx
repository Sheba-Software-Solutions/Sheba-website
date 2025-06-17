import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally stop observing after animation triggers
          // observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the header is visible
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 animate-waveBg"></div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight relative z-10">
        {[
          'PREMIUM SOFTWARE',
          'DEVELOPMENT COMPANY IN',
          'ETHIOPIA',
        ].map((line, index) => (
          <div
            key={index}
            className={`block overflow-hidden relative ${isVisible ? 'animate-lineFadeIn' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {line.split(' ').map((word, wordIndex, words) => (
              <span
                key={wordIndex}
                className={`inline-block mr-2 ${
                  word === 'ETHIOPIA' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-black' 
                    : 'text-gray-800'
                }`}
                style={{ 
                  textShadow: word === 'ETHIOPIA' ? 'none' : '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  fontFamily: "'Inter', 'system-ui', '-apple-system', 'sans-serif'"
                }}
              >
                {word.split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={`inline-block ${word === 'ETHIOPIA' && char === 'E' ? 'animate-pulseChar' : ''}`}
                  >
                    {char}
                  </span>
                ))}
                {wordIndex === words.length - 1 && (
                  <span
                    className={`inline-block w-1 h-6 bg-blue-600 ml-1 ${isVisible ? 'animate-cursorBlink' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2 + words.length * 0.1}s` }}
                  ></span>
                )}
              </span>
            ))}
          </div>
        ))}
      </h1>
      <style jsx>{`
        @keyframes lineFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-lineFadeIn {
          animation: lineFadeIn 0.8s ease-out forwards;
        }
        @keyframes pulseChar {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-pulseChar {
          animation: pulseChar 2s ease-in-out infinite;
        }
        @keyframes cursorBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-cursorBlink {
          animation: cursorBlink 1s step-end infinite;
        }
        @keyframes waveBg {
          0% {
            transform: translateX(-10%);
            opacity: 0.2;
          }
          50% {
            transform: translateX(10%);
            opacity: 0.4;
          }
          100% {
            transform: translateX(-10%);
            opacity: 0.2;
          }
        }
        .animate-waveBg {
          animation: waveBg 8s ease-in-out infinite;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1));
        }
      `}</style>
    </header>
  );
};

export default Header;