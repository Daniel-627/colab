'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companies } from '@/data/index';

type Props = {};

export default function Companies({}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Faster stagger for better flow
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="py-16 md:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold">Our Partners</h2>
          <p className="mt-4 text-sm md:text-base">
            We are proud to collaborate with some of the most innovative companies in the industry.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.index}
              className="bg-transparent p-4 md:p-6 rounded-lg text-center border-2 border-gray-300"
              variants={itemVariants}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-6 md:h-8 w-auto mx-auto"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
