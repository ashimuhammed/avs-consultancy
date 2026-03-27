import Navbar from '@/components/Navbar';
import { Stethoscope, HardHat, Pill, GraduationCap, ArrowRight, CheckCircle, Globe } from 'lucide-react';

const courses = [
  {
    title: "MBBS & MD",
    icon: <Stethoscope size={32} className="text-red-600" />,
    countries: ["Georgia", "Russia", "Philippines", "Egypt"],
    description: "Low-cost, high-quality medical education in WHO-approved universities.",
    features: ["No Entrance Exam", "Direct Admission", "MCI/FMGE Coaching"]
  },
  {
    title: "Nursing & Healthcare",
    icon: <Pill size={32} className="text-emerald-600" />,
    countries: ["UK", "Germany", "Ireland", "Canada"],
    description: "Secure your future in countries with high demand for medical staff.",
    features: ["OET/IELTS Support", "Work Permit Assistance", "Placement Guarantee"]
  },
  {
    title: "Engineering & IT",
    icon: <HardHat size={32} className="text-blue-600" />,
    countries: ["Germany", "USA", "Australia", "Poland"],
    description: "Study STEM courses in the world's leading innovation hubs.",
    features: ["Paid Internships", "Post-Study Work Visa", "Free Education in Germany"]
  },
  {
    title: "Business & MBA",
    icon: <GraduationCap size={32} className="text-purple-600" />,
    countries: ["France", "Singapore", "UK", "Canada"],
    description: "Global business networking and top-tier management training.",
    features: ["Industry Connections", "Global MBA degree", "Leadership Workshops"]
  }
];

export default function AbroadStudiesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Global Education. <br/><span className="text-blue-500">Unlimited Growth.</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From choosing the right country to securing your visa, AVS Consultancy provides 360° support for your international education journey.
          </p>
        </div>
      </section>

      {/* Specialized Course Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="group p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <div className="flex gap-2 flex-wrap justify-end max-w-[150px]">
                  {course.countries.map((country, ci) => (
                    <span key={ci} className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-md uppercase tracking-wider italic">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-4">{course.title}</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">{course.description}</p>
              
              <div className="space-y-3 mb-10">
                {course.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle size={16} className="text-blue-600" /> {feat}
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
                Apply for {course.title} <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 italic underline decoration-white/20">How We Make It Happen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Counseling", desc: "Understand your goals and pick the best course." },
              { step: "02", title: "Admission", desc: "We handle all paperwork and university applications." },
              { step: "03", title: "Visa", desc: "100% support for documentation and interviews." },
              { step: "04", title: "Relocation", desc: "Support with travel and finding accommodation." }
            ].map((s, i) => (
              <div key={i} className="relative p-6 border border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-black opacity-20 mb-4">{s.step}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-20 text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-6 italic">Ready to take the first step?</h3>
        <button className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-blue-200">
          Book Free Consultation
        </button>
      </section>
    </main>
  );
}