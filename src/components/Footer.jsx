import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp, ChevronLeft } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d0d0d] text-gray-400 pt-16 pb-8 border-t border-brand-border">
      
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Logo and Intro */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-content-center p-1.5 text-brand-dark">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current font-bold">
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
            <span className="text-white text-lg font-black tracking-tight">ناب پلیمر شیراز</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500">
            شرکت نوین اندیش بسپار شیراز به عنوان یک فعال در حوزه صنایع پلیمری، با تمرکز بر توسعه فرمولاسیون‌های تخصصی و دانش‌بنیان، اقدام به تولید مستربچ و کامپاند باکیفیت جهت تامین نیازهای صنایع پلاستیک کشور نموده است.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold border-r-2 border-brand-yellow pr-2.5">دسترسی سریع</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            {[
              { id: 'home', label: 'صفحه اصلی' },
              { id: 'products', label: 'محصولات ما' },
              { id: 'datasheets', label: 'دیتا شیت‌ها' },
              { id: 'about', label: 'درباره ما' },
              { id: 'contact', label: 'تماس با ما' }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setCurrentPage(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 hover:text-brand-yellow transition-colors group cursor-pointer"
                >
                  <ChevronLeft size={12} className="group-hover:translate-x-[-2px] transition-transform text-gray-600" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold border-r-2 border-brand-yellow pr-2.5">محصولات تولیدی</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            {[
              { id: 'black-masterbatch', name: 'مستربچ مشکی مهندسی' },
              { id: 'white-masterbatch', name: 'مستربچ سفید دی‌اکسید‌تیتانیوم' },
              { id: 'calcium-carbonate-filler', name: 'کربنات کلسیم پرکننده' },
              { id: 'slip-masterbatch', name: 'مستربچ‌های افزودنی و لیزکننده' }
            ].map((prod) => (
              <li key={prod.id}>
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 hover:text-brand-yellow transition-colors group cursor-pointer"
                >
                  <ChevronLeft size={12} className="group-hover:translate-x-[-2px] transition-transform text-gray-600" />
                  <span>{prod.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold border-r-2 border-brand-yellow pr-2.5">اطلاعات کارخانه</h4>
          <ul className="flex flex-col gap-3.5 text-xs text-gray-400">
            <li className="flex gap-2 items-start">
              <MapPin size={16} className="text-brand-yellow shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                شیراز، شهرک بزرگ صنعتی شیراز، میدان سوم، خیابان کوشش شمالی، میدان ساعی، خیابان ساعی، خیابان ۸۰۳، سوله دوم سمت چپ، شرکت نوین اندیش بسپار شیراز
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={14} className="text-brand-yellow shrink-0" />
              <span className="ltr">09171313615 - 09372423615</span>
            </li>
            <li className="flex gap-2 items-center">
              <Clock size={14} className="text-brand-yellow shrink-0" />
              <span>پشتیبانی کارخانه: شنبه تا چهارشنبه ۸ الی ۱۷</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-brand-border pt-8 mt-8 text-center text-xs text-gray-600 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} تمامی حقوق مادی و معنوی این وب‌سایت متعلق به شرکت ناب پلیمر شیراز می‌باشد.</p>
          <div className="flex items-center gap-3">
            <span>طراحی و توسعه: ۹۳۶۶۵۷۷۹۸۷</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-brand-yellow text-gray-400 hover:text-brand-dark transition-all cursor-pointer"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
