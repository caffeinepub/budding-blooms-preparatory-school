import { useEffect, useRef } from "react";

const testimonials = [
  {
    photo: "/assets/generated/parent-mom-1.dim_200x200.jpg",
    name: "Priya S.",
    role: "Parent of LKG Student",
    quote:
      "Wonderful environment for kids! My daughter blossoms every day. The teachers are truly exceptional and caring.",
    bg: "bg-pinksoft",
  },
  {
    photo: "/assets/generated/parent-dad-1.dim_200x200.jpg",
    name: "Rahul M.",
    role: "Parent of Nursery Student",
    quote:
      "My child loves going to school every day! The activity-based approach has made learning so enjoyable for him.",
    bg: "bg-yellowpale",
  },
  {
    photo: "/assets/generated/parent-mom-2.dim_200x200.jpg",
    name: "Anita K.",
    role: "Parent of UKG Student",
    quote:
      "Best preschool in Sector 4. The learning approach is truly unique and the results are incredible.",
    bg: "bg-mint",
  },
  {
    photo: "/assets/generated/parent-dad-2.dim_200x200.jpg",
    name: "Vikram T.",
    role: "Parent of Playgroup Student",
    quote:
      "The facilities are amazing and the staff is incredibly professional. We couldn't be happier with our choice!",
    bg: "bg-lavender",
  },
];

export default function Testimonials() {
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
      id="testimonials"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-pinksoft"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <div className="text-4xl mb-3" aria-hidden="true">
            💬
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            What Parents Say
          </h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            Hear from our wonderful community of parents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-3xl p-6 pt-10 relative card-hover shadow-card`}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Avatar overlapping top */}
              <div className="absolute -top-6 left-6 w-14 h-14 rounded-full shadow-md overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-black text-base">{t.name}</div>
                <div className="text-xs font-semibold text-foreground/60">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
