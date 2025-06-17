import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fallback mechanism - show content after a short delay if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      setHasLoaded(true);
      setIsVisible(true);
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Reduced threshold and added root margin for better detection
    );

    // Small delay to ensure DOM is ready
    const observerTimer = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(observerTimer);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Rahut kohli',
      title: 'CEO, TechVenture Inc.',
      company: 'TechVenture Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Sheba Software Developers transformed our entire digital infrastructure. Their team delivered beyond our expectations with innovative solutions that increased our operational efficiency by 300%. The attention to detail and commitment to excellence is unmatched.',
      rating: 5,
      project: 'Enterprise ERP System',
      result: '300% efficiency increase',
      projectImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      projectDescription: 'A comprehensive enterprise resource planning system that streamlined operations and boosted productivity across all departments.'
    },
    {
      id: 2,
      name: 'Khlinten Demelash',
      title: 'Founder & CTO, Selam Softwares',
      company: 'Selam Softwares',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Working with Sheba was a game-changer for our techlab. They built a scalable platform that grew with us from 1,000 to over 100,000 users. Their technical expertise and strategic thinking helped us secure Series A funding.',
      rating: 5,
      project: 'Scalable Saas Platform',
      result: '100x user growth',
      projectImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      projectDescription: 'A modern, scalable SaaS platform built with cutting-edge technology to handle massive user growth and complex business logic.'
    },
    {
      id: 3,
      name: 'Dr. Muktar Kasim',
      title: 'Director of Digital Health, SafeCare',
      company: 'SafeCare Solutions',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'The healthcare platform Sheba developed for us has revolutionized patient care in our network. The intuitive design and robust security features have made it the gold standard in our industry. Truly exceptional work.',
      rating: 5,
      project: 'Healthcare Management System',
      result: '50K+ patients served',
      projectImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      projectDescription: 'A comprehensive healthcare management platform that digitized patient records and streamlined care delivery across multiple facilities.'
    },
    {
      id: 4,
      name: 'Henock Guta',
      title: 'VP of Technology, Ahun Gebeya',
      company: 'Ahun Gebeya',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Sheba\'s e-commerce solution increased our online sales by 250% in just six months. Their understanding of user experience and conversion optimization is remarkable. They\'re not just developers, they\'re strategic partners.',
      rating: 5,
      project: 'E-commerce Platform',
      result: '250% sales increase',
      projectImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      projectDescription: 'A high-performance e-commerce platform with advanced analytics, personalized recommendations, and seamless checkout experience.'
    }
  ];

  const stats = [
    { icon: Users, value: '20K+', label: 'Happy Clients' },
    { icon: Award, value: '15+',label: 'Projects Delivered' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  // Determine visibility state with fallback
  const getVisibilityClass = () => {
    const isVisibleState = hasLoaded || isVisible;
    return isVisibleState ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
  };

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${getVisibilityClass()}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Industry
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-1000 delay-${index * 100} ${getVisibilityClass()}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4 shadow-sm">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 transform transition-all duration-1000 ${getVisibilityClass()}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Testimonial content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-12 h-12 text-blue-200 mb-6" />
              
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTest.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{currentTest.name}</h4>
                  <p className="text-blue-600 font-medium">{currentTest.title}</p>
                  <p className="text-gray-500 text-sm">{currentTest.company}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Project Image & Details */}
            <div className="relative overflow-hidden bg-gray-900">
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={currentTest.projectImage}
                  alt={currentTest.project}
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative p-8 lg:p-12 text-white flex flex-col justify-end h-full min-h-[400px]">
                <div className="transform transition-all duration-500">
                  <div className="inline-flex items-center gap-2 text-white/90 text-sm font-medium mb-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Award className="w-4 h-4" />
                    Success Story
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
                    {currentTest.project}
                  </h3>
                  
                  <div className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
                    {currentTest.result}
                  </div>
                  
                  <p className="text-white/95 text-lg leading-relaxed mb-8 drop-shadow-sm">
                    {currentTest.projectDescription}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 self-start border border-white/20 hover:border-white/40">
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                index === currentTestimonial ? 'ring-2 ring-blue-500 scale-105' : ''
              } ${getVisibilityClass()}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.quote.substring(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;