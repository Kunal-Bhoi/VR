import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, BookOpen, BarChart3, Sparkles, Users } from 'lucide-react';

// Create motion components to avoid deprecation warnings
const MotionDiv = motion.div;
const MotionRect = motion.rect;

const CreativeDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          {[...Array(20)].map((_, i) => (
            <MotionDiv
              key={i}
              className="absolute opacity-20"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                background: `linear-gradient(45deg, 
                  hsl(${Math.random() * 360}, 70%, 60%), 
                  hsl(${Math.random() * 360}, 70%, 80%))`,
                willChange: 'transform'
              }}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                rotate: 0
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Fluid Gradient Blobs */}
          <MotionDiv
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30 blur-3xl"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <MotionDiv
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300 to-cyan-300 rounded-full opacity-30 blur-3xl"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <MotionDiv
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Design That Speaks
          </MotionDiv>
          <MotionDiv
            className="text-2xl md:text-3xl mb-12 text-purple-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Where Creativity Meets Impact
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button 
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center mx-auto"
            >
              Discover Our Creative Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </MotionDiv>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Workshop Booklets */}
          <MotionDiv
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <MotionDiv
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Workshop Booklets
              </MotionDiv>
              <MotionDiv
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Visually rich, content-driven booklets designed to engage, educate, 
                and leave a lasting impression on your audience.
              </MotionDiv>
            </div>
            <div className="relative">
              <MotionDiv
                className="relative h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >
                {/* Animated Booklet */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MotionDiv
                    className="relative"
                    whileHover={{ rotateY: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ perspective: 1000, willChange: 'transform' }}
                  >
                    {/* Book Pages */}
                    {[...Array(5)].map((_, i) => (
                      <MotionDiv
                        key={i}
                        className="absolute w-48 h-64 bg-white border border-gray-200 rounded-lg shadow-lg"
                        style={{
                          zIndex: 5 - i,
                          transform: `translateZ(${i * 10}px) rotateY(${i * 2}deg)`,
                          willChange: 'transform'
                        }}
                        initial={{ x: 0 }}
                        whileInView={{ x: i * 5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                      >
                        <div className="p-4">
                          <div className="w-full h-6 bg-gradient-to-r from-emerald-200 to-teal-200 rounded mb-3" />
                          <div className="space-y-2">
                            {[...Array(6)].map((_, j) => (
                              <div key={j} className={`h-2 bg-gray-200 rounded ${j % 3 === 0 ? 'w-3/4' : 'w-full'}`} />
                            ))}
                          </div>
                        </div>
                      </MotionDiv>
                    ))}
                  </MotionDiv>
                </div>
                <BookOpen className="absolute top-4 right-4 h-8 w-8 text-emerald-500" />
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Visual Data Representation */}
          <MotionDiv
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="lg:order-2">
              <MotionDiv
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Visual Data Art
              </MotionDiv>
              <MotionDiv
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Statistical analysis transformed into beautiful, artistic visualizations 
                that tell compelling stories through design.
              </MotionDiv>
            </div>
            <div className="lg:order-1 relative">
              <MotionDiv
                className="relative h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >
                {/* Artistic Data Visualization */}
                <div className="absolute inset-0 p-8">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Animated Art Bars */}
                    {[...Array(8)].map((_, i) => (
                      <MotionRect
                        key={i}
                        x={i * 45 + 20}
                        y={200}
                        width="30"
                        height="0"
                        fill={`url(#gradient${i})`}
                        rx="15"
                        initial={{ height: 0 }}
                        whileInView={{ height: Math.random() * 150 + 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                      />
                    ))}
                    <defs>
                      {[...Array(8)].map((_, i) => (
                        <linearGradient key={i} id={`gradient${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={`hsl(${i * 45}, 70%, 60%)`} />
                          <stop offset="100%" stopColor={`hsl(${i * 45}, 70%, 80%)`} />
                        </linearGradient>
                      ))}
                    </defs>
                  </svg>
                </div>
                <BarChart3 className="absolute top-4 right-4 h-8 w-8 text-orange-500" />
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Abstract Designs */}
          <MotionDiv
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <MotionDiv
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Abstract Designs
              </MotionDiv>
              <MotionDiv
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Expressive, modern compositions that blend imagination with meaning 
                for a distinctive visual impact.
              </MotionDiv>
            </div>
            <div className="relative">
              <MotionDiv
                className="relative h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >
                {/* Abstract Art Gallery */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  {[...Array(4)].map((_, i) => (
                    <MotionDiv
                      key={i}
                      className="relative bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{ willChange: 'transform' }}
                    >
                      <MotionDiv
                        className="absolute inset-0"
                        style={{
                          background: `conic-gradient(from ${i * 90}deg, 
                            hsl(${280 + i * 30}, 70%, 70%), 
                            hsl(${320 + i * 30}, 70%, 80%), 
                            hsl(${280 + i * 30}, 70%, 70%))`,
                          willChange: 'transform'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                      />
                      <MotionDiv
                        className="absolute inset-2 bg-white/20 backdrop-blur-sm rounded"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.3, ease: "easeOut" }}
                      />
                    </MotionDiv>
                  ))}
                </div>
                <Sparkles className="absolute top-4 right-4 h-8 w-8 text-purple-500" />
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Brand Identity */}
          <MotionDiv
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="lg:order-2">
              <MotionDiv
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Brand Identity
              </MotionDiv>
              <MotionDiv
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Cohesive, memorable design systems that authentically represent 
                your brand's essence and vision.
              </MotionDiv>
            </div>
            <div className="lg:order-1 relative">
              <MotionDiv
                className="relative h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >
                {/* Brand Identity Construction */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MotionDiv
                    className="relative w-48 h-48"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {/* Color Swatches */}
                    {[...Array(6)].map((_, i) => (
                      <MotionDiv
                        key={i}
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                          background: `hsl(${i * 60}, 70%, 60%)`,
                          top: `${Math.cos(i * Math.PI / 3) * 60 + 80}px`,
                          left: `${Math.sin(i * Math.PI / 3) * 60 + 80}px`,
                          willChange: 'transform'
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 + 1, ease: "easeOut" }}
                      />
                    ))}
                    {/* Central Logo Mark */}
                    <MotionDiv
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"
                      style={{ willChange: 'transform' }}
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                    />
                  </MotionDiv>
                </div>
                <Users className="absolute top-4 right-4 h-8 w-8 text-blue-500" />
              </MotionDiv>
            </div>
          </MotionDiv>

        </div>
      </section>
    </div>
  );
};

export default CreativeDesign;