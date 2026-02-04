export function WhatClientsGet() {
  const benefits = [
    "Revenue-relevant MarTech changes, not cosmetic dashboards",
    "Direct access to senior decision-makers",
    "Cross-stack, unbiased guidance",
    "Faster time to measurable impact",
    "Ownership of outcomes, not just delivery"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            What Clients Get
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-primary/30 hover:bg-red-50/30 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}