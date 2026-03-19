import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message}`,
    );
    window.open(
      `mailto:buddingbloomsschool@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    toast.success(
      "✅ Your email client will open — please send the email to complete your enquiry.",
    );
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3" aria-hidden="true">
            📍
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Contact Us</h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            We'd love to hear from you! Reach out and let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden shadow-card"
            data-ocid="contact.card"
          >
            <iframe
              title="Budding Blooms Location - SCF-24, Sector 4, HUDA Market, Gurugram"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4!2d77.0!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+4+HUDA+Market+Gurugram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "280px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Details */}
          <div
            className="bg-sky-light rounded-3xl p-8 shadow-card flex flex-col justify-center gap-6"
            data-ocid="contact.card"
          >
            <h3 className="text-xl font-black mb-2">📬 Get in Touch</h3>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-sky-accent rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Address</div>
                <div className="text-sm text-foreground/70 font-medium">
                  SCF-24, Sector 4, HUDA Market, Gurugram
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-greendark rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Phone</div>
                <a
                  href="tel:9711322919"
                  className="text-sm text-foreground/70 font-medium hover:text-sky-accent transition-colors"
                  data-ocid="contact.link"
                >
                  +91 9711322919
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-pinkcoral rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Email</div>
                <a
                  href="mailto:buddingbloomsschool@gmail.com"
                  className="text-sm text-foreground/70 font-medium hover:text-sky-accent transition-colors"
                  data-ocid="contact.link"
                >
                  buddingbloomsschool@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center mt-2">
              <div className="text-3xl mb-2">🕐</div>
              <div className="font-bold text-sm">School Hours</div>
              <div className="text-xs font-medium text-foreground/60">
                Monday – Saturday: 8:00 AM – 6:00 PM
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl p-8 shadow-card"
            data-ocid="contact.card"
          >
            <h3 className="text-xl font-black mb-6">✉️ Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="cName" className="font-bold text-sm">
                  Name *
                </Label>
                <Input
                  id="cName"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="mt-1 rounded-xl"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label htmlFor="cEmail" className="font-bold text-sm">
                  Email *
                </Label>
                <Input
                  id="cEmail"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="mt-1 rounded-xl"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label htmlFor="cPhone" className="font-bold text-sm">
                  Phone
                </Label>
                <Input
                  id="cPhone"
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="mt-1 rounded-xl"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label htmlFor="cMessage" className="font-bold text-sm">
                  Message *
                </Label>
                <Textarea
                  id="cMessage"
                  placeholder="Write your message here..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="mt-1 rounded-xl resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-sky-accent text-white font-bold py-5 hover:opacity-90 transition-all"
                data-ocid="contact.submit_button"
              >
                📤 Send Message
              </Button>
              <p className="text-xs text-center text-foreground/50 font-medium">
                This will open your email app to send directly to
                buddingbloomsschool@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
