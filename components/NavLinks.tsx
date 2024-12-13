'use client'

import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function NavLinks({}: Props) {
  return (
    <div>
        <motion.ul
          className="flex gap-8 text-lg font-medium "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.6 }}
        >
          <li>
            <Link href="/works" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-xs font-thin">
              Work
            </Link>
          </li>
          <li>
            <Link href="/studio" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-xs font-thin">
              Studio
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-xs font-thin">
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#ff5c00] hover:underline transition-all duration-500 text-xs font-thin">
              Contact
            </Link>
          </li>
        </motion.ul>
    </div>
  )
}