import { FaCamera } from 'react-icons/fa';
import { useTranslation } from '@/i18n/useTranslation';
import { useState } from 'react';

export default function OurWorkSection() {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const images = [
    { src: '/assets/generated/ac-water-jet-1.dim_1600x900.png', alt: t.ourWork.imageAlts.waterJet1 },
    { src: '/assets/generated/ac-water-jet-2.dim_1600x900.png', alt: t.ourWork.imageAlts.waterJet2 },
    { src: '/assets/generated/ac-before-after.dim_1600x900.png', alt: t.ourWork.imageAlts.beforeAfter },
    { src: '/assets/generated/ac-service-home.dim_1600x900.png', alt: t.ourWork.imageAlts.serviceHome },
    { src: '/assets/generated/ac-service-team.dim_1600x900.png', alt: t.ourWork.imageAlts.serviceTeam },
    { src: '/assets/generated/ac-service-van.dim_1600x900.png', alt: t.ourWork.imageAlts.serviceVan },
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-16 glass-section-blue">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <FaCamera className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            {t.ourWork.heading}
          </h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          {t.ourWork.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden glass-hover"
            >
              {imageErrors[index] ? (
                <div className="w-full aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <FaCamera className="w-12 h-12 text-orange-400 dark:text-orange-500 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{image.alt}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-12 text-sm">
          {t.ourWork.footerText}
        </p>
      </div>
    </section>
  );
}
