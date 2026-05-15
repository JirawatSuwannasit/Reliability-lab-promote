import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { GridOverlay } from '../ui/GridOverlay';
import { CornerBracket } from '../ui/CornerBracket';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A1628]"
      aria-label="Hero"
    >
      <GridOverlay />

      <CornerBracket position="top-left" />
      <CornerBracket position="top-right" />
      <CornerBracket position="bottom-left" />
      <CornerBracket position="bottom-right" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-[#00AEEF] text-[0.75rem] font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in">
          Reliability Testing Services
        </p>

        <h1
          className="text-white font-bold mb-6 animate-slide-up"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          Where Reliability is<br />
          <span className="text-[#00AEEF]">Proven</span>, Not Assumed
        </h1>

        <p
          className="text-[#8B95A7] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Comprehensive environmental and mechanical stress testing for electrical & electronic
          components — built to automotive-grade standards.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Test Quote
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Capabilities
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A6478]">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
