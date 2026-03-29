"use client";
import Link from 'next/link';
import { Briefcase, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-black text-3xl tracking-tighter">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Briefcase size={24} />
              </div>
              <span>AVS<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Your trusted partner for global career growth and international education. Empowering dreams since 2021.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Icon width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 italic underline decoration-blue-500 underline-offset-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/abroad-studies" className="hover:text-blue-500 transition-colors">Abroad Studies</Link></li>
              <li><Link href="/domestic-studies" className="hover:text-blue-500 transition-colors">Domestic Studies</Link></li>
              <li><Link href="/jobs" className="hover:text-blue-500 transition-colors">Job Openings</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-8 italic underline decoration-blue-500 underline-offset-8">Our Services</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li className="hover:text-white transition-colors cursor-default italic">Visa Consultation</li>
              <li className="hover:text-white transition-colors cursor-default italic">University Admission</li>
              <li className="hover:text-white transition-colors cursor-default italic">Job Placement</li>
              <li className="hover:text-white transition-colors cursor-default italic">Documentation Support</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-8 italic underline decoration-blue-500 underline-offset-8">Get In Touch</h4>
            <ul className="space-y-6 text-slate-400 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>AVS, TD SANNIDHI ROAD,<br/>THAMMANAM,PALARIVATTOM, KOCHI,KERALA 682032</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+91 7025400801</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>avsjobeducation@gmail. com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Scroll */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
             © 2026 AVS Job & Education Consultancy. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-black uppercase tracking-tighter"
          >
            Back to top 
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}