import { Globe, GraduationCap, Briefcase, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Global Job Placement",
    desc: "Direct access to top employers in Europe, Middle East, and Canada.",
    icon: <Briefcase className="text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Study Abroad",
    desc: "End-to-end support for University applications and scholarships.",
    icon: <GraduationCap className="text-indigo-600" />,
    color: "bg-indigo-50"
  },
  {
    title: "Visa Assistance",
    desc: "Expert guidance on documentation and interview preparation.",
    icon: <ShieldCheck className="text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Career Counseling",
    desc: "Personalized roadmaps based on your skills and goals.",
    icon: <Globe className="text-orange-600" />,
    color: "bg-orange-50"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Our Expertise</h2>
          <p className="text-slate-500 mt-4">Tailored solutions for your professional growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-shadow group">
              <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}