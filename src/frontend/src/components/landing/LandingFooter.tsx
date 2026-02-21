import { FaHeart } from 'react-icons/fa';
import { useTranslation } from '@/i18n/useTranslation';

export default function LandingFooter() {
  const { t } = useTranslation();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'magical-ac-service';

  return (
    <footer className="glass-footer text-white py-12">
      <div className="container mx-auto px-4">
        {/* Brand Section with Service Van Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/generated/service-van-icon.dim_200x200.png" 
              alt={t.footer.serviceVanAlt}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">
            {t.nav.brandName}
          </h3>
          <p className="text-gray-400">{t.footer.tagline}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="tel:+918000262644"
            className="glass-cta-primary text-white px-6 py-3 font-semibold"
          >
            {t.footer.callUs}
          </a>
          <a
            href="https://wa.me/918000262644"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-cta-success text-white px-6 py-3 font-semibold"
          >
            {t.footer.whatsapp}
          </a>
        </div>

        {/* Copyright and Attribution */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm mb-2 text-center">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1 flex-wrap">
            {t.footer.builtWith} <FaHeart className="w-4 h-4 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
