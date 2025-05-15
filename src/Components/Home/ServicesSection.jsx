import React from 'react';
import { FaCode, FaCloud, FaRobot, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 ethiopian-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 heading-font">
            Our <span className="text-amber-900">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet the specific needs of Ethiopian businesses and organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-r from-amber-300 to-amber-600 flex items-center justify-center">
              <FaCode className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 heading-font">
                Custom Software Development
              </h3>
              <p className="text-gray-600 mb-4">
                Bespoke software solutions tailored to your business requirements, built with Ethiopian market considerations in mind.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Web & Mobile Applications
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Enterprise Solutions
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Localized UX/UI Design
                </li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-r from-amber-300 to-amber-600 flex items-center justify-center">
              <FaCloud className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 heading-font">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Secure and scalable cloud services optimized for Ethiopia's infrastructure and connectivity landscape.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Cloud Migration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Hybrid Cloud Solutions
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Local Data Compliance
                </li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-r from-amber-300 to-amber-700 flex items-center justify-center">
              <FaRobot className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 heading-font">AI & Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Harness the power of artificial intelligence and data to gain insights relevant to the Ethiopian context.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Machine Learning Models
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-amber-900 mr-2" />
                  Local Language NLP
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-300 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Explore All Services
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;