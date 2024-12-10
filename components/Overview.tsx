"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Overview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-32 mx-auto" ref={sectionRef}>
      <div className="flex flex-col md:grid md:grid-cols-12 items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="relative w-full md:col-span-3 flex justify-start"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeIn" }}
        >
          <img
            src="/img1.jpg"
            alt="Creative Web Solutions"
            className="rounded-lg shadow-lg h-56"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left col-span-9"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="text-4xl font-semibold">
            What We Offer
            Dedicated team of experts, talented designers and developers
            committed to helping businesses on achieving maximum online potential
          </p>
          <div className="flex flex-row space-x-4">
            <div>
              <h3 className="text-xl py-2 px-3 border-2 rounded-3xl flex text-left">Overview</h3>
            </div>
            <div className="space-y-4">
              <p className="text-base">
                Our mission is to create solutions tailored to your unique needs,
                from stunning designs to seamless development and brand strategies
                that drive engagement and growth.
              </p>
              <p className="text-base">
                Our mission is to create solutions tailored to your unique needs,
                from stunning designs to seamless development and brand strategies
                that drive engagement and growth.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/contact">
                  <motion.button
                    className="bg-[#ff073a] hover:bg-[#ff5c00] px-6 py-3 transition-colors duration-300 rounded-3xl font-semibold text-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
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
