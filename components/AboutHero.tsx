'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Rellax from 'rellax';

const Hero = () => {
  const rellaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initRellax = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 768 && rellaxRef.current) {
        new Rellax('.rellax', {
          speed: -5,
          center: false,
          vertical: true,
          horizontal: false,
        });
      } else {
        document.querySelectorAll('.rellax').forEach((el) => {
          (el as HTMLElement).style.transform = 'none';
        });
      }
    };

    initRellax();
    window.addEventListener('resize', initRellax);

    return () => {
      window.removeEventListener('resize', initRellax);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] lg:h-[200vh]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeIn' }}
      >
        <Image
          src="/img1.jpg"
          alt="Hero Background"
          fill
          priority
          className="z-[-1] object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16">
        {/* Heading */}
        <motion.h1
          className="text-5xl text-white md:text-[9rem] leading-tight md:leading-[150px] rellax absolute left-8 top-24 lg:left-16"
          data-rellax-speed="-2"
          ref={rellaxRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-left hover:text-[#ff5c00] transition-colors duration-300">Creating</span>
          <span className="block text-left md:text-center hover:text-[#ff5c00] transition-colors duration-300">Experiences,</span>
          <span className="block text-left md:text-right hover:text-[#ff073a] transition-colors duration-300">Together.</span>
        </motion.h1>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute right-8 top-96 flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white text-sm md:text-base">Scroll</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#2007ff] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.div>

        {/* Bottom Left Paragraph */}
        <motion.p
          className="text-sm md:text-xl rellax absolute bottom-32 left-8 lg:bottom-12 lg:left-12 lg:text-xl max-w-md text-left text-white"
          data-rellax-speed="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          From branding to seamless web solutions, our expertise ensures your digital footprint is impactful and meaningful.
          Collaborate with us to make your dream projects a stunning reality.
        </motion.p>

        {/* Bottom Right Paragraph */}
        <motion.p
          className="text-sm md:text-xl rellax absolute bottom-16 right-8 md:bottom-8 lg:bottom-12 lg:right-12 lg:text-xl max-w-md text-right text-white"
          data-rellax-speed="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A logo is not a brand. A brand is not an identity. A brand is not a product... A brand is someones gut feeling about a product, 
          service or organisation. - Matt Neumerier: The Brand Gap.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
