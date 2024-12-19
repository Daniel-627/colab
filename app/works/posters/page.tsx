'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import { Posters } from '@/utils/Interface';

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
          We are here to assist you with any questions or inquiries. Feel free to
          reach out through our contact options below.
        </motion.p>
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
      <div className="px-4 py-16">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {posters.map((poster) => (
              <motion.div
                key={poster._id}
                className="break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <img
                  src={urlFor(poster.mainImage).url()}
                  alt={`Poster titled ${poster.title}`}
                  className="object-cover w-full rounded-lg shadow-md"
                />
                <h1 className="mt-2 text-lg font-medium text-gray-800">{poster.title}</h1>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
