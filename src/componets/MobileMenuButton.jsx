// src/components/MobileMenuButton.js
import React from 'react';
import { FiMenu , FiX} from 'react-icons/fi';

const MobileMenuButton = ({ onClick , isMobileMenuOpen}) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden text-white focus:outline-none focus:shadow-outline-blue"
    >
      {isMobileMenuOpen ?<FiX size={24} className='transition duration-200 ease-in-out transform hover:scale-110' /> :<FiMenu size={24} className='transition duration-200 ease-in-out transform hover:scale-110' />}
    </button>
  );
};

export default MobileMenuButton;
