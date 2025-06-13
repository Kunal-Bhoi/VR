import React from 'react';
import { motion } from 'framer-motion';
// The drone import is removed as it's not used in this specific component anymore.
// If it was used for something else, ensure the path is correct:
// import drone from '../assets/drone.png'; // Path relative to src/components/

const Home = () => { // This is your original Home.jsx content (features/stats)
  const featureItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Advanced Analytics',
      description: 'Leverage AI-powered insights for actionable intelligence.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      ),
      title: 'Creative Excellence',
      description: 'Stunning designs blending aesthetics with functionality.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Delivery',
      description: 'Quick turnarounds with uncompromising quality.',
    },
  ];

  return (
    // Removed min-h-screen and justify-center as this component is part of a larger page.
    <div className="bg-gradient-to-b from-white to-purple-50 py-16">
      {/* Features Section */}
      <section className="py-16 px-8 bg-white shadow-md">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            “Our mission is to deliver precision in data and perfection in design, powered by AI.”
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto" // Added mx-auto
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center"> {/* Added text-center */}
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 text-center"> {/* Added text-center */}
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-purple-700 text-white shadow-xl" // Increased py
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center px-8">
          <motion.div
            className="py-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold mb-6">Collaborating with Top Institutes</div>
            <p className="text-xl md:text-2xl mt-4 max-w-4xl mx-auto">
              Currently working with prestigious institutions including NIT Surat, NIT Calicut, NIT Tiruchirappalli, and Mahindra University, Hyderabad.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;