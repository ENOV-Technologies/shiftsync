import { useRef, useLayoutEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultFeatures = [
  'Unlimited schedule sync',
  'Real-time updates',
  'Smart reminders',
  'Share with family',
  'Offline access',
];

interface PricingProps {
  headline?: string;
  description?: string;
  priceLabel?: string;
  priceSubtext?: string;
  ctaText?: string;
  noteText?: string;
  features?: string[];
  backgroundImage?: string;
}

export default function Pricing({
  headline = 'Simple pricing.',
  description = 'Start free. Upgrade only when you need more.',
  priceLabel = 'Free',
  priceSubtext = 'During beta',
  ctaText = 'Get started',
  noteText = 'No credit card required.',
  features = defaultFeatures,
  backgroundImage = '/images/pricing_smile.jpg',
}: PricingProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const card = cardRef.current;
    const badge = badgeRef.current;
    const cta = ctaRef.current;

    if (!section || !text || !card || !badge || !cta) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1: ENTRANCE (0%–30%)
      scrollTl
        .fromTo(
          text,
          { x: '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          card,
          { x: '55vw', opacity: 0, scale: 0.98 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0.06
        )
        .fromTo(
          badge,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'back.out(1.4)' },
          0.14
        )
        .fromTo(
          cta,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.18
        );

      // Phase 3: EXIT (70%–100%)
      scrollTl
        .fromTo(
          text,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          card,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          [badge, cta],
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
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
      id="pricing"
      className="section-pinned bg-[#FAFAFA] flex items-center z-[60]"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[500px] h-[500px] bg-[#E6D3A3]/50 top-10 left-10" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#B98B2F]/15 bottom-20 right-1/3" />

      <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Text Block */}
        <div ref={textRef} className="lg:w-[34vw] pt-20 lg:pt-0">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Features list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#B98B2F]/10 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#B98B2F]" />
                </div>
                <span className="text-[#1C1C1C] text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pricing Card */}
        <div className="relative w-full lg:w-[42vw]">
          <div
            ref={cardRef}
            className="glass-card relative w-full h-[50vh] lg:h-[68vh] overflow-hidden border-[#E6D3A3]/30"
          >
            {/* Background Image */}
            <img
              src={backgroundImage}
              alt="Happy person with phone"
              className="absolute inset-0 w-full h-full object-cover rounded-[22px]"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[22px]" />

            {/* Price Badge */}
            <div
              ref={badgeRef}
              className="absolute top-6 left-6 bg-white rounded-full px-5 py-3 shadow-xl border border-[#E6D3A3]/30"
            >
              <p className="text-[#B98B2F] text-2xl font-bold">{priceLabel}</p>
              <p className="text-[#1C1C1C]/50 text-xs">{priceSubtext}</p>
            </div>

            {/* CTA */}
            <button
              ref={ctaRef}
              onClick={scrollToCta}
              className="absolute bottom-6 right-6 btn-primary flex items-center gap-2"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Note */}
          <p className="text-center text-[#1C1C1C]/50 text-xs mt-4">
            {noteText}
          </p>
        </div>
      </div>
    </section>
  );
}
