'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { services } from '@/data';

type Props = {};

export default function Services({}: Props) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const offset = containerRef.current.offsetTop;

        // Adjust animation based on scroll
        controls.start({
          y: (scrollY - offset) * -0.2, // Parallax effect for text
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="md:grid md:grid-cols-12 mx-auto flex flex-col px-6 space-y-8 py-16"
    >
      {/* Image Section */}
      <motion.img
        src="/img10.jpg"
        alt="Service Image"
        className="object-cover h-[550px] w-full rounded-3xl p-4 col-span-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Services Section */}
      <motion.div
        className="col-span-8 flex flex-col space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.5, staggerChildren: 0.3 }}
      >
        <motion.h1
          className="text-6xl font-bold text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Services
        </motion.h1>

        {services.map((service) => (
          <motion.div
            key={service.index}
            className="flex flex-row border-b-2 p-4 space-y-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl pr-4 text-gray-800">0{service.index}</h1>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-base font-light text-gray-600">
                {service.details}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
