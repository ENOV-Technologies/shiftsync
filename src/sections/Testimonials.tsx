import { useRef, useLayoutEffect } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultTestimonials = [
  {
    quote: 'I actually showed up on time every day this week.',
    name: 'Marta',
    role: 'Healthcare',
    image: '/images/testimonial_marta.jpg',
  },
  {
    quote: 'My partner finally knows when I\'m free.',
    name: 'João',
    role: 'Logistics',
    image: '/images/testimonial_joao.jpg',
  },
  {
    quote: 'Set it once. Never think about it again.',
    name: 'Sofia',
    role: 'Retail',
    image: '/images/testimonial_sofia.jpg',
  },
];

interface TestimonialsProps {
  headline?: string;
  subheadline?: string;
  testimonials?: typeof defaultTestimonials;
}

export default function Testimonials({
  headline = 'Loved by early users.',
  subheadline = 'Here\'s what shift workers say after their first week.',
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
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
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardElements,
        { y: 30, opacity: 0, scale: 0.99 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 85%',
            end: 'top 55%',
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
      id="testimonials"
      className="bg-[#FAFAFA] py-20 lg:py-32 z-50"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[500px] h-[500px] bg-[#E6D3A3]/40 top-0 right-1/4" />
      <div className="gold-blob w-[400px] h-[400px] bg-[#B98B2F]/15 bottom-20 left-10" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg">
            {subheadline}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-[#E6D3A3]/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#B98B2F] text-[#B98B2F]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1C1C1C] text-lg font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E6D3A3]/50"
                />
                <div>
                  <p className="text-[#1C1C1C] font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#1C1C1C]/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
