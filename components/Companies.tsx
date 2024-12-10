'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companies } from '@/data/index';

type Props = {};

export default function Companies({}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="py-32">
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
          transition={{ duration: 1.6 }}
        >
          <p className="mt-4">
            We are proud to collaborate with some of the most innovative companies in the industry.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {companies.map((company) => (
            <motion.div
              key={company.index}
              className="bg-transparent p-6 rounded-lg text-center border-2"
              variants={itemVariants}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto mx-auto"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
