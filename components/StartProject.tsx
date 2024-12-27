'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineWhatsApp, AiOutlineForm, AiOutlineDownload } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Card {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  isDownload?: boolean;
}

const StartProject: React.FC = () => {
  const cards: Card[] = [
    {
      title: 'Book an Appointment',
      description: 'Schedule a meeting with us on Calendly.',
      link: 'https://calendly.com',
      icon: <AiOutlineCalendar size={30} />,
    },
    {
      title: 'Talk to Us on WhatsApp',
      description: 'Reach us directly through WhatsApp.',
      link: 'https://wa.me/1234567890',
      icon: <AiOutlineWhatsApp size={30} />,
    },
    {
      title: 'Fill a Form',
      description: 'Complete an external form on Zoho.',
      link: 'https://forms.zoho.com',
      icon: <AiOutlineForm size={30} />,
    },
    {
      title: 'Download PDF/Docx',
      description: 'Download and fill out the required documents.',
      link: '/path-to-your-files',
      icon: <AiOutlineDownload size={30} />,
      isDownload: true,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white text-black py-10 px-5">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Start a Project
      </motion.h1>
      <motion.p
        className="text-center max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Take the first step toward realizing your project. Choose an option below to get started immediately.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#2007ff] text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-white mb-4">{card.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-center mb-4">{card.description}</p>

            {card.isDownload ? (
              <div className="flex gap-2">
                <a
                  href="/path-to-your-pdf.pdf"
                  download
                  className="bg-gradient-to-r from-[#ff5c00] to-[#ff073a] text-white py-2 px-4 rounded hover:opacity-80 transition-opacity"
                >
                  Download PDF
                </a>
                <a
                  href="/path-to-your-docx.docx"
                  download
                  className="bg-gradient-to-r from-[#ff5c00] to-[#ff073a] text-white py-2 px-4 rounded hover:opacity-80 transition-opacity"
                >
                  Download Docx
                </a>
              </div>
            ) : (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 hover:underline"
              >
                <span>Go to Link</span>
                <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartProject;
