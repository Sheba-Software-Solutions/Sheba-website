import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/#about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/#contact' },
    { name: 'Pricing', path: '#' },
    { name: 'FAQ', path: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' }
  ];

  const legalLinks = [
    { name: 'Terms of service', path: '#' },
    { name: 'Privacy policy', path: '#' },
    { name: 'Cookie policy', path: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Newsletter Section */}
      <div className="relative -mb-16 pb-16">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-gray-50"></div>
        
        {/* Newsletter Card */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest tech insights, industry trends, and exclusive content delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubscribed ? (
                      'Subscribed!'
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{'{ }'}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sheba Software</h3>
                  <p className="text-gray-400 text-sm">Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting innovative software solutions that bring your vision to life with precision and creativity.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+251 970 415 771</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">shebasoftware@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Certifications/Badges could go here */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-400">
                  Trusted by businesses worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Sheba Software Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">Made with ❤️ in Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

