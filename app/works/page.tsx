'use client'

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectsProps, Project } from '@/utils/Interface';
import { urlFor } from '@/sanity/lib/image';

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="flex flex-col space-y-8 py-8 px-2 sm:px-3 md:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col justify-center items-center md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ffffff] font-extralight">Selected Work</h1>
          <p className="text-xs sm:text-sm md:text-base text-[#b0b0b0] mt-2 font-extralight">This is what I'm capable of...</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="relative rounded-lg md:rounded-xl overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={projectVariants}
          >
            <Link href={`/projects/${project.slug.current}`}>
              <div className="relative h-full w-full">
                {project.mainImage ? (
                  <img
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800">
                    <span className="text-white">No Image Available</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 p-4 sm:p-4 text-left z-10 bg-neutral-950/70 w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#5588f7] mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base font-extralight text-[#b0b0b0] mb-1 sm:mb-2">{project.description}</p>
                  {project.categories && (
                    <div className="flex flex-wrap space-x-2 mt-2">
                      {project.categories.map((category, index) => (
                        <span key={index} className="text-xs font-light text-[#ffffff] bg-[#5588f7] px-2 py-1 rounded-md">
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

