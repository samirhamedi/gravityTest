import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'نام شما الزامی است';
    if (!formData.email.trim()) {
      tempErrors.email = 'ایمیل شما الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'فرمت ایمیل وارد شده معتبر نیست';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'موضوع پیام الزامی است';
    if (!formData.message.trim()) tempErrors.message = 'متن پیام الزامی است';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message to backing API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Page Header */}
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-white">تماس با کارخانه و دفتر فروش</h1>
        <div className="w-20 h-1 bg-brand-yellow rounded-full" />
        <p className="text-sm text-gray-500 max-w-xl">
          جهت ثبت سفارش خرید مستربچ، اخذ قیمت روز یا درخواست نمونه رایگان آزمایشگاهی از طریق فرم یا شماره تلفن‌ها با ما در ارتباط باشید.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Grid (4 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <h2 className="text-xl md:text-2xl font-black text-white border-r-4 border-brand-yellow pr-3 mb-2">اطلاعات تماس</h2>

          <div className="bg-[#181818] border border-brand-border p-6 rounded-2xl flex gap-4">
            <MapPin className="text-brand-yellow shrink-0 mt-1" size={20} />
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-sm">نشانی کارخانه:</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                فارس، شیراز، شهرک بزرگ صنعتی شیراز، میدان سوم، خیابان کوشش شمالی، میدان ساعی، خیابان ساعی، خیابان ۸۰۳، سوله دوم سمت چپ، شرکت نوین اندیش بسپار شیراز
              </p>
            </div>
          </div>

          <div className="bg-[#181818] border border-brand-border p-6 rounded-2xl flex gap-4">
            <Phone className="text-brand-yellow shrink-0 mt-1" size={18} />
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-sm">شماره‌های تماس و تلگرام/ایتا:</span>
              <p className="text-xs text-gray-400 ltr text-right">
                ۰۹۱۷۱۳۱۳۶۱۵<br />
                ۰۹۳۷۲۴۲۳۶۱۵
              </p>
            </div>
          </div>

          <div className="bg-[#181818] border border-brand-border p-6 rounded-2xl flex gap-4">
            <Mail className="text-brand-yellow shrink-0 mt-1" size={18} />
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-sm">کد پستی ده رقمی:</span>
              <p className="text-xs text-gray-400">
                ۷۱۵۸۱۹۸۱۸۸
              </p>
            </div>
          </div>

          <div className="bg-[#181818] border border-brand-border p-6 rounded-2xl flex gap-4">
            <Clock className="text-brand-yellow shrink-0 mt-1" size={18} />
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-sm">ساعات پذیرش حضوری و بارگیری:</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰<br />
                پنجشنبه‌ها: ۸:۰۰ الی ۱۳:۰۰ (با هماهنگی قبلی)
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form Grid (7 cols on lg) */}
        <div className="lg:col-span-7 bg-[#161616] border border-brand-border p-8 rounded-3xl relative">
          
          <h2 className="text-xl md:text-2xl font-black text-white border-r-4 border-brand-yellow pr-3 mb-6">ارسال پیام الکترونیکی</h2>

          {submitSuccess && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl mb-6 flex items-center gap-3 animate-fade-in">
              <CheckCircle2 size={20} className="shrink-0" />
              <span className="text-xs">پیام شما با موفقیت ارسال گردید. همکاران ما در بخش مهندسی فروش در اسرع وقت با شما تماس خواهند گرفت.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Name input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-gray-400">نام و نام خانوادگی / نام شرکت <span className="text-brand-yellow">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-brand-dark border px-4 py-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-brand-yellow transition-colors
                  ${errors.name ? 'border-red-500' : 'border-brand-border'}`}
                placeholder="مثال: شرکت پلاستیک پاسارگاد"
              />
              {errors.name && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  <span>{errors.name}</span>
                </span>
              )}
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-gray-400">آدرس ایمیل <span className="text-brand-yellow">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-brand-dark border px-4 py-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-brand-yellow transition-colors ltr text-left
                  ${errors.email ? 'border-red-500' : 'border-brand-border'}`}
                placeholder="example@mail.com"
              />
              {errors.email && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  <span>{errors.email}</span>
                </span>
              )}
            </div>

            {/* Subject input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-bold text-gray-400">موضوع پیام <span className="text-brand-yellow">*</span></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`bg-brand-dark border px-4 py-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-brand-yellow transition-colors
                  ${errors.subject ? 'border-red-500' : 'border-brand-border'}`}
                placeholder="مثال: درخواست پیش‌فاکتور مستربچ لیزکننده"
              />
              {errors.subject && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  <span>{errors.subject}</span>
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-gray-400">متن پیام یا توضیحات فنی درخواستی <span className="text-brand-yellow">*</span></label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`bg-brand-dark border px-4 py-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none
                  ${errors.message ? 'border-red-500' : 'border-brand-border'}`}
                placeholder="جزئیات درخواست خود را در این بخش بنویسید..."
              />
              {errors.message && (
                <span className="text-[10px] text-red-400 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  <span>{errors.message}</span>
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-brand-yellow hover:bg-amber-500 text-brand-dark font-bold text-xs py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={14} className="rotate-180" />
              <span>{isSubmitting ? 'در حال ارسال پیام...' : 'ارسال پیام به واحد فروش'}</span>
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
