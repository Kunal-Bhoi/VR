import React from 'react';
import drone from '../assets/drone.png'; // Path relative to src/components/
import { motion } from 'framer-motion';
import vrLogo from '../assets/logo-removebg-preview.png'; // Path relative to src/components/
import { Link as RouterLink } from 'react-router-dom'; // Import Link

const MotionLink = motion(RouterLink); // Create a motion-compatible Link

const IntroPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white flex items-center"> {/* Removed id="intro", ensure vertical centering if needed */}
      <section className="w-full px-4 sm:px-8 py-16"> {/* Removed pt-28, main layout handles top padding */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img src={vrLogo} alt="VR Logo" className="h-14 w-auto mr-3" />
              <span className="text-3xl md:text-5xl font-extrabold text-gray-900">Tech Solutions</span>
            </div>

            <h2 className="text-lg md:text-2xl text-purple-700 font-semibold mb-6">
              Precision in Data. Perfection in Design — Powered by AI.
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <MotionLink
                to="/services" // Changed to React Router Link
                className="px-6 py-3 bg-purple-600 text-white text-base md:text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </MotionLink>
              <MotionLink
                to="/contact" // Changed to React Router Link
                className="px-6 py-3 bg-white text-purple-600 text-base md:text-lg font-medium rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </MotionLink>
            </div>
          </motion.div>

          {/* Right: Drone Image */}
          <motion.div
            className="lg:w-1/2 relative mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-102">
              <img src={drone} alt="AI-driven traffic analysis" className="w-full rounded-lg" />
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white py-2 px-5 rounded-full text-sm md:text-base font-medium shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 120 }}
              >
                AI-Driven Traffic Analysis
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default IntroPage;