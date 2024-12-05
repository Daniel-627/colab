import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Navigation Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/works" className="hover:text-blue-400">Works</a>
            </li>
            <li>
              <a href="/studio" className="hover:text-blue-400">Studio</a>
            </li>
            <li>
              <a href="/news" className="hover:text-blue-400">News</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information and Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>Email: <a href="mailto:info@company.com" className="hover:text-blue-400">info@company.com</a></p>
          <p>Address: 1234 Example Street, Kisumu, Kenya</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
