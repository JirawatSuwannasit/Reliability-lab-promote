import { CheckCircle2, Thermometer, Droplets, Zap, ArrowUpDown, Activity } from 'lucide-react';
import { services } from '../../data/services';
import { CategoryBadge } from '../ui/CategoryBadge';
import { SpecNumber } from '../ui/SpecNumber';
import { Service } from '../../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  thermometer: Thermometer,
  droplets: Droplets,
  zap: Zap,
  'arrow-up-down': ArrowUpDown,
  activity: Activity,
};

function ServiceDetailRow({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 !== 0;
  const isAmber = service.accent === 'amber';
  const accentColor = isAmber ? '#FFA726' : '#00AEEF';
  const IconComponent = iconMap[service.icon] || Thermometer;

  const photoBlock = (
    <div className="w-full" style={{ aspectRatio: '4/3', position: 'relative', background: '#0f1c2e', borderRadius: 8 }}>
      <div
        className="absolute inset-3 border border-dashed rounded-sm flex flex-col items-center justify-center gap-2"
        style={{ borderColor: `${accentColor}60` }}
      >
        <span className="text-xs font-mono font-bold tracking-wider" style={{ color: `${accentColor}80` }}>
          [MACHINE IMAGE]
        </span>
        <span className="text-[0.7rem] font-mono" style={{ color: '#5A6478' }}>
          1200×900px
        </span>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex items-center gap-3">
        <IconComponent size={22} strokeWidth={1.5} style={{ color: accentColor }} />
        <CategoryBadge label={service.category} accent={service.accent} />
      </div>

      <h3 className="text-white font-bold text-[1.75rem] leading-tight">{service.title}</h3>

      <div className="w-10 h-[2px]" style={{ background: accentColor }} />

      {/* Specs */}
      <div className="flex flex-wrap gap-6">
        {service.specs.map((spec) => (
          <SpecNumber key={spec.label} value={spec.value} label={spec.label} accent={service.accent} />
        ))}
      </div>

      <p className="text-[#8B95A7] leading-relaxed">{service.description}</p>

      {/* Use cases */}
      <ul className="flex flex-col gap-2">
        {service.useCases.map((uc) => (
          <li key={uc} className="flex items-start gap-2 text-sm text-[#8B95A7]">
            <CheckCircle2 size={16} strokeWidth={1.5} style={{ color: accentColor, flexShrink: 0, marginTop: 2 }} />
            {uc}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
        style={{ color: accentColor }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Request this test →
      </a>
    </div>
  );

  return (
    <div
      id={`service-${service.slug}`}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 border-b border-white/[0.06]"
    >
      {isReversed ? (
        <>
          <div className="order-2 md:order-1">{contentBlock}</div>
          <div className="order-1 md:order-2">{photoBlock}</div>
        </>
      ) : (
        <>
          <div>{photoBlock}</div>
          <div>{contentBlock}</div>
        </>
      )}
    </div>
  );
}

export function ServiceDetail() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceDetailRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
