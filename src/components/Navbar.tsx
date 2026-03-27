import Link from 'next/link';
import { Briefcase, ChevronRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tight text-slate-900">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Briefcase className="text-white" size={20} />
          </div>
          <span><Link href="/">AVS</Link><span className="text-blue-600">.</span></span>
        </div>


        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
          <Link href="/jobs" className="hover:text-blue-600 transition-colors">Jobs</Link>
          <Link href="/abroad-studies" className="hover:text-blue-600">
  Abroad Studies
</Link>   <Link href="/domestic-studies" className="hover:text-blue-600">
  Domestic Studies
</Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        </div>
     

        {/* CTA Button */}
        <button className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all duration-300">
          Get Started
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
}