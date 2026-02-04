export function HowItWorks() {
  const stages = [
    {
      number: "1",
      title: "Test",
      subtitle: "Validate APAC demand with minimal risk",
      items: [
        "Market entry advisory & buyer mapping",
        "Outreach, lead qualification & early conversations",
        "Validate ICP, messaging, and pricing for APAC"
      ]
    },
    {
      number: "2",
      title: "Grow",
      subtitle: "Accelerate pipeline and close deals",
      items: [
        "Pipeline ownership & deal acceleration",
        "Support on discovery, demos, proposals & negotiations",
        "Partner & channel ecosystem introductions"
      ]
    },
    {
      number: "3",
      title: "Handover",
      subtitle: "Transition to your own team",
      items: [
        "Transfer proven pipeline and GTM playbooks",
        "Support hiring or partner onboarding",
        "Clean handover once traction is established"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="px-6 py-16 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-red-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full mb-4 md:mb-6">
            <span className="font-medium text-sm md:text-base">Our Approach</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4 md:mb-6 text-slate-900">
            The APAC Test-to-Scale™ Model
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            You don't commit to a local team until the revenue proves itself.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl"
            >
              {/* Stage Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-white">{stage.number}</span>
              </div>
              
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 md:px-8 py-6 md:py-8 mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-slate-300 text-sm md:text-base">{stage.subtitle}</p>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <ul className="space-y-4">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 bg-white border-2 border-slate-200 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-700 font-medium text-sm md:text-base">Start with a 45-day pilot to test APAC demand</span>
          </div>
        </div>
      </div>
    </section>
  );
}