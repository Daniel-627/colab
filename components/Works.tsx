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
    <div className="bg-gray-100 text-gray-900 py-8">
      <div className="">
        <motion.div
          className="flex flex-col md:flex-row items-center md:justify-between w-full px-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-9xl py-2 hover:text-[#ff5c00] transition-colors duration-300">Works</h1>
          <Link href="/works">
            <motion.button
              className="text-white px-6 py-2 md:mr-8 text-lg font-medium rounded-3xl bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] hover:bg-gradient-to-br hover:from-[#2007ff] hover:via-[#ff073a] hover:to-[#ff5c00] transition-colors duration-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </Link>
        </motion.div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 py-16 px-4 md:px-8">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="border-l-2 p-4 space-y-4 hover:border-[#ff5c00] transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="font-extralight text-xs hover:text-[#ff5c00] transition-colors duration-300">P0{project.projectNumber}</p>
            <p className="font-light text-sm px-2 hover:text-[#ff5c00] transition-colors duration-300">{project.description}</p>
            <h1 className="font-medium text-lg px-3 hover:text-[#ff5c00] transition-colors duration-300">{project.title}</h1>
            <motion.img
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              className="h-56 md:h-72 lg:h-96 object-cover rounded-xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
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
                    className="text-black hover:text-[#ff073a] transition-colors duration-500"
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
                      className="text-black hover:text-[#ff073a] transition-colors duration-500"
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
