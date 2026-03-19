'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../store/useCart';
import { ShoppingBag, Menu, X, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, isOpen: isCartOpen, setIsOpen: setCartOpen, updateQuantity, removeItem } = useCart();
  
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // FUNGSI CHECKOUT WHATSAPP
  const handleWhatsAppCheckout = () => {
  if (items.length === 0) return;

  const nomorWA = "6285842326328"; 
  const daftarBelanja = items.map(item => {
    // Tambahkan keterangan size jika ada
    const sizeInfo = item.selectedSize ? ` [Size: ${item.selectedSize}]` : '';
    return `* ${item.name}${sizeInfo} (${item.quantity}x) - Rp${(item.price * item.quantity).toLocaleString('id-ID')}`;
  }).join('%0A');

  const pesan = `Halo HIKEU!%0ASaya ingin memesan:%0A%0A${daftarBelanja}%0A%0A*Total: Rp ${totalPrice.toLocaleString('id-ID')}*%0A%0AMohon info ketersediaan stok. Terima kasih!`;

  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
};

  return (
    <>
     <nav className="fixed w-full z-100 bg-black border-b border-white/10 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* BUTTON HAMBURGER */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <Link href="/" className="text-2xl font-black italic text-white uppercase tracking-tighter">
              HIKEU<span className="text-orange-600">.</span>
            </Link>
          </div>

          <div className="hidden lg:flex gap-8">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Beranda</Link>
            <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Tentang Kami</Link>
            <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Kontak</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white uppercase tracking-widest hover:bg-orange-600 transition-all">
               <MessageSquare size={14} /> Tanya Admin
            </Link>
            <button onClick={() => setCartOpen(true)} className="relative text-white p-2">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY  */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/90 z-160 backdrop-blur-md lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[80%] max-w-75 bg-black z-170 shadow-2xl flex flex-col lg:hidden border-r border-white/10"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <span className="text-2xl font-black italic text-white uppercase tracking-tighter">HIKEU<span className="text-orange-600">.</span></span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full"><X size={24}/></button>
              </div>
              <div className="flex flex-col p-6 gap-6">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white hover:text-orange-600 transition-colors">Beranda</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white hover:text-orange-600 transition-colors">Tentang Kami</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white hover:text-orange-600 transition-colors">Kontak</Link>
                <div className="pt-6 border-t border-white/10">
                   <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                     <MessageSquare size={16} /> Tanya Admin via WA
                   </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/60 z-140 backdrop-blur-sm" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-150 shadow-2xl flex flex-col">
              <div className="p-6 border-b flex justify-between items-center bg-[#0F172A] text-white">
                <h2 className="font-black uppercase italic tracking-tighter text-xl">Keranjang Anda<span className="text-orange-600">.</span></h2>
                <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full"><X/></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Isi dari items.map dalam Cart Drawer */}
{items.map((item) => (
  <div key={item.id} className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
    <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden shrink-0">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1">
      <h4 className="font-black uppercase italic text-sm text-[#0F172A] leading-tight">{item.name}</h4>
      
      {/* MENAMPILKAN UKURAN JIKA ADA */}
      {item.selectedSize && (
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Size:</span>
          <span className="bg-orange-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md italic">
            {item.selectedSize}
          </span>
        </div>
      )}

      <p className="text-orange-600 font-bold text-xs mt-1">Rp {item.price.toLocaleString('id-ID')}</p>
      
      <div className="flex items-center gap-3 mt-3">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
          className="p-1 bg-white rounded-lg border shadow-sm hover:bg-gray-50 active:scale-90 transition-all"
        >
          <Minus size={14}/>
        </button>
        <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
          className="p-1 bg-white rounded-lg border shadow-sm hover:bg-gray-50 active:scale-90 transition-all"
        >
          <Plus size={14}/>
        </button>
      </div>
    </div>
    <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 p-2 transition-colors">
      <Trash2 size={18}/>
    </button>
  </div>
))}
              </div>

              {/* BAGIAN CHECKOUT YANG DIPERBAIKI */}
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Total Pembayaran</span>
                  <span className="text-2xl font-black text-[#0F172A]">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  disabled={items.length === 0}
                  className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#0F172A] transition-all shadow-xl shadow-orange-900/20 disabled:opacity-50 disabled:grayscale cursor-pointer active:scale-95"
                >
                  Pesan via WhatsApp
                </button>
                
                <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  Transaksi Aman • Langsung ke Admin
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}