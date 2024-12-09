import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import EmailForm from './EmailForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Logo and Contact Information */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-4">
              <img src="/logos/logo.png" alt="logo" className="h-16" />
              <h1 className="text-xl font-bold">Colab Kenya</h1>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>Email: <a href="mailto:info@company.com" className="hover:text-blue-400">info@company.com</a></p>
              <p>Address: 1234 Example Street, Kisumu, Kenya</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/works" className="hover:text-[#ff073a] transition-colors duration-200">Works</a>
              </li>
              <li>
                <a href="/studio" className="hover:text-[#ff073a] transition-colors duration-200">Studio</a>
              </li>
              <li>
                <a href="/news" className="hover:text-[#ff073a] transition-colors duration-200">News</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#ff073a] transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Email Form */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <EmailForm />
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Colab Kenya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
