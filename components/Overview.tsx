"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Overview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8 mx-auto overflow-hidden"
      ref={sectionRef}
    >
      <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="relative w-full md:col-span-4 flex justify-center md:justify-start"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeIn" }}
        >
          <img
            src="/img1.jpg"
            alt="Creative Web Solutions"
            className="rounded-lg shadow-lg h-40 sm:h-56 md:h-64 lg:h-72 object-cover w-full max-w-md"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left md:col-span-8"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            We are a Dedicated team of experts, talented designers, and
            developers committed to helping businesses achieve maximum online
            potential.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="sm:my-4 md:my-0">
              <h3 className="text-base sm:text-lg py-2 px-4 border-2 rounded-3xl inline-block">
                Overview
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Our mission is to create solutions tailored to your unique needs,
                from stunning designs to seamless development and brand strategies
                that drive engagement and growth.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                From conception to execution, we ensure each step aligns with your
                goals to deliver exceptional results.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/about">
                  <motion.button
                    className="bg-[#ff073a] hover:bg-[#ff5c00] px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300 rounded-3xl font-semibold text-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    More About Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
