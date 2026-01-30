'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Nosotros', href: '/#about' },
    { name: 'Propuesta', href: '/#propuesta-servicio' },
    { name: 'Ranking', href: '/#hero' },
    { name: 'Records', href: '/#records' },
    { name: 'Reglamento', href: '/#reglamento' },
    { name: 'Instagram', href: '/#instagram' },
    { name: 'Galería', href: '/#galeria' },
    { name: 'Aportantes', href: '/#aportantes' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav className="bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500 z-50 flex items-center gap-3">
          <Image 
            src="/Ciberclub_logo.png" 
            alt="Ciber-Club Logo" 
            width={50} 
            height={50} 
            className="rounded-full object-cover"
          />
          Ciber-Club
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-400 transition">
              {link.name}
            </Link>
          ))}
          <a 
            href="https://discord.com/invite/FnrFfXVR7d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition"
          >
            Discord
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden z-50 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-gray-950 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-2xl hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://discord.com/invite/FnrFfXVR7d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
