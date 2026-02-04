import { motion } from "motion/react";

export function ResultsShowcase() {
  const results = [
    {
      metric: "3.2x",
      label: "Pipeline Growth",
      description: "SaaS company in Singapore",
      detail: "Unified CDP and CRM to improve lead quality scoring and sales handoff"
    },
    {
      metric: "58%",
      label: "Reduction in CAC",
      description: "E-commerce platform in SEA",
      detail: "Implemented multi-touch attribution and automated campaign optimization"
    },
    {
      metric: "41%",
      label: "Increase in Conversion Rate",
      description: "B2B tech company in APAC",
      detail: "Built behavioral automation workflows across marketing and sales touchpoints"
    },
    {
      metric: "12 weeks",
      label: "Time to Full Deployment",
      description: "Fintech startup in Australia",
      detail: "Complete MarTech stack implementation from strategy to go-live"
    },
    {
      metric: "89%",
      label: "Data Accuracy Improvement",
      description: "Enterprise SaaS in Japan",
      detail: "Cleaned and synchronized customer data across 7 disconnected systems"
    },
    {
      metric: "$2.4M",
      label: "Additional ARR Attributed",
      description: "Mid-market tech company in ANZ",
      detail: "Revenue operations transformation linking marketing to closed revenue"
    }
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="results-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/20 text-red-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-red-500/30">
              Proven Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-5 md:mb-6 px-2">
              Real Outcomes from MarTech Transformation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-2">
              We measure success by revenue impact, not just platform go-lives.
            </p>
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                {/* Metric */}
                <div className="mb-5 sm:mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl text-white font-medium">
                    {result.label}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-5 md:pt-6 border-t border-slate-700">
                  <p className="text-sm sm:text-base text-slate-400 font-medium">
                    {result.description}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {result.detail}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-14 md:mt-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-2 border-slate-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
              <div className="text-slate-400 text-xs sm:text-sm">MarTech Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">15+</div>
              <div className="text-slate-400 text-xs sm:text-sm">APAC Markets</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">95%</div>
              <div className="text-slate-400 text-xs sm:text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">25+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="text-slate-300 text-base sm:text-lg mb-5 sm:mb-6 px-2">
            Ready to see similar results for your business?
          </p>
          <a
            href="https://cal.com/zuberm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base lg:text-lg font-medium"
          >
            Discuss Your MarTech Goals
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}