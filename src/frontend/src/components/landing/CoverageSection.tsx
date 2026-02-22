import { FaTint, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '@/i18n/useTranslation';

export default function CoverageSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 glass-section-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-panel p-8 md:p-12 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <FaTint className="w-12 h-12 text-orange-600 dark:text-orange-400" />
            <FaMapMarkerAlt className="w-12 h-12 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            {t.coverage.heading}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {t.coverage.description}
          </p>
        </div>
      </div>
    </section>
  );
}
