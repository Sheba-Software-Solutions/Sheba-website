import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({ mission: false, vision: false, main: false });
  const [hasLoaded, setHasLoaded] = useState(false);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Fallback mechanism - show content after a short delay if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      setHasLoaded(true);
      setIsVisible({ mission: true, vision: true, main: true });
    }, 500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardType = entry.target.dataset.card;
            setIsVisible((prev) => ({ ...prev, [cardType]: true }));
            setHasLoaded(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' } // Reduced threshold and added root margin for better detection
    );

    // Small delay to ensure DOM is ready
    const observerTimer = setTimeout(() => {
      if (missionRef.current) observer.observe(missionRef.current);
      if (visionRef.current) observer.observe(visionRef.current);
      if (mainRef.current) observer.observe(mainRef.current);
    }, 100);

    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(observerTimer);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (mainRef.current) observer.unobserve(mainRef.current);
    };
  }, []);

  const achievements = [
    "Ethiopia's premier software development company",
    "Committed to driving digital transformation",
    "Bridging technology gaps with local expertise",
    "International best practices with Ethiopian context"
  ];

  const stats = [
    { icon: Users, value: '15+', label: 'Expert Developers' },
    { icon: Globe, value: '20++', label: 'Global Projects' },
    { icon: Award, value: '2+', label: 'Years Experience' }
  ];

  // Determine visibility state with fallback
  const getVisibilityClass = (section) => {
    const isVisibleState = hasLoaded || isVisible[section];
    return isVisibleState ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
  };

  return (
    <section
      ref={mainRef}
      data-card="main"
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${getVisibilityClass('main')}`}>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in <span className="font-semibold text-blue-600">Heart of Ethiopia</span>, we are Ethiopia's premier software development company committed to driving digital transformation across industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${getVisibilityClass('main')}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 shadow-sm">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className={`transform transition-all duration-1000 delay-400 ${getVisibilityClass('main')}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Sheba Software Solutions team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2024</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Our <span className="text-blue-600">Ethiopian</span> Heritage,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global</span> Standards
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sheba Software Solutions was born from a vision to bridge the technological gap in Ethiopia while preserving our rich cultural heritage. We combine local expertise with international best practices to deliver solutions that work in the Ethiopian context.
              </p>

              {/* Achievements List */}
              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div
                  ref={missionRef}
                  data-card="mission"
                  className={`group relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${hasLoaded || isVisible.mission ? 'animate-fadeIn' : 'opacity-0 translate-y-5'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-800/20 rounded-2xl"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">Our Mission</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      To empower Ethiopian businesses through innovative, locally-relevant technology solutions.
                    </p>
                  </div>
                </div>

                <div
                  ref={visionRef}
                  data-card="vision"
                  className={`group relative bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${hasLoaded || isVisible.vision ? 'animate-fadeIn' : 'opacity-0 translate-y-5'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-800/20 rounded-2xl"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">Our Vision</h4>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      To be Ethiopia's leading technology partner in the digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg">
                {/* <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "At Sheba Software Solutions, we believe technology should reflect the unique needs and aspirations of the Ethiopian people while connecting us to the global digital economy."
                </p> */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Us</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ethiopian Heritage</p>
                    {/* <p className="text-gray-600 text-sm">Founder & Visionary</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${getVisibilityClass('main')}`}>
          {/* <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
            Learn More About Us
            <ArrowRight className="w-5 h-5" />
          </button> */}
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