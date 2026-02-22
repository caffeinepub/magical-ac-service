import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from '@/i18n/useTranslation';

export default function BookingSection() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [service, setService] = useState(t.booking.serviceOptions.waterJet);
  const [area, setArea] = useState('');
  const [error, setError] = useState('');

  const serviceOptions = [
    t.booking.serviceOptions.waterJet,
    t.booking.serviceOptions.waterJetFoam,
    t.booking.serviceOptions.repairing,
    t.booking.serviceOptions.installation,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !area.trim()) {
      setError(t.booking.errorMessage);
      return;
    }

    const message = `${t.booking.whatsappTemplate.header}%0A%0A${t.booking.whatsappTemplate.customerName} ${encodeURIComponent(
      name
    )}%0A${t.booking.whatsappTemplate.service} ${encodeURIComponent(service)}%0A${t.booking.whatsappTemplate.area} ${encodeURIComponent(
      area
    )}%0A%0A${t.booking.whatsappTemplate.footer}`;

    window.open(`https://wa.me/918000262644?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-16 glass-section-blue">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="glass-panel p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-700 dark:text-orange-300">
            {t.booking.heading}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="custName" className="text-gray-700 dark:text-gray-200 font-medium">{t.booking.nameLabel}</Label>
              <Input
                id="custName"
                type="text"
                placeholder={t.booking.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-input glass-focus w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-gray-700 dark:text-gray-200 font-medium">{t.booking.serviceLabel}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="serviceType" className="glass-input glass-focus w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custArea" className="text-gray-700 dark:text-gray-200 font-medium">{t.booking.areaLabel}</Label>
              <Input
                id="custArea"
                type="text"
                placeholder={t.booking.areaPlaceholder}
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="glass-input glass-focus w-full"
              />
            </div>

            {error && (
              <p className="text-destructive text-sm font-medium">{error}</p>
            )}

            <div className="relative overflow-hidden" style={{ borderRadius: '5px' }}>
              <Button
                type="submit"
                className="w-full text-white font-bold text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#25d366',
                  padding: '15px 30px',
                  fontSize: '18px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              >
                {t.booking.submitButton}
                <span
                  className="absolute top-0 left-0 w-1/5 h-full pointer-events-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.4)',
                    transform: 'rotate(30deg) translateY(-50%)',
                    animation: 'shine 3s infinite',
                    top: '-50%',
                    left: '-60%',
                    height: '200%',
                  }}
                />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
