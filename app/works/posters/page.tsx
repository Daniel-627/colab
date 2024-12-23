'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import { Posters } from '@/utils/Interface';
import WorksNav from '@/components/WorksNav';

async function getPosters(): Promise<Posters[]> {
  const query = `
  *[_type == 'poster'] | order(_updatedAt desc) {
      title,
      _id,
      slug,
      mainImage
    }
  `;
  return await client.fetch(query);
}

export default function PostersPage() {
  const [posters, setPosters] = useState<Posters[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosters() {
      try {
        const data = await getPosters();
        setPosters(data);
      } catch (err) {
        setError('Failed to load posters. Please try again later.');
        console.error(err);
      }
    }
    fetchPosters();
  }, []);

  return (
    <div className="">
      <div className='h-20 w-full bg-gradient-to-br from-[#2007ff] via-[#ff5c00] to-[#ff073a]'></div>
      <div className=''>
        <WorksNav />
      </div>
      {/* Posters Grid */}
      <div className="px-4 py-16">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div
            className="columns-1 md:columns-2 lg:columns-3 gap-2 md:gap-4 space-y-4"
          >
            {posters.map((poster) => (
              <motion.div
                key={poster._id}
                className="break-inside-avoid mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <img
                  src={urlFor(poster.mainImage).url()}
                  alt={`Poster titled ${poster.title}`}
                  className="object-cover w-full rounded-lg shadow-md"
                />
                <h1 className="mt-2 text-lg font-medium text-gray-800 hover:text-[#ff5c00]">{poster.title}</h1>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
