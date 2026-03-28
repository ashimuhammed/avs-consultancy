"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase, Globe, BookOpen, Phone } from 'lucide-react';
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
   
    { name: "Abroad Studies", href: "/abroad-studies", icon: <Globe size={18} /> },
    { name: "Domestic Studies", href: "/domestic-studies", icon: <BookOpen size={18} /> },
    { name: "Jobs", href: "/jobs", icon: <Briefcase size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
       
{/* Logo Area */}
<Link href="/" className="flex items-center gap-2 md:gap-3 group">
  <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl shadow-sm transition-transform group-hover:scale-105">
    <Image 
      src="/logo.png" 
      alt="AVS Logo"
      fill
      priority
      sizes="(max-width: 768px) 40px, 48px" 
      className="object-contain"
    />
  </div>
  
  {/* Responsive Text Logic */}
  <div className="flex flex-col justify-center leading-none">
    <span className="font-black text-xl md:text-2xl tracking-tighter text-slate-900">
      AVS<span className="text-blue-600">.</span>
    </span>
    {/* This span disappears on mobile to prevent overlap */}
    <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">
      Job & Education Consultancy
    </span>
  </div>
</Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button (Visible only on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-20 bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 md:hidden overflow-hidden
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              <div className="text-blue-600 opacity-70">{link.icon}</div>
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white p-4 rounded-2xl font-black italic shadow-xl shadow-blue-100"
          >
            <Phone size={18} /> GET IN TOUCH
          </Link>
        </div>
      </div>
    </nav>
  );
}