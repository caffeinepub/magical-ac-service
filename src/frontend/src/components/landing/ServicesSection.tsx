import { Snowflake, Wrench, Fuel, Package } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: 'Jet Wash Service',
    description: 'Special jet pump cleaning to remove dirt and dust.',
  },
  {
    icon: Wrench,
    title: 'Repairing',
    description: 'Professional repair work for all AC brands.',
  },
  {
    icon: Fuel,
    title: 'Gas Refilling',
    description: 'Original gas refilling for optimal cooling.',
  },
  {
    icon: Package,
    title: 'Installation',
    description: 'Safe installation and fitting of new or old ACs.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Our AC Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-xl border-t-4 border-service-blue text-center hover:transform hover:scale-105 transition-all duration-200"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-service-blue" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
