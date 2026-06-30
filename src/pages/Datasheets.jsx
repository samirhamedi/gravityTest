import React, { useState, useEffect } from 'react';
import { products } from '../data';
import { FileText, Download, CheckCircle2, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';

export default function Datasheets({ selectedProductForDatasheet, setSelectedProductForDatasheet }) {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [downloadingGrade, setDownloadingGrade] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  useEffect(() => {
    if (selectedProductForDatasheet) {
      setExpandedProduct(selectedProductForDatasheet);
      // Scroll to that element
      const element = document.getElementById(`datasheet-${selectedProductForDatasheet}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // Reset routing param after consume
      setSelectedProductForDatasheet(null);
    }
  }, [selectedProductForDatasheet]);

  const toggleProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handleDownload = (product, grade) => {
    setDownloadingGrade(grade);
    setDownloadSuccess(null);

    // Simulate PDF generation/downloading
    setTimeout(() => {
      setDownloadingGrade(null);
      setDownloadSuccess(grade);

      // Create dummy PDF or document trigger print layout for details
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Technical Data Sheet - ${grade}</title>
            <style>
              body { font-family: sans-serif; direction: rtl; padding: 40px; color: #333; line-height: 1.6; }
              .header { text-align: center; border-bottom: 2px solid #eead16; padding-bottom: 20px; margin-bottom: 30px; }
              .logo { font-size: 24px; font-weight: bold; color: #eead16; margin-bottom: 5px; }
              .company { font-size: 14px; color: #666; margin-bottom: 20px; }
              .title { font-size: 20px; font-weight: bold; margin-bottom: 10px; text-align: center; color: #000; }
              .table { width: 100%; border-collapse: collapse; margin-top: 30px; margin-bottom: 30px; }
              .table th, .table td { border: 1px solid #ddd; padding: 12px; text-align: right; }
              .table th { background-color: #f5f5f5; }
              .section-title { font-size: 16px; font-weight: bold; border-right: 3px solid #eead16; padding-right: 10px; margin-top: 30px; }
              .footer { text-align: center; font-size: 12px; color: #888; border-top: 1px solid #ddd; padding-top: 20px; margin-top: 50px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">شرکت نوین اندیش بسپار شیراز</div>
              <div class="company">تولیدکننده تخصصی مستربچ و کامپاندهای مهندسی</div>
              <div class="title">برگه اطلاعات فنی (Technical Data Sheet)</div>
              <div>گرید: <strong>${grade}</strong></div>
            </div>
            
            <div class="section-title">مشخصات عمومی محصول</div>
            <p>این گرید بر پایه پلیمری سازگار با <strong>${product.compatibilityFa}</strong> توسعه یافته است. مناسب جهت استفاده در خطوط اکستروژن فیلم، تزریق و قالب‌گیری بادی.</p>

            <table class="table">
              <thead>
                <tr>
                  <th>پارامتر فنی (Test Property)</th>
                  <th>روش آزمون (Standard)</th>
                  <th>واحد (Unit)</th>
                  <th>مقدار فنی (Typical Value)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>درصد افزودنی / کربن بلک / TiO2</td>
                  <td>ISO 3451-1</td>
                  <td>%</td>
                  <td>${grade.includes('F40') || grade.includes('WT 70') ? '۴۰٪ - ۷۰٪' : '۳۰٪ - ۵۰٪'}</td>
                </tr>
                <tr>
                  <td>شاخص جریان مذاب (MFI)</td>
                  <td>ASTM D1238</td>
                  <td>g/10 min</td>
                  <td>۴ - ۱۲ (بسته به پلیمر حامل)</td>
                </tr>
                <tr>
                  <td>دانسیته (Density)</td>
                  <td>ISO 1183</td>
                  <td>g/cm³</td>
                  <td>۰.۹۵ - ۱.۶۵</td>
                </tr>
                <tr>
                  <td>میزان رطوبت (Moisture Content)</td>
                  <td>ISO 15512</td>
                  <td>%</td>
                  <td>کمتر از ۰.۱۵٪</td>
                </tr>
              </tbody>
            </table>

            <div class="section-title">میزان مصرف پیشنهادی</div>
            <p>دوز توصیه شده جهت دستیابی به خواص بهینه: <strong>${product.dosageFa}</strong></p>

            <div class="section-title">کاربردهای پیشنهادی</div>
            <p>${product.applicationsFa}</p>

            <div class="section-title">شرایط انبارداری</div>
            <p>${product.storageFa}</p>

            <div class="footer">
              <p>آدرس کارخانه: شهرک بزرگ صنعتی شیراز، خیابان کوشش شمالی، سوله دوم سمت چپ، شرکت نوین اندیش بسپار شیراز</p>
              <p>تلفن‌های تماس: 09171313615 - 09372423615 | وب‌سایت: nabpolymer.com</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();

      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Intro */}
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white">برگه‌های مشخصات فنی (TDS)</h1>
        <div className="w-20 h-1 bg-brand-yellow rounded-full" />
        <p className="text-sm text-gray-500 max-w-xl">
          دیتاشیت‌های رسمی و برگه‌های آزمایشگاهی مستربچ‌های تولیدی را با انتخاب محصول، به صورت فرمت استاندارد PDF دریافت نمایید.
        </p>
      </div>

      {/* Success Notification Alert */}
      {downloadSuccess && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl max-w-xl mx-auto mb-8 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="shrink-0" size={18} />
          <span className="text-xs">برگه اطلاعات فنی گرید <strong>{downloadSuccess}</strong> با موفقیت تولید شد و در تب جدید باز گردید.</span>
        </div>
      )}

      {/* Datasheet list */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {products.map((product) => {
          const isExpanded = expandedProduct === product.id;

          return (
            <div 
              key={product.id}
              id={`datasheet-${product.id}`}
              className={`bg-brand-card border rounded-2xl transition-all duration-300 overflow-hidden
                ${isExpanded ? 'border-brand-yellow/30 shadow-xl' : 'border-brand-border hover:border-brand-border/80'}`}
            >
              
              {/* Product Accordion Header */}
              <div 
                onClick={() => toggleProduct(product.id)}
                className="p-6 flex justify-between items-center cursor-pointer select-none"
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={product.image} 
                    alt={product.titleFa} 
                    className="w-12 h-12 rounded-xl object-cover border border-brand-border"
                  />
                  <div>
                    <h3 className="text-white text-base font-black">{product.titleFa}</h3>
                    <span className="text-[10px] text-gray-500 font-mono">{product.titleEn} Datasheets</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-brand-border px-2.5 py-1 rounded text-brand-yellow font-bold">
                    {product.grades.length} گرید فنی
                  </span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="border-t border-brand-border bg-[#181818]/60 p-6 flex flex-col gap-4 animate-slide-down">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    در لیست زیر گریدهای فنی تولیدی برای <strong>{product.titleFa}</strong> آورده شده است. با کلیک بر روی دانلود دیتا شیت، سند رسمی آزمایشگاه نوین اندیش بسپار شیراز شامل ام‌اف‌آی (MFI)، دانسیته و درصد موثره مواد فعال برای شما تولید می‌گردد.
                  </p>

                  <div className="flex flex-col gap-3 mt-2">
                    {product.grades.map((grade, idx) => (
                      <div 
                        key={idx}
                        className="bg-brand-dark border border-brand-border p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4 hover:border-brand-yellow/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-brand-yellow" />
                          <div>
                            <span className="text-sm font-bold text-white font-mono">{grade}</span>
                            <span className="block text-[10px] text-gray-500">پایه حامل: {product.compatibilityFa} | MFI تنظیم‌شده</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDownload(product, grade)}
                          disabled={downloadingGrade !== null}
                          className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer
                            ${downloadingGrade === grade
                              ? 'bg-brand-border text-gray-400 cursor-not-allowed'
                              : 'bg-brand-border hover:bg-brand-yellow text-gray-300 hover:text-brand-dark'
                            }`}
                        >
                          {downloadingGrade === grade ? (
                            <>
                              <RefreshCw size={14} className="animate-spin" />
                              <span>در حال آماده‌سازی PDF...</span>
                            </>
                          ) : (
                            <>
                              <Download size={14} />
                              <span>دانلود دیتا شیت فنی (PDF)</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
