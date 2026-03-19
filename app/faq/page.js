'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  {
    category: "Pemesanan & Stok",
    questions: [
      {
        q: "Bagaimana cara memesan produk HIKEU?",
        a: "Pilih produk yang kamu inginkan, tentukan ukuran (untuk pakaian/sepatu), tambahkan ke keranjang, lalu klik 'Pesan via WhatsApp'. Kamu akan diarahkan langsung ke Admin kami untuk proses pembayaran dan pengiriman."
      },
      {
        q: "Apakah barang yang habis akan diproduksi kembali (Restock)?",
        a: "Sebagian besar artikel 'Core Series' kami akan di-restock secara berkala. Namun, untuk koleksi 'Limited Edition', biasanya tidak akan diproduksi kembali setelah habis."
      }
    ]
  },
  {
    category: "Pengiriman",
    questions: [
      {
        q: "Berapa lama proses pengiriman gear saya?",
        a: "Pesanan sebelum jam 15.00 WIB akan dikirim di hari yang sama. Estimasi sampai tergantung lokasi: Pulau Jawa (1-3 hari), Luar Pulau Jawa (3-7 hari)."
      },
      {
        q: "Apakah bisa menggunakan jasa kurir instan (Gojek/Grab)?",
        a: "Saat ini kami melayani pengiriman instan khusus untuk area sekitar warehouse kami. Silakan konfirmasi ke Admin WhatsApp sebelum memesan."
      }
    ]
  },
  {
    category: "Produk & Perawatan",
    questions: [
      {
        q: "Apakah jaket HIKEU benar-benar waterproof?",
        a: "Jaket Alpine Series kami menggunakan material 3-Layer Gore-Tex dengan teknologi seam-sealed yang mampu menahan hujan deras. Namun, pastikan perawatan menggunakan sabun khusus agar membran tidak rusak."
      },
      {
        q: "Bagaimana cara mencuci sepatu gunung HIKEU?",
        a: "Jangan gunakan mesin cuci. Gunakan sikat halus dan air sabun netral. Keringkan dengan cara diangin-anginkan, jangan jemur langsung di bawah terik matahari."
      }
    ]
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
      >
        <span className="font-black uppercase italic text-sm md:text-base text-[#0F172A] leading-tight">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-400 shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#0F172A] text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-white transition-colors">
            <ChevronLeft size={16} /> Kembali ke Toko
          </Link>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            FAQ<span className="text-orange-600">.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto font-medium uppercase tracking-[0.2em] leading-relaxed">
            Butuh jawaban cepat? Kami sudah merangkum hal-hal yang paling sering ditanyakan oleh para pendaki.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 -mt-12 pb-24 relative z-20">
        <div className="space-y-12">
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 p-8 border border-gray-50">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-6 flex items-center gap-2">
                <HelpCircle size={14} /> {category.category}
              </h2>
              <div className="divide-y divide-gray-50">
                {category.questions.map((item, qIdx) => {
                  const currentIndex = `${catIdx}-${qIdx}`;
                  return (
                    <AccordionItem
                      key={qIdx}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === currentIndex}
                      onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Help Box */}
        <div className="mt-16 bg-[#F8F9FA] rounded-[32px] p-8 text-center border-2 border-dashed border-gray-200">
          <h3 className="text-lg font-black uppercase italic text-[#0F172A] mb-2">Masih punya pertanyaan lain?</h3>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-6">Admin kami siap membantu kamu 24/7 di WhatsApp.</p>
          <Link 
            href="https://wa.me/6285842326328"
            className="inline-flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg"
          >
            <MessageCircle size={18} /> Chat Admin Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}