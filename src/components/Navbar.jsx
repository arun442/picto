"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (typeof document === "undefined") return;

    if (router.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    } else {
      router.push("/")
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        setMenuOpen(false);
      
    }
  };

  // Close menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#FAF8F5]/95 backdrop-blur-sm z-50 border-b border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/picto-black.png" alt="logo" width={80} height={80} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#2C2C2C] hover:text-[#8B7355] cursor-pointer transition-colors text-sm tracking-wide"
            >
              ABOUT
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#2C2C2C] hover:text-[#8B7355] cursor-pointer transition-colors text-sm tracking-wide"
            >
              CONTACT
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#2C2C2C] text-white px-6 py-2 text-sm tracking-wide hover:bg-[#8B7355] transition-colors rounded-md"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#2C2C2C] focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#FAF8F5] shadow-lg z-50 transform transition-transform duration-300 md:hidden flex flex-col p-6 space-y-6 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#2C2C2C] text-lg font-medium hover:text-[#8B7355] transition-colors text-left"
        >
          ABOUT
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="text-[#2C2C2C] text-lg font-medium hover:text-[#8B7355] transition-colors text-left"
        >
          CONTACT
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#2C2C2C] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-[#8B7355] transition-colors"
        >
          BOOK NOW
        </button>
      </div>
    </nav>
  );
}
