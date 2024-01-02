// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuButton from './MobileMenuButton';
import { FiHome, FiLayers, FiMail, FiMenu, FiX ,FiBriefcase } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 1024);

  const toggleMobileMenu = () => {
    if(isMobileView){
    setMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold text-[22px] flex items-center transition duration-300 ease-in-out transform hover:scale-105">
          <span className="mr-2">
            <FiLayers size={24} />
          </span>
          Web Agency
        </Link>
        <div className="flex items-center space-x-4">
          <ul
            className={`lg:flex lg:space-x-14 lg:font-bold lg:items-center ${
              isMobileMenuOpen ? 'flex flex-col space-y-4 absolute right-0 top-16 bg-indigo-700 p-4 rounded-md shadow-md' : 'hidden'
            }`}
          >
            <li className="text-white">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="mr-2">
                  <FiHome size={20} />
                </span>
                Home
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/services"
                onClick={toggleMobileMenu}
                className="flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="mr-2">
                  <FiLayers size={20} />
                </span>
                Services
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/work"
                onClick={toggleMobileMenu}
                className="flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="mr-2">
                  <FiBriefcase size={20} />
                </span>
                Work
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="mr-2">
                  <FiMail size={20} />
                </span>
                Contact
              </Link>
            </li>
          </ul>
          <MobileMenuButton onClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
