import { ArrowRight, Mountain, Package, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const coreValues = [
    { title: 'Inovasi Petualang', desc: 'Desain yang terus diperbarui untuk performa maksimal di alam bebas.', icon: <Zap size={24}/> },
    { title: 'Material Premium', desc: 'Diuji di medan terestrial untuk ketahanan dan kenyamanan optimal.', icon: <Mountain size={24}/> },
    { title: 'Kualitas Global', desc: 'Standardisasi pabrik modern untuk produk berkelas dunia.', icon: <Package size={24}/> },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-[#0F172A] text-white pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=2069" 
            alt="Facility"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              #ExploreWithHikeu
            </span>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
              Tentang <br />
              <span className="text-orange-600">Hikeu<span className="text-white">.</span></span>
            </h1>
            <p className="max-w-xl text-lg text-gray-300 font-medium leading-relaxed">
              Kami percaya bahwa setiap langkah di alam bebas adalah perjalanan menemukan jati diri. HIKEU hadir sebagai pendukung setia perjalanan tersebut.
            </p>
          </div>
          <div className="hidden lg:block">
            <blockquote className="text-4xl font-black uppercase italic leading-tight text-white/90">
              "Explore the world, <span className="text-orange-600">find your soul</span>."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROSES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 aspect-[16/10] bg-white rounded-[40px] shadow-2xl p-3 border border-gray-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=2069" 
              alt="Manufacturing"
              className="w-full h-full object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="w-16 h-1 bg-orange-600 mb-6"/>
            <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter uppercase italic mb-8 leading-tight">
              Kualitas Tanpa Kompromi.
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Setiap perlengkapan HIKEU melalui proses kurasi material yang ketat untuk memastikan Anda siap menghadapi medan apa pun.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {coreValues.map((v, i) => (
            <div key={i} className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 shadow-sm group hover:bg-[#0F172A] transition-all duration-300">
              <div className="text-orange-600 bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                {v.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-4 text-[#0F172A] group-hover:text-white transition-colors">
                {v.title}
              </h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CTA (UBER UPDATED) */}
      <section className="relative h-[70vh] bg-[#0F172A] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526401481657-37d14eda2280?auto=format&fit=crop&q=80&w=2070" 
          alt="Action"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"/>
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-center text-center max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none">
            Mulai Petualanganmu Sekarang<span className="text-orange-600">.</span>
          </h2>
          <Link href="/#katalog" className="flex items-center gap-3 px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group">
            Lihat Produk Terbaik <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}