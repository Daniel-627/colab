'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineWhatsApp, AiOutlineForm, AiOutlineDownload } from 'react-icons/ai';

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
    <div className="flex flex-col items-center bg-white text-black py-10 px-5 max-w-screen-xl mx-auto">
      <motion.h1
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Start a Project
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base lg:text-lg text-center max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        No need to wait. Take the first step toward realizing your project. Choose an option below to get started.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#2007ff] text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-xs sm:text-sm text-center mb-4">{card.description}</p>

            {card.isDownload ? (
              <div className="flex gap-2">
                <a
                  href="/path-to-your-pdf.pdf"
                  download
                  className="bg-gradient-to-r from-[#ff5c00] to-[#ff073a] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                >
                  <AiOutlineDownload size={20} />
                </a>
                <a
                  href="/path-to-your-docx.docx"
                  download
                  className="bg-gradient-to-r from-[#ff5c00] to-[#ff073a] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                >
                  <AiOutlineDownload size={20} />
                </a>
              </div>
            ) : (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full hover:bg-gradient-to-r hover:from-[#ff5c00] hover:to-[#ff073a] transition-transform transform hover:scale-105"
              >
                {card.icon}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartProject;
