import { useTranslation } from '@/i18n/useTranslation';

export default function FloatingWhatsAppButton() {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/918000262644"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 glass-cta-success text-white px-6 py-3 shadow-2xl z-50 font-bold text-sm"
      aria-label={t.floatingWhatsapp.ariaLabel}
    >
      {t.floatingWhatsapp.label}
    </a>
  );
}
