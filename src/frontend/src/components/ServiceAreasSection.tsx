import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '@/i18n/useTranslation';

export default function ServiceAreasSection() {
  const { t } = useTranslation();

  const areas = [
    'Nikol', 'Naroda', 'Hanspura', 'Nana Chiloda', 'Bapunagar', 'Vastral',
    'Kathvada', 'Kubernagar', 'Odhav', 'Maninagar', 'Krishnanagar', 'Gandhinagar'
  ];

  return (
    <section className="py-16 glass-section-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          {t.serviceAreas.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="glass-card glass-hover p-4 flex items-center gap-3"
            >
              <FaMapMarkerAlt className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
