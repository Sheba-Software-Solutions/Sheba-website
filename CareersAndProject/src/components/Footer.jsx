import { FaTwitter, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#F3F4F6] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: FaTwitter, link: 'https://twitter.com', label: 'Twitter' },
            { icon: FaLinkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaEnvelope, link: 'mailto:info@shebatech.com', label: 'Email' },
            { icon: FaGlobe, link: 'https://shebatech.com', label: 'Website' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              className="text-[#1F2937] hover:text-[#2BA6FF] transition-all"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Visit our ${social.label}`}
            >
              <social.icon className="text-3xl" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>
        <p className="text-lg font-semibold font-[Poppins] text-[#1F2937]">© 2025 Sheba Technologies. All rights reserved.</p>
        <p className="text-sm mt-2 font-[Inter] text-[#4B5563]">Crafted with passion in Addis Ababa, Ethiopia</p>
        <motion.div
          className="mt-4 text-sm text-[#4B5563]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-[Inter]">Empowering Technology, Enhancing Lives.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;