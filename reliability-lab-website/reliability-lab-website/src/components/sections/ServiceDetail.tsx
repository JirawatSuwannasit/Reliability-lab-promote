import { CheckCircle2, Thermometer, Droplets, Zap, ArrowUpDown, Activity, MoveVertical } from 'lucide-react';
import { services } from '../../data/services';
import { CategoryBadge } from '../ui/CategoryBadge';
import type { Service } from '../../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  thermometer: Thermometer,
  droplets: Droplets,
  zap: Zap,
  'arrow-up-down': ArrowUpDown,
  activity: Activity,
  'move-vertical': MoveVertical,
};

const TOTAL = services.length;

function ServiceDetailRow({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 !== 0;
  const isAmber = service.accent === 'amber';
  const accent = isAmber ? '#FFA726' : '#00AEEF';
  const IconComponent = iconMap[service.icon] ?? Thermometer;
  const num = String(service.id).padStart(2, '0');

  const photoBlock = (
    <div
      className="relative w-full rounded-[6px] overflow-hidden"
      style={{ aspectRatio: '4/3', background: '#0d1a2a' }}
    >
      {/* Corner brackets on photo */}
      <svg className="absolute top-0 left-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M0 18 L0 0 L18 0" stroke={accent} strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
      <svg className="absolute top-0 right-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M24 18 L24 0 L6 0" stroke={accent} strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M0 6 L0 24 L18 24" stroke={accent} strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
      <svg className="absolute bottom-0 right-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M24 6 L24 24 L6 24" stroke={accent} strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-xs font-mono font-bold tracking-wider" style={{ color: `${accent}70` }}>
          [ MACHINE IMAGE ]
        </span>
        <span className="text-[0.7rem] font-mono text-[#3a4558]">1200 × 900 px</span>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center gap-4">
      {/* Number + category */}
      <div className="flex items-center gap-3">
        <span className="text-[0.65rem] font-mono font-bold tracking-[0.15em] uppercase" style={{ color: accent }}>
          NO. {num} / {String(TOTAL).padStart(2, '0')}
        </span>
        <span className="flex items-center gap-1 text-[0.65rem] font-mono text-[#8B95A7] tracking-[0.12em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          {service.categoryShort}
        </span>
        <CategoryBadge label={service.category} accent={service.accent} />
      </div>

      {/* Icon + title */}
      <div className="flex items-center gap-3">
        <IconComponent size={20} strokeWidth={1.5} style={{ color: accent }} />
        <h3 className="text-white font-black text-2xl uppercase tracking-tight">{service.title}</h3>
      </div>

      {/* Accent underline */}
      <div className="w-10 h-[2px]" style={{ background: accent }} />

      {/* Specs */}
      <div className="flex flex-wrap gap-6">
        {service.specs.map((spec) => (
          <div key={spec.label} className="flex flex-col gap-0.5">
            <span className="text-[0.65rem] font-mono font-semibold tracking-[0.12em] uppercase text-[#8B95A7]">
              {spec.label}
            </span>
            {spec.value ? (
              <div className="flex items-baseline gap-1">
                <span
                  className="font-mono font-black"
                  style={{ color: accent, fontSize: '2rem', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {spec.value}
                  <span style={{ fontSize: '0.9rem' }}>{spec.unit}</span>
                </span>
                {spec.suffix && (
                  <span className="text-sm font-mono text-[#8B95A7]">{spec.suffix}</span>
                )}
              </div>
            ) : (
              <span className="text-base font-mono text-[#8B95A7]">{spec.suffix}</span>
            )}
          </div>
        ))}
      </div>

      <p className="text-[#8B95A7] leading-relaxed text-sm">{service.description}</p>

      <ul className="flex flex-col gap-2">
        {service.useCases.map((uc) => (
          <li key={uc} className="flex items-start gap-2 text-sm text-[#8B95A7]">
            <CheckCircle2 size={15} strokeWidth={1.5} style={{ color: accent, flexShrink: 0, marginTop: 2 }} />
            {uc}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
        <a
          href="#contact"
          className="text-sm font-semibold font-mono tracking-wide transition-opacity hover:opacity-70"
          style={{ color: accent }}
        >
          Request this test →
        </a>
        <span className="text-[0.6rem] font-mono font-bold tracking-[0.15em] uppercase text-[#5A6478]">
          {service.code}
        </span>
      </div>
    </div>
  );

  return (
    <div
      id={`service-${service.slug}`}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-14 border-b border-white/[0.06]"
    >
      {isReversed ? (
        <>
          <div className="order-2 md:order-1">{contentBlock}</div>
          <div className="order-1 md:order-2">{photoBlock}</div>
        </>
      ) : (
        <>
          {photoBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
}

export function ServiceDetail() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-[#00AEEF] text-[0.7rem] font-mono font-semibold tracking-[0.25em] uppercase mb-2">
            Service Detail
          </p>
          <h2 className="text-white font-black text-3xl uppercase tracking-tight">
            Testing Specifications
          </h2>
        </div>
        {services.map((service, index) => (
          <ServiceDetailRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
