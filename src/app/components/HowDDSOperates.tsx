export function HowDDSOperates() {
  const operations = [
    {
      number: "01",
      title: "Revenue First. Tools Second.",
      description: "We start by identifying revenue leakage, pipeline friction, and lifecycle breakdowns. Only then do we touch the stack."
    },
    {
      number: "02",
      title: "Operator-Led Delivery",
      description: "You work directly with senior APAC operators with 25+ years of hands-on experience. Decisions and execution stay close."
    },
    {
      number: "03",
      title: "Short Feedback Cycles",
      description: "Weeks, not quarters. Lean pilots before long commitments."
    },
    {
      number: "04",
      title: "Built for Scaling Tech Teams",
      description: "Optimised for speed, clarity, and regional expansion. No over-engineering."
    },
    {
      number: "05",
      title: "Commercial Accountability",
      description: "Clear metrics tied to growth, efficiency, and ROI. If it does not move revenue, it does not ship."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            How We Work
          </h2>
        </div>
        
        <div className="space-y-6">
          {operations.map((op, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">{op.number}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl md:text-2xl text-slate-900 font-medium">
                    {op.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {op.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}