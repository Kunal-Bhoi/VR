import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import dataAnalysisImage from '../../assets/DataAnalysis.png'; // Path relative to this file

const service = {
  title: 'Data Analysis',
  image: dataAnalysisImage,
  description: 'Create comprehensive reports that help you make informed decisions. We delve deep into drone data processing, statistical analysis, and craft interactive visualizations to identify crucial trends.',
  features: ['Drone data processing', 'Statistical analysis', 'Interactive visualizations', 'Trend identification', 'Predictive modeling', 'Custom dashboard creation'],
  longDescription: 'Our Data Analysis service transforms raw data into actionable intelligence. We specialize in processing complex datasets, including high-resolution drone imagery and sensor data, to extract meaningful patterns. Through rigorous statistical analysis and advanced machine learning techniques, we uncover insights that drive operational efficiency, strategic planning, and innovation. Our interactive visualizations and comprehensive reports are tailored to your needs, providing clear, concise, and impactful information to support your decision-making processes.'
};

const DataAnalysisPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
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
            <div className="md:w-1/2">
              <img src={service.image} 
                   alt={service.title} 
                   className="w-full h-64 md:h-full object-cover" 
                   loading="lazy"
                   width="600" 
                   height="600" 
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <motion.h1
                className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"
                initial={{ x: -20, opacity: 0 }}
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
          </div>
          
          <div className="p-6 md:p-10">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Key Features</h2>
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
                    <svg className="h-6 w-6 mr-3 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* You can add more specific content for Data Analysis here - images, videos, case studies etc. */}
            <motion.div
              className="my-10 p-6 bg-purple-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">Data Analysis Specific Section</h3>
              <p className="text-gray-600">This is where you can add unique content, images, or even videos specifically for the Data Analysis service page.</p>
            </motion.div>


            <motion.div
              className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <RouterLink 
                to="/services" 
                className="w-full sm:w-auto px-8 py-3 bg-purple-100 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-200 transition duration-300 transform hover:scale-105"
              >
                View Other Services
              </RouterLink>
              <RouterLink 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
              >
                Inquire About This Service
              </RouterLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DataAnalysisPage;