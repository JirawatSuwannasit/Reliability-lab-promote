import { services } from '../../data/services';
import { ServiceCard } from '../ServiceCard';

export function ServicesGrid() {
  const scrollToDetail = (slug: string) => {
    document.getElementById(`service-${slug}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00AEEF] text-[0.75rem] font-semibold tracking-[0.2em] uppercase mb-3">
            What We Test
          </p>
          <h2 className="text-white font-bold text-[2.25rem] leading-tight">
            Our Testing Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => scrollToDetail(service.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
