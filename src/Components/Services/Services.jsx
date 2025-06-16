import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Settings, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Cpu,
  Database
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Custom Software Development",
      subtitle: "Tailored Solutions for Your Business",
      description: "Transform your vision into powerful, scalable software solutions. From enterprise applications to specialized tools, we craft code that drives results.",
      features: [
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
        "Microservices Architecture",
        "DevOps & CI/CD Implementation"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker"],
      caseStudy: {
        client: "TechCorp Inc.",
        result: "300% increase in operational efficiency",
        description: "Developed a comprehensive ERP system that streamlined operations across 15 departments."
      },
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: Globe,
      title: "Website Development",
      subtitle: "Digital Experiences That Convert",
      description: "Create stunning, responsive websites that captivate your audience and drive business growth. Every pixel tells your story.",
      features: [
        "Responsive Web Design",
        "E-commerce Platforms",
        "Content Management Systems",
        "SEO Optimization",
        "Performance Analytics"
      ],
      technologies: ["React", "Next.js", "Tailwind", "Shopify", "WordPress"],
      caseStudy: {
        client: "Retail Plus",
        result: "250% increase in online sales",
        description: "Redesigned their e-commerce platform with modern UX/UI and mobile optimization."
      },
      gradient: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Innovation in Your Pocket",
      description: "Build native and cross-platform mobile applications that users love. From concept to App Store, we've got you covered.",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications & Analytics"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      caseStudy: {
        client: "HealthTech Solutions",
        result: "500K+ downloads in 6 months",
        description: "Launched a healthcare app that revolutionized patient-doctor communication."
      },
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: Settings,
      title: "IT Consultancy",
      subtitle: "Strategic Technology Leadership",
      description: "Navigate the complex technology landscape with confidence. Our experts guide your digital transformation journey.",
      features: [
        "Technology Strategy Planning",
        "Digital Transformation",
        "System Architecture Design",
        "Security Assessments",
        "Performance Optimization"
      ],
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "Monitoring"],
      caseStudy: {
        client: "Finance Corp",
        result: "60% reduction in operational costs",
        description: "Implemented cloud-first strategy and automated key business processes."
      },
      gradient: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure for Growth",
      description: "Harness the power of the cloud to scale your business. Secure, reliable, and cost-effective cloud solutions.",
      features: [
        "Cloud Migration Services",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Disaster Recovery",
        "Cost Optimization"
      ],
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      caseStudy: {
        client: "StartupXYZ",
        result: "99.9% uptime achieved",
        description: "Migrated legacy systems to cloud, ensuring 24/7 availability and scalability."
      },
      gradient: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 6,
      icon: Shield,
      title: "Cybersecurity Services",
      subtitle: "Protect What Matters Most",
      description: "Safeguard your digital assets with comprehensive security solutions. Peace of mind in an interconnected world.",
      features: [
        "Security Audits & Penetration Testing",
        "Compliance Management",
        "Incident Response",
        "Employee Security Training",
        "24/7 Security Monitoring"
      ],
      technologies: ["SIEM", "Firewall", "VPN", "Encryption", "Multi-Factor Auth"],
      caseStudy: {
        client: "DataSecure Ltd",
        result: "Zero security breaches in 2 years",
        description: "Implemented comprehensive security framework protecting sensitive customer data."
      },
      gradient: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-700"
    }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "Client Rating" }
  ];

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build software—we craft digital experiences that propel your business forward. 
            From concept to deployment, we're your technology partners for success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4 shadow-sm">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isActive ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                onClick={() => setActiveService(index)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wide">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Case Study Preview */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Success Story</p>
                        <p className="font-semibold text-gray-900">{service.caseStudy.result}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        {activeService !== null && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 transform transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Details */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 ${services[activeService].bgColor} rounded-2xl`}>
                    {React.createElement(services[activeService].icon, {
                      className: `w-8 h-8 ${services[activeService].iconColor}`
                    })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h3>
                    <p className="text-blue-600 font-medium">{services[activeService].subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* All Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* All Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Case Study */}
              <div className={`p-8 lg:p-12 bg-gradient-to-br ${services[activeService].gradient} text-white`}>
                <div className="h-full flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Success Story
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">
                    {services[activeService].caseStudy.client}
                  </h4>
                  
                  <div className="text-3xl font-bold mb-4 text-white/90">
                    {services[activeService].caseStudy.result}
                  </div>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    {services[activeService].caseStudy.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our expertise can drive your success. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 