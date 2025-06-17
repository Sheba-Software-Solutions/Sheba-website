import React from 'react';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import ProjectsSection from '../Components/Home/ProjectsSection';
import { 
  Sparkles, 
  Filter,
  ArrowRight,
  Code,
  Users,
  Award
} from 'lucide-react';

const Projects = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '100K+', label: 'Users Served' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  const industries = [
    { name: 'FinTech', count: 12, color: 'bg-blue-600' },
    { name: 'Healthcare', count: 8, color: 'bg-purple-600' },
    { name: 'Agriculture', count: 10, color: 'bg-green-600' },
    { name: 'Education', count: 6, color: 'bg-indigo-600' },
    { name: 'E-commerce', count: 9, color: 'bg-orange-600' },
    { name: 'Government', count: 5, color: 'bg-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of successful projects across various industries. 
            Each solution is crafted with precision, innovation, and a deep understanding of our clients' needs.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 shadow-sm">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Filter className="w-4 h-4" />
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Diverse Expertise Across Sectors
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <div className={`w-12 h-12 ${industry.color} rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} Projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Component */}
      <ProjectsSection />

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Measurable Impact, Real Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
              <div className="text-gray-700 font-medium mb-2">Revenue Increase</div>
              <div className="text-sm text-gray-600">Average client revenue growth after implementing our solutions</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium mb-2">Uptime</div>
              <div className="text-sm text-gray-600">System reliability across all deployed applications</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Support</div>
              <div className="text-sm text-gray-600">Round-the-clock technical support and maintenance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution that drives your business forward and delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects; 