'use client'
import { useState } from 'react';
import { Menu, X, ShoppingCart, Package, User } from 'lucide-react';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart((state) => state.cart);
  const setIsCartOpen = useCart((state) => state.setIsCartOpen);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/5 shadow-2xl h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/40 group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-xl italic">H</span>
          </div>
          {/* Teks Logo HIKEU diatur menjadi Putih (text-white) agar kontras di atas bg-black */}
          <span className="text-xl font-black text-white tracking-tighter uppercase italic">HIKEU</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Beranda</a>
          <a href="#katalog" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Katalog</a>
          <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Tentang Kami</a>
          <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Kontak</a>
        </div>

        {/* Action Icons - Semua Menggunakan text-white */}
        <div className="flex items-center gap-2">
          <button onClick={() => setIsCartOpen(true)} className="p-2.5 hover:bg-white/5 rounded-full relative group transition-colors">
            <ShoppingCart size={20} className="text-white group-hover:text-orange-500" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-orange-600 text-[9px] font-bold rounded-full flex items-center justify-center text-white border border-black">
                {totalItems}
              </span>
            )}
          </button>
          
          <button className="p-2.5 hover:bg-white/5 rounded-full group transition-colors">
            <Package size={20} className="text-white group-hover:text-orange-500" />
          </button>

          <a href="/login" className="p-2.5 hover:bg-white/5 rounded-full group transition-colors">
            <User size={20} className="text-white group-hover:text-orange-500" />
          </a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}