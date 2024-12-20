'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectsProps, Project } from '@/utils/Interface';
import { urlFor } from '@/sanity/lib/image';
import { BiArrowToRight, BiLink } from 'react-icons/bi';

async function getProjects(): Promise<Project[]> {
  const query = `
  *[_type == 'project'] | order(_updatedAt desc) {
      title,
      _id,
      description,
      slug,
      mainImage,
      projectUrl,
      projectNumber,
      categories[]->{
        title
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function page() {
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
          className="absolute right-8 text-4xl md:text-6xl lg:text-9xl py-2 mx-4 top-24 lg:right-1"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Works
        </motion.div>

        <motion.p
          className="absolute bottom-16 md:bottom-8 left-8 text-lg lg:text-xl max-w-md text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true }}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 py-16 px-4 md:px-8 border-r-2">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="border-l-2 p-4 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="font-extralight text-xs">P0{project.projectNumber}</p>
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
                <Link href={`/works/${project.slug?.current}`} passHref>
                  <BiArrowToRight
                    size={20}
                    className="text-black hover:text-[#ff073a] transition-colors duration-300"
                  />
                </Link>
              </motion.div>
              {project.projectUrl && (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                >
                  <Link href={project.projectUrl} passHref>
                    <BiLink
                      size={20}
                      className="text-black hover:text-[#ff073a] transition-colors duration-300"
                    />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
