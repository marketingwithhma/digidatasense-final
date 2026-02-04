export function WhyNotBigSIs() {
  const realities = [
    "Platform decisions made before revenue problems are clearly understood",
    "Long timelines before impact is visible",
    "Senior strategy sold, junior execution delivered",
    "Success measured by scope completion, not revenue movement"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6">
            Where Big SIs Struggle
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
            Large system integrators are excellent at scale, governance, and platform delivery.
            That model often breaks down for growing marketing and technology teams.
          </p>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl text-slate-700 mb-8">What clients commonly experience:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {realities.map((reality, index) => (
              <div
                key={index}
                className="p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-slate-400 rounded-full mt-2"></div>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                    {reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Big SIs implement systems.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            They rarely own commercial outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}