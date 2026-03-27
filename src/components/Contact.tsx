import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
                  <p className="font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email Us</p>
                  <p className="font-semibold">info@avsconsultancy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Visit Us</p>
                  <p className="font-semibold">Skyline Tower, 4th Floor,<br/>Kochi, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-2/3 p-12 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                  <option>Job Placement Abroad</option>
                  <option>Study Abroad Programs</option>
                  <option>Visa Consultation</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                ></textarea>
              </div>

              <button className="md:col-span-2 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}