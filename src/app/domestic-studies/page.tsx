import Navbar from '@/components/Navbar';
import { School, BookOpen, MapPin, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const domesticPrograms = [
  {
    category: "Engineering (B.Tech)",
    description: "Admissions in top-tier private and autonomous engineering colleges.",
    locations: ["Bangalore", "Chennai", "Coimbatore", "Kochi"],
    features: ["Direct Admission Support", "Hostel Assistance", "Placement Records Check"]
  },
  {
    category: "Medical (MBBS/BDS)",
    description: "Secure seats in premier private medical colleges across India.",
    locations: ["Karnataka", "Tamil Nadu", "Pondicherry"],
    features: ["NEET Guidance", "Management Quota Support", "Document Verification"]
  },
  {
    category: "Management (MBA/BBA)",
    description: "Get into leading B-Schools with excellent industry connections.",
    locations: ["Mumbai", "Pune", "Bangalore", "Delhi"],
    features: ["Specialization Advice", "Interview Prep", "Scholarship Guidance"]
  },
  {
    category: "Allied Health Sciences",
    description: "Nursing, B.Pharm, and Paramedical courses in reputed hospitals.",
    locations: ["Kerala", "Karnataka"],
    features: ["Clinical Exposure", "Recognized Degrees", "Affordable Fees"]
  }
];

export default function DomesticStudiesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header Section */}
      <header className="pt-32 pb-16 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-200 mb-6 shadow-sm">
            <School size={16} className="text-blue-600" />
            <span className="text-blue-800 text-xs font-bold uppercase tracking-widest">Premium Indian Education</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Study in <span className="text-blue-600">India's Best</span> Colleges
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between students and premier institutions across the country. Expert guidance for direct admissions and merit-based seats.
          </p>
        </div>
      </header>

      {/* Program Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {domesticPrograms.map((item, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors italic">
                    {item.category}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.locations.map((loc, li) => (
                      <span key={li} className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-50 px-2 py-1 rounded-md">
                        <MapPin size={10} /> {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <BookOpen size={30} />
                </div>
              </div>

              <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                {item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {item.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    {feat}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 font-black text-slate-900 hover:text-blue-600 transition-colors group/btn">
                Check Availability <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Card */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-40 -mt-40" />
           
           <h2 className="text-4xl font-bold text-white mb-6">Confused about the right college?</h2>
           <p className="text-slate-400 mb-10 max-w-xl mx-auto">
             Our expert counselors help you choose the right institution based on your budget, location preferences, and career goals.
           </p>
           <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all">
             Request a Call Back
           </button>
        </div>
      </section>
    </main>
  );
}