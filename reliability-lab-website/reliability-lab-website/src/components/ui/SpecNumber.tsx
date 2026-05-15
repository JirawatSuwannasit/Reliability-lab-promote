interface SpecNumberProps {
  value: string;
  label?: string;
  accent?: 'blue' | 'amber';
  size?: 'lg' | 'md';
}

export function SpecNumber({ value, label, accent = 'blue', size = 'lg' }: SpecNumberProps) {
  const accentColor = accent === 'amber' ? 'text-[#FFA726]' : 'text-[#00AEEF]';
  const textSize = size === 'lg' ? 'text-[2rem] md:text-[2.5rem]' : 'text-[1.5rem]';

  return (
    <div className="flex flex-col">
      {label && (
        <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8B95A7] mb-1">
          {label}
        </span>
      )}
      <span className={`font-mono font-bold leading-none ${accentColor} ${textSize}`} style={{ fontFamily: "'JetBrains Mono', 'Space Mono', monospace" }}>
        {value}
      </span>
    </div>
  );
}
