import { Plane, Building2, Briefcase, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Jobs() {
  return (
    <section id="jobs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Explore <span className="text-blue-600">Career</span> <br />Opportunities
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              We connect skilled professionals with top-tier employers across the globe and within India.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-700">Join 2,000+ placed candidates</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Part 1: Jobs Abroad */}
          <div className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 transition-all hover:shadow-2xl hover:border-blue-100 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Plane size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter">Global Placements</h3>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our international network spans across Europe, the Middle East, and South-East Asia. We specialize in high-demand sectors with full relocation support.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Healthcare & Nursing', 'IT & Software', 'Hospitality', 'Construction'].map((job, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 size={16} className="text-blue-600" /> {job}
                </div>
              ))}
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
              View International Jobs <ArrowRight size={18} />
            </button>
          </div>

          {/* Part 2: Domestic Jobs */}
          <div className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 transition-all hover:shadow-2xl hover:border-blue-100 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter">Domestic Careers</h3>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Partnering with India's leading MNCs and Startups. We help you find positions in major hubs like Bangalore, Kochi, Chennai, and Mumbai.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Administrative', 'Sales & Marketing', 'Engineering', 'Accounting'].map((job, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 size={16} className="text-blue-600" /> {job}
                </div>
              ))}
            </div>

            <button className="w-full bg-white border-2 border-slate-900 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all">
              Search Local Openings <Briefcase size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}