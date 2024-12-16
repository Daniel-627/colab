"use client";

import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-transparent text-white z-50 px-6 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">
            <Image
              src="/logos/logo1.png" // Replace with your logo path
              alt="Colab Kenya Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-lg font-semibold md:text-2xl md:font-bold">
              Colab Kenya
            </h1>
          </Link>
        </motion.div>

        {/* Menu Toggle */}
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <AiOutlineClose className="text-[#2007ff]" />
          ) : (
            <AiOutlineMenu className="text-[#2007ff]" />
          )}
        </button>

        {/* Menu Items */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-gradient-to-br from-[#ff073a] to-[#ff5c00] text-white rounded-md shadow-md w-64 p-6">
            <motion.ul
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <li>
                <Link
                  href="/works"
                  className="hover:text-[#ff5c00] hover:underline transition-all duration-300 text-sm font-light"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#ff5c00] hover:underline transition-all duration-300 text-sm font-light"
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-[#ff5c00] hover:underline transition-all duration-300 text-sm font-light"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#ff5c00] hover:underline transition-all duration-300 text-sm font-light"
                >
                  Contact
                </Link>
              </li>
            </motion.ul>

            {/* Social Icons with Framer Motion */}
            <motion.div
              className="flex justify-center space-x-4 border-t border-gray-700 pt-4 mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-700"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-green-500"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

