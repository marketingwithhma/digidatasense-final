export function Differentiators() {
  const differentiators = [
    "Stack-agnostic across CRM, CDP, marketing automation, and analytics",
    "Revenue-first problem framing, not tool roadmaps",
    "Senior APAC operators, not junior delivery teams",
    "Designed for mid-market and scaling marketing and technology teams",
    "Focused on revenue signal, pipeline quality, and lifecycle conversion"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            What Actually Makes DigiDataSense Different
          </h2>
        </div>
        
        <div className="space-y-4">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}