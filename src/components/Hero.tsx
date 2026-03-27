import { ArrowUpRight, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export default function HeroAndAbout() {
  return (
    <> {/* This Fragment wraps everything */}
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">Now Accepting 2026 Intake</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Your Bridge to <br />
            <span className="text-blue-600">Global Success.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            AVS Consultancy specializes in high-tier job placements and international university admissions. We don't just find seats; we build careers.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all">
              Find Opportunities <ArrowUpRight size={20} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Study Abroad <GraduationCap size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="flex-1 w-full group">
            <div className="relative h-[450px] w-full bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-inner">
               {/* Replace this div with an <Image /> tag later */}
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-transparent flex items-center justify-center">
                 <Briefcase size={60} className="text-slate-300 group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <p className="text-sm font-bold text-slate-900 italic">"Changing lives through global opportunities since 2021."</p>
               </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-black px-3 py-1 rounded-md mb-4 uppercase tracking-tighter">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering Dreams <br/> with Expert Guidance.
            </h2>
            <p className="text-slate-600 text-lg leading-loose mb-8">
              At AVS Consultancy, we understand that moving abroad for work or study is a life-changing decision. 
              Our team of certified consultants provides transparent, honest, and reliable guidance to ensure 
              your transition is smooth and successful.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-slate-900 italic">Transparent</h4>
                <p className="text-sm text-slate-500">No hidden costs or false promises.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-slate-900 italic">Certified</h4>
                <p className="text-sm text-slate-500">Global education & job experts.</p>
              </div>
            </div>

            <button className="group flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Learn more about our mission 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
    </>
  );
}