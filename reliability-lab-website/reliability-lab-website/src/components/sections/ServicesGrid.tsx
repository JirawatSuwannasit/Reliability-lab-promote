import { services } from '../../data/services';
import { ServiceCard } from '../ServiceCard';

export function ServicesGrid() {
  const scrollToDetail = (slug: string) => {
    document.getElementById(`service-${slug}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        {/* 6 cards: 6 cols on xl, 3 on md, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
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
