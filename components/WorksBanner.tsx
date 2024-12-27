'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function WorksBanner({}: Props) {
  return (
    <div>
        <div className="relative min-h-screen bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] text-white overflow-hidden">
                <motion.div
                    className="absolute right-8 text-4xl md:text-6xl lg:text-9xl py-2 mx-4 top-24 lg:right-1 hover:text-[#2007ff] transition-colors duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    Works
                </motion.div>

                <motion.p
                    className="absolute bottom-16 left-8 text-lg lg:text-xl max-w-md text-left"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6 }}
                    viewport={{ once: true }}
                >
                    Group of archived work, personal experiments, concepts that didn't make into production
                    and snippets of interesting things made by us.
                </motion.p>

                {/* Scroll Arrow */}
                <motion.div
                    className="absolute bottom-11 right-8 text-white flex flex-col items-center"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                <span className="hidden md:block text-lg">Scroll</span>
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
    </div>
  )
}