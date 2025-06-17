import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (anchor) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/${anchor}`;
    } else {
      // If on home page, just scroll to section
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleRequestDemo = () => {
    handleAnchorClick('#contact');
  };

  return (
    <div className="fixed top-0 left-0 right-0 mx-4 sm:mx-6 md:mx-8 z-20 ">
      <nav className="p-6 bg-white/10 backdrop-blur-md border-b border-gray-200/20 rounded-b-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 text-blue-600 transition-transform hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8h18M3 8l9-6m-9 6v8h18V8m-9 6l-9 6m9-6l9 6"
              ></path>
            </svg>
            <span className="text-blue-600 text-xl font-medium tracking-tight">
              Sheba Software
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-gray-900 font-semibold">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/blog"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/careers"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Request Demo Button (Desktop) */}
          <div className="hidden lg:block">
            <button 
              onClick={handleRequestDemo}
              className="bg-white text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm font-semibold shadow-md hover:shadow-lg"
            >
              Request Demo
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 mx-4 sm:mx-6 md:mx-8 shadow-xl">
            <div className="flex flex-col space-y-4 text-gray-900 font-semibold">
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium shadow-md"
                onClick={() => {
                  handleRequestDemo();
                  toggleMenu();
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;