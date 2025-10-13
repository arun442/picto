import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">About</h2>
          <div className="w-20 h-1 bg-[#8B7355] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6 leading-tight">
              We make the world's most beautiful Photo Booths
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-6   w-[80%]  ">
             Picto brings timeless charm and modern convenience together with our handcrafted wood vintage photobooth. Based in Bangalore, we are passionate about helping people create and cherish memories—whether at weddings, celebrations, or corporate events. Our goal is to make every event more fun, stylish, and memorable.
            </p>
          
            {/* <Link href="/about" className="inline-block border-2 border-[#2C2C2C] text-[#2C2C2C] px-8 py-3 hover:bg-[#2C2C2C] hover:text-white transition-all text-sm tracking-wide">
              LEARN MORE
            </Link> */}
          </div>
          
          <div className="relative h-[490px] rounded-lg overflow-hidden bg-[#E8E4DD]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96   rounded-xl shadow-xl relative">
             <img src='/aboutimg.jpg' alt='about-img' className='rounded-xl'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}