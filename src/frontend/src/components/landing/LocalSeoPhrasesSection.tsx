import { FaMapMarkerAlt, FaTint, FaWind, FaStar } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function LocalSeoPhrasesSection() {
  const { t } = useTranslation();

  const phrases = [
    { icon: FaMapMarkerAlt, text: t.localSeo.service1 },
    { icon: FaTint, text: t.localSeo.service2 },
    { icon: FaWind, text: t.localSeo.service3 },
    { icon: FaStar, text: t.localSeo.service4 },
  ];

  return (
    <section className="py-16 glass-section-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          {t.localSeo.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phrases.map((phrase, index) => (
            <div
              key={index}
              className="glass-card glass-hover p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <IconBadge icon={phrase.icon} size="md" />
              </div>
              <p className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                {phrase.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
