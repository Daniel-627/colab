'use client';

import React from 'react';
import {
  FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaSnapchat,
} from 'react-icons/fa';
import EmailForm from '@/components/EmailForm';
import { motion } from 'framer-motion';
import ClientForm from '@/components/ClientForm';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      {/* Banner */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] text-white overflow-hidden">
        <motion.h1
          className="absolute right-8 text-5xl font-bold top-24 lg:right-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Get in Touch With Us
        </motion.h1>

        <motion.p
          className="absolute bottom-16 md:bottom-8 left-8 text-lg lg:text-xl max-w-md text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true }}
        >
          We are here to assist you with any questions or inquiries. Feel free to reach out through our contact options below.
        </motion.p>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-8 right-8 text-white flex flex-col items-center"
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
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Groups */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Telephone Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Telephone Numbers</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="tel:+254700000001" className="hover:underline">+254 700 000 001</a></li>
              <li><a href="tel:+254700000002" className="hover:underline">+254 700 000 002</a></li>
              <li><a href="tel:+254700000003" className="hover:underline">+254 700 000 003</a></li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <p className="text-gray-700">1234 Main Street,<br />Kisumu, Kenya</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Email</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="mailto:info@example.com" className="hover:underline">info@example.com</a></li>
              <li><a href="mailto:support@example.com" className="hover:underline">support@example.com</a></li>
            </ul>
          </motion.div>

          {/* Social Networks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Social Networks</h2>
            <div className="grid grid-cols-4 gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600">
                <FaYoutube />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-500">
                <FaPinterest />
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-yellow-400">
                <FaSnapchat />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-2xl text-green-500">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1"
        >
          <EmailForm />
        </motion.div>
      </div>
      <div>
        <ClientForm />
      </div>
    </div>
  );
};

export default page;
