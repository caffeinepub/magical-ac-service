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
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700 underline underline-offset-4 italic">
          Magical AC Service
        </div>
        <a
          href="#book"
          onClick={scrollToBooking}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-orange-600 transition"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
