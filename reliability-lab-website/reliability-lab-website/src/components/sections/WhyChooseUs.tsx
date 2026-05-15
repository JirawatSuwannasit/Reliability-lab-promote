import { Award, Package, Clock, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Automotive-grade rigor',
    desc: 'Our standards meet the same requirements as Tier-1 suppliers to global OEMs.',
  },
  {
    icon: Package,
    title: 'Full service',
    desc: 'From sample preparation to final report, we handle the entire test lifecycle.',
  },
  {
    icon: Clock,
    title: 'Fast turnaround',
    desc: 'Standard tests delivered within published lead times.',
  },
  {
    icon: Users,
    title: 'Real engineers, real answers',
    desc: 'Talk directly to the lab team. No black-box testing.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2332]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00AEEF] text-[0.75rem] font-semibold tracking-[0.2em] uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-white font-bold text-[2.25rem]">Why Choose Our Lab</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0A1628] border border-white/[0.06] rounded-[8px] p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-[4px] bg-[#00AEEF]/10 flex items-center justify-center">
                <Icon size={20} strokeWidth={1.5} className="text-[#00AEEF]" />
              </div>
              <h3 className="text-white font-semibold text-base">{title}</h3>
              <p className="text-[#8B95A7] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
