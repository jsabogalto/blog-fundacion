"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ImageComponent from './ImageComponent';
import SearchComponent from './SearchComponent';
import { Linkedin } from '@thesvg/react';
import { createPortal } from 'react-dom';


const navLinks = [
  { label: 'DONAR COMPUTADORES', href: '/donar-computadores' },
  { label: 'PROYECTOS', href: '/posts?cat=proyectos' },
  { label: 'RECICLAJE', href: '/posts?cat=reciclaje-electronico' },
  { label: 'BLOG', href: '/posts' },
  { label: 'CONTACTO', href: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(false);      // controla el translate (animación)
  const [mounted, setMounted] = useState(false); // para el portal en SSR

  useEffect(() => {
    // 40 = alto exacto de la barra de contacto (h-10). Al pasarlo, la navbar se fija.
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  const openMenu = () => {
    setMobileOpen(true);
    // doble rAF: garantiza que el panel monte en translate-x-full y LUEGO anime a 0
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
  };

  const closeMenu = () => {
    setShow(false);                          // dispara la salida (desliza a la derecha)
    setTimeout(() => setMobileOpen(false), 300); // desmonta al terminar la animación
  };

  // bloquea el scroll del fondo mientras está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    // Contenedor absolute: flota sobre el hero y SCROLLEA con la página
    <div className="absolute inset-x-0 top-0 z-50">
      {/* ===== CONTACTO: en flujo → se va al hacer scroll ===== */}
      <div className="bg-transparent text-white/90">
        <div className="max-w-layer mx-auto px-4 md:px-12">
          <div className="h-12 flex items-center justify-between text-xs">
            <a
              href="tel:+4588779090"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              < Phone className="h-3 w-3" />
              <span>+57 313 541 03 48</span>
            </a>

            <div className="flex items-center gap-3">
              {/* Aquí va tu ícono luego; por ahora solo el span */}
              <a href="/informes" className="hover:text-white transition-colors" aria-label="registro web DIAN" >
                <span>Registro web DIAN</span>
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/company/fundaci%C3%B3n-reciclando-unidos/" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin className="h-4 w-4 [&_path]:fill-white/90" />
              </a>
            </div>
          </div>

          {/* Separador: mismo px que el contenido */}
          <div className="h-px bg-white/20" />
        </div>
      </div>

      {/* ===== NAVBAR: relative bajo el contacto → se vuelve fixed al top al scrollear ===== */}
      <nav
        className={`h-18 w-full transition-colors duration-300 md:h-24 ${scrolled
          ? 'fixed inset-x-0 top-0 z-50 bg-gray-100 shadow-nav'
          : 'relative bg-transparent'
          }`}
      >
        <div className="max-w-layer mx-auto h-full flex items-center justify-between px-4 md:px-12">
          {/* Logo: blanco arriba, original al hacer scroll */}
          <a href="/">
            <ImageComponent
              src={"/Untitled - 14 de junio de 2026 a las 18.15.09 (1).png"}
              width={200}
              height={60}
              className={`h-10 w-34 md:h-20 md:w-50 object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'
                }`}
              alt="logo reciclando unidos"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-green-primary relative group ${scrolled ? 'text-text-primary' : 'text-white'
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className={`lg:flex items-center ${scrolled ? 'text-text-primary' : 'text-white'
              }`}>
              <SearchComponent />
            </div>
          </div>


          <div className="flex lg:hidden">
            <div className={`flex items-center ${scrolled ? 'text-text-primary' : 'text-white'
              }`}>
              <SearchComponent />
            </div>
            {/* Mobile Hamburger */}
            <button
              onClick={openMenu}
              className={`lg:hidden p-2 ${scrolled ? 'text-text-primary' : 'text-white'}`}
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>

        </div>

        {mounted && mobileOpen &&
          createPortal(
            <div className="fixed inset-0 z-[100] lg:hidden">
              {/* Fondo oscuro: aparece con fade y cierra al hacer click */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'
                  }`}
                onClick={closeMenu}
              />

              {/* Panel: entra deslizando de derecha a izquierda */}
              <div
                className={`absolute top-0 right-0 h-full w-full p-6 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${show ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >
                {/* Cerrar */}
                <div className="flex justify-end p-4">
                  <button onClick={closeMenu} aria-label="Cerrar menú" className="p-2 text-text-primary">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Separador con el mismo margen del contenido */}
                <div className="h-px bg-gray-200 mx-6" />

                {/* Tus títulos, sin nada extra */}
                <nav className="flex flex-col px-6 py-6 gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-base font-semibold uppercase tracking-wide text-text-primary hover:text-green-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>,
            document.body
          )}
      </nav>
    </div>
  );
}