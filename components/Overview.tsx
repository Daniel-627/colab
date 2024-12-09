"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6">Welcome to Our Website</h2>
        <p className="text-lg leading-relaxed mb-12">
          Discover the perfect blend of innovation, creativity, and functionality. 
          We specialize in web design, development, branding, and delivering exceptional 
          user experiences that make your business stand out.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/img1.jpg" // Replace with your image path
            alt="Creative Web Solutions"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold">What We Offer</h3>
          <p className="text-lg">
            Our mission is to create solutions tailored to your unique needs, 
            from stunning designs to seamless development and brand strategies 
            that drive engagement and growth.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/contact">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-blue-500 text-xl" />
          <span>+123 456 7890</span>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-500 text-xl" />
          <span>info@yourwebsite.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-blue-500 text-xl" />
          <span>Kisumu, Kenya</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
