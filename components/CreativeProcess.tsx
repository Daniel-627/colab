"use client";

import { motion } from "framer-motion";

const CreativeProcess = () => {
  const steps = [
    {
      title: "Client Onboarding",
      description:
        "We begin by understanding your needs, gathering requirements, and creating a clear project brief.",
    },
    {
      title: "Research & Strategy",
      description:
        "We analyze the market, audience, and competitors to develop a tailored strategic plan.",
    },
    {
      title: "Design & Development",
      description:
        "We craft stunning visuals and build solutions that align perfectly with your vision.",
    },
    {
      title: "Launch & Support",
      description:
        "We ensure a successful launch, provide training, and offer post-project support for long-term success.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#ff073a] via-[#ff5c00] to-[#ff073a] text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Creative Process
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-[#ff5c00] rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: index * 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ff073a] text-white font-bold text-lg rounded-full">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed mt-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
