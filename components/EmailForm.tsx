'use client'

import React from 'react'
import { motion, useInView } from "framer-motion";

type Props = {}

export default function EmailForm({}: Props) {
  return (
    <div>
        <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-[#ff073a] hover:bg-[#ff5c00] text-white rounded-md transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
    </div>
  )
}