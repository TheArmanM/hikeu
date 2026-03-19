'use client'
import { motion } from 'framer-motion';
import { Ruler, ChevronLeft, Shirt, Footprints } from 'lucide-react';
import Link from 'next/link';

export default function SizeGuide() {
  const apparelSizes = [
    { size: 'S', chest: '92-96', waist: '78-82', height: '165-170' },
    { size: 'M', chest: '97-101', waist: '83-87', height: '171-175' },
    { size: 'L', chest: '102-106', waist: '88-92', height: '176-180' },
    { size: 'XL', chest: '107-111', waist: '93-97', height: '181-185' },
    { size: 'XXL', chest: '112-118', waist: '98-104', height: '186-190' },
  ];

  const footwearSizes = [
    { eu: '39', us: '6.5', uk: '5.5', cm: '24.5' },
    { eu: '40', us: '7.5', uk: '6.5', cm: '25.5' },
    { eu: '41', us: '8.5', uk: '7.5', cm: '26.5' },
    { eu: '42', us: '9', uk: '8', cm: '27.0' },
    { eu: '43', us: '10', uk: '9', cm: '28.0' },
    { eu: '44', us: '10.5', uk: '9.5', cm: '28.5' },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Statis */}
      <div className="bg-[#0F172A] text-white pt-16 pb-12 px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">
          <ChevronLeft size={16} /> Kembali ke Toko
        </Link>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
          Size <span className="text-orange-600">Guide.</span>
        </h1>
        <p className="text-gray-400 text-sm mt-4 max-w-md font-medium uppercase tracking-widest leading-relaxed">
          Pastikan gear HIKEU kamu pas di badan untuk performa maksimal di medan ekstrem.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8">
        {/* SEKSI APPAREL */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-6 md:p-10 mb-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
              <Shirt size={24} />
            </div>
            <h2 className="text-xl font-black uppercase italic text-[#0F172A]">Apparel & Outerwear</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Size</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Chest (cm)</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Waist (cm)</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Height (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {apparelSizes.map((item) => (
                  <tr key={item.size} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 font-black text-[#0F172A]">{item.size}</td>
                    <td className="py-5 text-sm font-medium text-gray-600">{item.chest}</td>
                    <td className="py-5 text-sm font-medium text-gray-600">{item.waist}</td>
                    <td className="py-5 text-sm font-medium text-gray-600">{item.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* SEKSI FOOTWEAR */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-6 md:p-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Footprints size={24} />
            </div>
            <h2 className="text-xl font-black uppercase italic text-[#0F172A]">Footwear / Sepatu</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">EU</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">US</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">UK</th>
                  <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Panjang (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {footwearSizes.map((item) => (
                  <tr key={item.eu} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 font-black text-[#0F172A]">{item.eu}</td>
                    <td className="py-5 text-sm font-medium text-gray-600">{item.us}</td>
                    <td className="py-5 text-sm font-medium text-gray-600">{item.uk}</td>
                    <td className="py-5 text-sm font-black text-orange-600 italic">{item.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* TIPS PENGUKURAN */}
        <div className="mt-12 p-8 bg-[#F8F9FA] rounded-[32px] border-2 border-dashed border-gray-200">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#0F172A] mb-4 flex items-center gap-2">
            <Ruler size={18} /> Tips Pengukuran:
          </h3>
          <ul className="text-xs text-gray-500 space-y-3 font-medium leading-relaxed">
            <li>• Gunakan kaus kaki saat mengukur kaki untuk mendapatkan ukuran sepatu yang paling akurat.</li>
            <li>• Jika hasil ukur berada di antara dua ukuran, sebaiknya pilih ukuran yang lebih besar (**Upsize**).</li>
            <li>• Untuk jaket gunung, sisakan ruang sedikit untuk lapisan dalam (Base layer/Fleece).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}