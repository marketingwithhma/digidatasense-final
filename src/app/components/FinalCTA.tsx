import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="relative px-6 py-20 md:py-24 lg:py-32 bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-tight">
              Ready to Test APAC Revenue,<br className="hidden sm:block" /> Without the Risk?
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Start with a conversation to explore how the APAC Test-to-Scale™ model works for your business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://cal.com/zuberm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white text-primary rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 group"
            >
              <span className="font-semibold text-base md:text-lg">Book APAC Revenue Strategy Call</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Alternative CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center text-red-100 text-sm md:text-base">
            <a href="https://cal.com/zuberm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
              Explore the 45-Day Pilot
            </a>
            <div className="hidden sm:block w-1 h-1 bg-red-300 rounded-full"></div>
            <a href="#how-it-works" className="hover:text-white transition-colors underline">
              See How APAC Test-to-Scale Works
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-red-100 text-sm md:text-base border-t border-red-500/30 mt-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span>No obligation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-red-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Confidential discussion</span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-8 border-t border-red-500/30 mt-8">
            <p className="text-red-100 text-xs md:text-sm">
              © {new Date().getFullYear()} DigiDataSense. MarTech Transformation and Revenue Enablement Partner.
              {" • "}
              <Link to="/privacy-policy" className="hover:text-white transition-colors underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}