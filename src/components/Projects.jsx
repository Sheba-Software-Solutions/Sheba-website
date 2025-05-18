import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaSearch, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const techCloudRef = useRef(null);

  const projects = [
    {
      title: 'FinTech App',
      client: 'African Banking Corp',
      category: 'fintech',
      description: 'A mobile-first platform for seamless financial transactions across Africa.',
      challenge: 'Create a secure, user-friendly app for diverse financial needs.',
      solution: 'Developed a React Native app with blockchain-based security.',
      impact: ['2M+ active users', '80% faster transactions', 'Deployed in 10 countries'],
      image: '/assets/fintech-app.jpg',
      technologies: ['React Native', 'Blockchain', 'Node.js', 'AWS'],
      testimonial: {
        text: 'Transformed how we serve our customers.',
        author: 'James Okoye',
        role: 'CEO',
      },
    },
    {
      title: 'AgriTech Solution',
      client: 'Ethiopian Farmers Union',
      category: 'agritech',
      description: 'An IoT-based platform to optimize farming practices and yields.',
      challenge: 'Improve crop yields with limited resources.',
      solution: 'Built an IoT system with AI-driven insights for farmers.',
      impact: ['30% increase in yields', '50K+ farmers onboarded', '5 regions covered'],
      image: '/assets/agritech-solution.jpg',
      technologies: ['IoT', 'Python', 'React', 'MongoDB'],
      testimonial: {
        text: 'A lifeline for our farmers.',
        author: 'Abebe Kebede',
        role: 'Union Leader',
      },
    },
  ];

  const categories = ['all', 'fintech', 'agritech'];
  const techStack = ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Blockchain', 'IoT', 'TensorFlow'];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-white text-[#1F2937] relative">
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-[Poppins]"
          >
            Projects That Shape <span className="text-[#2BA6FF]">The Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#4B5563] mb-12 max-w-3xl mx-auto font-[Inter]"
          >
            Turning bold ideas into transformative realities with precision and passion.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(43, 166, 255, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-[Inter] transition-all ${
                  filter === cat ? 'bg-[#2BA6FF] text-white' : 'bg-[#F3F4F6] text-[#1F2937]'
                }`}
                aria-label={`Filter by ${cat}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B5563]" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-[#F3F4F6] border-none focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] text-[#1F2937] font-[Inter]"
              aria-label="Search projects"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-24">
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#F3F4F6] rounded-xl overflow-hidden mb-8 break-inside-avoid cursor-pointer shadow-sm"
              onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(selectedProject?.title === project.title ? null : project)}
              aria-label={`View details for ${project.title}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-2 py-1 bg-[#2BA6FF] text-white rounded-full text-sm font-[Inter]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-[Poppins] text-[#1F2937]">{project.title}</h3>
                <p className="text-[#4B5563] text-sm mb-4 font-[Inter]">{project.client}</p>
                <p className="text-[#4B5563] mb-6 font-[Inter]">{project.description}</p>
                {selectedProject?.title === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <h4 className="text-xl font-semibold mb-3 font-[Poppins] text-[#1F2937]">The Challenge</h4>
                    <p className="text-[#4B5563] mb-6 font-[Inter]">{project.challenge}</p>
                    <h4 className="text-xl font-semibold mb-3 font-[Poppins] text-[#1F2937]">Our Solution</h4>
                    <p className="text-[#4B5563] mb-6 font-[Inter]">{project.solution}</p>
                    <h4 className="text-xl font-semibold mb-3 font-[Poppins] text-[#1F2937]">Impact</h4>
                    <ul className="list-disc list-inside text-[#4B5563] mb-6 font-[Inter]">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="mb-2">{item}</li>
                      ))}
                    </ul>
                    <h4 className="text-xl font-semibold mb-3 font-[Poppins] text-[#1F2937]">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#2BA6FF] text-white rounded-full font-[Inter]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="bg-[#F3F4F6] p-6 rounded-xl">
                      <p className="text-[#4B5563] italic mb-4 font-[Inter]">{project.testimonial.text}</p>
                      <p className="font-semibold font-[Poppins] text-[#1F2937]">{project.testimonial.author}</p>
                      <p className="text-[#4B5563] font-[Inter]">{project.testimonial.role}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins] text-[#1F2937]">Our Tech Stack</h2>
        <motion.div
          ref={techCloudRef}
          className="flex overflow-x-auto gap-4 pb-4"
          drag="x"
          dragConstraints={{ left: -200, right: 0 }}
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="px-4 py-2 bg-[#2BA6FF] text-white rounded-full font-[Inter] whitespace-nowrap"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="bg-[#F3F4F6] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-6"
          >
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 font-[Poppins] text-[#1F2937]">Let's Build Something Amazing Together</h2>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(43, 166, 255, 0.3)' }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#2BA6FF] text-white px-8 py-4 rounded-full text-lg font-semibold font-[Poppins]"
            aria-label="Contact us"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;