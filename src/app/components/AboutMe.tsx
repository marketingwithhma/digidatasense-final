export function AboutMe() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            About Zuber Mukadam
          </h2>
        </div>
        
        <div className="bg-slate-800/50 border-2 border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Zuber Mukadam is a <span className="text-primary font-semibold">technology-first business leader with over 20 years of experience</span> spanning software engineering, digital marketing, and enterprise sales across APAC and GCC. He has built, scaled, and led high-impact teams for global brands by blending deep technical expertise with data-driven growth strategy.
            </p>
            
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Starting his career as a developer, Zuber evolved into a marketing technologist and later a senior sales and business leader. This rare end-to-end perspective allows him to connect product, marketing, and revenue with precision. He has led go-to-market initiatives, launched enterprise platforms, driven multi-million-dollar growth, and partnered closely with C-suite stakeholders across industries.
            </p>
            
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Today, as the <span className="text-white font-semibold">Founder of DigiDataSense</span>, Zuber helps organizations turn complex data and technology into measurable business outcomes. His work is rooted in clarity, execution, and sustainable growth.
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h3 className="text-xl md:text-2xl text-white mb-6">Core Expertise</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cross-stack MarTech architecture and integration",
                  "Revenue operations and pipeline optimization",
                  "CRM, CDP, and marketing automation deployment",
                  "APAC market entry and regional expansion",
                  "Sales and marketing alignment",
                  "Data-driven decision frameworks"
                ].map((expertise, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                      {expertise}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed italic">
                "I don't sell platforms or long programs. I fix the revenue problems that exist between your tools, your teams, and your market reality."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}