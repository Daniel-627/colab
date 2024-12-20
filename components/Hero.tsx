'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Rellax from 'rellax';

const Hero = () => {
  const rellaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initRellax = () => {
      const screenWidth = window.innerWidth;

      // Only initialize Rellax for screens wider than 768px
      if (screenWidth > 768 && rellaxRef.current) {
        new Rellax('.rellax', {
          speed: -5, // Adjust speed for the parallax effect
          center: false, // Keeps elements positioned relative to the viewport
          vertical: true, // Enable vertical scrolling
          horizontal: false, // Disable horizontal scrolling
        });
      } else {
        // Disable parallax effect for smaller screens
        document.querySelectorAll('.rellax').forEach((el) => {
          (el as HTMLElement).style.transform = 'none';
        });
      }
    };

    initRellax(); // Initialize on mount
    window.addEventListener('resize', initRellax); // Reinitialize on resize

    return () => {
      window.removeEventListener('resize', initRellax); // Cleanup listener
    };
  }, []);

  return (
    <div
      className="relative w-full h-[200vh] md:h-[250vh] lg:h-[300vh] bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img7.jpg ')",
        backgroundSize: "cover",
      }}
    >
      

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white px-6 md:px-10 pt-[300px] md:pt-[390px] space-y-12 md:space-y-28">
        {/* Subtitle */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-2xl max-w-xl text-left">
            We blend creativity, strategy, and technology to craft impactful digital solutions that
            look stunning, engage users and drive results.
          </p>
          <motion.div
            className="text-white flex flex-col items-center mr-7"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-lg">Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-[9rem] lg:text-[12rem] leading-tight md:leading-[204px] rellax"
          data-rellax-speed="3"
          ref={rellaxRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="block text-left">Design,</span>
          <span className="block text-left md:text-center">Develop,</span>
          <span className="block text-left md:text-right">Experience.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm md:text-xl max-w-2xl rellax"
          data-rellax-speed="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our mission is to bring your vision to life with sleek designs, seamless functionality, and a user-centered approach.
          From responsive websites to interactive interfaces, we ensure your digital identity stands out in today's competitive landscape.
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-0">
            <Link href="/about" className="hover:text-[#ff5c00]">
              The Studio
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-48">
            <div className="mb-6 md:mb-0">
              <ul className="space-y-2">
                <li>
                  <Link href="/works" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="space-y-4 md:pr-24">
                <p>
                  <a href="mailto:info@company.com" className="hover:text-[#ff5c00]">
                    info@company.com
                  </a>
                </p>
                <p className="hover:text-[#ff5c00]">+254745253664</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-500"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors duration-500"
                  >
                    <FaXTwitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-700 transition-colors duration-500"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

