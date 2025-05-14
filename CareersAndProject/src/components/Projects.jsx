import { FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI Healthcare Suite',
      description: 'A comprehensive platform integrating AI for diagnostics, patient management, and telehealth services.',
      image: 'https://via.placeholder.com/400x250?text=AI+Healthcare',
      link: '#',
    },
    {
      title: 'Smart City Dashboard',
      description: 'A real-time analytics platform for urban planning and resource optimization.',
      image: 'https://via.placeholder.com/400x250?text=Smart+City',
      link: '#',
    },
    {
      title: 'EdTech Learning Hub',
      description: 'A scalable e-learning ecosystem with personalized learning paths and gamification.',
      image: 'https://via.placeholder.com/400x250?text=EdTech+Hub',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-selamOffWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-selamNavy flex items-center justify-center">
            <FaProjectDiagram className="mr-3 text-selamBlue" /> Our Portfolio
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-selamSlate max-w-3xl mx-auto text-lg"
          >
            Explore our flagship projects that showcase our expertise in transformative technology solutions.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-selamNavy opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.a
                    href={project.link}
                    className="inline-block text-selamBlue hover:text-selamGold font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
              <div className="p-6 border-t border-selamTeal border-opacity-30">
                <h3 className="text-xl font-semibold text-selamNavy">{project.title}</h3>
                <p className="mt-2 text-selamSlate">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;