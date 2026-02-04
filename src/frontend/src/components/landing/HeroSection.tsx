import { SiWhatsapp } from 'react-icons/si';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1621905235850-66c430939502?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Magical AC Service
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-200 font-medium">
          Fast and Reliable AC Service in Ahmedabad
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918000262644?text=Hi, I want to book Magical AC Service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            <SiWhatsapp className="text-2xl" />
            WhatsApp Booking
          </a>
          <a
            href="tel:+918000262644"
            className="flex items-center gap-2 bg-white text-service-blue px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-100 transition"
          >
            <Phone className="w-5 h-5" />
            Call: 80002 62644
          </a>
        </div>
      </div>
    </section>
  );
}
