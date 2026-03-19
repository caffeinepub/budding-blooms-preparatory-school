import { useEffect, useRef } from "react";

const programs = [
  {
    emoji: "🍼",
    title: "Toddler",
    age: "18 months – 2 years",
    desc: "A gentle, sensory-rich introduction to group learning in a safe and loving environment.",
    bg: "bg-lavender",
    badge: "bg-greendark text-white",
  },
  {
    emoji: "🧸",
    title: "Pre-Nursery",
    age: "2–3 years",
    desc: "A gentle introduction to learning through play and exploration in a warm, nurturing environment.",
    bg: "bg-pinksoft",
    badge: "bg-pinkcoral text-white",
  },
  {
    emoji: "🎨",
    title: "Nursery",
    age: "3–4 years",
    desc: "Building confidence and curiosity through creative activities, music, and social play.",
    bg: "bg-yellowpale",
    badge: "bg-greendark text-white",
  },
  {
    emoji: "📚",
    title: "LKG",
    age: "4–5 years",
    desc: "Early literacy, numeracy and social skills development through structured fun activities.",
    bg: "bg-greenlight",
    badge: "bg-sky-accent text-white",
  },
  {
    emoji: "✏️",
    title: "UKG",
    age: "5–6 years",
    desc: "Comprehensive preparation for primary school with structured learning and critical thinking.",
    bg: "bg-lavender",
    badge: "bg-pinkcoral text-white",
  },
];

export default function Programs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="programs"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-sky-light"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            🌈
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Our Programs</h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            Age-appropriate programs designed to ignite curiosity and build
            strong foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`${p.bg} rounded-3xl p-6 flex flex-col card-hover shadow-card`}
              data-ocid={`programs.item.${i + 1}`}
            >
              <div className="text-5xl mb-4 animate-float-emoji text-center">
                {p.emoji}
              </div>
              <div
                className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold mb-3 ${p.badge}`}
              >
                {p.age}
              </div>
              <h3 className="text-xl font-black mb-2">{p.title}</h3>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed flex-1">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
