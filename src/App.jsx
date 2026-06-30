import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Datasheets from './pages/Datasheets';
import About from './pages/About';
import Contact from './pages/Contact';
import { products, articles } from './data';
import { X, FileText, Package, ArrowUpRight, Search } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductForDatasheet, setSelectedProductForDatasheet] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Search filter results
  const getSearchResults = () => {
    if (!searchQuery.trim()) return { products: [], articles: [] };

    const query = searchQuery.toLowerCase();
    
    const matchedProducts = products.filter(p => 
      p.titleFa.toLowerCase().includes(query) || 
      p.titleEn.toLowerCase().includes(query) ||
      p.grades.some(g => g.toLowerCase().includes(query)) ||
      p.descFa.toLowerCase().includes(query)
    );

    const matchedArticles = articles.filter(a => 
      a.titleFa.toLowerCase().includes(query) ||
      a.summaryFa.toLowerCase().includes(query)
    );

    return { products: matchedProducts, articles: matchedArticles };
  };

  const handleSearchResultClick = (type, targetId) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    if (type === 'product') {
      setCurrentPage('products');
    } else if (type === 'datasheet') {
      setSelectedProductForDatasheet(targetId);
      setCurrentPage('datasheets');
    } else if (type === 'article') {
      // route to datasheets/articles layout
      setCurrentPage('datasheets');
    }
  };

  const { products: searchProducts, articles: searchArticles } = getSearchResults();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      
      {/* Header Navigation */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Pages Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && (
          <Products 
            setCurrentPage={setCurrentPage} 
            setSelectedProductForDatasheet={setSelectedProductForDatasheet}
          />
        )}
        {currentPage === 'datasheets' && (
          <Datasheets 
            selectedProductForDatasheet={selectedProductForDatasheet}
            setSelectedProductForDatasheet={setSelectedProductForDatasheet}
          />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer Details */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Dynamic Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md animate-fade-in">
          
          <div className="relative w-full max-w-2xl bg-brand-card border border-brand-border rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 animate-slide-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <span className="text-white font-extrabold text-sm flex items-center gap-1.5">
                <Search size={16} className="text-brand-yellow" />
                <span>جستجو در سایت ناب پلیمر شیراز</span>
              </span>
              <button 
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-1.5 rounded-lg bg-brand-dark border border-brand-border text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Input Element */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-brand-dark border border-brand-border px-5 py-4 rounded-2xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="نام گرید، نام محصول یا واژه‌های کلیدی را بنویسید (مانند: مشکی، لیزکننده، F40)"
              />
            </div>

            {/* Results Section */}
            <div className="max-h-[350px] overflow-y-auto flex flex-col gap-4 scrollbar-thin">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-xs text-gray-600">
                  واژه‌ای را برای نمایش نتایج جستجو وارد کنید.
                </div>
              ) : (searchProducts.length === 0 && searchArticles.length === 0) ? (
                <div className="text-center py-8 text-xs text-gray-500">
                  متاسفیم، موردی متناسب با جستجوی شما یافت نشد.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  
                  {/* Products Matches */}
                  {searchProducts.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] text-gray-500 font-bold block mb-1">محصولات و افزودنی‌ها ({searchProducts.length})</span>
                      {searchProducts.map(p => (
                        <div 
                          key={p.id}
                          onClick={() => handleSearchResultClick('product', p.id)}
                          className="bg-brand-dark hover:bg-brand-border border border-brand-border p-3.5 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <Package size={16} className="text-brand-yellow" />
                            <div>
                              <span className="text-xs font-bold text-white group-hover:text-brand-yellow transition-colors">{p.titleFa}</span>
                              <span className="block text-[9px] text-gray-500 mt-0.5">شامل گریدهای: {p.grades.join(', ')}</span>
                            </div>
                          </div>
                          <ArrowUpRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Article Matches */}
                  {searchArticles.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] text-gray-500 font-bold block mb-1">اخبار و دیتا شیت‌ها ({searchArticles.length})</span>
                      {searchArticles.map(a => (
                        <div 
                          key={a.id}
                          onClick={() => handleSearchResultClick('article', a.id)}
                          className="bg-brand-dark hover:bg-brand-border border border-brand-border p-3.5 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <FileText size={16} className="text-amber-500" />
                            <div>
                              <span className="text-xs font-bold text-white group-hover:text-brand-yellow transition-colors">{a.titleFa}</span>
                              <span className="block text-[9px] text-gray-500 mt-0.5">{a.summaryFa.substring(0, 70)}...</span>
                            </div>
                          </div>
                          <ArrowUpRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
