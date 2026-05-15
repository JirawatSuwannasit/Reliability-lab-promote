import { Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00AEEF]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA text */}
          <div className="flex flex-col gap-5">
            <p className="text-white/80 text-[0.7rem] font-mono font-semibold tracking-[0.25em] uppercase">
              Get Started
            </p>
            <h2 className="text-white font-black text-[2.25rem] leading-tight uppercase tracking-tight">
              Ready to test your components?
            </h2>
            <p className="text-white/90 text-base leading-relaxed">
              Send us your specifications and we'll respond within 2 business days with a test plan and quotation.
            </p>
            <Button variant="dark" size="lg" className="self-start">
              Request a Quote →
            </Button>
          </div>

          {/* Right: contact details */}
          <div className="flex flex-col gap-5 bg-white/10 rounded-[8px] p-6 border border-white/20">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest font-mono">
              Reliability Lab
            </h3>
            <div className="flex items-start gap-3">
              <MapPin size={16} strokeWidth={1.5} className="text-white/70 mt-0.5 flex-shrink-0" />
              <p className="text-white/90 text-sm leading-relaxed">
                Panasonic Automotive Systems Asia Pacific Co., Ltd.<br />
                101 Moo 2 Teparak Road, T.Bangsaothong<br />
                A.Bangsaothong, Samutprakarn 10570<br />
                Thailand
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} strokeWidth={1.5} className="text-white/70 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                02-723-3100 ext. 4216
              </p>
            </div>
            <p className="text-white/60 text-xs font-mono tracking-wide mt-1">
              Mon–Fri, 8:30 AM – 5:30 PM (Thailand Time)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
