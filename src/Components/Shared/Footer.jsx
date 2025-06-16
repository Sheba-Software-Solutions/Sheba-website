import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = ({ showNewsletter = false }) => {
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
      {/* Newsletter Section - Only show if showNewsletter prop is true */}
      {showNewsletter && (
        <div className="relative py-20 bg-white">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full opacity-50"></div>
          </div>
          
          {/* Newsletter Content */}
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-8 shadow-sm">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              
              {/* Heading */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Stay in the 
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Loop</span>
              </h3>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                Join thousands of professionals who trust us to deliver the latest insights, 
                industry trends, and exclusive content directly to their inbox.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
                <div className="relative group">
                  <div className="relative flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0 text-lg"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubscribed}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-75 sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none"
                    >
                      {isSubscribed ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          Subscribed!
                        </span>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Weekly insights</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className={`bg-gray-900 text-white ${showNewsletter ? 'pt-16' : 'pt-16'} pb-8`}>
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
                © 2024 Sheba Software Solutions. All rights reserved.
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