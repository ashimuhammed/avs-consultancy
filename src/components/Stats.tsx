export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white italic">500+</div>
            <div className="text-blue-100 mt-2 font-medium">Job Placements</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white italic">15+</div>
            <div className="text-blue-100 mt-2 font-medium">Countries</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white italic">120+</div>
            <div className="text-blue-100 mt-2 font-medium">Partner Unis</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white italic">98%</div>
            <div className="text-blue-100 mt-2 font-medium">Visa Success</div>
          </div>
        </div>
      </div>
    </section>
  );
}