export default function HeroSection() {
  return (
    <section
      className="py-20 text-center text-white px-6"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Magical AC Service
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100 font-medium">
        Fastest and Most Trusted AC Service in Ahmedabad
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/918000262644?text=Hi, I want to book AC Service"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        >
          WhatsApp Booking
        </a>
        <a
          href="tel:+918000262644"
          className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-100 transition"
        >
          Call: 80002 62644
        </a>
      </div>
    </section>
  );
}
