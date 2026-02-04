export function WhoThisIsFor() {
  const criteria = [
    {
      icon: "🌏",
      title: "Expanding into APAC",
      description: "You're ready to test or scale in the Asia-Pacific region"
    },
    {
      icon: "👥",
      title: "Need local sales leadership without hiring",
      description: "Want regional expertise without committing to full-time headcount"
    },
    {
      icon: "📊",
      title: "Have pipeline but struggle to convert",
      description: "APAC deals slow down or stall despite initial interest"
    },
    {
      icon: "🎯",
      title: "Test before committing headcount",
      description: "Validate the market opportunity before major investment"
    }
  ];

  return (
    <section className="px-6 py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full mb-4 md:mb-6">
            <span className="font-medium text-sm md:text-base">Who We Serve</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4 md:mb-6 text-slate-900">
            Built for Global SaaS & Tech Companies
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            We're purpose-built for companies that need to move fast in APAC
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className="flex gap-3 md:gap-4 p-6 md:p-8 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl md:text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base md:text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
