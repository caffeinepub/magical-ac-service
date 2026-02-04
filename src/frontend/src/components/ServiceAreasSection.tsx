import React from 'react';

export default function ServiceAreasSection() {
  const areas = [
    'Hanspura',
    'Shahibaug',
    'New Shahibaug',
    'Nana Chiloda',
    'Nikol',
    'Naroda',
    'Bapunagar',
    'Odhav',
    'Satellite',
    'Prahladnagar',
    'Bopal',
    'Gota',
    'Science City',
    'Gandhinagar (All Sectors)',
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Service Areas
        </h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {areas.map((area, index) => (
              <div key={index} className="text-center py-2">
                {area}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-600 font-medium italic">
          * We provide <strong>Home Service</strong> in all the areas shown above.
        </div>
      </div>
    </section>
  );
}
