'use client'
import { ArrowLeft, Smartphone, Chrome, Apple } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-white">
      
      {/* SISI KIRI: FORM LOGIN */}
      <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative">
        {/* Tombol Kembali */}
        <Link 
          href="/" 
          className="absolute top-10 left-8 lg:left-20 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft size={14} /> Kembali ke Beranda
        </Link>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tighter leading-none mb-4 uppercase italic">
            Masuk atau <br /> Daftar Akun
          </h1>
          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
            Nikmati akses eksklusif ke koleksi terbaru Hikeu dan pantau status petualanganmu.
          </p>

          {/* Banner Info */}
          <div className="bg-orange-50 border border-orange-100 p-5 rounded-3xl flex gap-4 items-start mb-10">
            <div className="bg-orange-600 p-2.5 rounded-xl text-white shadow-lg shadow-orange-200">
              <Smartphone size={18} />
            </div>
            <p className="text-[11px] font-bold text-orange-900 leading-normal uppercase tracking-tight">
              Gunakan nomor handphone terdaftar untuk masuk ke akun Hikeu kamu.
            </p>
          </div>

          {/* Form Input */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Nomor Handphone</label>
              <div className="flex gap-3">
                <div className="px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-black text-[#0F172A]">+62</div>
                <input 
                  type="tel" 
                  placeholder="Masukkan nomor handphone" 
                  className="flex-1 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-orange-600 focus:ring-4 focus:ring-orange-50 outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 active:scale-95">
              Lanjutkan
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-12 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
            <span className="relative bg-white px-6 text-[10px] font-black text-gray-300 uppercase tracking-widest">Atau</span>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
              <Chrome size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
              <Apple size={18} className="text-gray-400 group-hover:text-black transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Apple ID</span>
            </button>
          </div>

          <p className="mt-16 text-center lg:text-left text-[9px] font-bold text-gray-300 uppercase leading-loose tracking-[0.2em]">
            Halaman ini dilindungi oleh ReCAPTCHA dan <br />
            <span className="text-orange-600 underline cursor-pointer hover:text-orange-700 transition-colors">Kebijakan Privasi HIKEU</span> berlaku.
          </p>
        </div>
      </div>

      {/* SISI KANAN: VISUAL BRAND */}
      <div className="hidden lg:flex w-1/2 bg-[#0F172A] relative overflow-hidden items-end p-20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-30 grayscale">
            <img 
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=2073" 
              className="w-full h-full object-cover" 
              alt="Background"
            />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-8xl font-black text-white italic tracking-tighter uppercase mb-2 leading-none">
            HIKEU<span className="text-orange-600">.</span>
          </h2>
          <p className="text-gray-400 font-bold italic text-xl tracking-tight uppercase">
            "Explore the world, find your soul."
          </p>
        </div>

        {/* Aksesoris Grafis */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}