import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A1628] shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top header bar — matches poster */}
      <div className={`border-b transition-colors duration-300 ${scrolled ? 'border-[#00AEEF]/10' : 'border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Logo — white box with Panasonic Automotive */}
          <a href="#" className="flex items-center gap-0 focus-visible:outline-[#00AEEF]">
            <div className="bg-white px-2 py-1 flex flex-col items-start leading-none">
              <span className="text-[#0A1628] font-black text-[0.75rem] tracking-wide">Panasonic</span>
              <span className="text-[#0A1628] font-bold text-[0.55rem] tracking-[0.15em] uppercase">Automotive</span>
            </div>
          </a>

          {/* Center: lab info — hidden on small screens */}
          <div className="hidden lg:flex items-center gap-2 text-[#8B95A7] text-[0.65rem] font-mono font-semibold tracking-[0.18em] uppercase">
            <span>Automotive Quality Assurances Center</span>
            <span className="text-[#5A6478]">·</span>
            <span>Reliability Lab</span>
            <span className="text-[#5A6478]">·</span>
            <span>2026</span>
          </div>

          {/* Right: tagline — hidden on small screens */}
          <div className="hidden lg:flex items-center gap-2 text-[#00AEEF] text-[0.65rem] font-medium italic">
            <span className="text-[#00AEEF]">•</span>
            <span>"Where Reliability is Proven, Not Assumed."</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 focus-visible:outline-[#00AEEF]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Secondary nav bar */}
      <div className={`hidden lg:block border-b transition-colors duration-300 ${scrolled ? 'border-[#00AEEF]/10 bg-[#0A1628]' : 'border-white/[0.04]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8B95A7] hover:text-white text-[0.7rem] font-mono font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-[#8B95A7] text-[0.65rem] font-mono font-semibold">
              <button className="hover:text-white transition-colors tracking-wide">EN</button>
              <span className="text-[#5A6478]">/</span>
              <button className="hover:text-white transition-colors">ไทย</button>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0A1628] z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#00AEEF] transition-colors font-mono"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="lg"
            onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get Quote
          </Button>
          <div className="flex gap-3 text-[#8B95A7] text-sm font-mono mt-4">
            <button className="hover:text-white transition-colors">EN</button>
            <span>/</span>
            <button className="hover:text-white transition-colors">ไทย</button>
          </div>
        </div>
      )}
    </header>
  );
}
