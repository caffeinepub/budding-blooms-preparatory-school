import { useEffect, useRef } from "react";

const galleryItems = [
  {
    src: "/assets/uploads/b240d6ff-3576-4121-b311-aa64a8e9c4a1-1.jpeg",
    alt: "Bright and colorful nursery classroom at Budding Blooms",
    label: "Our Classrooms",
  },
  {
    src: "/assets/uploads/7c6f84f1-5bed-4f38-b895-64ee75a1c534-2.jpeg",
    alt: "Children celebrating birthday with teacher",
    label: "Birthday Celebrations",
  },
  {
    src: "/assets/uploads/f0d8e30c-6bc0-46b2-9bc0-77a18d533416-3.jpeg",
    alt: "Children with teacher during Blue Colour learning activity",
    label: "Learning Activities",
  },
  {
    src: "/assets/uploads/29483396-bde1-43b9-8a91-6c60f2bb1b59-4.jpeg",
    alt: "Children celebrating Diwali with diyas",
    label: "Festive Celebrations",
  },
  {
    src: "/assets/uploads/3f6646eb-ee8a-434d-9af5-b0e779139409-5.jpeg",
    alt: "Children dressed up for a special school event",
    label: "Special Events",
  },
  {
    src: "/assets/uploads/8a1008d5-84bc-4c3e-95b1-65d84d09bf76-6.jpeg",
    alt: "Children reading books in the library corner",
    label: "Storytelling & Library",
  },
  {
    src: "/assets/uploads/c9dcb9fb-1bd2-4f20-a8d8-ad628accd503-1.jpeg",
    alt: "Children in classroom holding books",
    label: "Classroom Learning",
  },
  {
    src: "/assets/uploads/0f76ce77-a901-4f6c-8356-41158fff6653-2.jpeg",
    alt: "Christmas celebration with Santa and children",
    label: "Christmas Celebration",
  },
  {
    src: "/assets/uploads/1c77691d-3aa9-48f3-87ce-c0f063b8fdbc-3.jpeg",
    alt: "Janmashtami celebration with children in costumes",
    label: "Janmashtami",
  },
  {
    src: "/assets/uploads/f856bc34-7a96-4f6e-b02c-175188f0486e-4.jpeg",
    alt: "Child performing at English recitation event",
    label: "English Recitation",
  },
  {
    src: "/assets/uploads/0d95e121-3845-4699-bfe6-a664e522b8d8-5.jpeg",
    alt: "Rain dance activity with children in pool",
    label: "Rain Dance Activity",
  },
  {
    src: "/assets/uploads/c2b9eec3-c8df-45e9-a14e-2e12a0908297-6.jpeg",
    alt: "Children sitting in circle eating watermelon with teacher",
    label: "Fun Activities",
  },
  {
    src: "/assets/uploads/70526559-1f5f-4d91-b1c8-df6d7aef7c39-7.jpeg",
    alt: "Diwali celebration with children holding diyas",
    label: "Diwali Celebration",
  },
  {
    src: "/assets/uploads/e6c723f0-6467-436c-9641-532b25309032-8.jpeg",
    alt: "Children doing yoga and exercise",
    label: "Yoga & Fitness",
  },
];

export default function Gallery() {
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
      id="gallery"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            📸
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Life at Budding Blooms
          </h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            A glimpse into the joyful world of our little learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className="relative rounded-3xl overflow-hidden shadow-card card-hover group"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white font-black text-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
