'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import Link from 'next/link';
import { projects } from '@/data/index';

export default function Works() {
  return (
    <div className='py-16 mx-auto'>
      <motion.div
        className='text-9xl py-2 mx-4'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Works
      </motion.div>
      <div className='grid grid-cols-3 gap-6 mx-8'>
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
            <h1 className='font-medium text-lg px-3'>{project.title}</h1>
            <motion.img
              src={project.img}
              alt={project.title}
              className='h-96 object-cover rounded-xl'
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
                  <BiLink size={24} className='text-gray-700 hover:text-black transition-colors' />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
