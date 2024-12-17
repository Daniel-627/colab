'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion";

type Props = {}

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  projectBudget: string;
  preferredContactMethod: string;
  preferredTimeline: string;
  designStyle: string;
  servicesNeeded: string[]; // Ensure this is always an array of strings
  goals: string;
  files: File | null;
  additionalNotes: string;
}


export default function ClientForm({}: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectBudget: '',
    preferredContactMethod: 'email',
    preferredTimeline: '',
    designStyle: '',
    servicesNeeded: [],
    goals: '',
    files: null,
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof FormData]: value, // Cast name to keyof FormData to fix the type error
    }));
  }

const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, checked } = e.target;

  setFormData(prev => {
    // Get the current value from formData
    const currentServices = prev[name as keyof FormData];

    // Check if currentServices is an array, if not, initialize it to an empty array
    const servicesArray = Array.isArray(currentServices) ? currentServices : [];

    // Handle the checkbox change logic
    return {
      ...prev,
      [name as keyof FormData]: checked
        ? [...servicesArray, value] // Add the value if checked
        : servicesArray.filter((item: string) => item !== value), // Remove the value if unchecked
    };
  });
};





const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files?.[0]; // Use optional chaining to access the first file

  setFormData(prev => ({
    ...prev,
    files: files || null, // If no file is selected, set to null
  }));
}




  return (
    <div>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        <select
          title='Business Type'
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        >
          <option value="">Select Your Business Type</option>
          <option value="startup">Startup</option>
          <option value="small_business">Small Business</option>
          <option value="enterprise">Enterprise</option>
          <option value="nonprofit">Nonprofit</option>
        </select>

        <input
          type="number"
          name="projectBudget"
          value={formData.projectBudget}
          onChange={handleChange}
          placeholder="Estimated Project Budget"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />

        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="preferredContactMethod"
              value="email"
              checked={formData.preferredContactMethod === 'email'}
              onChange={handleChange}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="preferredContactMethod"
              value="phone"
              checked={formData.preferredContactMethod === 'phone'}
              onChange={handleChange}
            />
            Phone
          </label>
        </div>

        <input
          type="text"
          name="preferredTimeline"
          value={formData.preferredTimeline}
          onChange={handleChange}
          placeholder="Preferred Project Timeline"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />

        <input
          type="text"
          name="designStyle"
          value={formData.designStyle}
          onChange={handleChange}
          placeholder="Preferred Design Style (e.g. minimalistic, modern)"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />

        <div>
          <label className="text-gray-100">Services Needed</label>
          <div className="space-y-2">
            <label>
              <input
                type="checkbox"
                name="servicesNeeded"
                value="branding"
                checked={formData.servicesNeeded.includes('branding')}
                onChange={handleCheckboxChange}
              />
              Branding
            </label>
            <label>
              <input
                type="checkbox"
                name="servicesNeeded"
                value="website_design"
                checked={formData.servicesNeeded.includes('website_design')}
                onChange={handleCheckboxChange}
              />
              Website Design
            </label>
            <label>
              <input
                type="checkbox"
                name="servicesNeeded"
                value="digital_marketing"
                checked={formData.servicesNeeded.includes('digital_marketing')}
                onChange={handleCheckboxChange}
              />
              Digital Marketing
            </label>
            <label>
              <input
                type="checkbox"
                name="servicesNeeded"
                value="content_creation"
                checked={formData.servicesNeeded.includes('content_creation')}
                onChange={handleCheckboxChange}
              />
              Content Creation
            </label>
          </div>
        </div>

        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="What are the main goals of your project?"
          rows={4}
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />

        <input
          title='file'
          type="file"
          name="files"
          onChange={handleFileChange}
          className="w-full text-gray-100"
        />

        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Any additional notes or information?"
          rows={4}
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-100 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-[#ff073a] hover:bg-[#ff5c00] text-white rounded-md transition-colors duration-300"
        >
          Submit Questionnaire
        </motion.button>
      </form>
    </div>
  );
}