import React, { useState, useEffect } from 'react';
import { websiteApi } from '../utils/api';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  Star,
  ArrowRight,
  Code,
  Palette,
  Shield,
  Zap
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await websiteApi.getJobs();
      const fetchedJobs = response?.data?.results || response?.data || [];
      
      // Transform backend data to match frontend format
      const transformedJobs = fetchedJobs.map(job => ({
        id: job.id,
        title: job.title,
        department: job.department.charAt(0).toUpperCase() + job.department.slice(1),
        location: job.location || 'Remote',
        type: job.job_type === 'full_time' ? 'Full-time' : 
              job.job_type === 'part_time' ? 'Part-time' : 
              job.job_type === 'contract' ? 'Contract' : 
              job.job_type === 'internship' ? 'Internship' : 'Remote',
        experience: job.experience_level === 'entry' ? '0-1 years' :
                   job.experience_level === 'junior' ? '1-3 years' :
                   job.experience_level === 'mid' ? '3-5 years' :
                   job.experience_level === 'senior' ? '5+ years' : '8+ years',
        description: job.description,
        requirements: job.requirements || [],
        salary: job.salary_range || 'Competitive'
      }));
      
      setJobs(transformedJobs);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      setError('Failed to load job postings');
      // Use fallback static jobs if API fails
      setJobs(staticJobs);
    } finally {
      setIsLoading(false);
    }
  };

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales'];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Code,
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: Star,
      title: "Competitive Salary",
      description: "Market-competitive salaries with performance bonuses"
    }
  ];

  const staticJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable web applications using modern technologies.",
      requirements: ["React/Node.js", "AWS/Cloud", "5+ years experience"],
      salary: "Competitive"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful and intuitive user experiences for our clients' applications.",
      requirements: ["Figma/Adobe Creative Suite", "User Research", "3+ years experience"],
      salary: "Competitive"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "4+ years experience"],
      salary: "Competitive"
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive our digital marketing efforts and grow our online presence.",
      requirements: ["SEO/SEM", "Social Media", "Analytics", "2+ years experience"],
      salary: "Competitive"
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Career With
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Sheba Software</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join a team of passionate innovators who are shaping the future of technology in Ethiopia. 
            We offer exciting opportunities for growth, learning, and making a real impact.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Why Work With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Amazing Benefits & Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members and creating an environment where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Open Positions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedDepartment === dept
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {job.department}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">{job.salary}</div>
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No positions available in this department at the moment.</p>
              <p className="text-gray-500 mt-2">Check back soon or contact us about future opportunities!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers; 