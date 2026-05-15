import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { GridOverlay } from '../ui/GridOverlay';
import { CornerBracket } from '../ui/CornerBracket';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1628]"
      aria-label="Hero"
    >
      <GridOverlay />
      <CornerBracket position="top-left" size={28} />
      <CornerBracket position="top-right" size={28} />
      <CornerBracket position="bottom-left" size={28} />
      <CornerBracket position="bottom-right" size={28} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        {/* Eyebrow */}
        <p className="text-[#8B95A7] text-[0.7rem] font-mono font-semibold tracking-[0.3em] uppercase mb-6">
          B2B · TESTING SERVICES
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left: headline + body */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Big bold headline matching poster */}
            <h1
              className="text-white font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              RELIABILITY{' '}
              <span style={{ color: '#00AEEF' }}>TESTING</span>
              <br />
              SERVICES
            </h1>

            {/* Body with left accent bar */}
            <div className="flex gap-4">
              <div className="w-[3px] flex-shrink-0 rounded-full" style={{ background: '#00AEEF' }} />
              <p className="text-[#8B95A7] text-sm sm:text-base leading-relaxed max-w-xl">
                We are a <strong className="text-white">comprehensive provider of total testing solutions</strong>. Our expertise spans from standard constant temperature testing equipment to specialized tools, including state-of-the-art environmental chambers designed for diverse quality and reliability assessments. Our capabilities range from <strong className="text-white">semiconductor and aerospace component evaluation</strong> to <strong className="text-white">vibration, tensile, and compression testing</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Test Quote
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Capabilities
              </Button>
            </div>
          </div>

          {/* Right: large "06" counter */}
          <div className="flex flex-col items-center lg:items-end gap-1 flex-shrink-0">
            <div
              className="font-black leading-none select-none"
              style={{
                fontSize: 'clamp(5rem, 12vw, 9rem)',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'transparent',
                WebkitTextStroke: '2px #00AEEF',
                opacity: 0.25,
                position: 'relative',
              }}
            >
              06
            </div>
            <div
              className="font-black leading-none select-none -mt-6 lg:-mt-10 relative z-10"
              style={{
                fontSize: 'clamp(5rem, 12vw, 9rem)',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#00AEEF',
              }}
            >
              06
            </div>
            <p className="text-[#8B95A7] text-[0.65rem] font-mono font-semibold tracking-[0.25em] uppercase mt-1">
              SERVICES · ONE LAB
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A6478]">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase font-mono">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
