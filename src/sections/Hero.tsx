import { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  badgeText?: string;
  headline?: string[];
  subheadline?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function Hero({
  badgeText = 'Now in beta',
  headline = ['Your schedule.', 'Always with you.'],
  subheadline = 'ShiftSync turns your messy roster into a clear plan—automatically.',
  ctaText = 'Get early access',
  backgroundImage = '/images/hero_cafe.jpg',
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const badge = badgeRef.current;

    if (!section || !card || !headline || !subheadline || !cta || !badge) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ delay: 0.2 });

      loadTl
        .fromTo(
          card,
          { y: 40, scale: 0.98, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }
        )
        .fromTo(
          badge,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          headline.children,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.04, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          [subheadline, cta],
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set([card, headline, subheadline, cta, badge], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });

      // Phase 3: EXIT (70%–100%)
      scrollTl
        .fromTo(
          card,
          { y: 0, scale: 1, opacity: 1 },
          { y: '-18vh', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          headline,
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          [subheadline, cta, badge],
          { x: 0, opacity: 1 },
          { x: '-8vw', opacity: 0, ease: 'power2.in' },
          0.72
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToCta = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-[#FAFAFA] flex items-center justify-center z-10"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[600px] h-[600px] bg-[#E6D3A3] -top-40 -left-40" />
      <div className="gold-blob w-[500px] h-[500px] bg-[#B98B2F]/30 bottom-20 right-20" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#E6D3A3]/50 top-1/3 right-1/4" />

      {/* Hero Card */}
      <div
        ref={cardRef}
        className="glass-card relative w-[min(86vw,1100px)] h-[min(72vh,640px)] overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Person at cafe with phone"
          className="absolute inset-0 w-full h-full object-cover rounded-[22px]"
        />

        {/* Gradient overlay - darker for gold contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[22px]" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
          {/* Badge */}
          <span
            ref={badgeRef}
            className="inline-block w-fit px-3 py-1 bg-[#B98B2F]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4"
          >
            {badgeText}
          </span>

          {/* Headline */}
          <div ref={headlineRef} className="max-w-[52%]">
            <h1 className="text-white text-[clamp(32px,5vw,64px)] leading-[0.95]">
              {headline.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-white/80 text-base lg:text-lg max-w-[46%] mt-4 mb-6"
          >
            {subheadline}
          </p>

          {/* CTA */}
          <button
            ref={ctaRef}
            onClick={scrollToCta}
            className="btn-primary w-fit flex items-center gap-2"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
