import { FaWind, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function SofaCleaningSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 glass-section-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          {t.sofaCleaning.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-panel p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300 mb-4">{t.sofaCleaning.subheading}</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200 font-medium">
              <li>{t.sofaCleaning.services.fabric}</li>
              <li>{t.sofaCleaning.services.leather}</li>
              <li>{t.sofaCleaning.services.carpet}</li>
              <li>{t.sofaCleaning.services.mattress}</li>
              <li>{t.sofaCleaning.services.office}</li>
            </ul>
            <div className="mt-6">
              <p className="text-orange-600 dark:text-orange-400 font-extrabold text-xl">{t.sofaCleaning.priceText}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card glass-hover p-5 text-center">
              <div className="flex justify-center mb-3">
                <IconBadge icon={FaWind} variant="orange" size="md" />
              </div>
              <p className="font-bold text-sm text-gray-800 dark:text-gray-100">{t.sofaCleaning.features.steamCleaning}</p>
            </div>
            <div className="glass-card glass-hover p-5 text-center">
              <div className="flex justify-center mb-3">
                <IconBadge icon={FaStar} variant="orange" size="md" />
              </div>
              <p className="font-bold text-sm text-gray-800 dark:text-gray-100">{t.sofaCleaning.features.stainRemoval}</p>
            </div>
            <div className="glass-card glass-hover p-5 text-center">
              <div className="flex justify-center mb-3">
                <IconBadge icon={FaClock} variant="orange" size="md" />
              </div>
              <p className="font-bold text-sm text-gray-800 dark:text-gray-100">{t.sofaCleaning.features.fastDrying}</p>
            </div>
            <div className="glass-card glass-hover p-5 text-center">
              <div className="flex justify-center mb-3">
                <IconBadge icon={FaShieldAlt} variant="orange" size="md" />
              </div>
              <p className="font-bold text-sm text-gray-800 dark:text-gray-100">{t.sofaCleaning.features.fabricProtection}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-panel p-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
            {t.sofaCleaning.footerText}
            <br />
            <span className="text-orange-700 dark:text-orange-400 font-semibold">{t.sofaCleaning.footerDiscount}</span>
          </p>
          <a 
            href="tel:+918000262644" 
            className="inline-block mt-4 glass-cta-orange text-white px-8 py-3 font-bold"
          >
            {t.sofaCleaning.callButton}
          </a>
        </div>
      </div>
    </section>
  );
}
