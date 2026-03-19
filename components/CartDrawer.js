// 'use client'
// import { useCart } from '../store/useCart';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
// import { generateWhatsAppLink } from '../lib/utils';

// export default function CartDrawer() {
//   const { items, isOpen, setIsOpen, updateQuantity, removeItem } = useCart();
  
//   const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Overlay */}
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
//           />
          
//           {/* Drawer Content */}
//           <motion.div 
//             initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
//             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//             className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[60] flex flex-col"
//           >
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold flex items-center gap-2">
//                 <ShoppingBag size={22} /> Keranjang Belanja
//               </h2>
//               <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-6">
//               {items.length === 0 ? (
//                 <p className="text-center text-gray-500 mt-10">Keranjang masih kosong.</p>
//               ) : (
//                 items.map((item) => (
//                   <div key={item.id} className="flex gap-4 items-center">
//                     <div className="h-20 w-20 bg-gray-100 rounded-lg flex-shrink-0" />
//                     <div className="flex-1">
//                       <h4 className="font-bold text-sm">{item.name}</h4>
//                       <p className="text-gray-600 text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
//                       <div className="flex items-center gap-3 mt-2">
//                         <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded"><Minus size={14} /></button>
//                         <span className="text-sm font-medium">{item.quantity}</span>
//                         <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded"><Plus size={14} /></button>
//                       </div>
//                     </div>
//                     <button onClick={() => removeItem(item.id)} className="text-red-500 text-xs">Hapus</button>
//                   </div>
//                 ))
//               )}
//             </div>

//             {items.length > 0 && (
//               <div className="p-6 border-t bg-gray-50">
//                 <div className="flex justify-between mb-4">
//                   <span className="font-medium text-gray-600">Subtotal</span>
//                   <span className="font-bold text-xl text-[#1F2937]">Rp {totalPrice.toLocaleString('id-ID')}</span>
//                 </div>
//                 <a 
//                   href={generateWhatsAppLink(items, totalPrice)}
//                   target="_blank"
//                   className="block w-full bg-[#25D366] text-white text-center py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors"
//                 >
//                   Pesan via WhatsApp
//                 </a>
//               </div>
//             )}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }