import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Career = () => {
  const jobs = [
    {
      title: 'Lead Software Architect',
      type: 'Full-Time',
      location: 'Remote',
      description: 'Design and oversee scalable, high-impact software solutions for global clients.',
      link: '#apply',
    },
    {
      title: 'Product Designer',
      type: 'Contract',
      location: 'Addis Ababa, Ethiopia',
      description: 'Create user-centric designs for next-generation tech products.',
      link: '#apply',
    },
    {
      title: 'Cloud Infrastructure Engineer',
      type: 'Full-Time',
      location: 'Hybrid',
      description: 'Build and optimize robust cloud systems for enterprise applications.',
      link: '#apply',
    },
  ];

  return (
    <section id="career" className="py-24 bg-gradient-to-b from-selamWhite to-selamOffWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-selamNavy flex items-center justify-center">
            <FaBriefcase className="mr-3 text-selamBlue" /> Careers at Sheba Technologies
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-selamSlate max-w-3xl mx-auto text-lg"
          >
            Join our team of innovators to shape the future of technology. Explore opportunities below.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-6 rounded-2xl transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-selamNavy">{job.title}</h3>
                <span className="bg-gradient-to-r from-selamGold to-yellow-500 bg-opacity-30 text-selamGold text-xs font-medium px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
              <p className="text-selamSlate text-sm mt-2">{job.location}</p>
              <p className="mt-3 text-selamSlate">{job.description}</p>
              <motion.a
                href={job.link}
                className="mt-4 inline-block px-6 py-2 bg-selamBlue text-white rounded-full hover:bg-gradient-to-r hover:from-selamGold hover:to-yellow-500 hover:text-selamNavy transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;