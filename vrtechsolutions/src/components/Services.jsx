// src/components/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import { CardBody, CardContainer, CardItem } from './ui/3d-card'; // Ensure this path is correct

import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';

// Animation Variants (no changes here)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardMotionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },
};


function Services() {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Create comprehensive reports that help you make informed decisions. We leverage drone data processing, statistical analysis, and interactive visualizations.',
      image: dataAnalysisImage,
      path: '/services/data-analysis',
      cta: 'Explore Analysis →'
    },
    {
      title: 'Creative Design',
      description: 'Get visually stunning assets like workshop booklets and marketing materials that capture attention and define your brand identity.',
      image: designWorksImage,
      path: '/services/creative-design',
      cta: 'See Designs →'
    },
    {
      title: 'AI/ML Projects',
      description: 'Intelligent systems solving complex problems with custom AI models, ML algorithms, predictive analytics, and computer vision.',
      image: researchProjectsImage,
      path: '/services/ai-ml-projects',
      cta: 'Discover AI →'
    },
    {
      title: 'Academic Consultation',
      description: 'Expert support for research projects, from problem identification and literature review to article writing and methodology guidance.',
      image: academicConsultationImage,
      path: '/services/academic-consultation',
      cta: 'Get Support →'
    },
  ];

  return (
    <motion.section
      className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-purple-50"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={titleVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Our Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
            We offer a range of specialized services designed to meet your data, design, and research needs. Explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={gridVariants}
        >
          {services.map((service) => (
            <motion.div key={service.path} variants={cardMotionVariants} className="flex justify-center">
              <RouterLink to={service.path} className="block w-full max-w-md">
                <CardContainer
                  className="inter-var w-full"
                  // Reminder: Check for padding (e.g., py-20) in the CardContainer definition
                  // within your 3d-card.jsx if there's too much space around individual cards.
                >
                  <CardBody
                    className="
                      bg-purple-50                                  // Card background is white
                      relative group/card
                      border border-gray-200                       // Soft border
                      w-full h-auto rounded-xl p-6
                      shadow-lg group-hover/card:shadow-xl         // Default shadow, enhanced on hover
                      transition-shadow duration-300 ease-in-out   // Smooth shadow transition
                    "
                  >
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-700" // Text color for title
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-600 text-sm max-w-sm mt-2 min-h-[4em]" // Text color for description
                    >
                      {service.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={service.image}
                        height="600"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-lg" // Added a subtle shadow to image on hover
                        alt={service.title}
                        loading="lazy"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/1000x600?text=Image+Unavailable';
                        }}
                      />
                    </CardItem>
                    <div className="flex justify-end items-center mt-10 sm:mt-20">
                      <CardItem
                        translateZ={20}
                        as="div"
                        className="
                          px-4 py-2 rounded-lg text-xs font-semibold
                          text-purple-700 bg-purple-100 hover:bg-purple-200
                          border border-transparent
                          transition-colors duration-200
                        "
                      >
                        {service.cta}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </RouterLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;