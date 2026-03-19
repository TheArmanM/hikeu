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

  // FUNGSI SCROLL OTOMATIS KE KATALOG
  const scrollToKatalog = () => {
    const katalogSection = document.getElementById('katalog');
    if (katalogSection) {
      katalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">

      {/* Hero Content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1F2937]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] bg-cover bg-center" 
            style={{ animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          {/* <span className="inline-block px-4 py-1 rounded-full bg-orange-600 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-lg shadow-orange-900/40">
            New Expedition 2026
          </span> */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic uppercase">
            GEAR UP FOR THE <span className="text-orange-500">UNKNOWN.</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-10 max-w-xl mx-auto font-medium leading-relaxed opacity-90 uppercase tracking-widest">
            Perlengkapan teknis pendakian yang dirancang untuk medan ekstrem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* TOMBOL AKTIF: SCROLL KE KATALOG */}
            <button 
              onClick={scrollToKatalog}
              className="w-full sm:w-auto bg-white text-[#0F172A] px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all transform active:scale-95 shadow-2xl"
            >
              BELANJA SEKARANG
            </button>
            
            {/* <button 
              onClick={scrollToKatalog}
              className="w-full sm:w-auto border-2 border-white/20 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
            >
              LIHAT KATALOG
            </button> */}
          </div>
        </motion.div>
        
        {/* Bottom Fade - Menuju ke warna background body kamu */}
        <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-white to-transparent z-20" />
      </section>
    </div>
  );
}