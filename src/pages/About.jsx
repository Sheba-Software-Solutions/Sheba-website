import React from 'react';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import AboutSection from '../Components/Home/AboutSection';
import { 
  Users, 
  Award, 
  Target,
  Code,
  Globe,
  Lightbulb,
  Shield
} from 'lucide-react';
import { imageHelpers } from '../utils/imageHelpers';
import SmartImage from '../Components/ui/SmartImage';

const About = () => {
  // Static team data - the real innovators
  const team = [
    {
      name: "Yoseph Tesfaye",
      role: "Senior Full Stack Engineer and CyberSecurity Analyst at INSA",
      image: imageHelpers.getTeamPlaceholder("Yoseph Tesfaye", "Senior Full Stack Engineer", 0),
      bio: "Expert full-stack engineer with extensive cybersecurity expertise at the Information Network Security Agency. Specializes in building secure, scalable applications while ensuring robust protection against digital threats."
    },
    {
      name: "Yordanos Zegeye",
      role: "Mobile App and Web Developer",
      image: imageHelpers.getTeamPlaceholder("Yordanos Zegeye", "Mobile & Web Developer", 1),
      bio: "Versatile developer proficient in both mobile and web technologies. Creates seamless cross-platform experiences using modern frameworks like React Native and Flutter, delivering high-performance applications."
    },
    {
      name: "Eyoab Amare",
      role: "Solutions Architect and AI Engineer",
      image: imageHelpers.getTeamPlaceholder("Eyoab Amare", "Solutions Architect", 2),
      bio: "Innovative solutions architect with deep expertise in artificial intelligence and machine learning. Designs intelligent systems that leverage AI to solve complex business challenges and drive digital transformation."
    },
    {
      name: "Henock Eyayalem",
      role: "UI/UX Designer and Front End Engineer",
      image: imageHelpers.getTeamPlaceholder("Henock Eyayalem", "UI/UX Designer", 3),
      bio: "Creative designer and front-end engineer who bridges the gap between design and development. Crafts intuitive user interfaces and implements them with pixel-perfect precision using modern web technologies."
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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ethiopian Tech</span>
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in the heart of Ethiopia, we're on a mission to transform Ethiopia's digital landscape 
            through innovative software solutions that empower businesses and communities.
          </p> */}
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
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals united by a passion for technology and a commitment to excellence.
            </p>
          </div>

          {/* Team Grid */}
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