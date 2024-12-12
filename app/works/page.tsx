'use client'

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectsProps, Project } from '@/utils/Interface';
import { urlFor } from '@/sanity/lib/image';
import { BiArrowToLeft, BiLink } from 'react-icons/bi';
;

async function getProjects(): Promise<Project[]> {
  const query = 
  `
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
            key={project._id}
            className='border-l-2 p-4 space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className='font-extralight text-xs'>P0{project._id}</p>
            <p className='font-light text-sm px-2'>{project.description}</p>
            <h1 className='font-medium text-lg px-3'>{project.title}</h1>
            <motion.img
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              className='h-96 object-cover rounded-xl'
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <div className='flex justify-between'>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Link href=''>
                  <BiArrowToLeft size={20} className='text-black hover:text-[#ff073a] transition-colors duration-300' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Link href=''>
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
