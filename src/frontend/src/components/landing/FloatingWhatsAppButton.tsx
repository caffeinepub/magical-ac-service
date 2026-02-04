import { SiWhatsapp } from 'react-icons/si';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/918000262644"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="text-3xl" />
    </a>
  );
}
