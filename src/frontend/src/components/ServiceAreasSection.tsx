import React from 'react';

export default function ServiceAreasSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Service Areas (Service Areas)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
            <h3 className="font-bold text-blue-700 mb-3 underline">Key Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <span>📍 Nikol</span>
              <span>📍 Naroda</span>
              <span>📍 Hanspura</span>
              <span>📍 Nana Chiloda</span>
              <span>📍 Shahibaug</span>
              <span>📍 New Shahibaug</span>
              <span>📍 Bapunagar</span>
              <span>📍 Odhav</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-700 mb-3 underline">West Ahmedabad</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <span>📍 Satellite</span>
              <span>📍 Prahladnagar</span>
              <span>📍 Bopal</span>
              <span>📍 South Bopal</span>
              <span>📍 Thaltej</span>
              <span>📍 Bodakdev</span>
              <span>📍 Gota</span>
              <span>📍 Science City</span>
              <span>📍 Jagatpur</span>
              <span>📍 Vaishno Devi</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600">
            <h3 className="font-bold text-blue-700 mb-3 underline">Gandhinagar & Others</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <span>📍 Sector 1 to 30</span>
              <span>📍 Sargasan</span>
              <span>📍 Kudasan</span>
              <span>📍 Raysan</span>
              <span>📍 Infocity</span>
              <span>📍 GIFT City</span>
              <span>📍 Motera</span>
              <span>📍 Chandkheda</span>
              <span>📍 Sabarmati</span>
              <span>📍 Ranip</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-600 font-medium italic">
          * We provide <strong>Home Service</strong> in all the areas shown above.
        </div>
      </div>
    </section>
  );
}
