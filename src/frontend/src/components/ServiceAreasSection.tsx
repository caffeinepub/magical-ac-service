import React from 'react';

interface ServiceArea {
  name: string;
  accentColor: 'orange' | 'blue';
}

const serviceAreas: ServiceArea[] = [
  { name: 'Hanspura (હંસપુરા)', accentColor: 'orange' },
  { name: 'Shahibaug (શાહીબાગ)', accentColor: 'orange' },
  { name: 'New Shahibaug', accentColor: 'orange' },
  { name: 'Nana Chiloda', accentColor: 'orange' },
  { name: 'Nikol (નિકોલ)', accentColor: 'blue' },
  { name: 'Naroda (નરોડા)', accentColor: 'blue' },
  { name: 'Bapunagar', accentColor: 'blue' },
  { name: 'Gandhinagar', accentColor: 'blue' },
];

export default function ServiceAreasSection() {
  return (
    <section className="py-12 bg-service-light">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-service-primary italic">
          Our Special Service in These Areas of Ahmedabad
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-xl shadow-sm border-l-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                area.accentColor === 'orange'
                  ? 'border-service-orange'
                  : 'border-service-blue'
              }`}
            >
              <p className="font-bold text-lg text-gray-800">{area.name}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-gray-600 font-medium">
          * Special discount available for customers in Hanspura and Nana Chiloda!
        </p>
      </div>
    </section>
  );
}
