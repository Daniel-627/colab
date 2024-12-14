import React from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaSnapchat } from 'react-icons/fa';
import EmailForm from '@/components/EmailForm';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="h-96 bg-blue-500 text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Get in Touch With Us</h1>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Telephone Numbers */}
          <div>
            <h2 className="text-xl font-bold mb-4">Telephone Numbers</h2>
            <ul className="space-y-2 text-gray-700">
              <li>+254 700 000 001</li>
              <li>+254 700 000 002</li>
              <li>+254 700 000 003</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <p className="text-gray-700">1234 Main Street,<br />Kisumu, Kenya</p>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-xl font-bold mb-4">Email</h2>
            <ul className="space-y-2 text-gray-700">
              <li>info@example.com</li>
              <li>support@example.com</li>
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h2 className="text-xl font-bold mb-4">Social Networks</h2>
            <div className="flex flex-wrap space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600">
                <FaYoutube />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-500">
                <FaPinterest />
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-yellow-400">
                <FaSnapchat />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-2xl text-green-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
