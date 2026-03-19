const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-yellowfooter py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl" aria-hidden="true">
                🌸
              </span>
              <div>
                <div className="font-black text-lg">Budding Blooms</div>
                <div className="text-xs font-semibold text-foreground/60">
                  Preparatory School &amp; Day Care
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-foreground/70 leading-relaxed mb-4">
              Nurturing Young Minds with Love & Care 🌼
            </p>
            <p className="text-xs text-foreground/60 font-medium">
              A nurturing preparatory school &amp; day care in Sector 4,
              Gurugram, committed to building bright futures through play-based
              education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-black text-base mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm font-medium text-foreground/70 mb-6">
              <div>📍 SCF-24, Sector 4, HUDA Market, Gurugram</div>
              <div>
                <a
                  href="tel:9711322919"
                  className="hover:text-foreground transition-colors"
                >
                  📞 +91 9711322919
                </a>
              </div>
              <div>
                <a
                  href="mailto:buddingbloomsschool@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  ✉️ buddingbloomsschool@gmail.com
                </a>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1GGxgZnVQd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                data-ocid="footer.link"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-blue-600"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/buddingbloomsprep?igsh=MWtpOWN4d3g1ZXdh&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                data-ocid="footer.link"
              >
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <defs>
                    <linearGradient
                      id="ig-gradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-6 text-center">
          <p className="text-sm font-semibold text-foreground/60">
            © {currentYear} Budding Blooms Preparatory School &amp; Day Care.
            All rights reserved.
          </p>
          <p className="text-xs font-medium text-foreground/50 mt-1">
            Built with ❤️ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
