import React from 'react';
import { Microscope, Award, Users, Scale, Factory, ShieldAlert } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "۱۰+", label: "سال سابقه تولید فعال" },
    { value: "۵۰+", label: "فرمولاسیون اختصاصی افزودنی" },
    { value: "۷+", label: "دسته محصولی پیشرفته" },
    { value: "۱۰۰٪", label: "رضایت فنی تضمین‌شده مشتریان" }
  ];

  const laboratoryEquipment = [
    {
      icon: <Microscope className="w-6 h-6 text-brand-yellow" />,
      name: "تست شاخص جریان مذاب (MFR/MVR)",
      desc: "اندازه‌گیری ویسکوزیته و روانی گریدها مطابق استاندارد ASTM D1238 جهت انطباق با اکسترودر خریدار."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-yellow" />,
      name: "سنجش خاکستر و غلظت فیلر (Ash Content)",
      desc: "کنترل میزان موثره کربنات کلسیم، تیتان یا کربن بلک در کوره‌های دما بالا طبق استاندارد ISO 3451."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-yellow" />,
      name: "طراحی فرمولاسیون اختصاصی (Custom R&D)",
      desc: "مشاوران ارشد آزمایشگاه ما گریدها را بر اساس رزین ضایعاتی یا بکر شما فرموله می‌کنند."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-brand-card to-brand-dark border-b border-brand-border">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 animate-slide-up">
          <h1 className="text-3xl md:text-5xl font-black text-white">درباره شرکت ناب پلیمر شیراز</h1>
          <div className="w-20 h-1 bg-brand-yellow rounded-full" />
          <p className="text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed">
            شرکت نوین اندیش بسپار شیراز با نام تجاری <strong>ناب پلیمر</strong>، با هدف تولید محصولات جدید و نوآور مطابق با نیاز روز صنعت پلیمر کشور، قدم به عرصه تولید گذاشته است. به همین دلیل بیشترین انرژی خود را بر روی واحد تحقیق و توسعه خود متمرکز نموده است تا با پیشرفت روز افزون صنعت پلیمر همگام باشد.
          </p>
        </div>
      </section>

      {/* Stats counter grid */}
      <section className="py-12 bg-[#161616] border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-brand-yellow font-mono">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Section: R&D and Quality */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-brand-yellow text-xs font-bold bg-brand-yellow/10 border border-brand-yellow/20 py-1.5 px-3 rounded-full w-fit">
            بخش کنترل کیفی و آزمایشگاه
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            تمرکز کامل بر واحد تحقیق و توسعه (R&D)
          </h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            کارشناسان ارشد این شرکت در بخش R&D، همواره در تلاشند تا با بهره‌گیری از دستگاه‌های تولید در مقیاس آزمایشگاهی و دستگاه‌های آزمون مختلف همزمان با پایش مداوم مشتری‌های گرامی و ارزیابی نیازهای آن‌ها، پروژه‌های تحقیقاتی مختلف را با هدف بهبود کیفیت محصولات موجود و تولید محصولات جدید به انجام برسانند.
          </p>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            این رویکرد علمی سبب شده تا ناب پلیمر شیراز به عنوان تولیدکننده گواهی‌شده دانش‌بنیان، موفق به حل چالش‌های تولیدکنندگان در تولید فیلم‌های پلاستیکی نازک و کیسه‌های پلیمری گردد.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {laboratoryEquipment.map((equip, idx) => (
            <div 
              key={idx}
              className="bg-brand-card border border-brand-border p-6 rounded-2xl flex gap-4 hover:border-brand-border/80 transition-all"
            >
              <div className="p-3 bg-brand-yellow/10 rounded-xl h-fit shrink-0">
                {equip.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white text-sm font-bold">{equip.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{equip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Factory and Machinery section */}
      <section className="py-24 px-6 bg-[#161616] border-t border-brand-border">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          <Factory size={48} className="text-brand-yellow" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">ظرفیت تولید و فناوری اکستروژن</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-3xl">
            کارخانه ناب پلیمر مستقر در شهرک بزرگ صنعتی شیراز، مجهز به خطوط پیشرفته اکسترودر دوپیچه همسوگرد (Twin-Screw Co-rotating Extruder) می‌باشد. این سیستم پیشرفته، برش‌دهی یکنواخت و پخش‌شوندگی عالی ذرات نانو، پیگمنت تیتان و کربن بلک را در ماتریس پلیمری تضمین می‌کند. این موضوع از پاره شدن فیلم‌های پلاستیکی و مسدود شدن فیلتر دستگاه‌های مشتری جلوگیری به عمل می‌آورد.
          </p>
        </div>
      </section>

    </div>
  );
}
