import logo from "figma:asset/0dfcfa5efd50c12cf91e3ba5f8e327bdf3d20a44.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-slate-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="relative px-6 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-16 md:mb-20">
          <img src={logo} alt="DigiDataSense" className="h-16 md:h-20 lg:h-24" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-red-100 text-primary rounded-full mb-4">
                <span className="font-medium text-sm md:text-base">APAC Revenue Accelerator</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-slate-900">
                Your On-the-Ground APAC Revenue Team;{" "}
                <span className="text-primary">From First Deal to Scale</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                DigiDataSense acts as your APAC Revenue Accelerator, providing regional sales leadership, GTM execution, and deal acceleration, so you can validate demand, close deals, and scale with confidence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/zuberm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm md:text-base lg:text-lg whitespace-nowrap"
              >
                Book APAC Strategy Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-all duration-200 text-sm md:text-base lg:text-lg whitespace-nowrap"
              >
                See How It Works
              </a>
            </div>
          </div>
          
          {/* Video Placeholder */}
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border-4 border-slate-700 overflow-hidden">
              {/* Video placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Play button */}
                  <button className="w-20 h-20 md:w-24 md:h-24 bg-primary hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-red-500/50">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <p className="text-slate-400 text-sm md:text-base font-medium">Watch Video</p>
                </div>
              </div>
              
              {/* Optional: Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-slate-500 rounded-full blur-3xl"></div>
              </div>
            </div>
            
            {/* Video frame decoration */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-slate-900/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}