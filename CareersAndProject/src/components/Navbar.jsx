import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white py-6 fixed top-0 left-0 right-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaRocket className="text-[#2BA6FF] text-3xl mr-2" aria-hidden="true" />
          <h1 className="text-xl font-bold text-[#1F2937] tracking-wide font-[Poppins]">Sheba Technologies</h1>
        </motion.div>
        <div className="space-x-6">
          {['home', 'about', 'services', 'projects', 'blog', 'careers', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[#1F2937] hover:text-[#2BA6FF] transition-colors font-[Inter]"
              aria-label={`Navigate to ${item.charAt(0).toUpperCase() + item.slice(1)} section`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;