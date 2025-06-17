import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  Sparkles,
  Code,
  Smartphone,
  Heart,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import TestimonialsSection from './Testimonials';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  
  const projectsPerPage = 3;

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

  const allProjects = [
    {
      id: 1,
      title: "EthioPay",
      subtitle: "Digital Payment Revolution",
      description: "A comprehensive payment gateway solution designed specifically for Ethiopian merchants and consumers, featuring local currency support and mobile-first design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "FinTech",
      categoryColor: "bg-blue-600",
      technologies: ["Mobile App", "Payment Processing", "Amharic UI", "Security"],
      stats: { users: "50K+", transactions: "1M+", uptime: "99.9%" },
      gradient: "from-blue-500 to-blue-600",
      year: "2024"
    },
    {
      id: 2,
      title: "AgriTrack",
      subtitle: "Smart Farming Solutions",
      description: "An intelligent farm management system helping Ethiopian farmers optimize crop yields through data-driven insights and IoT integration.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Agriculture",
      categoryColor: "bg-green-600",
      technologies: ["IoT Integration", "Data Analytics", "Offline Capable", "Weather API"],
      stats: { farmers: "5K+", farms: "2K+", yield: "+35%" },
      gradient: "from-green-500 to-green-600",
      year: "2023"
    },
    {
      id: 3,
      title: "HealthLink",
      subtitle: "Telemedicine Platform",
      description: "A comprehensive telemedicine platform connecting rural Ethiopian communities with healthcare providers through secure video consultations.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Healthcare",
      categoryColor: "bg-purple-600",
      technologies: ["Telemedicine", "Amharic Support", "Mobile-First", "HIPAA Compliant"],
      stats: { patients: "10K+", doctors: "500+", consultations: "25K+" },
      gradient: "from-purple-500 to-purple-600",
      year: "2024"
    },
    {
      id: 4,
      title: "EduConnect",
      subtitle: "Digital Learning Platform",
      description: "An innovative e-learning platform designed for Ethiopian students, featuring offline capabilities and multilingual support for remote education.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Education",
      categoryColor: "bg-indigo-600",
      technologies: ["React Native", "Offline Sync", "Video Streaming", "Progress Tracking"],
      stats: { students: "25K+", courses: "500+", completion: "85%" },
      gradient: "from-indigo-500 to-indigo-600",
      year: "2023"
    },
    {
      id: 5,
      title: "LogiFlow",
      subtitle: "Supply Chain Management",
      description: "A comprehensive logistics and supply chain management system optimized for Ethiopian import/export businesses and local distribution networks.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Logistics",
      categoryColor: "bg-orange-600",
      technologies: ["Real-time Tracking", "Inventory Management", "Route Optimization", "Analytics"],
      stats: { shipments: "100K+", partners: "200+", efficiency: "+40%" },
      gradient: "from-orange-500 to-orange-600",
      year: "2023"
    },
    {
      id: 6,
      title: "TourEthio",
      subtitle: "Tourism & Travel Platform",
      description: "A digital tourism platform showcasing Ethiopia's rich cultural heritage and natural beauty, connecting travelers with local guides and experiences.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Tourism",
      categoryColor: "bg-teal-600",
      technologies: ["Booking System", "GPS Integration", "Multi-language", "Payment Gateway"],
      stats: { bookings: "15K+", guides: "300+", rating: "4.8/5" },
      gradient: "from-teal-500 to-teal-600",
      year: "2024"
    },
    {
      id: 7,
      title: "SmartCity Addis",
      subtitle: "Urban Management System",
      description: "A comprehensive smart city solution for Addis Ababa, integrating traffic management, waste collection, and citizen services into one platform.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Smart City",
      categoryColor: "bg-cyan-600",
      technologies: ["IoT Sensors", "AI Analytics", "Mobile App", "Dashboard"],
      stats: { citizens: "500K+", services: "50+", response: "-60%" },
      gradient: "from-cyan-500 to-cyan-600",
      year: "2024"
    },
    {
      id: 8,
      title: "EthioBank Pro",
      subtitle: "Digital Banking Solution",
      description: "A modern digital banking platform designed for Ethiopian financial institutions, featuring mobile banking, loan management, and financial analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Banking",
      categoryColor: "bg-emerald-600",
      technologies: ["Core Banking", "Mobile Banking", "Loan Processing", "Risk Management"],
      stats: { accounts: "75K+", transactions: "5M+", branches: "100+" },
      gradient: "from-emerald-500 to-emerald-600",
      year: "2023"
    },
    {
      id: 9,
      title: "GreenEnergy Hub",
      subtitle: "Renewable Energy Platform",
      description: "A comprehensive platform for managing renewable energy projects in Ethiopia, featuring solar farm monitoring and energy distribution optimization.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Energy",
      categoryColor: "bg-lime-600",
      technologies: ["IoT Monitoring", "Energy Analytics", "Grid Management", "Predictive AI"],
      stats: { capacity: "500MW", efficiency: "+25%", savings: "$2M+" },
      gradient: "from-lime-500 to-lime-600",
      year: "2024"
    }
  ];

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '100K+', label: 'Users Served' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  // Pagination logic
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to projects section when changing pages
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Determine visibility state with fallback
  const getVisibilityClass = () => {
    const isVisibleState = hasLoaded || isVisible;
    return isVisibleState ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${getVisibilityClass()}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Showcase of our work delivering impactful solutions for clients across Ethiopia and beyond.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Showing {startIndex + 1}-{Math.min(endIndex, allProjects.length)} of {allProjects.length} projects
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${getVisibilityClass()}`}>
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

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 delay-400 ${getVisibilityClass()}`}>
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 ${project.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  {project.year}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="text-center text-white">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Project</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 group-hover:shadow-xl`}>
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={`flex items-center justify-center gap-4 mb-20 transform transition-all duration-1000 delay-600 ${getVisibilityClass()}`}>
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Call to Action */}
        <div className={`text-center mb-20 transform transition-all duration-1000 delay-800 ${getVisibilityClass()}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-red-300" />
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-200">
                View All Projects
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default ProjectsSection;