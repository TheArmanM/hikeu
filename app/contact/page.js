// 'use client'
// import { useState } from 'react';
// import { MessageCircle, ChevronLeft } from 'lucide-react';
// import Link from 'next/link';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     nama: '',
//     pesan: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
    
//     // Pastikan input tidak kosong
//     if (!formData.nama || !formData.pesan) {
//       alert("Mohon isi nama dan pesan Anda.");
//       return;
//     }

//     const nomorWA = "6285842326328"; 
//     const teksPesan = `Halo HIKEU!%0ASaya *${formData.nama}*%0A%0A*Pesan:*%0A${formData.pesan}`;

//     // Membuka WhatsApp di tab baru
//     window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, '_blank');
//   };

//   return (
//     <div className="bg-white min-h-screen py-20 px-6">
//       <div className="max-w-3xl mx-auto">
//         <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-8 hover:text-black transition-colors">
//           <ChevronLeft size={14} /> Kembali ke Beranda
//         </Link>
        
//         <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] uppercase italic mb-4 tracking-tighter">
//           Hubungi <span className="text-orange-600">Kami.</span>
//         </h1>
//         <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-12 leading-relaxed">
//           Ada pertanyaan teknis atau sekadar menyapa? <br/>Tim HIKEU siap membantu ekspedisi Anda.
//         </p>
        
//         <form onSubmit={handleSendMessage} className="space-y-6">
//           <div className="space-y-2">
//             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
//               Nama Lengkap
//             </label>
//             <input 
//               type="text" 
//               name="nama"
//               required
//               value={formData.nama}
//               onChange={handleInputChange}
//               placeholder="Masukkan nama Anda" 
//               className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none transition-all focus:bg-white" 
//             />
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
//               Pesan Anda
//             </label>
//             <textarea 
//               name="pesan"
//               required
//               rows="5" 
//               value={formData.pesan}
//               onChange={handleInputChange}
//               placeholder="Tuliskan detail pertanyaan Anda di sini..." 
//               className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none resize-none transition-all focus:bg-white"
//             ></textarea>
//           </div>
          
//           <button 
//             type="submit"
//             className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95"
//           >
//             <MessageCircle size={18} /> Kirim via WhatsApp
//           </button>
//         </form>

//         <div className="mt-16 pt-10 border-t border-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Support</h4>
//             <p className="text-sm font-bold text-[#0F172A]">support@hikeu.com</p>
//           </div>
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Basecamp</h4>
//             <p className="text-sm font-bold text-[#0F172A]">Purwokerto, Jawa Tengah, Indonesia</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// versi 2


'use client'
import { useState } from 'react';
import { MessageCircle, ChevronLeft, Mail, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: '',
    pesan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.pesan) {
      alert("Mohon isi nama dan pesan Anda.");
      return;
    }
    const nomorWA = "6285842326328"; 
    const teksPesan = `Halo HIKEU Basecamp!%0ASaya *${formData.nama}*%0A%0A*Pesan:*%0A${formData.pesan}`;
    window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, '_blank');
  };

  const contactDetails = [
    { icon: <Phone size={18} />, label: "WhatsApp hotline", value: "+62 858 4232 6328" },
    { icon: <Mail size={18} />, label: "Official Email", value: "support@hikeu.com" },
    { icon: <MapPin size={18} />, label: "Basecamp HQ", value: "Purwokerto, Jawa Tengah" },
    { icon: <Clock size={18} />, label: "Response Time", value: "Mon-Sat (09:00 - 17:00)" },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0F172A]">
      {/* Struktur Utama: Grid 2 Kolom di Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* KOLOM KIRI: FORMULIR (Latar Belakang Putih) */}
        <div className="bg-white flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 border-r border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-lg"
          >
            {/* Tombol Kembali */}
            <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-10 hover:text-black transition-colors group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Kembali ke Toko
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-4 tracking-tighter leading-none">
              Contact <span className="text-orange-600">Us.</span>
            </h1>
            <p className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-widest mb-12 leading-relaxed opacity-80">
              Ada pertanyaan teknis mengenai gear atau kolaborasi ekspedisi? Tim HIKEU siap membantu Anda.
            </p>
            
            {/* FORM CARD */}
            <form onSubmit={handleSendMessage} className="space-y-6 bg-white p-2 rounded-3xl">
              <div className="space-y-2 relative">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                  Nama Lengkap
                </label>
                <input 
                  type="text" name="nama" required
                  value={formData.nama} onChange={handleInputChange}
                  placeholder="Masukkan nama Anda" 
                  className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-orange-100" 
                />
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                  Pesan Anda
                </label>
                <textarea 
                  name="pesan" required rows="6" 
                  value={formData.pesan} onChange={handleInputChange}
                  placeholder="Tuliskan detail pertanyaan atau pesan Anda..." 
                  className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none resize-none transition-all focus:bg-white focus:ring-2 focus:ring-orange-100"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95 transform hover:-translate-y-1"
              >
                <MessageCircle size={18} /> Kirim Pesan via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

        {/* KOLOM KANAN: INFO & VISUAL (Latar Belakang Abu-abu Terang) */}
        <div className="bg-[#F8F9FA] flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Efek visual background (opsional) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-dotted.png')]"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg relative z-10"
          >
            <div className="mb-12 border-l-4 border-orange-600 pl-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Direct Connection</h3>
                <h2 className="text-3xl font-black uppercase italic text-[#0F172A] tracking-tight">HIKEU Basecamp Hub</h2>
            </div>

            {/* Grid Info Kontak */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0 mt-1">
                    {detail.icon}
                  </div>
                  <div>
                    <h5 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{detail.label}</h5>
                    <p className="text-sm font-bold text-[#0F172A] leading-tight break-words">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bagian Peta/Visual Sederhana */}
            <div className="mt-12 bg-[#0F172A] p-8 rounded-[32px] text-white flex items-center gap-6 shadow-2xl shadow-gray-300">
                <MapPin size={40} className="text-orange-500 shrink-0" />
                <div>
                    <h4 className="font-black uppercase italic text-lg mb-1">Lokasi Kami</h4>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-widest">
                        Jl. Ekspedisi No. 1, Kec. Baturraden, Purwokerto, Jawa Tengah. (Warehouse & Office)
                    </p>
                </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  );
}