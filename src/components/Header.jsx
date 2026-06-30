import React, { useState } from 'react';
import { Search, Menu, X, Phone, MapPin, Globe, Compass } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'صفحه اصلی' },
    { id: 'products', label: 'محصولات ما' },
    { id: 'datasheets', label: 'دیتا شیت‌ها' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top bar with contact info */}
      <div className="bg-[#1a1a1a] text-gray-400 text-xs py-2 px-4 border-b border-brand-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
              <Phone size={12} className="text-brand-yellow" />
              <span className="ltr">۰۹۱۷۱۳۱۳۶۱۵</span> / <span className="ltr">۰۹۳۷۲۴۲۳۶۱۵</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
              <MapPin size={12} className="text-brand-yellow" />
              <span>شیراز، شهرک بزرگ صنعتی، خیابان کوشش شمالی</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] bg-brand-border px-2 py-0.5 rounded text-brand-yellow">دانش بنیان</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-brand-yellow transition-colors">
              <Globe size={12} />
              <span>فارسی</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav className="bg-brand-dark/95 backdrop-blur-md border-b border-brand-border py-4 px-4 md:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* SVG Polymer Logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-yellow to-amber-400 flex items-center justify-content-center p-2 shadow-lg shadow-brand-yellow/10 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-dark fill-current font-bold">
                <path d="M50,15 L75,30 L75,60 L50,75 L25,60 L25,30 Z" fill="none" stroke="currentColor" strokeWidth="10" />
                <circle cx="50" cy="15" r="10" />
                <circle cx="75" cy="30" r="10" />
                <circle cx="75" cy="60" r="10" />
                <circle cx="50" cy="75" r="10" />
                <circle cx="25" cy="60" r="10" />
                <circle cx="25" cy="30" r="10" />
                <path d="M50,30 L50,60 M35,45 L65,45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-black tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                ناب پلیمر شیراز
              </span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest -mt-1 font-medium">
                Novin Andish Baspar
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-1.5 px-1 cursor-pointer
                  ${currentPage === item.id 
                    ? 'text-brand-yellow' 
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-yellow rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* Actions & Search */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              aria-label="Search site"
              className="p-2.5 rounded-xl bg-[#1e1e1e] hover:bg-brand-border text-gray-300 hover:text-brand-yellow transition-all duration-300 cursor-pointer"
            >
              <Search size={18} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#1e1e1e] text-gray-300 hover:text-white hover:bg-brand-border transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-brand-border flex flex-col gap-2 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-right py-3 px-4 rounded-xl text-sm font-medium transition-all cursor-pointer
                  ${currentPage === item.id 
                    ? 'bg-brand-yellow/10 text-brand-yellow' 
                    : 'hover:bg-brand-border text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
