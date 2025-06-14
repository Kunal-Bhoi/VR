import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Eye, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming this path is correct
import Navbar from '../../components/Navbar';    // Assuming this path is correct
import Footer from '../../components/Footer';    // Assuming this path is correct

const AiMlProjects = () => {
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  // Define transition for repeating boxShadow explicitly
  const repeatingBoxShadowTransition = {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    // repeatDelay: 0.5 // Optional delay between repeats
  };

  const heroNetworkNodes = [...Array(20)];
  const heroNeuralConnections = [...Array(15)];
  const heroAiParticles = [...Array(30)];

  const customAiBlocksArray = [...Array(12)];
  const customAiConnectionsArray = [...Array(8)];
  const mlTrainingDataPointsArray = [...Array(40)];
  const predictiveHistoricalPointsArray = [...Array(8)];
  const predictiveFuturePointsArray = [...Array(4)];
  const cvScanningBeamsArray = [...Array(6)];
  const cvObjectDetectionBoxesArray = [...Array(4)];
  const cvFeatureExtractionLinesArray = [...Array(8)];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-x-hidden">
      <Navbar />

      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        onHoverStart={() => setIsHeroHovered(true)}
        onHoverEnd={() => setIsHeroHovered(false)}
      >
        <motion.div
          className="absolute inset-0 overflow-hidden z-0" // Ensure z-0 for background
          animate={{ opacity: isHeroHovered ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="absolute inset-0 w-full h-full">
            {heroNetworkNodes.map((_, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={`${20 + (i % 5) * 20}%`}
                cy={`${20 + Math.floor(i / 5) * 20}%`}
                r="4"
                fill="rgba(139, 92, 246, 0.6)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0.8, 1],
                  opacity: [0, 1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            ))}
            {heroNeuralConnections.map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${20 + (i % 4) * 20}%`}
                y1={`${20 + Math.floor(i / 4) * 20}%`}
                x2={`${40 + (i % 3) * 20}%`}
                y2={`${40 + Math.floor(i / 3) * 15}%`}
                stroke="rgba(139, 92, 246, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </svg>
          {heroAiParticles.map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto"> {/* Ensure z-10 for foreground */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Engineering Intelligence
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mb-12 text-purple-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Building Tomorrow's AI, Today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              size="lg"
            >
              Explore Our AI Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Custom AI Models */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Adjusted amount for earlier trigger
            transition={{ duration: 0.8 }} // Slightly faster
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Custom AI Models
              </motion.h2>
              <motion.p
                className="text-xl text-purple-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Tailor-made AI solutions designed to meet your specific business challenges with precision.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden border border-cyan-500/20"
                whileHover={{ scale: 1.03 }} // Simplified hover
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-64 h-64">
                    {customAiBlocksArray.map((_, i) => (
                      <motion.div
                        key={`custom-block-${i}`}
                        className="absolute bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg"
                        style={{
                          width: `${20 + (i % 3) * 10}px`,
                          height: `${20 + (i % 3) * 10}px`,
                          left: `${(i % 4) * 50 + 30}px`,
                          top: `${Math.floor(i / 4) * 50 + 60}px`
                        }}
                        initial={{
                          scale: 0, rotate: Math.random() * 360, opacity: 0,
                          x: Math.random() * 200 - 100, y: Math.random() * 200 - 100
                        }}
                        whileInView={{
                          scale: 1, rotate: 0, opacity: 1, x: 0, y: 0
                        }}
                        viewport={{ once: true }}
                        // Transition for the whileInView properties (initial appearance)
                        transition={{
                          duration: 1, delay: i * 0.1, type: "spring", stiffness: 100, damping: 12
                        }}
                        // Animate prop for continuous animations AFTER whileInView completes
                        animate={{
                          boxShadow: [
                            "0 0 0px 0px rgba(34, 211, 238, 0.7)",  // Start
                            "0 0 8px 10px rgba(34, 211, 238, 0)",   // Mid (transparent expand)
                            "0 0 0px 0px rgba(34, 211, 238, 0.7)"   // End (back to start)
                          ]
                        }}
                        // Specific transition for the 'animate.boxShadow' property
                        custom={{ // Pass delay to custom prop for staggered repeating animation
                           delay: 1 + i * 0.1 // Stagger the start of repeating animation
                        }}
                        transition={{ // This transition applies to the 'animate' prop
                           boxShadow: { // Target boxShadow specifically
                             ...repeatingBoxShadowTransition, // Use predefined repeating transition
                             delay: 1 + i*0.12 // Stagger the start of repeating animation
                           }
                        }}
                      />
                    ))}
                    <svg className="absolute inset-0 w-full h-full opacity-80">
                      {customAiConnectionsArray.map((_, i) => (
                        <motion.line
                          key={`custom-conn-${i}`}
                          x1={50 + (i % 3) * 50}
                          y1={80 + Math.floor(i / 3) * 50}
                          x2={100 + ((i + 1) % 3) * 50}
                          y2={130 + Math.floor((i + 1) / 3) * 50}
                          stroke="rgba(34, 211, 238, 0.4)" // Softer
                          strokeWidth="1.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 1.5 + i * 0.1 }} // Adjusted delay
                        />
                      ))}
                    </svg>
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 2, type: "spring", stiffness: 100 }} // Adjusted delay
                      animate={{
                        scale: [1, 1.07, 1], // Subtle scale pulse
                      }}
                      custom={{ delay: 2.1 }} // Pass delay for staggered repeating animation
                      transition={{
                        scale: { duration: 1.2, ease: "easeInOut", repeat: Infinity, delay: 2.1 } // Ensure continuous scale pulse
                      }}
                    >
                      <Brain className="h-8 w-8 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <Cpu className="absolute top-4 right-4 h-8 w-8 text-cyan-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* ML Algorithm Development */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                ML Algorithm Development
              </motion.h2>
              <motion.p
                className="text-xl text-purple-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Robust, scalable machine learning algorithms engineered for real-world performance.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden border border-green-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 p-8">
                  <svg className="w-full h-full" viewBox="0 0 300 250"> {/* Adjusted viewBox for clarity */}
                    {mlTrainingDataPointsArray.map((_, i) => (
                      <motion.circle
                        key={`ml-data-${i}`}
                        cx={30 + Math.random() * 240} // Wider spread
                        cy={30 + Math.random() * 190}
                        r="3.5" // Slightly larger
                        fill={i < mlTrainingDataPointsArray.length / 2 ? "rgba(16, 185, 129,0.7)" : "rgba(245, 158, 11,0.7)"}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.6, scale: 1 }} // More subtle
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: i * 0.02 }} // Faster reveal
                      />
                    ))}
                    <motion.path
                      d="M30,190 Q150,100 270,150 T330,120" // Adjusted path for new viewBox
                      stroke="rgba(34, 197, 94,0.6)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1, ease:"circOut" }} // Adjusted delay
                    />
                    <motion.path
                      d="M30,170 Q150,80 270,130 T330,100" // Adjusted path
                      stroke="rgba(16, 185, 129,0.9)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 2, ease:"circOut" }} // Adjusted delay
                    />
                    <motion.rect
                      x="130" y="100" width="70" height="35" rx="15" // Adjusted position and size
                      fill="rgba(34, 197, 94, 0.2)"
                      stroke="rgba(34,197,94,0.7)"
                      strokeWidth="1.5"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 130 }} // Adjusted delay
                      animate={{
                        boxShadow: [
                          "0 0 0px 0px rgba(34, 197, 94, 0.7)",
                          "0 0 6px 8px rgba(34, 197, 94, 0)",
                          "0 0 0px 0px rgba(34, 197, 94, 0.7)"
                        ]
                      }}
                      custom={{delay: 0.6}}
                      transition={{
                        boxShadow: { ...repeatingBoxShadowTransition, delay: 0.6 }
                      }}
                    />
                  </svg>
                </div>
                <Zap className="absolute top-4 right-4 h-8 w-8 text-green-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Predictive Analytics */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Predictive Analytics
              </motion.h2>
              <motion.p
                className="text-xl text-purple-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Data-driven insights that help you forecast trends, behaviors, and strategic outcomes.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden border border-orange-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 p-8">
                  <svg className="w-full h-full" viewBox="0 0 350 250"> {/* Adjusted viewBox */}
                    {predictiveHistoricalPointsArray.map((_, i) => (
                      <motion.circle
                        key={`hist-point-${i}`}
                        cx={30 + i * 25} // Spread out more
                        cy={200 - i * 12 - Math.random() * 15} // Adjusted y progression
                        r="4" // Slightly larger
                        fill="rgba(107, 114, 128,0.8)"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: i * 0.1 }} // Faster reveal
                      />
                    ))}
                    <motion.path
                      d="M30,200 C80,180 150,140 200,120" // Adjusted historical path
                      stroke="rgba(107, 114, 128,0.7)"
                      strokeWidth="2.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }} // Adjusted delay
                    />
                    {predictiveFuturePointsArray.map((_, i) => (
                      <motion.circle
                        key={`future-point-${i}`}
                        cx={220 + i * 20} // Start after historical points
                        cy={110 - i * 8} // Continue trend
                        r="3"
                        fill="rgba(249, 115, 22,0.8)"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }} // Use Framer Motion's opacity
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 1.5 + i * 0.2 }} // Adjusted delay
                      />
                    ))}
                    <motion.path
                      d="M200,120 C250,90 290,70 340,50" // Adjusted prediction line
                      stroke="rgba(249, 115, 22,1)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 2, ease: "easeOut" }} // Adjusted delay
                    />
                    <motion.path
                      d="M200,120 Q270,70 340,50 L340,70 Q270,90 200,120 Z" // Adjusted confidence cone
                      fill="rgba(249, 115, 22, 0.15)"
                      initial={{ opacity: 0, scaleY: 0, originY: '120px' }} // Animate from start of prediction
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 2.5, ease: "easeOut" }} // Adjusted delay
                    />
                  </svg>
                </div>
                <BarChart3 className="absolute top-4 right-4 h-8 w-8 text-orange-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

                    {/* Computer Vision */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center" // Reduced gap slightly from gap-16
            initial={{ opacity: 0, x: 100 }} // Matched initial x to other right-side entries
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Adjusted amount
            transition={{ duration: 0.8 }} // Matched duration
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent" // Consistent text size
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }} // Consistent transition
              >
                Computer Vision
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-purple-200 leading-relaxed" // Consistent text size
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }} // Consistent transition
              >
                Advanced visual intelligence systems that extract meaning from images, videos, and real-time feeds.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden border border-pink-500/20"
                whileHover={{ scale: 1.03 }} // Simplified hover
                transition={{ duration: 0.2 }}
              >
                {/* Computer Vision Analysis */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-80 h-64">
                    {/* Digital Eye/Sensor */}
                    <motion.div
                      className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-pink-400 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 120 }} // Transition for whileInView
                      animate={{ // Continuous animation for boxShadow
                        boxShadow: [
                          "0 0 0px 0px rgba(244, 114, 182, 0.7)",
                          "0 0 10px 15px rgba(244, 114, 182, 0)", // Expands to transparent
                          "0 0 0px 0px rgba(244, 114, 182, 0.7)"  // Returns to start
                        ]
                      }}
                      // Specific transition for the 'animate.boxShadow' property
                      custom={{ delay: 0.9 }} // Used if your repeatingBoxShadowTransition uses custom for staggering
                      transition={{ // This transition applies to the 'animate' prop
                        boxShadow: { ...repeatingBoxShadowTransition, delay: 0.9 } // Apply predefined repeating transition, stagger start
                      }}
                    >
                      <Eye className="h-8 w-8 text-pink-400" />
                    </motion.div>

                    {/* Scanning Beams */}
                    {cvScanningBeamsArray.map((_, i) => (
                      <motion.div
                        key={`scan-beam-${i}`}
                        className="absolute w-40 h-0.5 bg-pink-400 origin-left opacity-70"
                        style={{
                          top: '40px', // Relative to the eye/sensor's container or a fixed point
                          left: '50%',
                          transform: `rotate(${i * (360 / cvScanningBeamsArray.length) + 10}deg)`, // Distribute beams around a point
                          transformOrigin: '0% 50%' // Rotate from the start of the beam
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ // Continuous scan after appearing
                          scaleX: [0, 0.8, 0], // Beam appears, extends, and retracts
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 1 + i * 0.3, // Staggered start of the animation
                          repeat: Infinity,
                          repeatDelay: 3, // Pause between scan cycles
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Stylized Image Frames Being Processed */}
                    <motion.div
                      className="absolute bottom-12 left-8 w-24 h-20 border-2 border-cyan-400/70 rounded bg-slate-700/30 p-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded flex items-center justify-center">
                        {/* Placeholder for detected object in frame 1 */}
                        <motion.div className="w-8 h-6 bg-green-400/80 rounded-sm"
                          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 right-8 w-24 h-20 border-2 border-purple-400/70 rounded bg-slate-700/30 p-1"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded flex items-center justify-center">
                        {/* Placeholder for detected object in frame 2 */}
                        <motion.div className="w-6 h-8 bg-yellow-400/80 rounded-sm"
                          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.0 }} />
                      </div>
                    </motion.div>

                    {/* Object Detection Boxes (using the corrected variable name) */}
                    {cvObjectDetectionBoxesArray.map((_, i) => ( // Corrected variable name here
                      <motion.div
                        key={`detect-box-${i}`}
                        className="absolute border-2 border-dashed border-green-400/80 rounded-md" // Dashed style for detection
                        style={{
                          width: `${40 + i * 10}%`, // Varied sizes for effect
                          height: `${30 + i * 8}%`,
                          // Position these more dynamically around the example image frames
                          bottom: `${10 + i * 25}%`,
                          left: `${25 + (i % 2 === 0 ? -5 : 5)}%`, // Stagger left/right
                        }}
                        initial={{ opacity: 0, pathLength: 0 }} // Animate pathLength for a "drawing" effect
                        whileInView={{ opacity: 1, pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 2.2 + i * 0.2 }}
                      />
                    ))}
                  </motion.div>
                </div>
                <Eye className="absolute top-4 right-4 h-8 w-8 text-pink-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AiMlProjects;