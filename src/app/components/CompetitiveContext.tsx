export function CompetitiveContext() {
  const approaches = [
    {
      title: "Big System Integrators",
      description: "Architecture-led, program-heavy, slow to impact",
      color: "slate"
    },
    {
      title: "Platform and Tool Partners",
      description: "Tool-first, scope-bound, limited accountability beyond implementation",
      color: "slate"
    },
    {
      title: "Digital and CRM Agencies",
      description: "Campaign and channel focused, shallow cross-stack depth",
      color: "slate"
    },
    {
      title: "DigiDataSense",
      description: "Revenue-led, cross-stack, operator-driven",
      color: "red"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            How This Is Usually Addressed
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 transition-all duration-200 ${
                approach.color === "red"
                  ? "bg-gradient-to-br from-red-50 to-white border-primary shadow-lg shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="text-center space-y-4">
                <h3 className={`text-lg md:text-xl font-medium ${
                  approach.color === "red" ? "text-primary" : "text-slate-900"
                }`}>
                  {approach.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {approach.description}
                </p>
                {approach.color === "red" && (
                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}