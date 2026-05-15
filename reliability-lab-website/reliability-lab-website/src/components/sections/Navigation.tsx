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
        scrolled ? 'bg-[#0A1628] border-b border-[#00AEEF]/[0.08]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none focus-visible:outline-[#00AEEF]">
          <span className="text-white font-bold text-base tracking-wide">PANASONIC</span>
          <span className="text-[#00AEEF] text-[0.65rem] font-semibold tracking-[0.15em] uppercase">Automotive</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8B95A7] hover:text-white text-sm font-medium transition-colors duration-200 focus-visible:outline-[#00AEEF] focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#8B95A7] text-xs font-medium">
            <button className="hover:text-white transition-colors">EN</button>
            <span>/</span>
            <button className="hover:text-white transition-colors">ไทย</button>
          </div>
          <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 focus-visible:outline-[#00AEEF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0A1628] z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold hover:text-[#00AEEF] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="lg" onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get Quote
          </Button>
          <div className="flex items-center gap-3 text-[#8B95A7] text-sm font-medium mt-4">
            <button className="hover:text-white transition-colors">EN</button>
            <span>/</span>
            <button className="hover:text-white transition-colors">ไทย</button>
          </div>
        </div>
      )}
    </header>
  );
}
