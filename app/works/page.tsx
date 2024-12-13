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
    *[_type == 'project'] {
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
    <div className="py-16 mx-auto px-4 md:px-8">
      <motion.div
        className="text-4xl md:text-6xl lg:text-9xl py-2 mx-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Works
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
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
                    size={24}
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
                    size={24}
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
