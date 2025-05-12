import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 mx-4 sm:mx-6 md:mx-8 z-20 ">
      <nav className="p-6 bg-white/10 backdrop-blur-md border-b border-gray-200/20 rounded-b-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 text-amber-900 transition-transform hover:scale-110"
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
            <span className="text-amber-900 text-xl font-medium tracking-tight">
              Sheba Software
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-gray-900 font-semibold">
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Request Demo Button (Desktop) */}
          <div className="hidden lg:block">
            <button className="bg-white text-gray-900 px-5 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-semibold">
              Request Demo
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-900 focus:outline-none"
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
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 mx-4 sm:mx-6 md:mx-8">
            <div className="flex flex-col space-y-4 text-gray-900 font-semibold">
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Careers
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <button
                className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                onClick={toggleMenu}
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