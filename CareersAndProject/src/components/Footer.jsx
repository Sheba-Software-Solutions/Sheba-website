import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-selamWhite bg-opacity-90 backdrop-blur-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://twitter.com"
            className="text-selamSlate hover:text-selamBlue"
            whileHover={{ scale: 1.2, color: '#AA7A26' }}
          >
            <FaTwitter className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="text-selamSlate hover:text-selamBlue"
            whileHover={{ scale: 1.2, color: '#AA7A26' }}
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            href="mailto:info@selamtech.com"
            className="text-selamSlate hover:text-selamBlue"
            whileHover={{ scale: 1.2, color: '#AA7A26' }}
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
        </motion.div>
        <p className="text-selamSlate text-lg">© 2025 Selam Technologies. All rights reserved.</p>
        <p className="text-selamSlate text-sm mt-2">Addis Ababa, Ethiopia</p>
      </div>
    </footer>
  );
};

export default Footer;