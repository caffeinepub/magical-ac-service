export default function OurWorkSection() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1621905235850-66c430939502?auto=format&fit=crop&w=600&h=400&q=80',
      title: 'Indoor AC Unit Cleaning',
      caption: 'Deep cleaning of split AC units'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&h=400&q=80',
      title: 'Outdoor Unit Maintenance',
      caption: 'Professional outdoor condenser cleaning'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1631545806609-4b0e36e4c824?auto=format&fit=crop&w=600&h=400&q=80',
      title: 'Complete AC Service',
      caption: 'Full system inspection and cleaning'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Work
        </h2>
        <p className="text-center text-gray-600 mb-12 font-medium italic">
          Professional indoor and outdoor AC cleaning
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="overflow-hidden rounded-xl shadow-lg border-2 border-blue-100 hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover object-center transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 bg-white text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
