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

const serviceOptions = [
  'AC Service (Jet Wash)',
  'AC Repairing',
  'Gas Refilling',
  'Installation / Uninstallation',
];

export default function BookingSection() {
  const [name, setName] = useState('');
  const [service, setService] = useState('AC Service (Jet Wash)');
  const [area, setArea] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !area.trim()) {
      setError('Please enter your name and area.');
      return;
    }

    const message = `*New AC Service Booking - Magical AC Service*%0A%0A*Customer Name:* ${encodeURIComponent(
      name
    )}%0A*Service:* ${encodeURIComponent(service)}%0A*Area:* ${encodeURIComponent(
      area
    )}%0A%0A*Awaiting your response.*`;

    window.open(`https://wa.me/918000262644?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-border">
          <h2 className="text-3xl font-bold text-center mb-6 text-service-primary underline underline-offset-8">
            Book Your Service
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="custName">Your Name</Label>
              <Input
                id="custName"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="serviceType" className="w-full">
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
              <Label htmlFor="custArea">Your Area</Label>
              <Input
                id="custArea"
                type="text"
                placeholder="Enter your area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full"
              />
            </div>

            {error && (
              <p className="text-destructive text-sm font-medium">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-service-blue hover:bg-service-blue/90 text-white font-bold py-6 text-xl shadow-lg"
            >
              Confirm Online Booking
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
