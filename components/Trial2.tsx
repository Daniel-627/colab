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
    if (rellaxRef.current) {
      new Rellax('.rellax', {
        speed: -5,
        center: false,
        vertical: true,
        horizontal: false,
      });
    }
  }, []);

  return (
    <div
      className="relative w-full h-[300vh] bg-center bg-no-repeat mx-auto"
      style={{
        backgroundImage: "url('/img7.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white px-6 sm:px-10 pt-[200px] sm:pt-[400px] space-y-16 sm:space-y-24">
        {/* Subtitle */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm sm:text-lg md:text-2xl max-w-xl text-left rellax" data-rellax-speed="1">
            We blend creativity, strategy, and technology to craft impactful digital solutions that
            look stunning, engage users and drive results.
          </p>
          <div className="flex items-end rellax mt-4 sm:mt-0" data-rellax-speed="4">
            <p className="text-xs font-extralight text-end">Scroll to explore</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-[3rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] leading-tight sm:leading-[120px] md:leading-[160px] lg:leading-[204px] rellax"
          data-rellax-speed="3"
          ref={rellaxRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <span className="block text-left">Design,</span>
          <span className="block text-center">Develop,</span>
          <span className="block text-right">Experience.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl rellax"
          data-rellax-speed="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Our mission is to bring your vision to life with sleek designs, seamless functionality, and a user-centered approach.
          From responsive websites to interactive interfaces, we ensure your digital identity stands out in today's competitive landscape.
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="rellax mb-6 sm:mb-0" data-rellax-speed="-1">
            <Link href="/studio" className="hover:text-[#ff5c00]">
              The Studio
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-48">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/works" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:text-[#ff073a] transition-colors duration-200 text-sm">
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
            <div className="rellax" data-rellax-speed="1">
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
