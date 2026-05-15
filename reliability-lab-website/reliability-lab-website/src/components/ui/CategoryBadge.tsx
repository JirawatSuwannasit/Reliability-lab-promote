interface CategoryBadgeProps {
  label: string;
  accent?: 'blue' | 'amber';
}

export function CategoryBadge({ label, accent = 'blue' }: CategoryBadgeProps) {
  const color = accent === 'amber'
    ? 'border-[#FFA726] text-[#FFA726]'
    : 'border-[#00AEEF] text-[#00AEEF]';

  return (
    <span className={`inline-block border px-2 py-0.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-sm ${color}`}>
      {label}
    </span>
  );
}
