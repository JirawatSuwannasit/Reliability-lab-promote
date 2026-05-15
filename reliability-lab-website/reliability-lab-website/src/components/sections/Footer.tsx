export function Footer() {
  const serviceLinks = [
    'Temperature Chamber',
    'Temp & Humidity Chamber',
    'Thermal Shock Chamber',
    'Rapid Temp Change',
    'Vibration + Tensile',
  ];

  const companyLinks = ['About', 'Certifications', 'Contact', 'Privacy Policy'];

  return (
    <footer className="bg-[#0A1628] border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-white font-bold text-base tracking-wide">PANASONIC</p>
              <p className="text-[#00AEEF] text-[0.65rem] font-semibold tracking-[0.15em] uppercase">Automotive</p>
            </div>
            <p className="text-[#5A6478] text-xs leading-relaxed italic">
              Where Reliability is Proven, Not Assumed
            </p>
            <div className="flex gap-2 mt-2">
              <span className="border border-[#00AEEF]/40 text-[#00AEEF]/70 text-[0.65rem] px-2 py-0.5 rounded-sm font-semibold tracking-wider uppercase">
                Environment
              </span>
              <span className="border border-[#FFA726]/40 text-[#FFA726]/70 text-[0.65rem] px-2 py-0.5 rounded-sm font-semibold tracking-wider uppercase">
                Mechanical
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-[#8B95A7] text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#8B95A7] text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 text-[#8B95A7] text-sm">
              <li>[Add facility address]</li>
              <li>[Add contact email]</li>
              <li>[Add contact phone]</li>
              <li className="text-[#5A6478] text-xs mt-1">Mon–Fri, 8:30 AM – 5:30 PM (TH)</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5A6478] text-xs">
            © Panasonic Automotive — Reliability Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 text-[#5A6478] text-xs">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-2 text-[#5A6478] text-xs border-l border-white/[0.06] pl-4">
              <button className="hover:text-white transition-colors">EN</button>
              <span>/</span>
              <button className="hover:text-white transition-colors">ไทย</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
