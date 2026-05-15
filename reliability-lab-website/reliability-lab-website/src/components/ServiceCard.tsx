import { Thermometer, Droplets, Zap, ArrowUpDown, Activity, MoveVertical } from 'lucide-react';
import type { Service } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  thermometer: Thermometer,
  droplets: Droplets,
  zap: Zap,
  'arrow-up-down': ArrowUpDown,
  activity: Activity,
  'move-vertical': MoveVertical,
};

const TOTAL = 6;

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const isAmber = service.accent === 'amber';
  const accent = isAmber ? '#FFA726' : '#00AEEF';
  const hoverShadow = isAmber
    ? '0 8px 30px rgba(255,167,38,0.2)'
    : '0 8px 30px rgba(0,174,239,0.15)';

  const IconComponent = iconMap[service.icon] ?? Thermometer;
  const num = String(service.id).padStart(2, '0');

  return (
    <article
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = hoverShadow;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={`View ${service.title} details`}
      className="relative flex flex-col bg-[#1A2332] border border-white/[0.08] rounded-[6px] overflow-hidden cursor-pointer transition-all duration-300"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
    >
      {/* Card header — NO. 01 / 06 · ENV */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2">
        <span
          className="text-[0.6rem] font-mono font-bold tracking-[0.12em] uppercase"
          style={{ color: accent }}
        >
          NO. {num} / {String(TOTAL).padStart(2, '0')}
        </span>
        <span className="flex items-center gap-1 text-[0.6rem] font-mono font-bold tracking-[0.12em] uppercase text-[#8B95A7]">
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accent }} />
          {service.categoryShort}
        </span>
      </div>

      {/* Machine photo with corner brackets */}
      <div className="relative mx-2 mb-0 overflow-hidden" style={{ aspectRatio: '4/3', background: '#0d1a2a' }}>
        <img
          src={service.photo}
          alt={service.photoAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Corner brackets on photo */}
        <svg className="absolute top-0 left-0 w-4 h-4 z-10" viewBox="0 0 16 16" fill="none">
          <path d="M0 12 L0 0 L12 0" stroke={accent} strokeWidth="1.2" strokeLinecap="square"/>
        </svg>
        <svg className="absolute top-0 right-0 w-4 h-4 z-10" viewBox="0 0 16 16" fill="none">
          <path d="M16 12 L16 0 L4 0" stroke={accent} strokeWidth="1.2" strokeLinecap="square"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-4 h-4 z-10" viewBox="0 0 16 16" fill="none">
          <path d="M0 4 L0 16 L12 16" stroke={accent} strokeWidth="1.2" strokeLinecap="square"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-4 h-4 z-10" viewBox="0 0 16 16" fill="none">
          <path d="M16 4 L16 16 L4 16" stroke={accent} strokeWidth="1.2" strokeLinecap="square"/>
        </svg>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-3 pt-3 pb-3 gap-2">
        {/* Icon + title */}
        <div className="flex items-start gap-2">
          <IconComponent size={14} strokeWidth={1.5} style={{ color: accent, flexShrink: 0, marginTop: 1 }} />
          <h3 className="text-white font-bold text-[0.7rem] leading-tight uppercase tracking-wide">
            {service.title}
          </h3>
        </div>

        {/* Accent underline */}
        <div className="w-6 h-[1.5px]" style={{ background: accent }} />

        {/* Specs */}
        <div className="flex flex-col gap-2 flex-1">
          {service.specs.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-0.5">
              <span className="text-[0.55rem] font-mono font-semibold tracking-[0.12em] uppercase text-[#8B95A7]">
                {spec.label}
              </span>
              {spec.value ? (
                <div className="flex items-baseline gap-0.5 leading-none">
                  <span
                    className="font-mono font-bold"
                    style={{ color: accent, fontSize: '1.4rem', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {spec.value.startsWith('+') ? (
                      <>{spec.value}<span style={{ fontSize: '0.55rem', verticalAlign: 'super' }}>{spec.unit}</span></>
                    ) : (
                      <>{spec.value}<span style={{ fontSize: '0.65rem' }}>{spec.unit}</span></>
                    )}
                  </span>
                  {spec.suffix && (
                    <span className="text-[0.65rem] font-mono text-[#8B95A7] ml-0.5">{spec.suffix}</span>
                  )}
                </div>
              ) : (
                <span className="text-[0.7rem] font-mono text-[#8B95A7] leading-snug">{spec.suffix}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: category + code */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] mt-auto">
          <span
            className="text-[0.55rem] font-mono font-bold tracking-[0.12em] uppercase"
            style={{ color: isAmber ? '#FFA726' : '#00AEEF' }}
          >
            {service.category}
          </span>
          <span className="text-[0.55rem] font-mono font-bold tracking-[0.12em] uppercase text-[#5A6478]">
            {service.code}
          </span>
        </div>
      </div>
    </article>
  );
}
