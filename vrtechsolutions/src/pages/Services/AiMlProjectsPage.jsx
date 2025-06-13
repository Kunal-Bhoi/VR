import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import researchProjectsImage from '../../assets/Research.png'; // Path relative to this file

const service = {
  title: 'AI/ML Projects',
  image: researchProjectsImage,
  description: 'Develop intelligent systems that solve complex problems. We build custom AI models, develop ML algorithms, and provide solutions in predictive analytics and computer vision.',
  features: ['Custom AI models', 'ML algorithm development', 'Predictive analytics', 'Computer vision', 'Natural Language Processing (NLP)', 'Data annotation and preparation'],
  longDescription: 'Unlock the potential of Artificial Intelligence and Machine Learning with our bespoke project solutions. We specialize in developing intelligent systems tailored to your specific challenges, from creating custom AI models and sophisticated ML algorithms to implementing cutting-edge predictive analytics and computer vision applications. Our team guides you through the entire lifecycle, ensuring your AI/ML initiatives deliver tangible results and a competitive edge.'
};

const AiMlProjectsPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8" // Different gradient
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
                className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 mb-6" // Different gradient for title
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
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-teal-200 pb-2">Key Features</h2>
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
                    <svg className="h-6 w-6 mr-3 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> {/* Different color icon */}
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* AI/ML Projects Specific Section */}
            <motion.div
              className="my-10 p-6 bg-teal-50 rounded-lg" // Different background
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-teal-700 mb-3">Our AI/ML Expertise</h3>
              <p className="text-gray-600">This area can showcase specific AI models we've built, case studies of successful ML implementations, or discuss our approach to AI ethics and responsible development. You could embed a video demo of an AI project.</p>
              {/* Example of adding a video (replace with actual video embed code) */}
              {/* <div className="aspect-w-16 aspect-h-9 mt-4">
                <iframe 
                  src="https://www.youtube.com/embed/your_video_id" 
                  title="AI Project Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              </div> */}
            </motion.div>

            <motion.div
              className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <RouterLink 
                to="/services" 
                className="w-full sm:w-auto px-8 py-3 bg-teal-100 text-teal-700 font-semibold rounded-lg shadow-md hover:bg-teal-200 transition duration-300 transform hover:scale-105"
              >
                View Other Services
              </RouterLink>
              <RouterLink 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              >
                Discuss Your AI/ML Needs
              </RouterLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AiMlProjectsPage;