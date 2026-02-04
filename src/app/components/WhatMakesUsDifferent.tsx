export function WhatMakesUsDifferent() {
  const differentiators = [
    {
      icon: "👔",
      title: "Regional Sales Leadership",
      description: "Not junior SDRs — experienced APAC sales leaders who own deals"
    },
    {
      icon: "🎯",
      title: "Deal Ownership",
      description: "We help move deals to close, not just generate leads"
    },
    {
      icon: "🌏",
      title: "APAC Experience",
      description: "Deep understanding of cultural, buyer & enterprise nuances"
    },
    {
      icon: "✅",
      title: "Low-Risk Entry",
      description: "Test before you invest heavily in local teams"
    },
    {
      icon: "⚙️",
      title: "Operator Mindset",
      description: "Focused on revenue and results, not slide decks"
    }
  ];

  return (
    <section className="px-6 py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4 md:mb-6 text-slate-900">
            What Makes DigiDataSense Different
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            We're not a typical agency or consultancy — we're your APAC revenue execution team
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.slice(0, 3).map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-red-50/30 border-2 border-slate-200 rounded-xl p-6 md:p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-xl">{item.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
          {differentiators.slice(3).map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-red-50/30 border-2 border-slate-200 rounded-xl p-6 md:p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-xl">{item.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>
        
        {/* Trust statement */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-4 bg-slate-100 rounded-full">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-slate-700 font-medium text-sm md:text-base">25+ years of APAC revenue leadership experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}