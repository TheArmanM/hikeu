import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'HIKEU - Adventure Gear',
  description: 'Toko perlengkapan outdoor terbaik.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#F9FAFB]">
        {/* Navbar Global yang Solid Hitam */}
        <Navbar />
        
        {/* Konten halaman dengan padding-top pt-20 agar tidak tertutup navbar h-20 */}
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}