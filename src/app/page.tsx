import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Jobs from '@/components/Jobs';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Education />
      <Jobs />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Footer can go here */}
      <footer className="py-10 text-center border-t border-slate-100 text-slate-400 text-sm">
        © 2026 AVS Job & Educational Consultancy. All rights reserved.
      </footer>
    </main>
  );
}