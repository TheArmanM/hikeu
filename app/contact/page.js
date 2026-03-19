export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-[#0F172A] uppercase italic mb-4 tracking-tighter">Hubungi Kami</h1>
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-12">Ada pertanyaan? Tim HIKEU siap membantu.</p>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama Anda" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Pesan</label>
            <textarea rows="4" placeholder="Apa yang bisa kami bantu?" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:border-orange-600 outline-none resize-none"></textarea>
          </div>
          <button className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}