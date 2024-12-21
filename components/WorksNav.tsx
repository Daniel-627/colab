'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function WorksNav({}: Props) {
  return (
    <div className='flex flex-row'>
        <Link href="/works">
            <motion.button
                className="text-white bg-[#ff073a] px-6 py-2 md:mr-8 text-lg font-medium rounded-3xl hover:bg-[#ff5c00] transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Projects
            </motion.button>
        </Link>
        <Link href="/works/posters">
            <motion.button
                className="text-white bg-[#ff073a] px-6 py-2 md:mr-8 text-lg font-medium rounded-3xl hover:bg-[#ff5c00] transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Posters
            </motion.button>
        </Link>
    </div>
  )
}