import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import AboutSection from '../Components/Home/AboutSection';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Code,
  Globe,
  Lightbulb,
  Shield,
  Loader2
} from 'lucide-react';
import { websiteApi } from '../utils/api';
import { imageHelpers } from '../utils/imageHelpers';
import SmartImage from '../Components/ui/SmartImage';

const About = () => {
  const [team, setTeam] = useState([]);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);
  const [teamError, setTeamError] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setIsLoadingTeam(true);
      const response = await websiteApi.getTeamMembers({ 
        status: 'active',
        ordering: 'order'
      });
      const data = response?.data;
      const fetchedTeam = Array.isArray(data) ? data : (data?.results || []);
      
      // Transform backend data to match frontend format
      const transformedTeam = fetchedTeam.map((member, index) => ({
        name: member.name,
        role: member.position || member.role,
        image: member.image || imageHelpers.getTeamPlaceholder(member.name, member.role, index),
        bio: member.bio || member.description || "Passionate team member dedicated to excellence."
      }));
      
      setTeam(transformedTeam);
    } catch (err) {
      console.error('Failed to fetch team members:', err);
      setTeamError(`Failed to load team members: ${err.response?.data?.detail || err.message || 'Network error'}`);
      setTeam([]); // Don't fallback to static data
    } finally {
      setIsLoadingTeam(false);
    }
  };

  const getDefaultTeam = () => [
    {
      name: "Abebe Tadesse",
      role: "CEO & Founder",
      image: imageHelpers.getTeamPlaceholder("Abebe Tadesse", "CEO & Founder", 0),
      bio: "Visionary leader with 10+ years in software development and business strategy."
    },
    {
      name: "Meron Haile",
      role: "CTO",
      image: imageHelpers.getTeamPlaceholder("Meron Haile", "CTO", 1),
      bio: "Technical expert specializing in scalable architecture and emerging technologies."
    },
    {
      name: "Daniel Bekele",
      role: "Lead Developer",
      image: imageHelpers.getTeamPlaceholder("Daniel Bekele", "Lead Developer", 2),
      bio: "Full-stack developer passionate about creating elegant, efficient solutions."
    },
    {
      name: "Sara Alemayehu",
      role: "UI/UX Designer",
      image: imageHelpers.getTeamPlaceholder("Sara Alemayehu", "UI/UX Designer", 3),
      bio: "Creative designer focused on user-centered design and exceptional experiences."
    }
  ];

  const values = [
    {
      icon: Code,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex problems."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our success. We build lasting partnerships through exceptional service."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards in code quality, security, and performance."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that make a difference locally in Ethiopia and globally."
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            About Sheba Software
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ethiopian Tech</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in the heart of Addis Ababa, we're on a mission to transform Ethiopia's digital landscape 
            through innovative software solutions that empower businesses and communities.
          </p>
        </div>
      </div>

      {/* About Section Component */}
      <AboutSection />

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 shadow-sm">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals united by a passion for technology and a commitment to excellence.
            </p>
          </div>

          {/* Loading State */}
          {isLoadingTeam && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="text-4xl text-blue-600 animate-spin" />
            </div>
          )}

          {/* Error State */}
          {teamError && !isLoadingTeam && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                  <div className="text-red-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Team</h3>
                  <p className="text-red-700 mb-4">{teamError}</p>
                  <button 
                    onClick={fetchTeamMembers}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Team Grid */}
          {!isLoadingTeam && !teamError && team.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <SmartImage
                      src={member.image}
                      alt={member.name}
                      fallback={imageHelpers.getTeamPlaceholder(member.name, member.role, index)}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-300" />
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              Start Your Project
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 