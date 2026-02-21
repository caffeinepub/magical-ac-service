import { useTranslation } from '@/i18n/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white px-6 overflow-hidden">
      {/* Banner Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/generated/water-jet-hero.dim_400x400.png" 
          alt={t.hero.imageAlt}
          className="w-full h-full object-cover motion-safe:animate-hero-drift"
        />
        {/* Multi-layer overlay for strong text contrast - Updated to Teal/Cyan */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/85 via-teal-800/75 to-cyan-700/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        
        {/* Animated gradient shimmer overlay */}
        <div className="absolute inset-0 motion-safe:animate-hero-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Floating decorative blobs - Updated colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl motion-safe:animate-hero-float-1"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-teal-400/15 rounded-full blur-3xl motion-safe:animate-hero-float-2"></div>
        <div className="absolute bottom-[15%] left-[15%] w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl motion-safe:animate-hero-float-3"></div>
      </div>
      
      {/* Glass Content Panel - Capsule Style */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="glass-panel p-8 md:p-16">
          {/* Brand Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight">
            {t.hero.title}
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/95 font-bold drop-shadow-lg">
            {t.hero.tagline}
          </p>
          
          {/* Supporting Text */}
          <p className="text-base md:text-lg mb-10 text-white/90 font-medium max-w-3xl mx-auto">
            {t.hero.supportingText}
          </p>
          
          {/* CTA Buttons - Pill Shaped */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href={`https://wa.me/918000262644?text=${encodeURIComponent(t.hero.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-cta-success text-white px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold w-full sm:w-auto text-center"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="tel:+918000262644"
              className="glass-cta-white text-cyan-900 px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold w-full sm:w-auto text-center"
            >
              {t.hero.callButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
