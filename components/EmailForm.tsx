'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function EmailForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if all fields are filled out
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage('All fields are required.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitMessage('Your message has been sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' }) // Clear the form
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        {/* Name input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        {/* Email input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        {/* Subject input */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        />
        
        {/* Message textarea */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-b-2 focus:border-[#ff5c00]"
        ></textarea>
        
        {/* Submit button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 bg-[#ff073a] hover:bg-[#ff5c00] text-white rounded-md transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {/* Display success or error message */}
      {submitMessage && (
        <p className="mt-4 text-center text-red-500">{submitMessage}</p>
      )}
    </div>
  )
}
