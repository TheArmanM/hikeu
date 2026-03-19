export const generateWhatsAppLink = (items, totalPrice) => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Hikeu
  
  const productList = items
    .map((item) => `- ${item.name} (x${item.quantity}) = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`)
    .join('\n');

  const message = `Halo Hikeu!\n\nSaya ingin memesan produk berikut:\n${productList}\n\n*Total: Rp ${totalPrice.toLocaleString('id-ID')}*\n\nMohon informasi selanjutnya. Terima kasih!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};