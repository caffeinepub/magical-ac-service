import React from 'react';

export default function ServiceAreasSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-800 italic">
          Service Across Ahmedabad and Gandhinagar
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-orange-500">
            <p className="font-bold text-lg">Hanspura (હંસપુરા)</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-orange-500">
            <p className="font-bold text-lg">Shahibaug (શાહીબાગ)</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-orange-500">
            <p className="font-bold text-lg">Nana Chiloda</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
            <p className="font-bold text-lg">Nikol (નિકોલ)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
