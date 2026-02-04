import logo from "figma:asset/0dfcfa5efd50c12cf91e3ba5f8e327bdf3d20a44.png";
import { Link } from "react-router-dom";
import { WhatWeDo } from "../components/WhatWeDo";
import { HowItWorks } from "../components/HowItWorks";
import { WhoThisIsFor } from "../components/WhoThisIsFor";
import { WhatMakesUsDifferent } from "../components/WhatMakesUsDifferent";
import { AboutMe } from "../components/AboutMe";
import { FinalCTA } from "../components/FinalCTA";

export function APACRevenuePage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-slate-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
          {/* Logo and Back Navigation */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex items-center justify-between gap-4">
            <Link to="/">
              <img src={logo} alt="DigiDataSense" className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-200 whitespace-nowrap"
            >
              <svg className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">MarTech Services</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 text-primary rounded-full mb-2 sm:mb-4">
                  <span className="font-medium text-xs sm:text-sm md:text-base">APAC Revenue Accelerator</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-slate-900">
                  Your On-the-Ground APAC Revenue Team;{" "}
                  <span className="text-primary">From First Deal to Scale</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                  DigiDataSense acts as your APAC Revenue Accelerator, providing regional sales leadership, GTM execution, and deal acceleration, so you can validate demand, close deals, and scale with confidence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://cal.com/zuberm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 md:py-4 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-sm sm:text-base lg:text-lg whitespace-nowrap font-medium"
                >
                  Book APAC Strategy Call
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 md:py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-all duration-200 text-sm sm:text-base lg:text-lg whitespace-nowrap font-medium"
                >
                  See How It Works
                </a>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="relative group order-1 lg:order-2">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 md:border-4 border-slate-700 overflow-hidden">
                {/* Bunny CDN Video Embed */}
                <iframe
                  src="https://iframe.mediadelivery.net/embed/71003/8dded710-9594-4042-b5ca-9e8b44c377f9?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="APAC Revenue Accelerator Video"
                />
              </div>
              
              {/* Video frame decoration */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-slate-900/20 rounded-lg sm:rounded-xl md:rounded-2xl -z-10 blur-lg sm:blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <WhoThisIsFor />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* How It Works Section */}
      <HowItWorks />

      {/* What Makes Us Different Section */}
      <WhatMakesUsDifferent />

      {/* About Me Section */}
      <AboutMe />

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
}