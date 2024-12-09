"use client";

import { motion } from "framer-motion";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white font-bold rounded-full">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
