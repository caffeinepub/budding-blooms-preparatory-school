import { useEffect, useState } from "react";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("admissionPopupShown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("admissionPopupShown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  const mailtoLink =
    "mailto:buddingbloomsschool@gmail.com?subject=Admission%20Enquiry%20-%20Session%202026-2027&body=Hello%2C%0A%0AI%20am%20interested%20in%20admission%20details%20for%20session%202026-2027.%20Please%20share%20more%20information%20about%20the%20programs%2C%20fees%2C%20and%20schedule.%0A%0AThank%20you";

  return (
    <dialog
      open
      aria-modal="true"
      aria-label="Admissions Open"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 m-0 w-full h-full max-w-none max-h-none border-0 bg-transparent"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, #1565C0 0%, #0D47A1 50%, #1565C0 100%)",
        }}
      >
        {/* Decorative top band */}
        <div
          className="h-2"
          style={{
            background: "linear-gradient(90deg, #FDD835, #F4511E, #FDD835)",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-white/70 hover:text-white text-2xl font-bold leading-none transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-8 pt-6 pb-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/assets/uploads/076ca0b6-f8cd-41aa-bcd3-96215e67aceb-1.jpeg"
              alt="Budding Blooms Logo"
              className="w-20 h-20 rounded-full border-4 shadow-lg object-cover"
              style={{ borderColor: "#FDD835" }}
            />
          </div>

          {/* Badge */}
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
            style={{ backgroundColor: "#FDD835", color: "#1565C0" }}
          >
            🌸 Now Open!
          </div>

          <h2 className="text-2xl font-extrabold text-white mb-1 leading-tight">
            Admissions Open
          </h2>
          <p className="text-xl font-bold mb-4" style={{ color: "#FDD835" }}>
            Session 2026–2027
          </p>

          <p className="text-white/85 text-sm mb-6 leading-relaxed">
            Give your child the best start in life! Enroll them at Budding
            Blooms Preparatory School &amp; Day Care.{" "}
            <span className="font-semibold text-white">
              Limited seats available
            </span>{" "}
            — don&apos;t miss out.
          </p>

          {/* CTA Button */}
          <a
            href={mailtoLink}
            className="block w-full py-3 px-6 rounded-xl text-base font-bold transition-transform hover:scale-105 shadow-lg mb-3"
            style={{ backgroundColor: "#F4511E", color: "#fff" }}
          >
            📧 Get Admission Details
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white/90 text-sm transition-colors"
          >
            Maybe later
          </button>
        </div>

        {/* Decorative bottom band */}
        <div
          className="h-2"
          style={{
            background: "linear-gradient(90deg, #F4511E, #FDD835, #F4511E)",
          }}
        />
      </div>
    </dialog>
  );
}
