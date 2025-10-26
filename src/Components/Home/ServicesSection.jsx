import React, { useState, useEffect } from 'react';
import { FaCode, FaCloud, FaRobot, FaCheckCircle, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { websiteApi } from '../../utils/api';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await websiteApi.getServices({ 
          status: 'active',
          ordering: 'order'
        });
        const data = response?.data;
        setServices(Array.isArray(data) ? data : (data?.results || []));
      } catch (err) {
        console.error('Failed to fetch services:', err);
        setError(`Failed to load services: ${err.response?.data?.detail || err.message || 'Network error'}`);
        setServices([]); // Don't fallback to static data
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIconComponent = (iconName) => {
    const iconMap = {
      'FaCode': FaCode,
      'FaCloud': FaCloud,
      'FaRobot': FaRobot,
    };
    return iconMap[iconName] || FaCode;
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 ethiopian-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 heading-font">
              Our <span className="text-amber-900">Services</span>
            </h2>
            <div className="w-24 h-1 bg-amber-900 mx-auto mb-6"></div>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the specific needs of Ethiopian businesses and organizations.
            </p> */}
          </div>
          <div className="flex justify-center items-center py-20">
            <FaSpinner className="text-4xl text-amber-900 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

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
        
        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
            <p className="text-yellow-800">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div key={service.id} className="service-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-r from-amber-300 to-amber-600 flex items-center justify-center">
                  <IconComponent className="text-white text-6xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 heading-font">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheckCircle className="text-amber-900 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
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