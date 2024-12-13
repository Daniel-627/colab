'use client'

import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Toggle Button */}
      <button 
        className="text-2xl p-2 focus:outline-none absolute top-4 right-4" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <AiOutlineClose className="text-[#2007ff]"/> : <AiOutlineMenu className="text-[#2007ff]"/>}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute top-12  right-8 bg-gradient-to-br from-[#ff073a] to-[#ff5c00] text-white w-48 rounded-bl-3xl rounded-tl-md rounded shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-500 cursor-pointer">Works</li>
            <li className="hover:text-blue-500 cursor-pointer">Studio</li>
            <li className="hover:text-blue-500 cursor-pointer">News</li>
            <li className="hover:text-blue-500 cursor-pointer">Contacts</li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 border-t border-gray-700 pt-4 pb-2">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavToggle;
