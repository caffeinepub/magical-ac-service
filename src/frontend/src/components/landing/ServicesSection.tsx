import { FaTint, FaWrench, FaWind, FaCog } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: FaTint,
      title: t.services.waterJet.title,
      description: t.services.waterJet.description,
    },
    {
      icon: FaWind,
      title: t.services.waterJetFoam.title,
      description: t.services.waterJetFoam.description,
    },
    {
      icon: FaWrench,
      title: t.services.repairing.title,
      description: t.services.repairing.description,
    },
    {
      icon: FaCog,
      title: t.services.installation.title,
      description: t.services.installation.description,
    },
  ];

  return (
    <section className="py-16 glass-section-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          {t.services.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-hover p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <IconBadge icon={service.icon} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
