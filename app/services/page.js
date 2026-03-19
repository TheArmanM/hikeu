import { ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { title: 'Garansi Seumur Hidup', desc: 'Setiap produk HIKEU dilindungi garansi untuk memastikan keamanan petualanganmu.', icon: <ShieldCheck size={32}/> },
    { title: 'Pengiriman Cepat', desc: 'Layanan logistik prioritas ke seluruh pelosok pegunungan Indonesia.', icon: <Truck size={32}/> },
    { title: 'Konsultasi Gear', desc: 'Bingung pilih alat? Admin kami siap membantu memilihkan perlengkapan yang tepat.', icon: <Headphones size={32}/> },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-[#0F172A] uppercase italic mb-16 tracking-tighter text-center">Layanan Eksklusif</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 hover:scale-105 transition-transform">
              <div className="text-orange-600 mb-6">{s.icon}</div>
              <h4 className="text-lg font-black uppercase mb-3 text-[#0F172A]">{s.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}