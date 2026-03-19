'use client'
import { useCart } from '../store/useCart';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addItem } = useCart();

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 bg-[#F3F4F6] flex items-center justify-center p-8">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="max-h-[400px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-orange-600 font-black text-xs uppercase tracking-widest mb-2">
              {selectedProduct.category}
            </span>
            <h2 className="text-3xl font-black text-[#1F2937] mb-4 leading-tight">
              {selectedProduct.name}
            </h2>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Rp {selectedProduct.price.toLocaleString('id-ID')}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {selectedProduct.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <ShieldCheck size={18} className="text-green-500" /> Garansi Produk 1 Tahun
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Truck size={18} className="text-blue-500" /> Pengiriman Seluruh Indonesia
              </div>
            </div>

            <button 
              onClick={() => {
                addItem(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full bg-[#1F2937] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
            >
              <ShoppingCart size={20} /> TAMBAH KE KERANJANG
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}