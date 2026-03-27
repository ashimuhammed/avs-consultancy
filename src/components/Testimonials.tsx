import { Quote, Star, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Staff Nurse",
    location: "United Kingdom",
    text: "AVS made my dream of working in the UK NHS a reality. From OET coaching to the final visa interview, their team was with me at every step. Highly recommended!",
    stars: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    name: "Anjali Nair",
    role: "MBBS Student",
    location: "Georgia",
    text: "Choosing the right medical college abroad was confusing until I met the AVS consultants. They handled all my documentation and university admissions smoothly.",
    stars: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
  },
  {
    name: "Kevin Joseph",
    role: "Software Engineer",
    location: "Germany",
    text: "I got placed in a top tech firm in Berlin thanks to AVS. Their knowledge of the EU Blue Card process is unmatched. Truly professional service.",
    stars: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight italic">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium italic">
            Hear from the students and professionals who built their global futures with AVS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              
              {/* Quote Icon Background */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 italic font-medium">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden border-2 border-blue-50">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <CheckCircle size={14} className="text-blue-600" />
                    </div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      {review.role} • {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Replace these with real logos of partner Universities or Hospitals */}
           <div className="font-black text-2xl text-slate-400 italic tracking-tighter uppercase">NHS Partner</div>
           <div className="font-black text-2xl text-slate-400 italic tracking-tighter uppercase">WHO Recognized</div>
           <div className="font-black text-2xl text-slate-400 italic tracking-tighter uppercase">ISO Certified</div>
        </div>
      </div>
    </section>
  );
}