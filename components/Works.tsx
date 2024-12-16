"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import Link from 'next/link';
import { projects } from '@/data/index';

export default function Works() {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <motion.div
          className='text-5xl sm:text-7xl lg:text-9xl py-2 mx-4 text-center lg:text-left'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Works
        </motion.div>
        <div className="flex justify-center md:justify-start gap-4 md:mr-7">
          <Link href="/works">
            <motion.button
              className="bg-[#ff073a] hover:bg-[#ff5c00] px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300 rounded-3xl font-semibold text-white shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Works
            </motion.button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='border-l-2 p-4 space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className='font-extralight text-xs'>P0{project.id}</p>
            <p className='font-light text-sm px-2'>{project.des}</p>
            <h1 className='font-medium text-base sm:text-lg px-3'>{project.title}</h1>
            <motion.img
              src={project.img}
              alt={project.title}
              className='h-48 sm:h-72 lg:h-96 object-cover rounded-xl'
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <div className='flex justify-end'>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Link href={project.link}>
                  <BiLink size={20} className='text-black hover:text-[#ff073a] transition-colors duration-300' />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}
