import { Shield, FileCheck, Lock, BarChart2 } from 'lucide-react';

const standards = [
  { icon: Shield, text: 'ISO/IEC 17025 calibration standards' },
  { icon: FileCheck, text: 'Test protocols aligned with AEC-Q, IEC 60068, and JIS automotive specs' },
  { icon: BarChart2, text: 'Detailed reporting with raw data and pass/fail analysis' },
  { icon: Lock, text: 'Confidentiality guaranteed for all client testing' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#00AEEF] text-[0.75rem] font-semibold tracking-[0.2em] uppercase mb-3">
                About the Lab
              </p>
              <h2 className="text-white font-bold text-[2rem] leading-tight mb-4">
                Inside the Automotive Quality Assurances Center
              </h2>
            </div>
            <p className="text-[#8B95A7] leading-relaxed">
              Our Reliability Lab is part of Panasonic Automotive's quality assurance ecosystem — a facility built for one purpose: to prove that components survive what the road throws at them. Every chamber, every test profile, every data point is calibrated to automotive-grade standards.
            </p>
            <ul className="flex flex-col gap-4">
              {standards.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={18} strokeWidth={1.5} className="text-[#00AEEF] mt-0.5 flex-shrink-0" />
                  <span className="text-[#8B95A7] text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: lab photo placeholder */}
          <div
            className="relative rounded-[8px] overflow-hidden bg-[#0f1c2e]"
            style={{ aspectRatio: '4/3' }}
          >
            <div className="absolute inset-4 border border-dashed border-[#00AEEF]/40 rounded-sm flex flex-col items-center justify-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider text-[#00AEEF]/60">
                [LAB FACILITY IMAGE]
              </span>
              <span className="text-[0.7rem] font-mono text-[#5A6478]">1200×900px</span>
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-[0.65rem] text-[#5A6478] font-medium tracking-wider uppercase">
              Automotive Quality Assurances Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
