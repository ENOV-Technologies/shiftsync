import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  logoText?: string;
}

export default function Navigation({ logoText = 'ShiftSync' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-[#E6D3A3]/30'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-10 py-5">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {logoText}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#B98B2F] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#B98B2F] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#B98B2F] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="btn-primary text-sm"
            >
              Get early access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#E6D3A3]/20 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1C1C1C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1C1C1C]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAFA] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-2xl font-semibold text-[#1C1C1C] hover:text-[#B98B2F] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-2xl font-semibold text-[#1C1C1C] hover:text-[#B98B2F] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-2xl font-semibold text-[#1C1C1C] hover:text-[#B98B2F] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="btn-primary text-lg mt-4"
            >
              Get early access
            </button>
          </div>
        </div>
      )}
    </>
  );
}
