export function WhatWeDo() {
  const services = [
    {
      icon: "📈",
      title: "Build and qualify APAC pipeline",
      description: "Generate and validate opportunities with the right buyers"
    },
    {
      icon: "💼",
      title: "Lead regional sales conversations",
      description: "Own discovery, demos, and stakeholder engagement"
    },
    {
      icon: "⚡",
      title: "Accelerate deals to close",
      description: "Navigate proposals, negotiations, and procurement processes"
    },
    {
      icon: "🎯",
      title: "Localize value propositions",
      description: "Adapt messaging and positioning for APAC buyers"
    },
    {
      icon: "🌏",
      title: "Navigate regional complexities",
      description: "Handle cultural nuances, compliance, and buying behaviors"
    },
    {
      icon: "✅",
      title: "Prove repeatable revenue",
      description: "Validate your model before you scale headcount"
    }
  ];

  return (
    <section className="px-6 py-16 md:py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full mb-4 md:mb-6">
            <span className="font-medium text-sm md:text-base">What We Do</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4 md:mb-6 text-white">
            APAC Revenue Acceleration Services
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We operate as your <span className="text-white font-semibold">regional revenue partner</span>, not a consulting agency.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 hover:bg-slate-800 hover:border-primary/50 transition-all duration-200"
            >
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">{item.title}</h3>
              <p className="text-slate-400 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}