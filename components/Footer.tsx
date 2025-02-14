'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Email Form */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-semibold mb-4">We would love to hear from you.</h1>
            <p className="text-lg font-extralight mb-4">
              Book a free consultation now to discover how we can help your business thrive!
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-[#ff073a] hover:bg-[#ff5c00] px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300 rounded-3xl font-semibold text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>


          {/* Quick Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/works" className="hover:text-[#ff073a] hover:underline transition-colors duration-200">Works</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#ff073a] hover:underline transition-colors duration-200">Studio</a>
              </li>
              <li>
                <a href="/news" className="hover:text-[#ff073a] hover:underline transition-colors duration-200">News</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#ff073a] hover:underline transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          {/* Logo and Contact Information */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <img src="/logos/logo.png" alt="logo" className="h-16" />
              <h1 className="text-xl font-bold">Colab Kenya</h1>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p><a href="mailto:info@company.com" className="hover:text-[#ff073a] hover:underline">contact@colab.co.ke</a></p>
              <p className='hover:text-[#ff073a] hover:underline'>Nairobi, Kenya</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaXTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Colab Kenya. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

