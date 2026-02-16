import { useRef, useLayoutEffect } from 'react';
import { Zap, RefreshCw, Smartphone, Share2, Bell, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultFeatures = [
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'View your roster in seconds, anywhere.',
    image: '/images/feature_instant.jpg',
  },
  {
    icon: RefreshCw,
    title: 'Auto-Updates',
    description: 'Changes sync in real time. No manual edits.',
    image: '/images/feature_auto.jpg',
  },
  {
    icon: Smartphone,
    title: 'Always With You',
    description: 'Works offline. Your schedule is always available.',
    image: '/images/feature_offline.jpg',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share with family and teammates in one tap.',
    image: '/images/feature_sharing.jpg',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Get notified before shifts and last-minute swaps.',
    image: '/images/feature_reminders.jpg',
  },
  {
    icon: CheckCircle,
    title: 'Zero Confusion',
    description: 'One source of truth. No more lost screenshots.',
    image: '/images/feature_zero.jpg',
  },
];

interface FeaturesProps {
  headline?: string;
  subheadline?: string;
  features?: typeof defaultFeatures;
}

export default function Features({
  headline = 'Built for shift workers.',
  subheadline = 'Everything you need to stop worrying about your schedule.',
  features = defaultFeatures,
}: FeaturesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const cardElements = cards.children;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardElements,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-[#FAFAFA] py-20 lg:py-32 z-40"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[600px] h-[600px] bg-[#E6D3A3]/40 top-1/2 left-0" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#B98B2F]/15 bottom-0 right-0" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg max-w-xl mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Feature Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-[#E6D3A3]/30"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#B98B2F]/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#B98B2F]" />
                  </div>
                  <h3 className="text-[#1C1C1C] font-bold text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#1C1C1C]/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
