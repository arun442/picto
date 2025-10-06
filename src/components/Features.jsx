export default function Features() {
  const features = [
    {
      title: 'Instant Prints',
      description: 'Instant, high-quality prints for your guests',
      icon: (
 <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M6 9V4h12v5M6 14H4a2 2 0 01-2-2v-2a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2h-2M6 14h12v6H6v-6z"
  />      )
    },
    {
      title: 'Custom Designs & Branding',
      description: 'Custom photo layouts and branding options',
      icon: (
  <path 
      strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
      d="M15.232 5.232l3.536 3.536M4 20h4l11.293-11.293a1 1 0 000-1.414l-2.586-2.586a1 1 0 00-1.414 0L4 16v4z" />
      )
    },
    {
      title: 'Digital Sharing',
      description: 'Easy digital sharing via WhatsApp, email, or QR code',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
d="M22 2L11 13 M22 2L15 22L11 13L2 9L22 2Z"/>
      )
    },
       {
      title: 'On-site Support',
      description: 'Friendly, professional on-site support',
      icon: (
      <path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  d="M3 7h2l2-3h10l2 3h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2zm12 5a4 4 0 11-8 0 4 4 0 018 0z"
/>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#8B7355] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-3">{feature.title}</h3>
              <p className="text-[#6B6B6B] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}