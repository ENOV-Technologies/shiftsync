import { useRef, useLayoutEffect } from 'react';
import { Bell, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultFeatures = ['Automatic sync', 'Real-time updates', 'Share with anyone'];

interface SolutionProps {
  headline?: string;
  description?: string;
  features?: string[];
  notificationTitle?: string;
  notificationText?: string;
  appImage?: string;
}

export default function Solution({
  headline = 'One place. Always updated. Zero work.',
  description = 'ShiftSync reads your roster and builds your calendar—complete with swaps, reminders, and shareable updates.',
  features = defaultFeatures,
  notificationTitle = 'Shift change',
  notificationText = 'Your Tue shift moved to 14:00',
  appImage = '/images/app_ui_mock.jpg',
}: SolutionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const card = cardRef.current;
    const notification = notificationRef.current;

    if (!section || !text || !card || !notification) return;

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
          notification,
          { x: '20vw', y: '-6vh', opacity: 0, scale: 0.92 },
          { x: 0, y: 0, opacity: 1, scale: 1, ease: 'back.out(1.6)' },
          0.12
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
          { y: 0, scale: 1, opacity: 1 },
          { y: '-14vh', scale: 0.97, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          notification,
          { y: 0, opacity: 1 },
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.72
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-[#FAFAFA] flex items-center z-30"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[500px] h-[500px] bg-[#E6D3A3]/50 top-20 right-20" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#B98B2F]/20 bottom-10 left-1/4" />

      <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Text Block */}
        <div ref={textRef} className="lg:w-[34vw] pt-20 lg:pt-0">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg leading-relaxed">
            {description}
          </p>

          {/* Feature bullets */}
          <div className="mt-8 space-y-3">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#B98B2F]/10 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#B98B2F]" />
                </div>
                <span className="text-[#1C1C1C] text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right App Preview Card */}
        <div className="relative w-full lg:w-[44vw]">
          {/* Notification Pill */}
          <div
            ref={notificationRef}
            className="absolute -top-4 -right-2 lg:right-8 z-10 bg-white rounded-full shadow-xl px-4 py-3 flex items-center gap-3 border border-[#E6D3A3]/30"
          >
            <div className="w-8 h-8 bg-[#B98B2F]/10 rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-[#B98B2F]" />
            </div>
            <div>
              <p className="text-[#1C1C1C] text-xs font-semibold">
                {notificationTitle}
              </p>
              <p className="text-[#1C1C1C]/50 text-xs">
                {notificationText}
              </p>
            </div>
          </div>

          <div
            ref={cardRef}
            className="glass-card relative w-full h-[50vh] lg:h-[68vh] overflow-hidden"
          >
            {/* App UI Image */}
            <img
              src={appImage}
              alt="ShiftSync app interface"
              className="absolute inset-0 w-full h-full object-cover rounded-[22px]"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 rounded-[22px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
