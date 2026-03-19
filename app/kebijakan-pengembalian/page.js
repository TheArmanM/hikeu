'use client'
import { motion } from 'framer-motion';
import { RefreshCcw, ShieldCheck, Truck, Clock, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const waNumber = "6285842326328";
const templatePesan = `Halo Admin HIKEU,%0A%0ASaya ingin mengajukan pengembalian/tukar barang dengan detail berikut:%0A%0A- No. Pesanan: %0A- Nama Produk: %0A- Alasan: %0A- Ukuran Saat Ini: %0A- Tukar ke Ukuran (Jika ada): %0A%0ASaya sudah menyiapkan video unboxing sesuai kebijakan. Mohon arahannya. Terima kasih!`;

export default function ReturnPolicy() {
  const policies = [
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Batas Waktu 7 Hari",
      desc: "Permintaan pengembalian maksimal 7 hari setelah produk diterima menurut catatan kurir."
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={24} />,
      title: "Kondisi Original",
      desc: "Produk harus dalam kondisi baru, belum dipakai mendaki, tag label masih terpasang, dan box asli tidak rusak."
    },
    {
      icon: <RefreshCcw className="text-orange-600" size={24} />,
      title: "Salah Ukuran?",
      desc: "Bisa tukar ukuran selama stok masih tersedia. Ongkir ditanggung sepenuhnya oleh pembeli."
    },
    {
      icon: <Truck className="text-orange-600" size={24} />,
      title: "Cacat Produksi",
      desc: "Jika ada sobekan atau kerusakan resleting dari pabrik, kami ganti baru & ongkir kami tanggung 100%."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      {/* Header Section */}
      <div className="bg-[#0F172A] text-white pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <RefreshCcw size={400} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-white transition-colors">
            <ChevronLeft size={16} /> Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Return <span className="text-orange-600">Policy.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium uppercase tracking-widest leading-relaxed">
            Kami memastikan setiap gear yang keluar dari warehouse HIKEU siap menghadapi medan ekstrem. Jika tidak sesuai, kami bantu selesaikan.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        {/* Grid Kebijakan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {policies.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 flex flex-col gap-4"
            >
              <div className="p-4 bg-orange-50 w-fit rounded-2xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-black uppercase italic text-[#0F172A]">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Alur Pengembalian */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#0F172A] text-white rounded-[40px] p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-10 text-center tracking-tight">
            Cara Klaim Pengembalian
          </h2>
          
          <div className="space-y-12 relative">
            {/* Garis vertikal di desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-1 text-center md:text-right">
                <span className="text-orange-600 font-black text-4xl block mb-2">01.</span>
                <h4 className="font-bold uppercase tracking-widest mb-2">Siapkan Bukti</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Wajib menyertakan Video Unboxing tanpa jeda saat paket pertama kali dibuka.</p>
              </div>
              <div className="w-4 h-4 bg-orange-600 rounded-full z-10 hidden md:block shadow-[0_0_20px_rgba(234,88,12,0.6)]" />
              <div className="flex-1" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-1 hidden md:block" />
              <div className="w-4 h-4 bg-orange-600 rounded-full z-10 hidden md:block shadow-[0_0_20px_rgba(234,88,12,0.6)]" />
              <div className="flex-1 text-center md:text-left">
                <span className="text-orange-600 font-black text-4xl block mb-2">02.</span>
                <h4 className="font-bold uppercase tracking-widest mb-2">Hubungi Admin</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Kirimkan format: No. Pesanan - Keluhan - Video ke WhatsApp HIKEU.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-1 text-center md:text-right">
                <span className="text-orange-600 font-black text-4xl block mb-2">03.</span>
                <h4 className="font-bold uppercase tracking-widest mb-2">Kirim Kembali</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Setelah disetujui, kirim produk ke alamat warehouse kami dengan packing aman.</p>
              </div>
              <div className="w-4 h-4 bg-orange-600 rounded-full z-10 hidden md:block shadow-[0_0_20px_rgba(234,88,12,0.6)]" />
              <div className="flex-1" />
            </div>
          </div>

          <div className="mt-16 text-center">
           <Link 
  href={`https://wa.me/${waNumber}?text=${templatePesan}`}
  target="_blank"
  className="inline-flex items-center gap-3 bg-orange-600 hover:bg-white hover:text-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl shadow-orange-900/40"
>
  <MessageCircle size={20} /> Hubungi CS HIKEU
</Link>
          </div>
        </motion.section>

        {/* Disclaimer Penting */}
        <div className="mt-12 text-center px-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed">
            HIKEU Berhak menolak pengembalian jika ditemukan indikasi kecurangan atau produk telah digunakan di luar pengujian standar.
          </p>
        </div>
      </div>
    </div>
  );
}