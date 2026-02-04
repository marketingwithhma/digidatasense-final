import { motion } from "motion/react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Revenue-First Approach",
      description: "We don't implement technology for technology's sake. Every integration, workflow, and dashboard is designed to drive measurable revenue outcomes.",
      metric: "3x",
      metricLabel: "Average Pipeline Growth"
    },
    {
      title: "APAC Market Expertise",
      description: "25+ years of hands-on experience scaling MarTech operations across Asia-Pacific markets with deep understanding of regional nuances.",
      metric: "15+",
      metricLabel: "APAC Markets Served"
    },
    {
      title: "Senior Operator-Led Delivery",
      description: "Work directly with experienced practitioners, not junior consultants. Decisions and execution stay close to senior leadership.",
      metric: "100%",
      metricLabel: "Senior Practitioner Led"
    },
    {
      title: "Platform Agnostic",
      description: "Not tied to any vendor. We recommend and implement what's best for your business—HubSpot, Salesforce, Segment, Adobe, or custom solutions.",
      metric: "50+",
      metricLabel: "Platform Integrations"
    },
    {
      title: "Fast Implementation Cycles",
      description: "Weeks, not quarters. We deliver in short sprints with measurable milestones, so you see ROI faster and can adjust strategy in real-time.",
      metric: "8 weeks",
      metricLabel: "Average Go-Live Time"
    },
    {
      title: "End-to-End Ownership",
      description: "From strategy and architecture to implementation and optimization—we own the complete journey and stand behind the results.",
      metric: "95%",
      metricLabel: "Client Retention Rate"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-50 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-red-100">
              Why DigiDataSense
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-5 md:mb-6 px-2">
              Built for Scaling APAC Tech Teams
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-2">
              We're not a typical agency or Big System Integrator. We're revenue operators who happen to be exceptional at MarTech.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
                {/* Metric Badge - repositioned for mobile */}
                <div className="flex items-start justify-between gap-3 mb-4 md:mb-0">
                  <div className="flex-1 md:pr-8">
                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 md:pt-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-slate-900 font-medium leading-snug">
                        {reason.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metric Badge - mobile: inline, tablet+: absolute */}
                  <div className="flex-shrink-0 md:absolute md:-top-4 md:-right-4">
                    <div className="bg-gradient-to-br from-primary to-red-700 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg sm:rounded-xl shadow-lg">
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">{reason.metric}</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs opacity-90 whitespace-nowrap leading-tight">{reason.metricLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-14 md:mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 mb-3 sm:mb-4 px-2">
              Ready to transform your MarTech into a revenue engine?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
              Book a 30-minute stack review. We'll identify quick wins and map out your transformation roadmap.
            </p>
            <a
              href="https://cal.com/zuberm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base lg:text-lg font-medium"
            >
              Schedule Your Stack Review
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}