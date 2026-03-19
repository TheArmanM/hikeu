'use client'
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';
import { useCart } from '../store/useCart';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const setSelectedProduct = useCart((state) => state.setSelectedProduct);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return ['All', ...uniqueCategories];
  }, []);

  const handleCategoryChange = (cat) => {
    setSearchQuery(''); 
    setActiveCategory(cat);
  };

  const filteredProducts = useMemo(() => {
    if (searchQuery.trim() !== '') {
      return products.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeCategory === 'All') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    /* Pastikan main tidak memiliki padding top */
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <Hero />
      <CartDrawer />
      <ProductModal />
      
      <section id="katalog" className="max-w-7xl mx-auto px-6 -mt-16 lg:-mt-24 relative z-30 pt-4 lg:pt-0">
        <div className="flex flex-row items-center gap-3 w-full justify-between mb-12 bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 mr-4">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-3 rounded-2xl text-[10px] lg:text-[11px] font-black transition-all whitespace-nowrap uppercase tracking-widest ${
                  activeCategory === cat && searchQuery === ''
                    ? 'bg-[#1F2937] text-white shadow-md' 
                    : 'bg-transparent text-gray-400 hover:text-[#1F2937] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="shrink-0 flex items-center bg-[#F3F4F6] rounded-2xl px-4 h-[52px]">
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={(e) => {
                // setSearchQuery(e.target.value);
                if (e.target.value !== '') setActiveCategory('All');
              }}
              className="bg-transparent outline-none text-sm font-bold text-[#1F2937] w-[120px]"
            />
          </div>
        </div>

        <div key={activeCategory + searchQuery} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}