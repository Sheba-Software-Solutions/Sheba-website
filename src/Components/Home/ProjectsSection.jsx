import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import TestimonialsSection from './Testimonials';
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 heading-font">
            Our <span className="text-amber-900">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-amber-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcase of our work delivering impactful solutions for clients across Ethiopia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card">
            <div className="project-card-inner h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-500 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="EthioPay project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-amber-900 opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-amber-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    FinTech
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 heading-font">EthioPay</h3>
                  <p className="text-gray-600 mb-4">
                    A localized payment gateway solution designed specifically for Ethiopian merchants and consumers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Mobile App</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Payment Processing</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Amharic UI</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#"
                    className="text-amber-900 font-medium hover:text-blue-800 transition flex items-center"
                  >
                    View Case Study
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-inner h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-accent-brown to-dark-brown relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="AgriTrack project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent-brown opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Agriculture
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 heading-font">AgriTrack</h3>
                  <p className="text-gray-600 mb-4">
                    Farm management system helping Ethiopian farmers optimize crop yields with data-driven insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">IoT Integration</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Localized</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Offline Capable</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#"
                    className="text-amber-900 font-medium hover:text-blue-800 transition flex items-center"
                  >
                    View Case Study
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-inner h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-amber-900 to-blue-700 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                    alt="HealthLink project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-amber-900 opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-amber-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Healthcare
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 heading-font">HealthLink</h3>
                  <p className="text-gray-600 mb-4">
                    A telemedicine platform connecting rural Ethiopian communities with healthcare providers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Telemedicine</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Amharic Support</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Mobile-First</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#"
                    className="text-amber-900 font-medium hover:text-blue-800 transition flex items-center"
                  >
                    View Case Study
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default ProjectsSection;