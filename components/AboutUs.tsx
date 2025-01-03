'use client'

import React from "react";
import { services } from "@/data/services";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      {/* Introduction */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">What Colab Studios Does</h1>
        <p className="text-lg text-gray-600 mt-4">
          At Colab Studios, we specialize in delivering cutting-edge solutions in design, development, branding, and marketing. Our mission is to bring ideas to life with innovation, creativity, and strategy, helping businesses achieve their goals and stand out in today’s competitive market.  
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Whether you’re looking to establish a memorable digital presence, create exceptional software, or enhance your brand identity, we’ve got you covered. From startups to established enterprises, our team of skilled professionals is dedicated to collaborating with you at every step. We focus on understanding your unique needs, crafting tailored solutions that drive impactful results, and delivering value that resonates with your audience.  
        </p>
        <p className="text-lg text-gray-600 mt-4">
          From designing intuitive user interfaces to developing robust web and mobile applications, we prioritize functionality and aesthetics. In branding and marketing, we employ data-driven strategies and creative storytelling to amplify your message and expand your reach. Our comprehensive services ensure that your business not only looks great but also performs exceptionally in its digital and offline presence.  
        </p>
        <p className="text-lg text-gray-600 mt-4">
            At Colab Studios, we don’t just work for you—we partner with you to transform your vision into reality, ensuring every project exceeds expectations. Together, we create experiences that leave a lasting impression and empower your brand to thrive.
        </p>
      </motion.div>

      {/* Service List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Design Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Design</h2>
          {services.design.map((service, index) => (
            <div key={index} className="flex items-start p-4 mb-4">
              <FiCheckCircle className="text-green-500 mr-2 mt-1" />
              <p className="text-lg text-gray-800">{service.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Development Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Development</h2>
          {services.development.map((service, index) => (
            <div key={index} className="flex items-start p-4 mb-4">
              <FiCheckCircle className="text-green-500 mr-2 mt-1" />
              <p className="text-lg text-gray-800">{service.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Branding and Marketing Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Branding & Marketing</h2>
          {services.brandingAndMarketing.map((service, index) => (
            <div key={index} className="flex items-start p-4 mb-4">
              <FiCheckCircle className="text-green-500 mr-2 mt-1" />
              <p className="text-lg text-gray-800">{service.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

