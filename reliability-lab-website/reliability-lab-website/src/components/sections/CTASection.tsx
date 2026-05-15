import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00AEEF]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-white font-bold text-[2.25rem] leading-tight">
          Ready to test your components?
        </h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-xl">
          Send us your specifications and we'll respond within 2 business days with a test plan and quotation.
        </p>
        <Button variant="dark" size="lg">
          Request a Quote →
        </Button>
      </div>
    </section>
  );
}
