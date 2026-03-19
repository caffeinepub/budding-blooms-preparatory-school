import { useEffect, useRef } from "react";

const features = [
  {
    emoji: "🛡️",
    title: "Safe & Secure Campus",
    desc: "Fully secured premises with trained staff and safety protocols.",
  },
  {
    emoji: "👩‍🏫",
    title: "Experienced & Caring Staff",
    desc: "Dedicated educators with specialized early childhood training.",
  },
  {
    emoji: "🎨",
    title: "Activity-Based Learning",
    desc: "Hands-on projects and creative activities that make learning fun.",
  },
  {
    emoji: "🌱",
    title: "Holistic Development",
    desc: "Focus on emotional, social, physical and cognitive growth.",
  },
  {
    emoji: "📹",
    title: "CCTV Parent Access",
    desc: "Parents can view live CCTV footage for complete peace of mind and transparency.",
  },
  {
    emoji: "👥",
    title: "12:1 Student-Teacher Ratio",
    desc: "Personalised attention with a maximum of 12 students per teacher for optimal learning.",
  },
  {
    emoji: "🏫",
    title: "Formal School Tie-Ups",
    desc: "Strong associations with leading schools in Gurgaon to support your child's transition to higher grades.",
  },
  {
    emoji: "🌞",
    title: "Day Care (8 AM – 6 PM)",
    desc: "Extended day care available from 8 AM to 6 PM for working parents, ensuring your child is always in safe hands.",
  },
];

export default function WhyChooseUs() {
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
      id="why-us"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            ⭐
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            We go above and beyond to create an exceptional learning journey for
            your child.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-3xl p-6 flex gap-4 items-start card-hover shadow-card"
              data-ocid={`why.item.${i + 1}`}
            >
              <div className="text-4xl flex-shrink-0">{f.emoji}</div>
              <div>
                <h3 className="text-lg font-black mb-1">{f.title}</h3>
                <p className="text-sm font-medium text-foreground/70 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
