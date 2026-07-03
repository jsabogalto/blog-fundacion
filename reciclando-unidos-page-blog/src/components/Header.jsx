"use client";
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const content = (
    <div className="fixed inset-x-0 top-0 z-50 h-10 bg-green-primary text-white">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 md:px-12 text-xs sm:text-sm">
        <a href="tel:+4588779090" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone className="w-4 h-4" strokeWidth={1.75} />
          <span>+45 88 77 90 90</span>
        </a>
        <div className="flex items-center gap-3">
          <button className="hover:opacity-80 transition-opacity">DA</button>
          <span className="text-white/40">|</span>
          <button className="hover:opacity-80 transition-opacity">EN</button>
          <span className="w-px h-4 bg-white/25" />
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}