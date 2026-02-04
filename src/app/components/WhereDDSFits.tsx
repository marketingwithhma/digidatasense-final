export function WhereDDSFits() {
  const notItems = [
    "We do not sell transformation programs.",
    "We do not push platforms.",
    "We do not run campaigns."
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-8">
            Between Strategy and Execution
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className="p-8 md:p-10 bg-slate-50 border-2 border-slate-200 rounded-xl">
            <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
              DigiDataSense works inside your existing MarTech environment to fix revenue flow across marketing, sales, and customer success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {notItems.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-slate-300 rounded-lg"
              >
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
          
          <div className="p-8 md:p-10 bg-white border-2 border-slate-200 rounded-xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              We focus on making the systems you already own work together in ways that move revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}