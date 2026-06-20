"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ImageComponent from './ImageComponent';
import SearchComponent from './SearchComponent';

const API = process.env.NEXT_PUBLIC_API_URL;

const navLinks = [
  { label: 'Donar computadores', href: '/donar-computadores' },
  { label: 'Proyectos', href: '/posts?cat=proyectos' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // BUG FIX: el parámetro se llamaba (string) pero usabas href adentro
  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${scrolled
        ? 'bg-white backdrop-blur-xl shadow-nav border-b border-black/5'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8 md:px-12">
        {/* Logo: blanco arriba, original al hacer scroll */}
        <a href='/'>
          <ImageComponent
            src={"/Untitled - 14 de junio de 2026 a las 18.15.09 (1).png"}
            width={200}
            height={60}
            className={`h-12 w-40 object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'
              }`}
            alt="logo reciclando unidos"
          />
        </a>

        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-green-primary relative group ${scrolled ? 'text-text-primary' : 'text-white'
                }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {/* CTA: unificado a green-primary (antes desktop usaba lime-800 y móvil green-primary) */}
          <div className='lg:flex items-center'>
            <SearchComponent />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-text-primary' : 'text-white'}`}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-text-primary font-medium hover:bg-green-light/50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className='mt-6 px-6 py-3 '>
              <SearchComponent />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}