'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/utils/Interface';
import { urlFor } from '@/sanity/lib/image';
import { BiArrowToRight, BiLink } from 'react-icons/bi';

async function getProjects(): Promise<Project[]> {
  const query = `
    *[_type == 'project'] | order(_updatedAt desc)[0...3] {
      title,
      _id,
      description,
      slug,
      mainImage,
      categories[]->{
        title
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function Works() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className="relative min-h-screen bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] text-white overflow-hidden">
        <motion.div
          className="absolute flex items-center justify-between w-full px-8 top-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-9xl py-2">Works</h1>
          <Link href="/works">
            <motion.button
              className="bg-white text-[#ff073a] px-6 py-2 text-lg font-medium rounded-md hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          className="absolute bottom-16 md:bottom-8 left-8 text-lg lg:text-xl max-w-md text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 py-16 mx-auto px-4 md:px-8">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="border-l-2 p-4 space-y-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="font-extralight text-xs">P0{project._id}</p>
            <p className="font-light text-sm px-2">{project.description}</p>
            <h1 className="font-medium text-lg px-3">{project.title}</h1>
            <motion.img
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              className="h-56 md:h-72 lg:h-96 object-cover rounded-xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <div className="flex justify-between items-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Link href={`/projects/${project.slug?.current}`} passHref>
                  <BiArrowToRight
                    size={20}
                    className="text-black hover:text-[#ff073a] transition-colors duration-300"
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Link href="" passHref>
                  <BiLink
                    size={20}
                    className="text-black hover:text-[#ff073a] transition-colors duration-300"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
