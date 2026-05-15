interface CornerBracketProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  size?: number;
}

export function CornerBracket({ position, color = '#00AEEF', size = 20 }: CornerBracketProps) {
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  };

  const rotations = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${rotations[position]}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path
          d={`M 0 ${size} L 0 0 L ${size} 0`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
