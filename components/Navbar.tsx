"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavToggle from "./NavToggle";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-transparent text-white z-50 px-8 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
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
        <div className="mr-4">
          <NavToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
