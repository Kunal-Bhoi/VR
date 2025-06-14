import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, PenTool, MapPin, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AcademicConsultation = () => {
  // Memoized background elements - reduced count for performance
  const backgroundElements = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      icon: i % 3 === 0 ? BookOpen : i % 3 === 1 ? PenTool : Lightbulb,
      delay: i * 0.8
    })), []
  );

  const knowledgePoints = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      id: i,
      cx: `${20 + (i % 3) * 30}%`,
      cy: `${40 + Math.floor(i / 3) * 20}%`,
      delay: i * 0.5
    })), []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Optimized */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Simplified Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Reduced Floating Academic Elements */}
          {backgroundElements.map(({ id, left, top, icon: Icon, delay }) => (
            <motion.div
              key={id}
              className="absolute opacity-10"
              style={{ left, top }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            >
              <Icon className="h-10 w-10 text-amber-600" />
            </motion.div>
          ))}
          
          {/* Simplified Thought Bubbles */}
          <motion.div
            className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Simplified Knowledge Pathways */}
          <svg className="absolute inset-0 w-full h-full">
            {knowledgePoints.map(({ id, cx, cy, delay }) => (
              <motion.circle
                key={id}
                cx={cx}
                cy={cy}
                r="2"
                fill="rgba(251, 191, 36, 0.3)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1],
                  opacity: [0, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  delay,
                  ease: "easeOut"
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Elevate Your Research
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mb-12 text-amber-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Expert Guidance, Scholarly Success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
              size="lg"
            >
              Partner with Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights - Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Research Problem Identification - Optimized */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Research Problem Identification
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Expert support in framing impactful, relevant, and research-worthy 
                problem statements that drive meaningful academic inquiry.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-2xl overflow-hidden border border-blue-200"
                style={{ willChange: "transform" }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                {/* Simplified Problem Clarification Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-64 h-64">
                    {/* Reduced Scattered Ideas */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center"
                        style={{
                          left: `${20 + i * 50}px`,
                          top: `${20 + i * 40}px`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ 
                          opacity: 0.6, 
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                      >
                        <span className="text-xs text-blue-600">?</span>
                      </motion.div>
                    ))}
                    
                    {/* Simplified Central Focus Point */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ 
                        scale: 1, 
                        opacity: 1
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    >
                      <Lightbulb className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Static Connecting Lines */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-blue-400 origin-left"
                        style={{ 
                          transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
                          transformOrigin: '0 50%'
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.5 + i * 0.1, ease: "easeOut" }}
                      />
                    ))}
                  </motion.div>
                </div>
                <BookOpen className="absolute top-4 right-4 h-8 w-8 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Article Writing & Editing - Optimized */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Article Writing & Editing
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Precision-driven academic writing and editing to meet journal standards 
                and elevate clarity in your scholarly communication.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-2xl overflow-hidden border border-emerald-200"
                style={{ willChange: "transform" }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                {/* Simplified Text Refinement Animation */}
                <div className="absolute inset-0 p-8">
                  <motion.div className="space-y-4">
                    {/* Original Text Lines */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-3 bg-gray-300 rounded"
                        style={{ width: `${70 + Math.random() * 30}%` }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.5, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                      />
                    ))}
                    
                    {/* Refined Text Overlay */}
                    <motion.div
                      className="absolute inset-8 space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    >
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded shadow-sm"
                          style={{ width: `${70 + Math.random() * 30}%` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 2 + i * 0.1, ease: "easeOut" }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Static Editing Marks */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-500 rounded-full"
                        style={{
                          top: `${40 + i * 80}px`,
                          right: `${30 + i * 50}px`
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 2.5 + i * 0.2, ease: "easeOut" }}
                      />
                    ))}
                  </motion.div>
                </div>
                <PenTool className="absolute top-4 right-4 h-8 w-8 text-emerald-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Methodology Guidance - Optimized */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Methodology Guidance
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Structured assistance in selecting and applying the most appropriate 
                research methods for your academic inquiry.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-2xl overflow-hidden border border-purple-200"
                style={{ willChange: "transform" }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                {/* Simplified Methodology Flowchart */}
                <div className="absolute inset-0 p-8">
                  <svg className="w-full h-full">
                    {/* Root Node */}
                    <motion.rect
                      x="150"
                      y="30"
                      width="100"
                      height="40"
                      fill="url(#purpleGradient)"
                      rx="20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    
                    {/* Branch Nodes */}
                    {[
                      { x: 80, y: 120, delay: 0.3 },
                      { x: 220, y: 120, delay: 0.5 },
                      { x: 120, y: 200, delay: 0.7 },
                      { x: 190, y: 200, delay: 0.9 }
                    ].map((node, i) => (
                      <motion.rect
                        key={i}
                        x={node.x}
                        y={node.y}
                        width="80"
                        height="30"
                        fill="rgba(147, 51, 234, 0.7)"
                        rx="15"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: node.delay, ease: "easeOut" }}
                      />
                    ))}
                    
                    {/* Connecting Lines */}
                    {[
                      { x1: 200, y1: 70, x2: 120, y2: 120, delay: 1.2 },
                      { x1: 200, y1: 70, x2: 260, y2: 120, delay: 1.4 },
                      { x1: 120, y1: 150, x2: 160, y2: 200, delay: 1.6 },
                      { x1: 260, y1: 150, x2: 230, y2: 200, delay: 1.8 }
                    ].map((line, i) => (
                      <motion.line
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#9333ea"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: line.delay, ease: "easeOut" }}
                      />
                    ))}
                    
                    {/* Highlighted Path */}
                    <motion.path
                      d="M200,70 L260,120 L230,200"
                      stroke="#f59e0b"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                    />
                    
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <MapPin className="absolute top-4 right-4 h-8 w-8 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Expert Discussions - Optimized */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Expert Discussions
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Facilitates personalized academic meetings with field experts 
                tailored to your research topic and scholarly objectives.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 shadow-2xl overflow-hidden border border-rose-200"
                style={{ willChange: "transform" }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                {/* Simplified Expert Dialogue Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-64 h-64">
                    {/* Expert Nodes */}
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Users className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                      <BookOpen className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Central Connection */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                      <Lightbulb className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    {/* Static Idea Flow Lines */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-6 bg-gradient-to-t from-rose-400 to-transparent rounded-full"
                        style={{
                          top: `${40 + Math.cos(i * Math.PI / 2) * 25}%`,
                          left: `${50 + Math.sin(i * Math.PI / 2) * 25}%`,
                          transform: `rotate(${i * 90}deg)`
                        }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.1, ease: "easeOut" }}
                      />
                    ))}
                  </motion.div>
                </div>
                <Users className="absolute top-4 right-4 h-8 w-8 text-rose-500" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicConsultation;