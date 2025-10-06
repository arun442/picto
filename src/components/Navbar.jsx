import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (router.pathname === '/') {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage first, then scroll
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#FAF8F5]/95 backdrop-blur-sm z-50 border-b border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#2C2C2C]">
            <Image src='/picto-black.png' alt='logo' width={80} height={80} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#2C2C2C] hover:text-[#8B7355] cursor-pointer transition-colors text-sm tracking-wide"
            >
              ABOUT
            </button>
            {/* <button 
              onClick={() => scrollToSection('products')}
              className="text-[#2C2C2C] hover:text-[#8B7355] cursor-pointer transition-colors text-sm tracking-wide"
            >
              SERVICES
            </button> */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#2C2C2C] hover:text-[#8B7355] cursor-pointer transition-colors text-sm tracking-wide"
            >
              CONTACT
            </button>
            <button
                          onClick={() => scrollToSection('contact')}
            className="bg-[#2C2C2C] cursor-pointer text-white px-6 py-2 text-sm tracking-wide hover:bg-[#8B7355] transition-colors">
              BOOK NOW
            </button>
          </div>
          <button className="md:hidden text-[#2C2C2C]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}