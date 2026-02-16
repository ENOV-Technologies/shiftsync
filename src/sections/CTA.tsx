import { useRef, useLayoutEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CTAProps {
  headline?: string;
  description?: string;
  launchText?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  successTitle?: string;
  successMessage?: string;
  backgroundImage?: string;
}

export default function CTA({
  headline = 'Ready to stop worrying about your schedule?',
  description = 'Join the beta and get free access for life.',
  launchText = 'Launching March 2026',
  inputPlaceholder = 'Email address',
  buttonText = 'Join beta',
  successTitle = "You're on the list!",
  successMessage = "We'll notify you when beta opens.",
  backgroundImage = '/images/cta_outdoor.jpg',
}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const card = cardRef.current;
    const form = formRef.current;

    if (!section || !text || !card || !form) return;

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
          form,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.14
        );

      // Phase 3: EXIT (70%–100%)
      scrollTl
        .fromTo(
          text,
          { y: 0, opacity: 1 },
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          card,
          { y: 0, opacity: 1 },
          { y: '-12vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          form,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.72
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="section-pinned bg-[#F5F3EE] flex items-center z-[70]"
    >
      {/* Background gold blobs */}
      <div className="gold-blob w-[600px] h-[600px] bg-[#E6D3A3]/60 top-0 left-0" />
      <div className="gold-blob w-[500px] h-[500px] bg-[#B98B2F]/25 bottom-0 right-0" />

      <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Text Block */}
        <div ref={textRef} className="lg:w-[36vw] pt-20 lg:pt-0">
          <h2 className="text-[clamp(28px,3.8vw,52px)] text-[#1C1C1C] mb-4">
            {headline}
          </h2>
          <p className="text-[#1C1C1C]/60 text-base lg:text-lg leading-relaxed">
            {description}
          </p>

          {/* Launch info */}
          <div className="mt-8 flex items-center gap-2 text-[#1C1C1C]/60">
            <Sparkles className="w-4 h-4 text-[#B98B2F]" />
            <span className="text-sm">{launchText}</span>
          </div>
        </div>

        {/* Right CTA Card */}
        <div className="relative w-full lg:w-[44vw]">
          <div
            ref={cardRef}
            className="glass-card relative w-full h-[50vh] lg:h-[68vh] overflow-hidden border-[#E6D3A3]/30"
          >
            {/* Background Image */}
            <img
              src={backgroundImage}
              alt="Confident person outdoors"
              className="absolute inset-0 w-full h-full object-cover rounded-[22px]"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[22px]" />

            {/* Email Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
            >
              {isSubmitted ? (
                <div className="bg-[#B98B2F]/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-[#E6D3A3]/30">
                  <p className="text-white font-semibold">
                    {successTitle} 🎉
                  </p>
                  <p className="text-white/70 text-sm">
                    {successMessage}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={inputPlaceholder}
                    className="flex-1 input-email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
