import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import designWorksImage from '../../assets/DesignWorks.png'; // Path relative to this file

const service = {
  title: 'Creative Design',
  image: designWorksImage,
  description: 'Get visually stunning assets that capture attention. From workshop booklets and marketing materials to abstract designs and full brand identities, we make your vision a reality.',
  features: ['Workshop booklets', 'Marketing materials', 'Abstract designs', 'Brand identity', 'UI/UX design', 'Infographics'],
  longDescription: 'Our Creative Design service is where artistry meets strategy. We craft compelling visual narratives that resonate with your audience and elevate your brand. Whether it\'s designing engaging workshop materials, impactful marketing collateral, unique abstract pieces, or developing a cohesive brand identity, our team blends creativity with a deep understanding of design principles. We focus on delivering designs that are not only aesthetically pleasing but also functional and effective in achieving your communication goals.'
};

const CreativeDesignPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8" // Slightly different gradient for variety
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
                className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6"
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
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Key Features</h2>
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
                    <svg className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> {/* Different color icon */}
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Creative Design Specific Section */}
            <motion.div
              className="my-10 p-6 bg-blue-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Design Philosophy</h3>
              <p className="text-gray-600">We believe great design is a blend of art and science. This section can showcase a portfolio, design process, or client testimonials related to creative design.</p>
              {/* Example of adding an image specific to this page */}
              {/* <img src={yourCreativePortfolioImage} alt="Creative Portfolio Snippet" className="mt-4 rounded-lg shadow-md" loading="lazy" /> */}
            </motion.div>

            <motion.div
              className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <RouterLink 
                to="/services" 
                className="w-full sm:w-auto px-8 py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-200 transition duration-300 transform hover:scale-105"
              >
                View Other Services
              </RouterLink>
              <RouterLink 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Start a Design Project
              </RouterLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CreativeDesignPage;