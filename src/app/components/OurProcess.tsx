import { motion } from "motion/react";

export function OurProcess() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Revenue Diagnostic",
      duration: "1-2 Weeks",
      description: "We audit your current MarTech stack, map revenue workflows, and identify critical gaps blocking growth.",
      deliverables: [
        "Current state architecture assessment",
        "Revenue leakage analysis",
        "Quick-win opportunities",
        "Transformation roadmap"
      ]
    },
    {
      phase: "Phase 2",
      title: "Strategic Design",
      duration: "2-3 Weeks",
      description: "Design the target state architecture with integrated systems, data models, and automation workflows.",
      deliverables: [
        "Future state technical blueprint",
        "Data integration architecture",
        "Process & workflow design",
        "Technology selection & vendor evaluation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Implementation",
      duration: "4-8 Weeks",
      description: "Execute the build in agile sprints—configure platforms, integrate systems, migrate data, and automate workflows.",
      deliverables: [
        "Platform configuration & setup",
        "Cross-system integrations",
        "Data migration & cleansing",
        "Automation workflow deployment"
      ]
    },
    {
      phase: "Phase 4",
      title: "Enablement & Optimization",
      duration: "2-4 Weeks",
      description: "Train your teams, establish governance, and continuously optimize based on performance data.",
      deliverables: [
        "Team training & documentation",
        "Performance dashboards",
        "Governance & SOP establishment",
        "Ongoing optimization support"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
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
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-5 md:mb-6 px-2">
              How We Transform Your MarTech Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-2">
              A proven 4-phase methodology designed for speed, clarity, and measurable results.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical connecting line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-red-400 to-primary transform -translate-x-1/2"></div>

          {/* Phases */}
          <div className="space-y-12 md:space-y-16">
            {phases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className="inline-block lg:block bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg hover:border-primary/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
                    {/* Phase label and duration */}
                    <div className={`flex items-center justify-between mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="inline-block px-3 py-1 bg-gradient-to-br from-primary to-red-700 text-white text-sm font-medium rounded-full">
                        {item.phase}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">{item.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl text-slate-900 font-medium mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Deliverables */}
                    <div className={`${index % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      <div className="inline-block">
                        <h4 className="text-sm font-medium text-slate-900 mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {item.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-start space-x-2">
                              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-slate-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase Number Circle - Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center shadow-xl shadow-red-500/30 border-4 border-white">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Mobile Phase Number */}
                <div className="lg:hidden w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 mb-4">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center border-2 border-slate-700 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">9-17</div>
              <div className="text-slate-400">Weeks Total Timeline</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 pt-8 md:pt-0">4</div>
              <div className="text-slate-400">Structured Phases</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 pt-8 md:pt-0">∞</div>
              <div className="text-slate-400">Ongoing Optimization</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://cal.com/zuberm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-lg"
          >
            Start Your Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}