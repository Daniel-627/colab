"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-transparent text-white z-50 px-8 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/">Colab Kenya</Link>
        </motion.h1>

        {/* Right Side: Navigation Links */}
        <motion.ul
          className="flex gap-8 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <li>
            <Link href="/work" className="hover:text-blue-500 transition">
              Work
            </Link>
          </li>
          <li>
            <Link href="/studio" className="hover:text-blue-500 transition">
              Studio
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-blue-500 transition">
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
