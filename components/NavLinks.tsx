'use client'

import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function NavLinks({}: Props) {
  return (
    <div>
        <motion.ul
          className="flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.6 }}
        >
          <li>
            <Link href="/works" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-sm font-thin">
              Work
            </Link>
          </li>
          <li>
            <Link href="/studio" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-sm font-thin">
              Studio
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-sm font-thin">
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-sm font-thin">
              Contact
            </Link>
          </li>
        </motion.ul>
    </div>
  )
}