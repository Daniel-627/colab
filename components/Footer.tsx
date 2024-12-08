import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import EmailForm from './EmailForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-12 gap-8">
        

        <div className='md:col-span-8 flex flex-col'>

          <div className='flex flex-row justify-evenly'>

            <div>
              <img src="/logos/logo.png" alt="logo" className='h-16' />
              <h1>Colab Kenya</h1>
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
          


          <div className="space-y-4 flex items-center  flex-col">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 flex flex-row">
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
        </div>

        <div className='md:col-span-4'>

          {/* Contact Form Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <EmailForm />
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
