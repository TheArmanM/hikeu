'use client'
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Mountain } from 'lucide-react';
import { useCart } from '../store/useCart';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, setIsOpen } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Navbar */}
      {/* <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mountain className={isScrolled ? 'text-orange-600' : 'text-white'} />
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-[#1F2937]' : 'text-white'}`}>
              HIKEU
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-full transition-colors hover:bg-black/5"
            >
              <ShoppingCart className={isScrolled ? 'text-[#1F2937]' : 'text-white'} size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <Menu className={isScrolled ? 'text-[#1F2937]' : 'text-white'} size={24} />
          </div>
        </div>
      </nav> */}

      {/* Hero Content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1F2937]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Ganti dengan URL gambar asli kamu nanti */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] bg-cover bg-center animate-pulse-slow" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-600 text-white text-xs font-bold tracking-widest uppercase mb-6">
            New Expedition 2026
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">
            GEAR UP FOR THE <span className="text-orange-500 italic">UNKNOWN.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Perlengkapan teknis pendakian yang dirancang untuk menghadapi medan ekstrem. Dibuat oleh pendaki, untuk pendaki.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1F2937] px-10 py-4 rounded-full font-bold text-sm hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 shadow-xl">
              BELANJA SEKARANG
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
              LIHAT KATALOG
            </button>
          </div>
        </motion.div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#F9FAFB] to-transparent z-20" />
      </section>
    </div>
  );
}