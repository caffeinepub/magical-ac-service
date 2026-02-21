import { FaMapMarkerAlt, FaTint, FaSprayCan, FaStar } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function LocalSeoPhrasesSection() {
  const { t } = useTranslation();

  const seoServices = [
    {
      title: t.localSeo.service1,
      icon: FaTint,
    },
    {
      title: t.localSeo.service2,
      icon: FaSprayCan,
    },
    {
      title: t.localSeo.service3,
      icon: FaTint,
    },
    {
      title: t.localSeo.service4,
      icon: FaStar,
    },
  ];

  return (
    <section className="py-16 glass-section-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBadge icon={FaMapMarkerAlt} size="md" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              {t.localSeo.heading}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.localSeo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {seoServices.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-hover p-6 flex items-center gap-4"
            >
              <IconBadge icon={service.icon} size="md" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-panel p-6 max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed text-center">
            {t.localSeo.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
