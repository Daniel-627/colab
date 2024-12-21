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
    <div className="">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 py-16 px-4 md:px-8 border-r-2">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="border-l-2 p-4 space-y-4 hover:border-[#ff5c00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="font-extralight text-xs hover:text-[#ff5c00]">P0{project.projectNumber}</p>
            <p className="font-light text-sm px-2 hover:text-[#ff5c00]">{project.description}</p>
            <h1 className="font-medium text-lg px-3 hover:text-[#ff5c00]">{project.title}</h1>
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
