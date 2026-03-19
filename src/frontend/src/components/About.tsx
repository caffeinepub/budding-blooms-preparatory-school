import { useEffect, useRef } from "react";

const highlights = [
  {
    emoji: "🛡️",
    title: "Safe Environment",
    desc: "A secure, loving space where children feel protected and confident to explore.",
    bg: "bg-pinksoft",
  },
  {
    emoji: "🎓",
    title: "Qualified Teachers",
    desc: "Our passionate educators are trained in early childhood development methodologies.",
    bg: "bg-yellowpale",
  },
  {
    emoji: "🎨",
    title: "Activity-Based Learning",
    desc: "Learning through hands-on activities, play, and real-world exploration.",
    bg: "bg-mint",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            🏫
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">About Us</h2>
          <p className="text-base lg:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Budding Blooms Preparatory School &amp; Day Care is a nurturing
            space where young minds grow with confidence, curiosity, and care.
            With a legacy since 1999, we offer a safe, stimulating environment
            focused on holistic development through a well-curated,{" "}
            <span
              className="font-bold"
              style={{ color: "oklch(var(--sky-accent))" }}
            >
              play-based curriculum
            </span>{" "}
            and a 12:1 student-teacher ratio. Our alumni study in some of the
            most eminent schools in the city and beyond, reflecting our 100%
            success rate in formal school enrolment. We share strong
            associations with leading schools in Gurgaon for higher grades.
            Trusted by generations, our happy parent community and returning
            families are a true testament to the love, care, and excellence we
            provide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((h) => (
            <div
              key={h.title}
              className={`${h.bg} rounded-3xl p-8 text-center card-hover shadow-card`}
              data-ocid="about.card"
            >
              <div className="text-5xl mb-4 animate-float-emoji">{h.emoji}</div>
              <h3 className="text-xl font-black mb-2">{h.title}</h3>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Principal Section */}
        <div className="bg-yellowpale rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3" aria-hidden="true">
              🌸
            </div>
            <h3 className="text-2xl lg:text-3xl font-black mb-1">
              A Message from Our Principal
            </h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/assets/uploads/e9536f83-21f1-46be-9028-8f495dae3a8d-1-1.jpeg"
                alt="Adya Ahuja, Principal"
                className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0 shadow-md border-4 border-pinkcoral"
              />
              <div>
                <div className="font-black text-xl">Adya Ahuja</div>
                <div className="text-sm font-semibold text-foreground/60">
                  Principal | Counseling Psychologist | ECCE Expert | Life
                  Skills Facilitator
                </div>
              </div>
            </div>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed font-medium">
              <p>
                I am Adya Ahuja, a Counseling Psychologist, ECCE Expert, and
                Life Skills Facilitator with a decade of experience with young
                children.
              </p>
              <p>
                At Budding Blooms, my vision is to create a nurturing space
                where every child feels valued, confident, and inspired to
                learn. I personally engage with each child, understanding their
                unique needs and supporting their emotional and developmental
                journey.
              </p>
              <p>
                I also believe that a happy and supported team creates the best
                learning environment. By fostering a positive and caring work
                culture, we ensure that this warmth reflects in our classrooms
                every day. Together, we strive to help every child grow with
                confidence, curiosity, and joy.
              </p>
            </div>
            <div className="mt-6 text-right">
              <span
                className="font-black text-lg"
                style={{ color: "oklch(var(--sky-accent))" }}
              >
                — Adya Ahuja, Principal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
