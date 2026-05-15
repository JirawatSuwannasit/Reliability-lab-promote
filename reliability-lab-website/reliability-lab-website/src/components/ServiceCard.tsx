import { Thermometer, Droplets, Zap, ArrowUpDown, Activity } from 'lucide-react';
import { CategoryBadge } from './ui/CategoryBadge';
import { Service } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  thermometer: Thermometer,
  droplets: Droplets,
  zap: Zap,
  'arrow-up-down': ArrowUpDown,
  activity: Activity,
};

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const isAmber = service.accent === 'amber';
  const accentColor = isAmber ? '#FFA726' : '#00AEEF';
  const hoverShadow = isAmber
    ? '0 8px 30px rgba(255, 167, 38, 0.2)'
    : '0 8px 30px rgba(0, 174, 239, 0.15)';

  const IconComponent = iconMap[service.icon] || Thermometer;

  return (
    <article
      onClick={onClick}
      className="group relative bg-[#1A2332] border border-white/[0.06] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = hoverShadow;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${service.title} details`}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Machine photo placeholder */}
      <div
        className="relative w-full"
        style={{ aspectRatio: '4/3', background: '#0f1c2e', borderBottom: `1px solid ${accentColor}30` }}
      >
        <div className="absolute inset-2 border border-dashed rounded-sm flex flex-col items-center justify-center gap-1"
          style={{ borderColor: `${accentColor}60` }}>
          <span className="text-[0.65rem] font-mono font-bold tracking-wider" style={{ color: `${accentColor}80` }}>
            [MACHINE IMAGE]
          </span>
          <span className="text-[0.6rem] font-mono" style={{ color: '#5A6478' }}>
            1200×900px
          </span>
        </div>
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Icon + title */}
        <div className="flex items-start gap-2">
          <IconComponent size={18} strokeWidth={1.5} style={{ color: accentColor, flexShrink: 0, marginTop: 2 }} />
          <h3 className="text-white font-semibold text-sm leading-tight">{service.title}</h3>
        </div>

        {/* Accent underline */}
        <div className="w-8 h-[1.5px]" style={{ background: accentColor }} />

        {/* Spec numbers */}
        <div className="flex flex-col gap-1">
          {service.specs.slice(0, 2).map((spec) => (
            <div key={spec.label} className="flex flex-col">
              <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#8B95A7]">
                {spec.label}
              </span>
              <span
                className="font-bold leading-tight text-base"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: accentColor }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Category badge */}
        <CategoryBadge label={service.category} accent={service.accent} />
      </div>
    </article>
  );
}
