import { FaMapMarkerAlt, FaTint } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function CoverageSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 glass-section-blue text-center">
      <div className="container mx-auto px-4">
        <div className="glass-panel p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <IconBadge icon={FaTint} size="md" />
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-700 dark:text-cyan-300">
              {t.coverage.heading}
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6 leading-relaxed">
            {t.coverage.description}
          </p>
          
          <div className="mt-6 pt-6 border-t border-cyan-200/30 dark:border-cyan-700/30">
            <div className="flex items-start gap-3 text-left max-w-3xl mx-auto">
              <FaMapMarkerAlt className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {t.coverage.seoText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
