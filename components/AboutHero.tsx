'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import Rellax from 'rellax';

const Hero = () => {
  const rellaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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
    <div className="relative w-full h-[200vh]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeIn" }}
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
      <div className="relative z-10">
        <motion.h1
            className="text-5xl md:text-[9rem] leading-tight md:leading-[204px] rellax absolute left-8 md:text-6xl lg:text-9xl py-2 mx-4 top-24 lg:left-1"
            data-rellax-speed="-2"
            ref={rellaxRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <span className="block text-left hover:text-[#ff5c00] transition-colors duration-300">Creating</span>
            <span className="block text-left md:text-center hover:text-[#ff5c00] transition-colors duration-300">Experiences,</span>
            <span className="block text-left md:text-right hover:text-[#ff073a] transition-colors duration-300">Together.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
            className="text-sm md:text-xl rellax absolute bottom-16 md:bottom-8 right-8 lg:text-xl max-w-md text-right"
            data-rellax-speed="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            Our mission is to bring your vision to life with sleek designs, seamless functionality, and a user-centered approach.
            From responsive websites to interactive interfaces, we ensure your digital identity stands out in today's competitive landscape.
        </motion.p>
      </div>

    </div>
  );
};

export default Hero;