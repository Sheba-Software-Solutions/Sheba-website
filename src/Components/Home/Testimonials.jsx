import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
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
      className="mt-16  rounded-xl p-8 md:p-12 "
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 heading-font">
          What Our <span className="text-amber-900">Clients</span> Say
        </h2>
        <div className="w-24 h-1 bg-amber-900 mx-auto mb-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            initials: 'AD',
            name: 'Abebe Desta',
            title: 'CEO, EthioBank',
            quote:
              'Sheba Software Solutions transformed our banking operations with their EthioPay platform. Their understanding of the Ethiopian market is unmatched.',
          },
          {
            initials: 'MT',
            name: 'Meron Tadesse',
            title: 'Founder, AgriCoop',
            quote:
              'AgriTrack has revolutionized how our farmers manage crops. Sheba’s team delivered a solution that works offline in rural Ethiopia.',
          },
          {
            initials: 'SK',
            name: 'Selam Kebede',
            title: 'Director, HealthFirst',
            quote:
              'HealthLink has connected thousands of patients to doctors in remote areas. Sheba’s commitment to local needs is truly inspiring.',
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-amber-200 ${
              isVisible ? 'animate-cardFadeIn' : 'opacity-0 translate-y-5'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-amber-900 font-bold text-xl mr-3 animate-pulseAvatar"
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">{`"${testimonial.quote}"`}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 ${
                    isVisible ? 'animate-starFadeIn' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2 + i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cardFadeIn {
          animation: cardFadeIn 0.6s ease-out forwards;
        }
        @keyframes pulseAvatar {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-pulseAvatar {
          animation: pulseAvatar 2s ease-in-out infinite;
        }
        @keyframes starFadeIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-starFadeIn {
          animation: starFadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;