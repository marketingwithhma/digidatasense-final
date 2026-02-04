import { motion } from "motion/react";

export function MarTechServices() {
  const services = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "CDP Strategy & Implementation",
      description: "Design and deploy customer data platforms that unify fragmented data sources into actionable customer intelligence.",
      features: [
        "Multi-source data integration",
        "Real-time customer profiles",
        "Audience segmentation & activation",
        "Privacy-compliant architecture"
      ]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "CRM Optimization & Revenue Ops",
      description: "Transform your CRM from a contact database into a revenue intelligence system that drives predictable growth.",
      features: [
        "Revenue pipeline design",
        "Sales & marketing alignment",
        "Lifecycle automation workflows",
        "Deal velocity optimization"
      ]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Marketing Automation Excellence",
      description: "Build intelligent automation that converts anonymous visitors into revenue-generating customers at scale.",
      features: [
        "Lead scoring & nurture programs",
        "Multi-channel campaign orchestration",
        "Behavioral trigger automation",
        "ROI measurement & attribution"
      ]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Revenue Intelligence",
      description: "Turn marketing data into commercial insights with attribution models and dashboards that drive decisions.",
      features: [
        "Multi-touch attribution modeling",
        "Revenue performance dashboards",
        "Predictive lead scoring",
        "CAC & LTV optimization"
      ]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Stack Integration & Orchestration",
      description: "Connect your entire MarTech ecosystem—CRM, CDP, MA, analytics—into one unified revenue engine.",
      features: [
        "Cross-platform data synchronization",
        "API & webhook automation",
        "System health monitoring",
        "Vendor-agnostic architecture"
      ]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "APAC Market Expansion Support",
      description: "Scale your MarTech operations across Asia-Pacific with localized strategies and regional best practices.",
      features: [
        "Regional platform selection",
        "Multi-language & multi-currency setup",
        "Compliance & data residency",
        "Local market personalization"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50/30 to-white">
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
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-5 md:mb-6 px-2">
              Complete MarTech Transformation Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-2">
              From strategy to execution, we deliver end-to-end MarTech solutions that drive measurable revenue growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/30 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl text-slate-900 font-medium leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://cal.com/zuberm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base lg:text-lg font-medium"
            >
              Discuss Your MarTech Stack
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-all duration-200 text-sm sm:text-base lg:text-lg font-medium"
            >
              View Results
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}