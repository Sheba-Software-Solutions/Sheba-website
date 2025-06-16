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
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight relative z-10 text-gray-800">
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
                  word === 'ETHIOPIA' ? 'text-amber-900' : 'text-gray-800'
                }`}
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
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
                    className={`inline-block w-1 h-6 bg-amber-900 ml-1 ${isVisible ? 'animate-cursorBlink' : 'opacity-0'}`}
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
            transform: scale(1.2);
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
            opacity: 0.3;
          }
          50% {
            transform: translateX(10%);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-10%);
            opacity: 0.3;
          }
        }
        .animate-waveBg {
          animation: waveBg 8s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;