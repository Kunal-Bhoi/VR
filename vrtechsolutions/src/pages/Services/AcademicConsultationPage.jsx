import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import academicConsultationImage from '../../assets/AcademicConsultations.png'; // Path relative to this file

const service = {
  title: 'Academic Consultation',
  image: academicConsultationImage,
  description: 'Comprehensive support for your research endeavors, including article writing, and academic development, helping you navigate the complexities of scholarly work.',
  features: ['Research problem identification', 'Article writing & editing', 'Methodology guidance', 'Literature review', 'Statistical support for research', 'Thesis/dissertation support'],
  longDescription: 'Our Academic Consultation service provides expert guidance and support for researchers, students, and institutions. We assist in refining research questions, developing robust methodologies, conducting thorough literature reviews, and preparing scholarly articles for publication. Our team of experienced academics offers personalized mentorship to help you navigate the challenges of research and contribute meaningfully to your field.'
};

const AcademicConsultationPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8" // Different gradient
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-white shadow-2xl rounded-xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center order-2 md:order-1"> {/* Image on right for variety */}
              <motion.h1
                className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-6" // Different gradient for title
                initial={{ x: 20, opacity: 0 }} // Animate from right
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {service.title}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {service.longDescription || service.description}
              </motion.p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img src={service.image} 
                   alt={service.title} 
                   className="w-full h-64 md:h-full object-cover" 
                   loading="lazy"
                   width="600" 
                   height="600" 
              />
            </div>
          </div>
          
          <div className="p-6 md:p-10">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-gray-700 text-md"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <svg className="h-6 w-6 mr-3 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> {/* Different color icon */}
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Consultation Specific Section */}
            <motion.div
              className="my-10 p-6 bg-orange-50 rounded-lg" // Different background
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-orange-700 mb-3">Supporting Your Research Journey</h3>
              <p className="text-gray-600">In this section, you could detail the types of academic fields you specialize in, showcase testimonials from researchers you've assisted, or provide resources like research proposal templates or style guides. You might include a list of partner institutions or successful publications.</p>
              {/* Example: List of expertise areas */}
              {/* <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Qualitative & Quantitative Research Methods</li>
                <li>Journal Article Preparation & Submission</li>
                <li>Grant Proposal Writing</li>
              </ul> */}
            </motion.div>

            <motion.div
              className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <RouterLink 
                to="/services" 
                className="w-full sm:w-auto px-8 py-3 bg-orange-100 text-orange-700 font-semibold rounded-lg shadow-md hover:bg-orange-200 transition duration-300 transform hover:scale-105"
              >
                View Other Services
              </RouterLink>
              <RouterLink 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 transform hover:scale-105"
              >
                Get Academic Support
              </RouterLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AcademicConsultationPage;