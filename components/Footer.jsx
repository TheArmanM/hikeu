'use client'
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    eksplor: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Layanan', href: '/services' },
      { name: 'Katalog Produk', href: '/#katalog' },
      { name: 'Kontak Kami', href: '/contact' },
    ],
    dukungan: [
      { name: 'Panduan Ukuran', href: '#' },
      { name: 'Kebijakan Pengembalian', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Konfirmasi Bayar', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black italic tracking-tighter uppercase">
              HIKEU<span className="text-orange-600">.</span>
            </Link>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              "Explore the world, find your soul." <br/>
              Menyediakan perlengkapan outdoor berkualitas untuk menemani setiap petualanganmu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-orange-600 transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-orange-600 transition-all group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Eksplorasi</h4>
            <ul className="space-y-4">
              {footerLinks.eksplor.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Dukungan</h4>
            <ul className="space-y-4">
              {footerLinks.dukungan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Hubungi Kami</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-gray-400">
                <MapPin size={20} className="text-white shrink-0" />
                <p className="text-sm font-bold">Purwokerto, Jawa Tengah, Indonesia</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone size={20} className="text-white shrink-0" />
                <p className="text-sm font-bold">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            © {currentYear} HIKEU INDONESIA. NO ACCOUNT REQUIRED.
          </p>
        </div>
      </div>
    </footer>
  );
}