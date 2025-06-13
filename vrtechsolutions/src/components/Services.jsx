import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';

// Animation Variants (These remain the same as your previous version)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3, // Can be short for the main container
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slightly shorter duration
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 }, // Slightly less y offset
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
    }
  },
};

const featureListVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15, // Slightly shorter delay
      staggerChildren: 0.08, 
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -15 }, // Slightly less x offset
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Shorter duration
};


function Services() {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Create comprehensive reports that help you make informed decisions.',
      image: dataAnalysisImage,
      features: ['Drone data processing', 'Statistical analysis', 'Interactive visualizations', 'Trend identification'],
      path: '/services/data-analysis',
    },
    {
      title: 'Creative Design',
      description: 'Get visually stunning assets that capture attention of everyone.',
      image: designWorksImage,
      features: ['Workshop booklets', 'Marketing materials', 'Abstract designs', 'Brand identity'],
      path: '/services/creative-design',
    },
    {
      title: 'AI/ML Projects',
      description: 'Intelligent systems that solve complex problems with AI/ML.',
      image: researchProjectsImage,
      features: ['Custom AI models', 'ML algorithm development', 'Predictive analytics', 'Computer vision'],
      path: '/services/ai-ml-projects',
    },
    {
      title: 'Academic Consultation',
      description: 'Support for research projects, article writing, and academic development.',
      image: academicConsultationImage,
      features: ['Research problem identification', 'Article writing & editing', 'Methodology guidance', 'Literature review'],
      path: '/services/academic-consultation',
    },
  ];

  return (
    <motion.section 
      className="py-20 px-8 bg-gradient-to-b from-white to-purple-50"
      // Ensure the section has some minimum height to be "visible" for any potential observer logic
      // 80px for navbar, assuming footer might be around 60-80px. Adjust if needed.
      // style={{ minHeight: 'calc(100vh - 160px)' }} // Optional: for debugging if height is an issue
      variants={sectionVariants}
      initial="hidden"
      animate="visible" // **** KEY CHANGE HERE ****
      // Removed viewport prop as it's not used by animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={titleVariants}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of specialized services designed to meet your data, design, and research needs. Explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={gridVariants}
        >
          {services.map((service) => ( // Removed index as key, using service.path
            <RouterLink key={service.path} to={service.path} className="block group">
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.25 } }} // Adjusted hover
              >
                <div className="h-48 sm:h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="300"
                    height="200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-5 text-base leading-relaxed flex-grow">{service.description}</p>
                  
                  <motion.ul 
                    className="space-y-2.5 mb-5"
                    variants={featureListVariants}
                  >
                    {service.features.slice(0, 2).map((feature, i) => (
                      <motion.li
                        key={i} // Index as key is fine here as list is static and order doesn't change
                        className="flex items-center text-gray-700 text-sm"
                        variants={featureItemVariants}
                      >
                        <svg className="h-4 w-4 mr-2.5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-auto text-right">
                    <span className="text-sm font-semibold text-purple-600 group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </motion.div>
            </RouterLink>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;