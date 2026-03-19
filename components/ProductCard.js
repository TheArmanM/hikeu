'use client'
import { useState } from 'react';
import { useCart } from '../store/useCart';
import { Plus, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState(false);
  
  const addItem = useCart((state) => state.addItem);
  const openCart = useCart((state) => state.setIsOpen);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    
    // VALIDASI UKURAN: Jika produk punya pilihan ukuran tapi belum dipilih
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError(true);
      // Jika modal belum terbuka (klik dari tombol plus di card), buka modalnya
      if (!isModalOpen) setIsModalOpen(true);
      return;
    }

    // Tambahkan ke keranjang dengan properti ukuran
    addItem({ ...product, selectedSize });
    // openCart(true); 
    setIsModalOpen(false);
    setSelectedSize('');
    setError(false);
  };

  return (
    <>
      {/* CARD PRODUK UTAMA */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-3xl md:rounded-4xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
      >
        <div className="aspect-square rounded-[18px] md:rounded-3xl bg-gray-100 overflow-hidden mb-3 md:mb-4 relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-orange-600 text-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg hover:bg-black transition-colors z-10"
          >
            <Plus size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
        <h3 className="font-black uppercase italic text-[10px] md:text-sm text-[#0F172A] mb-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-orange-600 font-bold text-[11px] md:text-base mt-auto">
          Rp {product.price.toLocaleString('id-ID')}
        </p>
      </div>

      {/* POPUP DETAIL PRODUK */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { setIsModalOpen(false); setError(false); }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-200"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[92%] max-w-90 md:max-w-4xl h-137.5 md:h-auto z-210 rounded-4xl md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => { setIsModalOpen(false); setError(false); }}
                className="absolute top-4 right-4 z-30 p-2.5 bg-white/80 backdrop-blur-md md:bg-gray-100 rounded-full shadow-sm hover:bg-orange-600 hover:text-white transition-all"
              >
                <X size={18} />
              </button>

              {/* SISI GAMBAR */}
              <div className="h-50 md:h-auto md:w-1/2 bg-[#F8F9FA] flex items-center justify-center p-6 shrink-0 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-contain drop-shadow-2xl md:scale-110" 
                />
              </div>

              {/* SISI INFO */}
              <div className="flex-1 p-6 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
                <div>
                  <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                    Official Gear
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black uppercase italic leading-[0.9] mb-3 text-[#0F172A] tracking-tighter">
                    {product.name}
                  </h2>
                  <p className="text-xl md:text-2xl font-black text-gray-900 mb-6">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>

                  {/* LOGIKA PILIHAN UKURAN */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex justify-between">
                        Pilih Ukuran 
                        {error && <span className="text-red-500 animate-pulse italic">! Wajib dipilih</span>}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => { setSelectedSize(size); setError(false); }}
                            className={`min-w-11.25 h-11 rounded-xl border-2 text-[11px] font-black transition-all transform active:scale-90 ${
                              selectedSize === size 
                              ? 'border-orange-600 bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
                              : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="prose prose-sm text-gray-500 font-medium leading-relaxed mb-6">
                    <p className="text-xs md:text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full bg-[#0F172A] text-white py-4 md:py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-orange-600 active:scale-[0.97] transition-all shadow-xl shadow-gray-200"
                  >
                    <ShoppingCart size={18} /> TAMBAH KE KERANJANG
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