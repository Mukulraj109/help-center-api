import React, { useState } from 'react';
import Modal from './Model';
import logo from '../assets/logo.png';


const Navbar = ({ onCardSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="bg-black text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-6 w-6" 
          />
          <span className="text-lg font-semibold">Abstract | Help Center</span>
        </div>
        <div>
          <button 
            onClick={handleOpenModal}
            className="bg-transparent border border-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none">
            Submit a request
          </button>
        </div>
      </nav>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={onCardSubmit} 
      />
    </div>
  );
};

export default Navbar;
