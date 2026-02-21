import { useTranslation } from '@/i18n/useTranslation';
import { FaCamera } from 'react-icons/fa';
import IconBadge from './IconBadge';

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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <IconBadge icon={FaCamera} variant="primary" size="lg" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.ourWork.heading}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t.ourWork.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((image, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f3f4f6; color: #9ca3af;">
                          <span>Image unavailable</span>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.ourWork.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
