import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultProductLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#testimonials' },
];

const defaultSupportLinks = [
  { label: 'Contact', href: '#cta' },
  { label: 'Help Center', href: '#' },
];

const defaultLegalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Cookies', href: '#' },
];

interface FooterProps {
  logoText?: string;
  tagline?: string;
  productLinks?: typeof defaultProductLinks;
  supportLinks?: typeof defaultSupportLinks;
  legalLinks?: typeof defaultLegalLinks;
  copyrightText?: string;
  statusText?: string;
}

export default function Footer({
  logoText = 'ShiftSync',
  tagline = 'Your schedule. Always with you. Zero stress.',
  productLinks = defaultProductLinks,
  supportLinks = defaultSupportLinks,
  legalLinks = defaultLegalLinks,
  copyrightText = '© 2026 ShiftSync. Made with care.',
  statusText = 'All systems operational',
}: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footer.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#FAFAFA] py-12 lg:py-16 border-t border-[#E6D3A3]/30 z-[80]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-[#1C1C1C]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {logoText}
            </a>
            <p className="text-[#1C1C1C]/50 text-sm mt-2 max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 lg:gap-16">
            {/* Product */}
            <div>
              <p className="text-[#1C1C1C] font-semibold text-sm mb-3">
                Product
              </p>
              <ul className="space-y-2">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[#1C1C1C]/50 text-sm hover:text-[#B98B2F] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-[#1C1C1C] font-semibold text-sm mb-3">
                Support
              </p>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[#1C1C1C]/50 text-sm hover:text-[#B98B2F] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-[#1C1C1C] font-semibold text-sm mb-3">Legal</p>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[#1C1C1C]/50 text-sm hover:text-[#B98B2F] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-[#E6D3A3]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#1C1C1C]/40 text-xs">
            {copyrightText}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#B98B2F] rounded-full animate-pulse" />
            <span className="text-[#1C1C1C]/40 text-xs">
              {statusText}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
