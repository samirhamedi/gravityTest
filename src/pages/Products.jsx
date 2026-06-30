import React, { useState } from 'react';
import { products } from '../data';
import { Layers, CheckCircle2, ChevronRight, X, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function Products({ setCurrentPage, setSelectedProductForDatasheet }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductModal, setActiveProductModal] = useState(null);

  const categories = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'masterbatch', label: 'مستربچ‌های رنگی' },
    { id: 'additive', label: 'مستربچ‌های افزودنی' },
    { id: 'filler', label: 'کامپاند و پرکننده‌ها' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const openDetails = (product) => {
    setActiveProductModal(product);
  };

  const closeDetails = () => {
    setActiveProductModal(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Header and intro */}
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white">محصولات ناب پلیمر شیراز</h1>
        <div className="w-20 h-1 bg-brand-yellow rounded-full" />
        <p className="text-sm text-gray-500 max-w-xl">
          کاتالوگ تخصصی محصولات نوین اندیش بسپار شیراز بر اساس نیازهای مهندسی صنایع پلاستیک.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer
              ${selectedCategory === cat.id
                ? 'bg-brand-yellow text-brand-dark shadow-lg shadow-brand-yellow/10'
                : 'bg-brand-card hover:bg-brand-border text-gray-400 hover:text-white border border-brand-border'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => openDetails(product)}
            className="group bg-brand-card border border-brand-border hover:border-brand-yellow/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-xl hover:translate-y-[-4px]"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={product.image}
                alt={product.titleFa}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-brand-yellow text-xs font-bold flex items-center gap-1">
                  <span>مشاهده اطلاعات کامل محصول</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 flex-grow">
              <span className="text-[10px] text-brand-yellow bg-brand-yellow/5 py-1 px-2.5 rounded border border-brand-yellow/15 w-fit">
                {product.categoryFa}
              </span>
              <h3 className="text-white text-lg font-black group-hover:text-brand-yellow transition-colors">
                {product.titleFa}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                {product.descFa}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal Overlay */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm animate-fade-in">
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-brand-card border border-brand-border rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col gap-8 animate-slide-up scrollbar-thin">
            
            {/* Close Button */}
            <button
              onClick={closeDetails}
              className="absolute top-6 left-6 p-2 rounded-xl bg-brand-dark border border-brand-border text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mt-4">
              <img
                src={activeProductModal.image}
                alt={activeProductModal.titleFa}
                className="w-24 h-24 rounded-2xl object-cover border border-brand-border"
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-brand-yellow text-xs font-bold bg-brand-yellow/5 border border-brand-yellow/15 py-1 px-2 rounded w-fit">
                  {activeProductModal.categoryFa}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white">{activeProductModal.titleFa}</h2>
                <span className="text-xs text-gray-500 font-mono tracking-wider">{activeProductModal.titleEn}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-border" />

            {/* Detail Tabs / Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
              
              {/* FA & EN Descriptions */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-brand-yellow font-black mb-2 flex items-center gap-1.5">
                    <Layers size={16} />
                    <span>توضیحات فنی محصول</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs">
                    {activeProductModal.descFa}
                  </p>
                </div>
                <div className="ltr text-left border-l-2 border-brand-border pl-4">
                  <h4 className="text-brand-yellow font-black mb-2 flex items-center gap-1.5">
                    <span>English Description</span>
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] font-sans">
                    {activeProductModal.descEn}
                  </p>
                </div>
              </div>

              {/* Specifications / Applications */}
              <div className="flex flex-col gap-4">
                
                {/* Grades */}
                <div className="bg-[#181818] p-4 rounded-xl border border-brand-border">
                  <span className="text-gray-400 font-bold block mb-1">گریدهای تولیدی:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeProductModal.grades.map((grade, idx) => (
                      <span key={idx} className="bg-brand-dark px-3 py-1 rounded text-xs text-white border border-brand-border font-mono">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compatibility */}
                <div className="flex justify-between items-center bg-[#181818] p-4 rounded-xl border border-brand-border">
                  <span className="text-gray-400 font-bold">پلیمر پایه سازگار:</span>
                  <span className="text-white font-semibold font-mono text-xs">{activeProductModal.compatibilityFa}</span>
                </div>

                {/* Recommended Dosage */}
                <div className="flex justify-between items-center bg-[#181818] p-4 rounded-xl border border-brand-border">
                  <span className="text-gray-400 font-bold">میزان مصرف پیشنهادی:</span>
                  <span className="text-brand-yellow font-bold text-xs">{activeProductModal.dosageFa}</span>
                </div>

                {/* Applications */}
                <div className="bg-[#181818] p-4 rounded-xl border border-brand-border">
                  <span className="text-gray-400 font-bold block mb-1">کاربردها در صنایع:</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{activeProductModal.applicationsFa}</p>
                </div>

                {/* Storage */}
                <div className="bg-[#181818] p-4 rounded-xl border border-brand-border">
                  <span className="text-gray-400 font-bold block mb-1">شرایط انبارداری و نگهداری:</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{activeProductModal.storageFa}</p>
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  setSelectedProductForDatasheet(activeProductModal.id);
                  setCurrentPage('datasheets');
                  closeDetails();
                }}
                className="bg-brand-yellow hover:bg-amber-500 text-brand-dark font-bold text-xs py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>مشاهده دیتا شیت‌ها و دانلود PDF</span>
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={closeDetails}
                className="border border-brand-border hover:border-gray-500 text-gray-300 hover:text-white font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer"
              >
                بستن پنجره
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
