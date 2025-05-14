import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-selamWhite bg-opacity-90 backdrop-blur-sm sticky top-0 z-20 py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaRocket className="text-selamBlue text-3xl mr-3" />
          <h1 className="text-2xl font-bold text-selamNavy tracking-tight">Sheba Technologies</h1>
        </motion.div>
        <div className="space-x-8">
          <motion.a
            href="#career"
            className="text-selamSlate hover:text-selamBlue transition font-medium"
            whileHover={{ scale: 1.1, color: '#AA7A26' }}
          >
            Careers
          </motion.a>
          <motion.a
            href="#projects"
            className="text-selamSlate hover:text-selamBlue transition font-medium"
            whileHover={{ scale: 1.1, color: '#AA7A26' }}
          >
            Projects
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;