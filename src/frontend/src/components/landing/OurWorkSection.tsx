import { FaCamera } from 'react-icons/fa';
import IconBadge from './IconBadge';
import { useTranslation } from '@/i18n/useTranslation';

export default function OurWorkSection() {
  const { t } = useTranslation();

  const workImages = [
    {
      src: '/assets/generated/ac-water-jet-1.dim_1600x900.png',
      alt: t.ourWork.imageAlts.waterJet1,
    },
    {
      src: '/assets/generated/ac-water-jet-2.dim_1600x900.png',
      alt: t.ourWork.imageAlts.waterJet2,
    },
    {
      src: '/assets/generated/ac-before-after.dim_1600x900.png',
      alt: t.ourWork.imageAlts.beforeAfter,
    },
    {
      src: '/assets/generated/ac-service-home.dim_1600x900.png',
      alt: t.ourWork.imageAlts.serviceHome,
    },
    {
      src: '/assets/generated/ac-service-team.dim_1600x900.png',
      alt: t.ourWork.imageAlts.serviceTeam,
    },
    {
      src: '/assets/generated/ac-service-van.dim_1600x900.png',
      alt: t.ourWork.imageAlts.serviceVan,
    },
  ];

  return (
    <section className="py-16 glass-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBadge icon={FaCamera} size="md" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              {t.ourWork.heading}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.ourWork.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((image, index) => (
            <div
              key={index}
              className="glass-card glass-hover overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center glass-panel p-6 max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
            {t.ourWork.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
