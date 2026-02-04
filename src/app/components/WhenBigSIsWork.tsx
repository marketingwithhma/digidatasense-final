export function WhenBigSIsWork() {
  const bigSIsWork = [
    "Multi-country system rollouts are mandatory",
    "Compliance and governance dominate",
    "Budget and timelines are flexible"
  ];

  const ddsWorks = [
    "Existing MarTech ROI is weak",
    "MarTech systems are misaligned",
    "Speed and accountability matter",
    "APAC execution context is critical"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Choosing the Right Partner
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Big SIs work when */}
          <div className="p-8 md:p-10 bg-white border-2 border-slate-200 rounded-xl">
            <h3 className="text-2xl text-slate-700 mb-8">Big SIs make sense when</h3>
            <div className="space-y-4">
              {bigSIsWork.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* DigiDataSense works when */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-red-50 to-white border-2 border-primary rounded-xl shadow-lg shadow-red-500/10">
            <h3 className="text-2xl text-primary mb-8">DigiDataSense makes sense when</h3>
            <div className="space-y-4">
              {ddsWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}