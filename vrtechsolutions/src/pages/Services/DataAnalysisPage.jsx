import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, BarChart3, TrendingUp, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DataAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Data Particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Network Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={i}
                x1={Math.random() * 100 + '%'}
                y1={Math.random() * 100 + '%'}
                x2={Math.random() * 100 + '%'}
                y2={Math.random() * 100 + '%'}
                stroke="rgba(34, 211, 238, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Unveiling Insights
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mb-12 text-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The Art & Science of Data
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              size="lg"
            >
              Explore Our Data Expertise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Drone Data Processing */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Drone Data Processing
              </motion.h2>
              <motion.p
                className="text-xl text-blue-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Traffic Volume Counts, Trajectory Data, Speed studies, Traffic Surveys - 
                transforming aerial perspectives into actionable intelligence.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Drone Data Processing Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-64 h-64">
                    {/* Stylized Urban Area */}
                    <div className="absolute inset-0">
                      {/* Road Grid */}
                      <svg className="w-full h-full">
                        {/* Horizontal Roads */}
                        <rect x="0" y="120" width="264" height="8" fill="rgba(75, 85, 99, 0.8)" />
                        <rect x="0" y="180" width="264" height="8" fill="rgba(75, 85, 99, 0.8)" />
                        {/* Vertical Roads */}
                        <rect x="80" y="0" width="8" height="264" fill="rgba(75, 85, 99, 0.8)" />
                        <rect x="160" y="0" width="8" height="264" fill="rgba(75, 85, 99, 0.8)" />
                      </svg>
                      
                      {/* Buildings */}
                      {[
                        { x: 20, y: 40, w: 40, h: 60 },
                        { x: 120, y: 20, w: 30, h: 80 },
                        { x: 200, y: 50, w: 35, h: 50 },
                        { x: 30, y: 200, w: 25, h: 40 }
                      ].map((building, i) => (
                        <motion.rect
                          key={i}
                          x={building.x}
                          y={building.y}
                          width={building.w}
                          height={building.h}
                          fill="rgba(55, 65, 81, 0.6)"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                    
                    {/* Drone */}
                    <motion.div
                      className="absolute w-8 h-8 bg-orange-400 rounded-full"
                      style={{ top: '20px', left: '20px' }}
                      animate={{
                        x: [0, 200, 200, 0, 0],
                        y: [0, 0, 150, 150, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Drone Icon */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </motion.div>
                    
                    {/* Scanning Beams */}
                    <motion.div
                      className="absolute w-16 h-16 border-2 border-cyan-400 rounded-full opacity-60"
                      style={{ top: '12px', left: '12px' }}
                      animate={{
                        x: [0, 200, 200, 0, 0],
                        y: [0, 0, 150, 150, 0],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Data Transformations - Volume Bars */}
                    <div className="absolute bottom-8 left-8">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="inline-block w-3 bg-gradient-to-t from-cyan-400 to-blue-500 mr-1 rounded-sm"
                          style={{ height: `${(i + 1) * 8}px` }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 2 + i * 0.2 }}
                        />
                      ))}
                    </div>
                    
                    {/* Trajectory Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.path
                        d="M40,124 Q120,110 200,124"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 3 }}
                      />
                      <motion.path
                        d="M84,40 Q84,100 84,180"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 3.5 }}
                      />
                    </svg>
                    
                    {/* Speed Heatmap Indicators */}
                    {[
                      { x: 100, y: 120, color: '#ef4444' },
                      { x: 140, y: 120, color: '#f59e0b' },
                      { x: 180, y: 120, color: '#10b981' }
                    ].map((indicator, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full"
                        style={{ 
                          top: `${indicator.y}px`, 
                          left: `${indicator.x}px`,
                          backgroundColor: indicator.color
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 4 + i * 0.3 }}
                        animate={{ scale: [1, 1.2, 1] }}
                      />
                    ))}
                  </motion.div>
                </div>
                <Database className="absolute top-4 right-4 h-8 w-8 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Statistical Analysis */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Statistical Analysis
              </motion.h2>
              <motion.p
                className="text-xl text-blue-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Advanced statistical analysis with proficiency in SPSS, MATLAB, Power BI - 
                turning complex data into clear insights.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Statistical Analysis Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative w-72 h-64">
                    {/* Data Input Flow */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                      {/* Data Particles */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-teal-400 rounded-full"
                          style={{
                            left: `-${i * 8}px`,
                            top: `${(i % 5 - 2) * 8}px`
                          }}
                          animate={{
                            x: [0, 120],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Processing Funnel */}
                    <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2">
                      <svg width="80" height="120" viewBox="0 0 80 120">
                        <motion.path
                          d="M10,10 L70,10 L50,110 L30,110 Z"
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                        
                        {/* Processing Lines */}
                        {[...Array(6)].map((_, i) => (
                          <motion.line
                            key={i}
                            x1={15 + i * 8}
                            y1={20 + i * 15}
                            x2={65 - i * 8}
                            y2={20 + i * 15}
                            stroke="#06b6d4"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                          />
                        ))}
                      </svg>
                    </div>
                    
                    {/* Output Chart */}
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <svg width="80" height="120" viewBox="0 0 80 120">
                        {/* Chart Bars */}
                        {[35, 50, 25, 40, 60].map((height, i) => (
                          <motion.rect
                            key={i}
                            x={i * 14 + 5}
                            y={120 - height}
                            width="10"
                            height={height}
                            fill={`url(#barGradient${i})`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2 + i * 0.2 }}
                          />
                        ))}
                        
                        <defs>
                          {[...Array(5)].map((_, i) => (
                            <linearGradient key={i} id={`barGradient${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                          ))}
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Data Clustering Visualization */}
                    <div className="absolute top-4 right-4">
                      {/* Cluster 1 */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-green-400 rounded-full"
                          style={{
                            left: `${Math.cos(i * Math.PI / 3) * 15 + 20}px`,
                            top: `${Math.sin(i * Math.PI / 3) * 15 + 20}px`
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 3 + i * 0.1 }}
                        />
                      ))}
                      
                      {/* Cluster 2 */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-teal-400 rounded-full"
                          style={{
                            left: `${Math.cos(i * Math.PI / 2.5) * 12 + 60}px`,
                            top: `${Math.sin(i * Math.PI / 2.5) * 12 + 15}px`
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 3.8 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
                <BarChart3 className="absolute top-4 right-4 h-8 w-8 text-green-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Visualization */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Interactive Visualization
              </motion.h2>
              <motion.p
                className="text-xl text-blue-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Graphical representation of results for better understanding of cause and process - 
                making data come alive through interaction.
              </motion.p>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Interactive 3D Network */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-64 h-64"
                    style={{ perspective: 1000 }}
                    whileHover={{ rotateY: 15 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Central Hub */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full z-10"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(168, 85, 247, 0.7)",
                          "0 0 0 20px rgba(168, 85, 247, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Network Nodes */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * Math.PI * 2) / 8;
                      const radius = 80;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-pink-400 rounded-full"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.2 }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(244, 114, 182, 0.5)",
                              "0 0 0 8px rgba(244, 114, 182, 0)"
                            ]
                          }}
                          whileHover={{ scale: 1.5, backgroundColor: "#06b6d4" }}
                        />
                      );
                    })}
                    
                    {/* Connections */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * Math.PI * 2) / 8;
                        const radius = 80;
                        const x = Math.cos(angle) * radius + 132;
                        const y = Math.sin(angle) * radius + 132;
                        
                        return (
                          <motion.line
                            key={i}
                            x1="132"
                            y1="132"
                            x2={x}
                            y2={y}
                            stroke="rgba(168, 85, 247, 0.6)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        );
                      })}
                      
                      {/* Dynamic Connections */}
                      {[0, 2, 4, 6].map((i) => {
                        const angle1 = (i * Math.PI * 2) / 8;
                        const angle2 = ((i + 1) * Math.PI * 2) / 8;
                        const radius = 80;
                        const x1 = Math.cos(angle1) * radius + 132;
                        const y1 = Math.sin(angle1) * radius + 132;
                        const x2 = Math.cos(angle2) * radius + 132;
                        const y2 = Math.sin(angle2) * radius + 132;
                        
                        return (
                          <motion.line
                            key={`dynamic-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgba(244, 114, 182, 0.8)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{
                              duration: 3,
                              delay: 2 + i * 0.5,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          />
                        );
                      })}
                    </svg>
                  </motion.div>
                </div>
                <Eye className="absolute top-4 right-4 h-8 w-8 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Trend Identification */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="lg:order-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Trend Identification
              </motion.h2>
              <motion.p
                className="text-xl text-blue-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Identifying patterns and trends for better understanding of cause and process - 
                revealing the story hidden in your data.
              </motion.p>
            </div>
            <div className="lg:order-1 relative">
              <motion.div
                className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Trend Identification Animation */}
                <div className="absolute inset-0 p-8">
                  <svg className="w-full h-full" viewBox="0 0 320 280">
                    {/* Scatter Plot Data Points */}
                    {[
                      { x: 40, y: 220, delay: 0.5 },
                      { x: 60, y: 200, delay: 0.6 },
                      { x: 80, y: 210, delay: 0.7 },
                      { x: 100, y: 180, delay: 0.8 },
                      { x: 120, y: 190, delay: 0.9 },
                      { x: 140, y: 160, delay: 1.0 },
                      { x: 160, y: 170, delay: 1.1 },
                      { x: 180, y: 140, delay: 1.2 },
                      { x: 200, y: 150, delay: 1.3 },
                      { x: 220, y: 120, delay: 1.4 },
                      { x: 240, y: 130, delay: 1.5 },
                      { x: 260, y: 100, delay: 1.6 },
                      { x: 280, y: 110, delay: 1.7 }
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="rgba(156, 163, 175, 0.7)"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: point.delay }}
                      />
                    ))}
                    
                    {/* Trend Line */}
                    <motion.path
                      d="M40,220 Q100,180 160,140 T280,100"
                      stroke="#fbbf24"
                      strokeWidth="4"
                      fill="none"
                      filter="url(#glow)"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                    
                    {/* Key Trend Points */}
                    {[
                      { x: 40, y: 220 },
                      { x: 120, y: 160 },
                      { x: 200, y: 120 },
                      { x: 280, y: 100 }
                    ].map((point, i) => (
                      <motion.circle
                        key={`trend-${i}`}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#f59e0b"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 2.5 + i * 0.2 }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(245, 158, 11, 0.7)",
                            "0 0 0 10px rgba(245, 158, 11, 0)"
                          ]
                        }}
                      />
                    ))}
                    
                    {/* Confidence Area */}
                    <motion.path
                      d="M40,210 Q100,170 160,130 T280,90 L280,110 Q160,150 100,190 T40,230 Z"
                      fill="rgba(251, 191, 36, 0.2)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 3 }}
                    />
                    
                    {/* Chart Grid */}
                    {[...Array(6)].map((_, i) => (
                      <line
                        key={i}
                        x1="40"
                        y1={240 - i * 40}
                        x2="280"
                        y2={240 - i * 40}
                        stroke="rgba(75, 85, 99, 0.3)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <TrendingUp className="absolute top-4 right-4 h-8 w-8 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalysis;