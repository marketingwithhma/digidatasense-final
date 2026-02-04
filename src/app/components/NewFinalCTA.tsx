import { Link } from "react-router-dom";

export function NewFinalCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-white via-red-50/30 to-slate-50">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-tight px-2">
            Review Your MarTech Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            No replatforming. No long programs. Clear outcomes.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://cal.com/zuberm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-4.5 md:py-5 bg-primary text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 text-base sm:text-lg md:text-xl whitespace-nowrap font-medium"
          >
            Review Your MarTech Stack
            <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        {/* Footer */}
        <div className="pt-12 sm:pt-14 md:pt-16 border-t border-slate-200 mt-12 sm:mt-14 md:mt-16">
          <p className="text-slate-500 text-xs sm:text-sm px-2">
            © {new Date().getFullYear()} DigiDataSense. MarTech Transformation and Revenue Enablement Partner.
            {" • "}
            <Link to="/privacy-policy" className="hover:text-primary transition-colors underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}