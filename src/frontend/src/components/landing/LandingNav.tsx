import { useTranslation } from '@/i18n/useTranslation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaLanguage } from 'react-icons/fa';

export default function LandingNav() {
  const { language, setLanguage, t } = useTranslation();

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bookingSection = document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="glass-nav p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/logo-mark.dim_512x512.png" 
            alt="Magical AC Service Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
            {t.nav.brandName}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'hi' | 'gu')}>
            <SelectTrigger className="w-[140px] glass-input glass-focus border-blue-200/50 dark:border-blue-700/50">
              <FaLanguage className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
              <SelectItem value="gu">ગુજરાતી</SelectItem>
            </SelectContent>
          </Select>
          
          <a
            href="#book"
            onClick={scrollToBooking}
            className="glass-cta-primary text-white px-5 md:px-7 py-2.5 md:py-3 font-bold text-sm md:text-base whitespace-nowrap"
          >
            {t.nav.bookNow}
          </a>
        </div>
      </div>
    </nav>
  );
}
