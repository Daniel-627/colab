'use client';

import { useEffect, useState } from 'react';
import { fetchColabPosts } from '@/lib/api';
import { Post } from '@/types/blog';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const colabPosts = await fetchColabPosts(); // Fetch all posts
      setPosts(colabPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4">
        <p>No posts available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] text-white flex items-center justify-center">
        <motion.div
          className="absolute right-8 text-4xl md:text-6xl lg:text-9xl py-2 mx-4 top-24 lg:right-1 hover:text-[#2007ff] transition-colors duration-300"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          News
        </motion.div>
        <motion.p
          className="absolute bottom-16 md:bottom-8 left-8 text-lg lg:text-xl max-w-md text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true }}
        >
          Discover insights, stories, and updates in our blog section. Scroll to explore more.
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

      {/* Masonry Layout */}
      <div className="px-4 py-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post._id}
              className="break-inside-avoid p-4 cursor-pointer border-l-2 hover:border-[#ff5c00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Link href={`/news/${encodeURIComponent(post.slug.current)}`} passHref>
                <div>
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
