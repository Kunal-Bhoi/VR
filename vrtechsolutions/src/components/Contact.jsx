import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null); // For error handling
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null); // Reset error
    
    try {
      const response = await fetch("https://formspree.io/f/xvgkwjqe", { // Original Formspree URL
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Submission failed. Please try again.");
        console.error("Submission failed", response, errorData);
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
      console.error("Error submitting the form:", error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-24"> {/* Removed id="contact", added more padding */}
      {/* Contact Info Section */}
      <motion.div 
        className="md:w-1/2 md:pr-10 lg:pr-16 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-lg mx-auto md:ml-auto md:mr-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-700 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Have a question or interested in our services? We'd love to hear from you! Fill out the form, and our team will get back to you within 24 hours. You can also reach us via the contact details below.
          </p>
          
          <div className="space-y-8">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Email Us",
                text: "vrtechsolutions32@gmail.com",
                href: "mailto:vrtechsolutions32@gmail.com"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                title: "Call Us",
                text: "+91-8351873002, +91-7710062969",
                href: "tel:+918351873002"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <div className="bg-purple-100 p-4 rounded-full mr-5 group-hover:bg-purple-200 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <a href={item.href} className="text-md text-gray-600 hover:text-purple-700 transition-colors duration-300">
                    {item.text}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Connect With Us</h3>
            <div className="flex space-x-5">
              <motion.a 
                href="https://www.linkedin.com/in/vr-tech-solutions-48b76635a/" 
                target="_blank" rel="noopener noreferrer"
                className="bg-purple-100 p-3.5 rounded-full text-purple-700 hover:bg-purple-200 transition duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/vrtechsolutions32?igsh=MWJwZ3B0a2I1Y3hjMA==" 
                target="_blank" rel="noopener noreferrer"
                className="bg-purple-100 p-3.5 rounded-full text-purple-700 hover:bg-purple-200 transition duration-300"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram Profile"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Form Section */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-lg mx-auto md:mr-auto md:ml-0 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send Us a Message</h3>
          
          {submitError && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p><strong>Error:</strong> {submitError}</p>
            </motion.div>
          )}

          {submitted ? (
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-2xl font-medium text-green-800 mb-2">Message Sent!</h4>
              <p className="text-green-700">Thank you for reaching out. We'll be in touch with you shortly.</p>
            </motion.div>
          ) : (
            <form
              action="https://formspree.io/f/xvgkwjqe" // Your Formspree URL
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {[
                {id: "name", label: "Your Name", type: "text", placeholder: "Abhishek Sharma"},
                {id: "email", label: "Email Address", type: "email", placeholder: "abhishek@example.com"},
                {id: "subject", label: "Subject", type: "text", placeholder: "How can we help you?"}
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name || field.id}
                    placeholder={field.placeholder}
                    required={field.id !== 'subject'} // Subject can be optional
                    value={formState[field.id]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 shadow-sm"
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition duration-200 shadow-sm"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3.5 rounded-md hover:bg-purple-700 transition-colors duration-300 font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;