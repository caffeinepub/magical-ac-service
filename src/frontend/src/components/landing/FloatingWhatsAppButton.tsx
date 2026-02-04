export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/918000262644"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all hover:scale-110 font-bold text-sm"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
