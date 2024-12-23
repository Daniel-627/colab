'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function WorksNav({}: Props) {
  return (
    <div className='flex flex-row py-8 px-4 space-x-3'>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <Link href="/works">
                <motion.button
                    className="text-white px-6 py-2 md:mr-8 text-lg font-medium rounded-3xl bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] hover:bg-gradient-to-br hover:from-[#2007ff] hover:via-[#ff073a] hover:to-[#ff5c00] transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Projects
                </motion.button>
            </Link>
            <Link href="/works/posters">
                <motion.button
                    className="text-white px-6 py-2 md:mr-8 text-lg font-medium rounded-3xl bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] hover:bg-gradient-to-br hover:from-[#2007ff] hover:via-[#ff073a] hover:to-[#ff5c00] transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Posters
                </motion.button>
            </Link>
        </motion.div>
    </div>
  )
}