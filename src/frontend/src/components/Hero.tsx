import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const CORNER_SPARKLES = [
  { top: "-8px", left: "50%", emoji: "⭐", delay: "0s" },
  { top: "30%", right: "-12px", emoji: "🌼", delay: "0.8s" },
  { bottom: "-8px", left: "50%", emoji: "✨", delay: "1.6s" },
  { top: "30%", left: "-12px", emoji: "🌟", delay: "2.4s" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("visible");
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 lg:pt-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(var(--sky-light)) 0%, oklch(var(--sky-medium)) 60%, oklch(var(--mint)) 100%)",
      }}
    >
      {/* Animated clouds */}
      <div
        className="absolute top-16 left-4 lg:left-16 text-6xl lg:text-8xl opacity-80 animate-float-cloud pointer-events-none select-none"
        aria-hidden="true"
      >
        ☁️
      </div>
      <div
        className="absolute top-24 right-8 lg:right-32 text-5xl lg:text-7xl opacity-70 animate-float-cloud-reverse pointer-events-none select-none"
        aria-hidden="true"
      >
        ☁️
      </div>
      <div
        className="absolute top-40 left-1/3 text-4xl opacity-60 animate-float-cloud pointer-events-none select-none"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      >
        ☁️
      </div>

      {/* Floating decorative emojis */}
      <div
        className="absolute top-32 right-8 lg:right-16 text-3xl lg:text-4xl animate-butterfly pointer-events-none select-none"
        aria-hidden="true"
      >
        🦋
      </div>
      <div
        className="absolute top-48 left-8 lg:left-24 text-2xl lg:text-3xl animate-butterfly pointer-events-none select-none"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      >
        🦋
      </div>
      <div
        className="absolute bottom-40 left-8 lg:left-8 text-3xl animate-float-emoji pointer-events-none select-none"
        aria-hidden="true"
      >
        🌻
      </div>
      <div
        className="absolute bottom-32 right-8 lg:right-16 text-3xl animate-float-emoji pointer-events-none select-none"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        🌷
      </div>
      <div
        className="absolute top-1/3 left-4 text-2xl animate-spin-slow pointer-events-none select-none"
        aria-hidden="true"
      >
        ⭐
      </div>
      <div
        className="absolute top-1/4 right-4 text-2xl animate-spin-slow pointer-events-none select-none"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      >
        ✨
      </div>

      {/* Hero content */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-6 lg:mb-8 animate-fade-in-up">
          <div className="text-4xl lg:text-6xl mb-2" aria-hidden="true">
            🌸🌼🌺
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight mb-4 text-balance">
            Where Little Minds Blossom
            <br className="hidden sm:block" />
            <span style={{ color: "oklch(var(--sky-accent))" }}>
              {" "}
              into Bright Futures
            </span>{" "}
            🌸
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 font-semibold mb-8 max-w-2xl mx-auto">
            A nurturing preschool in Sector 4 where every child discovers the
            joy of learning through play and exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollTo("#admissions")}
              size="lg"
              className="rounded-full bg-sky-accent text-white font-bold text-base px-8 py-6 hover:opacity-90 shadow-hero transition-all hover:scale-105"
              data-ocid="hero.primary_button"
            >
              🎒 Enroll Now
            </Button>
            <Button
              onClick={() => scrollTo("#contact")}
              size="lg"
              variant="outline"
              className="rounded-full font-bold text-base px-8 py-6 border-2 border-sky-accent text-sky-accent bg-white/80 hover:bg-yellowpale transition-all hover:scale-105"
              data-ocid="hero.secondary_button"
            >
              🏫 Book a School Visit
            </Button>
          </div>
        </div>

        {/* Logo Showcase */}
        <div className="flex flex-col items-center mt-4 mb-4">
          {/* Decorative sparkles above logo */}
          <div
            className="flex gap-8 mb-2 pointer-events-none select-none"
            aria-hidden="true"
          >
            <span
              className="text-2xl animate-spin-slow"
              style={{ animationDelay: "0s" }}
            >
              ✨
            </span>
            <span
              className="text-3xl animate-spin-slow"
              style={{ animationDelay: "1s" }}
            >
              🌟
            </span>
            <span
              className="text-2xl animate-spin-slow"
              style={{ animationDelay: "2s" }}
            >
              ✨
            </span>
          </div>

          {/* Logo with glowing rings */}
          <div className="relative flex items-center justify-center">
            {/* Outermost glow ring */}
            <div
              className="absolute rounded-full animate-pulse-ring"
              style={{
                width: "340px",
                height: "340px",
                background:
                  "radial-gradient(circle, oklch(0.95 0.15 90 / 0.4) 0%, transparent 70%)",
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute rounded-full border-4 animate-spin-slow opacity-40"
              style={{
                width: "290px",
                height: "290px",
                borderColor: "oklch(var(--sky-accent))",
                borderStyle: "dashed",
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute rounded-full border-4 opacity-50"
              style={{
                width: "256px",
                height: "256px",
                borderColor: "oklch(0.8 0.18 55)",
                boxShadow:
                  "0 0 30px oklch(0.85 0.2 90 / 0.6), 0 0 60px oklch(0.65 0.2 240 / 0.3)",
              }}
            />
            {/* Logo container */}
            <div
              className="relative z-10 rounded-full overflow-hidden border-4 animate-logo-glow"
              style={{
                width: "220px",
                height: "220px",
                borderColor: "white",
                boxShadow:
                  "0 0 0 6px oklch(0.82 0.18 85 / 0.8), 0 0 40px oklch(0.75 0.2 90 / 0.7), 0 0 80px oklch(0.65 0.2 240 / 0.4), 0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/assets/uploads/076ca0b6-f8cd-41aa-bcd3-96215e67aceb-1.jpeg"
                alt="Budding Blooms Preparatory School Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Corner sparkles */}
            {CORNER_SPARKLES.map((s) => (
              <span
                key={s.emoji}
                className="absolute text-xl animate-spin-slow pointer-events-none select-none"
                style={{
                  top: s.top,
                  right: s.right,
                  bottom: s.bottom,
                  left: s.left,
                  animationDelay: s.delay,
                  transform: "translateX(-50%)",
                }}
                aria-hidden="true"
              >
                {s.emoji}
              </span>
            ))}
          </div>

          {/* School name below logo */}
          <div className="mt-4 text-center">
            <p
              className="text-sm font-black tracking-widest uppercase mb-1"
              style={{ color: "oklch(var(--sky-accent))" }}
            >
              ✦ Established 1999 ✦
            </p>
            <p className="text-base font-bold text-foreground/70">
              Preparatory School &amp; Day Care
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-3 sm:gap-5 mt-4 flex-wrap justify-center">
            {[
              { label: "Since", value: "1999", emoji: "🏫" },
              { label: "Years of Excellence", value: "25+", emoji: "⭐" },
              { label: "Registered Organisation", value: "✓", emoji: "📋" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 text-center shadow-md hover:scale-105 transition-transform"
              >
                <div className="text-lg" aria-hidden="true">
                  {stat.emoji}
                </div>
                <div className="font-black text-lg text-foreground leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hills decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 lg:h-20"
          fill="oklch(var(--cream))"
          aria-hidden="true"
        >
          <path d="M0,80 C360,0 720,60 1080,20 L1440,40 L1440,80 Z" />
        </svg>
      </div>
    </section>
  );
}
