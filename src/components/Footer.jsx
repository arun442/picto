import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Footer() {
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
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 ">
          <div className='flex flex-col justify-center items-start'>
            <h3 className="text-2xl font-serif mb-6">            <Image src='/picto-white.png' alt='logo' width={80} height={80} />
            </h3>
            <p className="text-[#B4AFA5] leading-relaxed">
              Luxury wooden photo booths crafted for discerning professionals.
            </p>
          </div>

          <div className='flex flex-col justify-center items-start '>
            <h4 className="text-sm tracking-wide mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              <li><button  className="text-[#B4AFA5] hover:text-white cursor-pointer transition-colors" 
              onClick={() => scrollToSection('about')}
>About</button></li>
              {/* <li><button className="text-[#B4AFA5] hover:text-white cursor-pointer transition-colors"              
               onClick={() => scrollToSection('products')}
>Services</button></li> */}
              <li><button  className="text-[#B4AFA5] hover:text-white cursor-pointer transition-colors"
                             onClick={() => scrollToSection('contact')}

              >Contact</button></li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start'>
            <h4 className="text-sm tracking-wide mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li><span className="text-[#B4AFA5] hover:text-white transition-colors">+91 7204102223</span></li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start'>
            <h4 className="text-sm tracking-wide mb-6">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thepicto.in" className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
                <a href="#" className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.816.738 5.46 2.016 7.777L2.001 30l6.39-2.058A13.243 13.243 0 0016.001 29.334c7.36 0 13.334-5.974 13.334-13.334 0-7.36-5.974-13.333-13.334-13.333zm0 24.001a10.662 10.662 0 01-5.667-1.641l-.407-.245-3.79 1.222 1.234-3.685-.25-.424A10.638 10.638 0 015.334 16c0-5.893 4.774-10.667 10.667-10.667 5.893 0 10.667 4.774 10.667 10.667S21.894 26.668 16 26.668zm5.907-8.32c-.323-.162-1.908-.941-2.204-1.048-.296-.108-.512-.162-.727.162-.215.323-.833 1.048-1.022 1.262-.189.215-.378.242-.7.081-.323-.162-1.363-.503-2.596-1.602-.96-.855-1.609-1.91-1.796-2.233-.189-.323-.02-.498.143-.66.147-.146.323-.378.484-.567.162-.189.215-.323.323-.539.108-.215.054-.404-.027-.567-.081-.162-.727-1.75-.996-2.399-.262-.63-.526-.544-.727-.553l-.619-.01c-.215 0-.567.081-.864.404-.296.323-1.132 1.107-1.132 2.699 0 1.592 1.16 3.129 1.323 3.344.162.215 2.285 3.492 5.538 4.893.774.333 1.379.531 1.85.68.777.248 1.483.213 2.041.129.623-.093 1.908-.778 2.18-1.53.27-.752.27-1.396.189-1.53-.081-.135-.296-.215-.619-.378z"/>
</svg>

              </a>
                <a href="#" className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.498 6.186a2.998 2.998 0 00-2.112-2.115C19.638 3.5 12 3.5 12 3.5s-7.638 0-9.386.571A2.998 2.998 0 00.502 6.186 31.29 31.29 0 000 12c0 1.983.153 3.915.502 5.814a2.998 2.998 0 002.112 2.115C4.362 20.5 12 20.5 12 20.5s7.638 0 9.386-.571a2.998 2.998 0 002.112-2.115A31.29 31.29 0 0024 12c0-1.983-.153-3.915-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
</svg>

              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2C2C2C] pt-8 text-center text-[#B4AFA5] text-sm">
          <p>&copy; 2025 picto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}