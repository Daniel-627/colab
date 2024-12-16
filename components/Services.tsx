"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/data";

type Props = {};

export default function Services({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="md:grid md:grid-cols-12 mx-auto flex flex-col-reverse px-6 space-y-8 py-16"
    >
      {/* Image Section */}
      <motion.img
        src="/img10.jpg"
        alt="Service Image"
        className="object-cover h-[550px] w-full rounded-3xl p-4 col-span-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      {/* Services Section */}
      <motion.div
        className="col-span-8 flex flex-col space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.5, staggerChildren: 0.3 }}
      >
        <motion.h1
          className="text-6xl font-bold text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Services
        </motion.h1>

        {services.map((service) => (
          <motion.div
            key={service.index}
            className="flex flex-row border-b-2 p-4 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl pr-4 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              0{service.index}
            </motion.h1>
            <motion.div
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-base font-light text-gray-600">
                {service.details}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

