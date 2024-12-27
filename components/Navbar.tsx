"use client";

import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <div
        className={`transition-opacity duration-500 ${
          atTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex flex-row items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <Image
                src="/logos/logo1.png"
                alt="Colab Kenya Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <Link href="/">
              <h1 className="text-lg font-semibold md:text-2xl md:font-bold text-white">
                Colab Kenya
              </h1>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="text-2xl fixed top-4 right-6 z-50 focus:outline-none bg-transparent"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <AiOutlineClose className="text-[#2007ff]" />
        ) : (
          <AiOutlineMenu className="text-[#2007ff]" />
        )}
      </button>

      {/* Collapsible Menu */}
      {isOpen && (
        <div className="absolute flex flex-col top-16 right-6 bg-gradient-to-br from-[#ff073a] to-[#ff5c00] text-white rounded-md shadow-md w-64 p-6">

          <motion.div
            className="flex flex-col items-center space-x-3 cursor-pointer pt-2 pb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <Image
                src="/logos/logo2.png"
                alt="Colab Kenya Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <Link href="/" onClick={closeMenu}>
              <h1 className="text-lg font-semibold md:text-2xl md:font-bold text-white hover:text-[#2007ff] transition-colors duration-300">
                Colab Kenya
              </h1>
            </Link>
          </motion.div>
          <motion.ul
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>
              <Link
                href="/works"
                className="hover:text-[#2007ff] hover:underline transition-all duration-500 text-sm font-light"
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#2007ff] hover:underline transition-all duration-500 text-sm font-light"
                onClick={closeMenu}
              >
                Studio
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-[#2007ff] hover:underline transition-all duration-500 text-sm font-light"
                onClick={closeMenu}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#2007ff] hover:underline transition-all duration-500 text-sm font-light"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </motion.ul>

          {/* Social Icons */}
          <motion.div
            className="flex flex-row justify-center space-x-4 border-t border-gray-700 pt-4 mt-4"
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
              className="text-xl hover:text-black transition-colors duration-500"
              aria-label="Twitter"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaXTwitter />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700 transition-colors duration-500"
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
              className="text-xl hover:text-green-500 transition-colors duration-500"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;



