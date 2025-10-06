export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C] mb-6 leading-tight">
            Capture Beautiful Moments, Instantly.
          </h1>
          <p className="text-lg md:text-3xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
Welcome to Picto
          </p>
        </div>
        
        <div className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#E8E4DD] to-[#D4CFC5]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-80 h-96 bg-[#8B7355] rounded-lg shadow-2xl mx-auto mb-8 relative">
                <div className="absolute inset-4 bg-[#2C2C2C] rounded"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-white rounded-sm"></div>
              </div>
              <p className="text-sm text-[#6B6B6B] tracking-widest">ICON MODEL - FRONT VIEW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}