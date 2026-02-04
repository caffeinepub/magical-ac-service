import React from 'react';

interface AreaGroup {
  title: string;
  titleGujarati: string;
  areas: string[];
  borderColor: string;
}

const areaGroups: AreaGroup[] = [
  {
    title: 'Main Areas',
    titleGujarati: 'મુખ્ય વિસ્તારો',
    borderColor: 'border-orange-500',
    areas: [
      'નિકોલ',
      'નરોડા',
      'હંસપુરા',
      'નાના ચિલોડા',
      'શાહીબાગ',
      'ન્યુ શાહીબાગ',
      'બાપુનગર',
      'ઓઢવ',
    ],
  },
  {
    title: 'West Ahmedabad',
    titleGujarati: 'પશ્ચિમ અમદાવાદ',
    borderColor: 'border-blue-600',
    areas: [
      'સેટેલાઇટ',
      'પ્રહલાદનગર',
      'બોપલ',
      'સાઉથ બોપલ',
      'થલતેજ',
      'બોડકડેવ',
      'ગોતા',
      'સાયન્સ સીટી',
      'જગતપુર',
      'વૈષ્ણોદેવી',
    ],
  },
  {
    title: 'Gandhinagar & Others',
    titleGujarati: 'ગાંધીનગર અને અન્ય',
    borderColor: 'border-green-600',
    areas: [
      'સેક્ટર ૧ થી ૩૦',
      'સરગાસણ',
      'કુડાસણ',
      'રાયસણ',
      'ઈન્ફોસિટી',
      'ગિફ્ટ સિટી',
      'મોટેરા',
      'ચાંદખેડા',
      'સાબરમતી',
      'રાણીપ',
    ],
  },
];

export default function ServiceAreasSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          અમારા સર્વિસ એરિયા (Service Areas)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${group.borderColor}`}
            >
              <h3 className="font-bold text-blue-700 mb-3 underline">
                {group.titleGujarati}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {group.areas.map((area, areaIndex) => (
                  <span key={areaIndex}>📍 {area}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-gray-600 font-medium italic">
          * ઉપર દર્શાવેલ તમામ વિસ્તારોમાં અમે <strong>Home Service</strong> પૂરી પાડીએ છીએ.
        </div>
      </div>
    </section>
  );
}
