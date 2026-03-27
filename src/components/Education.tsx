import { GraduationCap, Stethoscope, HardHat, Pill, ArrowRight, Globe2 } from 'lucide-react';

const studyGroups = [
  {
    name: "MBBS & MD",
    icon: <Stethoscope size={20} className="text-red-600" />,
    tag: "High Demand",
    bgColor: "bg-red-50"
  },
  {
    name: "Nursing",
    icon: <Pill size={20} className="text-emerald-600" />,
    tag: "Work Permit",
    bgColor: "bg-emerald-50"
  },
  {
    name: "Engineering",
    icon: <HardHat size={20} className="text-blue-600" />,
    tag: "STEM",
    bgColor: "bg-blue-50"
  },
  {
    name: "Management",
    icon: <GraduationCap size={20} className="text-purple-600" />,
    tag: "Top Unis",
    bgColor: "bg-purple-50"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Academic <span className="text-blue-600 italic">Specializations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Part 1: Abroad Studies (The Modern Update) */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Globe2 size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold italic">Abroad Studies</h3>
                  <p className="text-blue-400 font-bold text-sm tracking-widest uppercase">Global Excellence</p>
                </div>
              </div>

              {/* Career Groups Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {studyGroups.map((group, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors group">
                    <div className={`${group.bgColor} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                      {group.icon}
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-lg">{group.name}</h4>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-blue-300 font-bold uppercase">
                        {group.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Top programs in UK, Georgia, and Germany.</p>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-3 bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-2xl font-black transition-all duration-300">
                Apply for 2026 Intake <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Part 2: Domestic Studies (Simplified) */}
          <div className="bg-blue-50 rounded-[3rem] p-10 md:p-14 border border-blue-100 flex flex-col justify-center">
             <h3 className="text-3xl font-black text-slate-900 italic mb-6">Domestic Studies</h3>
             <p className="text-slate-600 text-lg leading-relaxed mb-8">
               Secure your future in India's premier institutions. We provide direct admission support for Top Private Medical and Engineering colleges across Kerala, Karnataka, and Tamil Nadu.
             </p>
             
             <div className="space-y-4 mb-10">
               {['Direct Management Quota', 'Entrance Exam Support', 'College Campus Tours'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" /> {item}
                 </div>
               ))}
             </div>

             <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all">
               View Indian Colleges
             </button>
          </div>

        </div>
      </div>
    </section>
  );
}