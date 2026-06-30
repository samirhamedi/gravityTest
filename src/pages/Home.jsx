import React from 'react';
import { products, articles } from '../data';
import { ShieldCheck, Award, Zap, DollarSign, Headset, Truck, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  // We showcase 3 key products on home page
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: "کیفیت برتر و استانداردهای جهانی",
      desc: "تولید مستربچ‌ها با دقیق‌ترین کنترل کیفی، مطابق استانداردهای روز بین‌المللی پلیمری."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-yellow" />,
      title: "نوآوری و تکنولوژی پیشرفته",
      desc: "تحقیق مستمر در بخش R&D با بهره‌گیری از تجهیزات نوین آزمایشگاهی جهت توسعه نانوذرات."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-yellow" />,
      title: "قیمت‌گذاری کاملاً رقابتی",
      desc: "کاهش بهای تمام شده محصولات برای تولیدکننده نهایی از طریق بهینه‌سازی فرمولاسیون."
    },
    {
      icon: <Headset className="w-8 h-8 text-brand-yellow" />,
      title: "پشتیبانی فنی و مشاوره تخصصی",
      desc: "همراهی فنی در تنظیم ماشین‌آلات تولیدی و قالب‌ها جهت استفاده بهینه از مستربچ‌ها."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-yellow" />,
      title: "تحویل سریع و به‌موقع بار",
      desc: "لجستیک منظم کارخانه جهت بسته‌بندی، ارسال و تحویل در سریع‌ترین زمان در اقصی‌نقاط کشور."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-yellow" />,
      title: "تضمین صددرصدی کیفیت",
      desc: "پاسخگویی مستقیم به خریدار و عودت بار در صورت وجود کمترین انحراف فنی در خواص قطعه."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
        
        {/* Background Image / Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Radial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
        
        {/* Animated Particles SVG */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-6 animate-slide-up z-10">
          
          <span className="text-xs md:text-sm font-black text-brand-yellow bg-brand-yellow/10 py-1.5 px-3 rounded-full border border-brand-yellow/20 uppercase tracking-widest">
            شرکت نوین اندیش بسپار شیراز
          </span>

          <h1 className="text-3xl md:text-6xl font-black leading-tight text-white">
            طراحی و تولید انواع <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-400">
              مستربچ‌ها و کامپاندهای مهندسی
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-400 max-w-3xl leading-relaxed">
            این شرکت در شهر شیراز مستقر بوده و در زمینه طراحی، مهندسی فرمولاسیون و تولید مستربچ‌ها، پرکننده‌ها و کامپاندهای پیشرفته بر پایه پلی‌اتیلن و پلی‌پروپیلن فعالیت تخصصی می‌کند.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-brand-yellow hover:bg-amber-500 text-brand-dark font-bold text-sm py-4 px-8 rounded-xl shadow-lg shadow-brand-yellow/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>مشاهده محصولات پلیمری</span>
              <ArrowLeft size={16} className="group-hover:translate-x-[-4px] transition-transform" />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border border-brand-border hover:border-brand-yellow bg-[#1e1e1e]/60 hover:bg-[#1e1e1e] text-white hover:text-brand-yellow font-bold text-sm py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer"
            >
              ارتباط با واحد فروش و مشاوره
            </button>
          </div>

        </div>
      </section>

      {/* Goal & Description Section */}
      <section className="py-24 px-6 bg-[#181818] border-y border-brand-border relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              توسعه تخصصی فرمولاسیون صنایع پلیمری کشور
            </h2>
            <div className="w-20 h-1 bg-brand-yellow rounded-full" />
            <p className="text-sm leading-relaxed text-gray-400">
              شرکت نوین اندیش بسپار شیراز به عنوان یک فعال در حوزه صنایع پلیمری، اهداف متعددی را دنبال می‌کند که عمدتاً حول محور تولید مستربچ و کامپاند پلیمری باکیفیت، تمرکز بر توسعه فرمولاسیون‌های تخصصی، کنترل دقیق فرآیند تولید و پاسخگویی به نیازهای صنایع مختلف متمرکز است.
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              بخش تحقیق و توسعه (R&D) ما با پایش دقیق مواد ورودی و خروجی تلاش می‌کند تا کیفیت مواد اولیه کارگاه‌ها را تضمین نموده و با افزودنی‌های نوین طول عمر و مقاومت فیزیکی قطعات را افزایش دهد.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Visual element placeholder or stylized box */}
            <div className="relative w-full max-w-[450px] aspect-video md:aspect-square rounded-2xl bg-gradient-to-tr from-brand-yellow/10 to-amber-500/5 border border-brand-border p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl" />
              <div className="text-5xl font-black text-brand-yellow/20">R&D</div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-lg">پیشرو در علم پلیمر</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  ما تجهیزات مدرن آزمایشگاهی از جمله دستگاه‌های سنجش MFI، کوره خاکسترگیری، آنالیزهای کشش و رئومتری را جهت تضمین کیفیت به خدمت گرفته‌ایم.
                </p>
              </div>
              <button 
                onClick={() => setCurrentPage('about')}
                className="self-end text-brand-yellow text-xs font-bold hover:text-white flex items-center gap-1 group cursor-pointer"
              >
                <span>درباره آزمایشگاه ما</span>
                <ArrowLeft size={12} className="group-hover:translate-x-[-2px] transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">برخی از محصولات اصلی ما</h2>
          <div className="w-16 h-1 bg-brand-yellow rounded-full" />
          <p className="text-sm text-gray-500 max-w-xl">
            ما طیف گسترده‌ای از مستربچ‌های باکیفیت و افزودنی‌های استراتژیک را متناسب با فرآیندهای تولید فیلم، تزریق و بادی ارائه می‌دهیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-brand-card border border-brand-border hover:border-brand-yellow/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-brand-yellow/5 hover:translate-y-[-4px]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.titleFa}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-[10px] font-black py-1 px-2.5 rounded-md">
                  {product.categoryFa}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <h3 className="text-white text-lg font-black">{product.titleFa}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-grow line-clamp-3">
                  {product.descFa}
                </p>
                <div className="border-t border-brand-border/60 pt-4 flex justify-between items-center text-xs">
                  <span className="text-gray-500">گریدها: <strong className="text-gray-300 font-bold">{product.grades.slice(0,2).join(', ')}</strong></span>
                  <button 
                    onClick={() => setCurrentPage('products')}
                    className="text-brand-yellow font-bold flex items-center gap-1 group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>اطلاعات فنی</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#161616] border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">چرا شرکت ناب پلیمر شیراز؟</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded-full" />
            <p className="text-sm text-gray-500 max-w-xl">
              تعهد کامل به استانداردهای صنعت پلیمر و همراهی نزدیک با تولیدکننده، تفاوت کارخانه ماست.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-brand-card/60 border border-brand-border p-8 rounded-2xl flex flex-col gap-4 hover:border-brand-border/80 transition-all duration-300"
              >
                <div className="p-3 bg-brand-yellow/10 rounded-xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-white text-base font-black">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">آخرین مطالب علمی و اخباری</h2>
          <div className="w-16 h-1 bg-brand-yellow rounded-full" />
          <p className="text-sm text-gray-500 max-w-xl">
            ما مقالات فنی، دستاوردها و رویدادهای کارخانه را در جهت ارتقای دانش صنعت پلاستیک منتشر می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-brand-card border border-brand-border p-6 rounded-2xl flex flex-col gap-4 group hover:border-brand-yellow/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center text-[10px] text-gray-600">
                <span>{article.dateFa}</span>
                <span>زمان مطالعه: {article.readTime}</span>
              </div>
              <h3 className="text-white text-sm font-bold group-hover:text-brand-yellow transition-colors leading-relaxed">
                {article.titleFa}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                {article.summaryFa}
              </p>
              <button 
                onClick={() => setCurrentPage('datasheets')} // Or custom pages
                className="text-brand-yellow text-xs font-bold flex items-center gap-1 group-hover:text-white transition-colors cursor-pointer self-start"
              >
                <span>مطالعه کامل مطلب</span>
                <ArrowLeft size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
