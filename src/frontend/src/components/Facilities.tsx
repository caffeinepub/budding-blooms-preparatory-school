import { useEffect, useRef } from "react";

const facilities = [
  {
    emoji: "🏫",
    title: "Bright Classrooms",
    desc: "Colorful, spacious, and well-equipped classrooms designed for young learners.",
  },
  {
    emoji: "🛝",
    title: "Play Area (Toddler & Pre-Nursery)",
    desc: "Dedicated safe play zone with age-appropriate equipment for our youngest learners.",
  },
  {
    emoji: "🌳",
    title: "Play Area (Nursery, LKG & UKG)",
    desc: "Spacious outdoor playground with engaging equipment for older children to explore and grow.",
  },
  {
    emoji: "✏️",
    title: "Art & Craft Zone",
    desc: "Dedicated creative space for painting, drawing, sculpting and more.",
  },
  {
    emoji: "📚",
    title: "Storytelling Rooms",
    desc: "Cozy activity rooms filled with books, puppets, and imaginative play materials.",
  },
];

export default function Facilities() {
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
      id="facilities"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-greenlight"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            🏡
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Our Facilities
          </h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            World-class facilities designed to nurture every aspect of your
            child's development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-3xl p-6 text-center card-hover shadow-card flex flex-col items-center"
              data-ocid={`facilities.item.${i + 1}`}
            >
              <div className="text-5xl mb-4 animate-float-emoji">{f.emoji}</div>
              <h3 className="text-base font-black mb-2">{f.title}</h3>
              <p className="text-xs font-medium text-foreground/70 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
