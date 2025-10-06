import Link from 'next/link';

export default function Services() {
  const products = [
    {
      name: 'ICON',
      description: 'The flagship model',
      price: '$4,995',
      gradient: 'from-[#E8E4DD] to-[#D4CFC5]',
      color: 'bg-[#8B7355]'
    },
 
  ];

  return (
    <section id="products" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#8B7355] mx-auto mb-6"></div>
          <p className="text-xl text-[#6B6B6B]">Made by Artisans</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className={`relative h-96 bg-gradient-to-br ${product.gradient} rounded-lg overflow-hidden mb-6`}>
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className={`w-48 h-64 ${product.color} rounded-lg shadow-xl relative`}>
                    <div className="absolute inset-3 bg-[#2C2C2C] rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-2">{product.name}</h3>
              <p className="text-[#6B6B6B] mb-4">{product.description}</p>
              <p className="text-2xl font-serif text-[#2C2C2C]">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="inline-block bg-[#2C2C2C] text-white px-10 py-4 hover:bg-[#8B7355] transition-colors text-sm tracking-wide">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}