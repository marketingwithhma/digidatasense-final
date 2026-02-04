export function IdealClientFit() {
  const fitCriteria = [
    "You already have MarTech tools but poor revenue visibility",
    "Marketing, sales, and customer success operate in silos",
    "You want problems fixed, not platforms replaced",
    "You need operators who understand APAC MarTech reality"
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            This Is a Fit If
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {fitCriteria.map((criteria, index) => (
            <div
              key={index}
              className="p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed pt-0.5">
                  {criteria}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}