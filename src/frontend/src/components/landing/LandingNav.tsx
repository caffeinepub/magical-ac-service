import { SiWhatsapp } from 'react-icons/si';
import { Phone } from 'lucide-react';

export default function LandingNav() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bookingSection = document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-service-primary underline underline-offset-4 italic">
            Magical AC Service
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="tel:+918000262644"
              className="hidden md:flex items-center gap-2 bg-service-blue text-white px-5 py-2 rounded-lg font-bold hover:opacity-90 transition"
            >
              <Phone className="w-4 h-4" />
              80002 62644
            </a>
            <a
              href="#book"
              onClick={scrollToBooking}
              className="flex items-center gap-2 bg-service-orange text-white px-5 py-2 rounded-lg font-bold shadow-md hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
