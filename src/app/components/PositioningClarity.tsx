export function PositioningClarity() {
  const notItems = [
    "MarTech implementation partner",
    "Marketing automation agency",
    "Platform migration specialist"
  ];

  const weAreItems = [
    "MarTech Transformation and Revenue Enablement Partner",
    "Focused on fixing MarTech execution and ROI",
    "Bridging marketing, sales, and customer systems end to end"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            What We Are. And What We Are Not.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Not column */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-slate-400 mb-6">Not:</h3>
            </div>
            <div className="space-y-3">
              {notItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  <p className="text-slate-600 text-base md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* We Are column */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-primary mb-6">We are:</h3>
            </div>
            <div className="space-y-3">
              {weAreItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-br from-red-50 to-white border-2 border-primary/30 rounded-lg hover:border-primary/50 transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-slate-700 text-base md:text-lg font-medium">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}