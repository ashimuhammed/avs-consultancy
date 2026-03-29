'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3 bg-blue-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Have questions about visas or job placements? Our experts are ready to help you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <a href="tel:+917025400801" className="font-semibold hover:text-blue-100 transition-colors">
                    +91 7025400801
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email Us</p>
                  <a href="mailto:avsjobeducation@gmail.com" className="font-semibold hover:text-blue-100 transition-colors">
                    avsjobeducation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Visit Us</p>
                  <p className="font-semibold leading-snug">
                    AVS, TD SANNIDHI ROAD,<br/>
                    THAMMANAM, PALARIVATTOM,<br/>
                    KOCHI, KERALA 682032
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-2/3 p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle2 className="text-green-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    id="name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Interested In</label>
                  <select 
                    id="service"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option>Job Placement Abroad</option>
                    <option>Study Abroad Programs</option>
                    <option>Visa Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="md:col-span-2 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}