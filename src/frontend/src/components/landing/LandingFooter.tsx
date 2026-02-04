import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 text-center">
      <h3 className="text-3xl font-bold text-blue-400 mb-2 italic">
        Magical AC Service
      </h3>
      <p className="text-gray-400 mb-6">Experience the cooling with Magic!</p>
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="tel:+918000262644"
          className="bg-service-blue p-4 rounded-full hover:opacity-90 transition"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/918000262644"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full hover:opacity-90 transition"
          aria-label="WhatsApp us"
        >
          <SiWhatsapp className="text-xl" />
        </a>
      </div>
      <div className="border-t border-gray-800 pt-6 px-4">
        <p className="text-gray-600 text-sm mb-2">
          © 2026 Magical AC Service | Best Technicians in Ahmedabad & Gandhinagar
        </p>
        <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
