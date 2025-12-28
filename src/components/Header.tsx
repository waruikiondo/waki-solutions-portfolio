import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <-- Import Image component

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-full px-6 py-4 flex justify-between items-center">
          
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-accent-blue/50 transition-colors">
              <Image 
                src="/warui.png" 
                alt="Waki Solutions Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-white group-hover:text-accent-blue transition-colors">
              WAKI<span className="text-accent-blue">.SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary-text">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Work</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
          </nav>

          {/* CTA Button */}
          <Link 
            href="mailto:waruikiondo@gmail.com" 
            className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-accent-blue hover:text-white transition-all transform hover:scale-105"
          >
            Book a Call
          </Link>
          
           {/* Mobile Menu Icon */}
           <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};