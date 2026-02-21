import { FaSprayCan, FaStar, FaShieldAlt, FaLeaf, FaTint } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function WaterJetFoamSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 glass-section-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="glass-card overflow-hidden">
            <img 
              src="/assets/generated/foam-service.dim_300x300.png" 
              alt={t.waterJetFoam.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <IconBadge icon={FaSprayCan} size="lg" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
                {t.waterJetFoam.heading}
              </h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-8 leading-relaxed">
              {t.waterJetFoam.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-4 flex items-start gap-3">
                <FaStar className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{t.waterJetFoam.benefits.deepCleaning.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.waterJetFoam.benefits.deepCleaning.description}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-3">
                <FaShieldAlt className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{t.waterJetFoam.benefits.protection.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.waterJetFoam.benefits.protection.description}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-3">
                <FaLeaf className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{t.waterJetFoam.benefits.ecoFriendly.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.waterJetFoam.benefits.ecoFriendly.description}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-3">
                <FaTint className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{t.waterJetFoam.benefits.efficiency.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.waterJetFoam.benefits.efficiency.description}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#book"
              className="inline-block glass-cta-primary text-white px-8 py-4 font-bold text-lg"
            >
              {t.waterJetFoam.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
