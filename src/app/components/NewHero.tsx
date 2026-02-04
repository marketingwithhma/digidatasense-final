import logo from "figma:asset/0dfcfa5efd50c12cf91e3ba5f8e327bdf3d20a44.png";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function NewHero() {
  const [showBefore, setShowBefore] = useState(true);

  // Auto-toggle between before and after states with asymmetric timing
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => {
        // If currently showing "Before", switch to "After" after 5 seconds
        // If currently showing "After", switch to "Before" after 8 seconds (freeze longer)
        return !prev;
      });
    }, showBefore ? 5000 : 8000); // Show Before for 5s, After for 8s
    
    return () => clearInterval(interval);
  }, [showBefore]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient - barely visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30"></div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30"></div>
      
      {/* Subtle tech pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="relative px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto">
        {/* Logo and Navigation */}
        <div className="mb-12 sm:mb-16 md:mb-20 flex items-center justify-between gap-4">
          <img src={logo} alt="DigiDataSense" className="h-10 sm:h-12 md:h-16 lg:h-20" />
          <Link
            to="/apac-revenue"
            className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm lg:text-base text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-200 whitespace-nowrap"
          >
            <span className="hidden sm:inline">APAC Revenue Accelerator</span>
            <span className="sm:hidden">APAC Revenue</span>
            <svg className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-slate-900">
                Transform Your MarTech Stack Into A{" "}
                <span className="text-primary">Revenue-Generating Engine</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl">
                Stop managing disconnected tools. Start driving measurable business outcomes with integrated MarTech transformation.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
                We architect, implement, and optimize CDP, CRM, and Marketing Automation systems that work together to accelerate your revenue growth across APAC markets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://cal.com/zuberm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base lg:text-lg whitespace-nowrap font-medium"
              >
                Review Your MarTech Stack
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-all duration-200 text-sm sm:text-base lg:text-lg whitespace-nowrap font-medium"
              >
                How We Work
              </a>
            </div>
          </div>
          
          {/* Interactive Before/After System Visualization */}
          <motion.div 
            className="relative mt-16 sm:mt-14 md:mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Toggle Indicator */}
            <div className="absolute -top-12 sm:-top-10 md:-top-12 left-0 right-0 flex items-center justify-center gap-2 sm:gap-3 z-20">
              <motion.button
                onClick={() => setShowBefore(true)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${ 
                  showBefore 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Before
              </motion.button>
              <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-slate-300"></div>
              <motion.button
                onClick={() => setShowBefore(false)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${ 
                  !showBefore 
                    ? 'bg-primary text-white shadow-lg shadow-red-500/30' 
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                After
              </motion.button>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-slate-600/50 min-h-[480px] sm:min-h-[520px] md:min-h-[560px]">
              {/* Background grid for tech feel */}
              <div className="absolute inset-0 opacity-10 rounded-xl sm:rounded-2xl overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
              </div>
              
              <AnimatePresence mode="wait">
                {showBefore ? (
                  // BEFORE: Fragmented, disconnected systems
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col justify-between h-full"
                  >
                    {/* Title */}
                    <motion.div 
                      className="mb-3 sm:mb-4 md:mb-6 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-red-500/20 text-red-400 rounded-full text-[10px] sm:text-xs md:text-sm font-medium border border-red-500/30">
                        Fragmented Systems
                      </span>
                    </motion.div>

                    {/* Data Sources - scattered */}
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                        {[
                          { label: "Web", delay: 0.2 },
                          { label: "Mobile", delay: 0.3 },
                          { label: "Email", delay: 0.4 },
                          { label: "Store", delay: 0.5 }
                        ].map((source, index) => (
                          <motion.div
                            key={source.label}
                            className="bg-slate-700/50 border border-slate-600 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-center"
                            initial={{ opacity: 0, y: -20, rotate: -5 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              rotate: [0, index % 2 === 0 ? 2 : -2, 0]
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: source.delay,
                              rotate: {
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                              }
                            }}
                          >
                            <span className="text-slate-400 text-[10px] sm:text-xs md:text-sm font-medium">{source.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Broken connections indicator */}
                    <motion.div 
                      className="flex items-center justify-center my-1 sm:my-2"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </motion.div>

                    {/* Disconnected Tools */}
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                        {[
                          { icon: "CRM", color: "from-slate-700 to-slate-800" },
                          { icon: "CDP", color: "from-slate-700 to-slate-800" },
                          { icon: "MA", color: "from-slate-700 to-slate-800" }
                        ].map((tool, index) => (
                          <motion.div
                            key={tool.icon}
                            className={`bg-gradient-to-br ${tool.color} border border-slate-600 rounded-md px-2 py-3 sm:px-3 sm:py-4 md:py-5 text-center relative`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              y: [0, -5, 0]
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.6 + index * 0.1,
                              y: {
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4
                              }
                            }}
                          >
                            <span className="text-slate-300 text-xs sm:text-sm md:text-base font-bold">{tool.icon}</span>
                            <motion.div 
                              className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Broken output */}
                    <motion.div 
                      className="flex items-center justify-center my-1 sm:my-2"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </motion.div>

                    {/* Poor outcomes */}
                    <div>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                        {["Ads", "Email", "App"].map((channel, index) => (
                          <motion.div
                            key={channel}
                            className="bg-slate-800/30 border border-red-500/30 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 0.5, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                          >
                            <span className="text-slate-500 text-[10px] sm:text-xs md:text-sm">{channel}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // AFTER: Clean unified flow
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col justify-between h-full"
                  >
                    {/* Title */}
                    <motion.div 
                      className="mb-3 sm:mb-4 md:mb-6 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] sm:text-xs md:text-sm font-medium border border-emerald-500/30">
                        Unified Revenue Engine
                      </span>
                    </motion.div>

                    {/* Data Sources - aligned */}
                    <div className="mb-2 sm:mb-3">
                      <motion.div 
                        className="text-center mb-1.5 sm:mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-slate-400 text-[10px] sm:text-xs md:text-sm">Data Sources</span>
                      </motion.div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                        {[
                          { label: "Web", delay: 0.2 },
                          { label: "Mobile", delay: 0.3 },
                          { label: "Email", delay: 0.4 },
                          { label: "Store", delay: 0.5 }
                        ].map((source) => (
                          <motion.div
                            key={source.label}
                            className="bg-slate-700 border border-slate-500 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-center hover:border-primary/50 transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: source.delay }}
                          >
                            <span className="text-slate-200 text-[10px] sm:text-xs md:text-sm font-medium">{source.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Flow Arrow Down */}
                    <motion.div 
                      className="flex justify-center my-1 sm:my-1.5"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </motion.svg>
                    </motion.div>

                    {/* Central Platform - highlighted */}
                    <div className="mb-2 sm:mb-3">
                      <motion.div
                        className="bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-400/50 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 text-center shadow-xl shadow-blue-500/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1">
                          Unified MarTech Engine
                        </div>
                        <div className="text-blue-200 text-[9px] sm:text-[10px] md:text-xs leading-snug">
                          Integrated Data • Real-time Insights • Revenue Attribution
                        </div>
                      </motion.div>
                    </div>

                    {/* Flow Arrow Down */}
                    <motion.div 
                      className="flex justify-center my-1 sm:my-1.5"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </motion.svg>
                    </motion.div>

                    {/* Activation Channels */}
                    <div>
                      <motion.div 
                        className="text-center mb-1.5 sm:mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                      >
                        <span className="text-slate-400 text-[10px] sm:text-xs md:text-sm">Activation Channels</span>
                      </motion.div>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                        {[
                          { label: "Email", color: "from-green-600 to-green-700", delay: 1.1 },
                          { label: "Ads", color: "from-blue-600 to-blue-700", delay: 1.2 },
                          { label: "App", color: "from-purple-600 to-purple-700", delay: 1.3 }
                        ].map((channel) => (
                          <motion.div
                            key={channel.label}
                            className={`bg-gradient-to-br ${channel.color} border border-white/20 rounded-md px-2 py-2 sm:px-3 sm:py-3 text-center shadow-lg`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: channel.delay }}
                          >
                            <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium">{channel.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Decorative glow */}
            <motion.div 
              className="absolute -inset-4 rounded-xl sm:rounded-2xl -z-10 blur-3xl"
              animate={{
                background: showBefore 
                  ? "radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(15, 23, 42, 0.3) 100%)"
                  : "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%)"
              }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}