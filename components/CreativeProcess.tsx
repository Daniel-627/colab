"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const CreativeProcess = () => {
  const steps = [
    {
      title: "Client Onboarding and Briefing",
      description:
        "Understand the client’s needs, gather requirements, and create a project brief detailing objectives and scope.",
    },
    {
      title: "Research and Strategy",
      description:
        "Analyze the market, target audience, and competitors to develop a strategic plan aligned with the client’s goals.",
    },
    {
      title: "Ideation and Brainstorming",
      description:
        "Collaborate in creative sessions to generate ideas, mood boards, and prototypes for early feedback.",
    },
    {
      title: "Design and Development",
      description:
        "Craft visuals, content, and assets while integrating the creative vision into tangible deliverables.",
    },
    {
      title: "Client Review and Feedback",
      description:
        "Present drafts for client review and refine the outputs based on their feedback.",
    },
    {
      title: "Implementation and Execution",
      description:
        "Launch campaigns, manage media placement, and coordinate any related events or activations.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "Track performance, analyze metrics, and optimize strategies to ensure maximum impact.",
    },
    {
      title: "Delivery and Handover",
      description:
        "Provide final deliverables and supporting documentation for client use and maintenance.",
    },
    {
      title: "Post-Project Support",
      description:
        "Offer training, follow-up services, and resources to ensure the client’s long-term success.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Creative Process
        </motion.h2>
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="ml-10">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
