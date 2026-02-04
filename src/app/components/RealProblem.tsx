export function RealProblem() {
  const problems = [
    {
      title: "Siloed Data, Blind Decisions",
      description: "Customer data trapped in disconnected systems means marketing can't personalize, sales can't prioritize, and executives can't forecast."
    },
    {
      title: "Tools Live. Revenue Doesn't",
      description: "CRM, CDP, and marketing automation are running, but there's no clear link between marketing spend and closed revenue."
    },
    {
      title: "Sales Works Around the CRM",
      description: "Your CRM is supposed to enable sales, but reps maintain their own spreadsheets because the system doesn't match how they actually sell."
    },
    {
      title: "Attribution Theater",
      description: "You have attribution reports, but nobody trusts them. Marketing and sales still argue about lead quality and credit."
    },
    {
      title: "Long Implementation, Little Impact",
      description: "You spent 6-12 months implementing platforms, but teams still struggle with basic workflows and data accuracy."
    },
    {
      title: "No Regional Playbook",
      description: "Global MarTech doesn't work the same way across APAC. You need localized strategies but lack regional expertise."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-50 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-red-100">
            The Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-5 md:mb-6 px-2">
            Why Most MarTech Investments Fail to Deliver ROI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto px-2">
            It's not a tooling problem. It's an integration, alignment, and execution problem.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover:animate-pulse"></div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl text-slate-900 font-medium mb-1.5 sm:mb-2 leading-snug">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12 p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-xl sm:rounded-2xl shadow-2xl">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-2 sm:mb-3">
                <strong>The Real Issue:</strong> It's not the tools. It's how they're designed, connected, and operated.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Your MarTech stack needs a revenue-first architecture, not just platform configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}