'use client'
import { useState } from 'react';
import { useCart } from '../store/useCart';
import { Plus, X, ShoppingCart, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addItem = useCart((state) => state.addItem);
  const openCart = useCart((state) => state.setIsOpen);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Mencegah modal terbuka saat klik tombol beli
    addItem(product);
    openCart(true); // Otomatis buka keranjang setelah tambah barang
  };

  return (
    <>
      {/* CARD PRODUK */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-[32px] p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
      >
        <div className="aspect-square rounded-[24px] bg-gray-100 overflow-hidden mb-4 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-orange-600 text-white p-3 rounded-xl shadow-lg hover:bg-black transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
        <h3 className="font-black uppercase italic text-sm text-[#0F172A] mb-1">{product.name}</h3>
        <p className="text-orange-600 font-bold">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>

      {/* POP-UP DETAIL PRODUK */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
            />
            
            {/* Content Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-6 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white z-[210] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>

              {/* Info Side */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Koleksi Terbatas</span>
                <h2 className="text-4xl font-black uppercase italic text-[#0F172A] leading-none mb-4">{product.name}</h2>
                <p className="text-2xl font-bold text-gray-400 mb-8">Rp {product.price.toLocaleString('id-ID')}</p>
                
                <p className="text-gray-500 font-medium leading-relaxed mb-10">
                  {product.description || "Perlengkapan petualangan HIKEU dirancang untuk kenyamanan maksimal di segala medan terjal. Material premium dan tahan cuaca."}
                </p>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      addItem(product);
                      setIsModalOpen(false);
                      openCart(true);
                    }}
                    className="flex-1 bg-orange-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95"
                  >
                    <ShoppingCart size={18} /> Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}