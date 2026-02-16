import { useRef, useLayoutEffect } from 'react';
import { ImageOff, CalendarX, FileQuestion, Clock, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultPainPoints = [
  { icon: ImageOff, text: 'Screenshots get lost in your gallery.' },
  { icon: CalendarX, text: 'Manual updates = outdated calendars.' },
  { icon: FileQuestion, text: "You're never sure which version is real." },
  { icon: Users, text: "Family & friends don't know when you're free." },
];

interface ProblemProps {
  headline?: string;
  description?: string;
  statValue?: string;
  statLabel?: string;
  painPoints?: typeof defaultPainPoints;
  backgroundImage?: string;
}

export default function Problem({
  headline = "Managing shifts shouldn't be extra work.",
  description = "Screenshots, spreadsheets, group chats—your roster lives in ten places. That's how mistakes happen.",
  statValue = '73%',
  statLabel = 'of shift workers have been late due to schedule confusion',
  painPoints = defaultPainPoints,
  backgroundImage = '/images/problem_sofa.jpg',
}: ProblemProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const painListRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const card = cardRef.current;
    const painList = painListRef.current;
    const stat = statRef.current;

    if (!section || !headline || !card || !painList || !stat) return;

    const painItems = painList.children;

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
          headline,
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
          painItems,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.14
        )
        .fromTo(
          stat,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.22
        );

      // Phase 3: EXIT (70%–100%)
      scrollTl
        .fromTo(
          headline,
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
          painItems,
          { y: 0, opacity: 1 },
          { y: 18, opacity: 0, stagger: 0.01, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          stat,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-[#FAFAFA] flex items-center z-20"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[500px] h-[500px] bg-[#E6D3A3]/60 top-10 left-10" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#B98B2F]/20 bottom-20 right-1/3" />

      <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Headline Block */}
        <div ref={headlineRef} className="lg:w-[38vw] pt-20 lg:pt-0">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Stat */}
          <div
            ref={statRef}
            className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#E6D3A3]/50"
          >
            <div className="w-10 h-10 bg-[#B98B2F]/10 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#B98B2F]" />
            </div>
            <div>
              <p className="text-[#1C1C1C] font-semibold text-sm">
                {statValue} {statLabel.split(' ').slice(0, 3).join(' ')}
              </p>
              <p className="text-[#1C1C1C]/50 text-xs">
                {statLabel.split(' ').slice(3).join(' ')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Pain Card */}
        <div
          ref={cardRef}
          className="glass-card relative w-full lg:w-[40vw] h-[50vh] lg:h-[64vh] overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={backgroundImage}
            alt="Person concerned looking at phone"
            className="absolute inset-0 w-full h-full object-cover rounded-[22px]"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[22px]" />

          {/* Pain Points List */}
          <div
            ref={painListRef}
            className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
          >
            <p className="text-[#E6D3A3] text-xs font-semibold uppercase tracking-wider mb-3">
              Common frustrations
            </p>
            <div className="space-y-2">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90"
                >
                  <point.icon className="w-4 h-4 flex-shrink-0 text-[#E6D3A3]" />
                  <span className="text-sm">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
