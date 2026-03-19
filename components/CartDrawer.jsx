'use client'
import { useCart } from '../store/useCart';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem } = useCart();
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" />
      <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[120] flex flex-col">
        <div className="p-6 border-b flex justify-between items-center bg-white">
          <h2 className="text-xl font-black text-[#1F2937]">KERANJANG</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-black"><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F9FAFB]">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm items-center">
              <img src={item.image} className="h-20 w-20 bg-gray-100 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1F2937] leading-tight mb-1">{item.name}</h4>
                <p className="text-orange-600 font-black text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-xl p-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-[#1F2937] hover:text-orange-600"><Minus size={14} strokeWidth={3} /></button>
                    <span className="text-xs font-black w-6 text-center text-[#1F2937]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-[#1F2937] hover:text-orange-600"><Plus size={14} strokeWidth={3} /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-gray-300 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-8 border-t bg-white">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Bayar</span>
            <span className="text-2xl font-black text-[#1F2937]">Rp {totalPrice.toLocaleString('id-ID')}</span>
          </div>
          <button className="w-full bg-[#1F2937] text-white py-5 rounded-2xl font-black hover:bg-orange-600 shadow-xl transition-all">CHECKOUT KE WHATSAPP</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}