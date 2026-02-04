import { Snowflake, Wrench, Fuel, Package } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: 'Jet Wash Service',
    description: 'Indoor and outdoor deep cleaning.',
  },
  {
    icon: Wrench,
    title: 'Expert Repairing',
    description: 'Precise PCB and compressor work.',
  },
  {
    icon: Fuel,
    title: 'Gas Refilling',
    description: 'Original gas for full cooling guarantee.',
  },
  {
    icon: Package,
    title: 'Installation',
    description: 'Safe fitting of new and old ACs.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 underline underline-offset-8 decoration-blue-500">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
