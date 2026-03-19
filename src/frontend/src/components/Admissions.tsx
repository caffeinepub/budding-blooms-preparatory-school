import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const steps = [
  {
    num: "1",
    title: "Fill Inquiry Form",
    desc: "Complete our simple online inquiry form with your child's details.",
    emoji: "📝",
    bg: "bg-pinksoft",
    circle: "bg-pinkcoral",
  },
  {
    num: "2",
    title: "Visit School",
    desc: "Schedule a campus tour and meet our warm and welcoming team.",
    emoji: "🏫",
    bg: "bg-yellowpale",
    circle: "bg-greendark",
  },
  {
    num: "3",
    title: "Complete Enrollment",
    desc: "Submit required documents and confirm your child's admission.",
    emoji: "🎒",
    bg: "bg-mint",
    circle: "bg-sky-accent",
  },
];

export default function Admissions() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    programInterest: "",
    phone: "",
    email: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.parentName ||
      !form.childName ||
      !form.childAge ||
      !form.programInterest ||
      !form.phone ||
      !form.email
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const subject = encodeURIComponent(`Admission Inquiry – ${form.childName}`);
    const body = encodeURIComponent(
      `Parent Name: ${form.parentName}\nChild's Name: ${form.childName}\nChild's Age: ${form.childAge} year(s)\nProgram Interested In: ${form.programInterest}\nPhone: ${form.phone}\nEmail: ${form.email}`,
    );
    window.open(
      `mailto:buddingbloomsschool@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    toast.success(
      "🎉 Your email app will open — please send the email to complete your application!",
    );
    setOpen(false);
    setForm({
      parentName: "",
      childName: "",
      childAge: "",
      programInterest: "",
      phone: "",
      email: "",
    });
  };

  return (
    <section
      id="admissions"
      ref={ref}
      className="section-fade py-16 lg:py-24 bg-sky-light"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <div className="text-4xl mb-3" aria-hidden="true">
            🎓
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Admission Process
          </h2>
          <p className="text-base text-foreground/70 font-medium max-w-xl mx-auto">
            Joining our school family is simple and straightforward. Here's how
            to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`${step.bg} rounded-3xl p-8 text-center card-hover shadow-card relative`}
              data-ocid={`admissions.item.${step.num}`}
            >
              <div
                className={`w-14 h-14 ${step.circle} rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-md`}
              >
                {step.num}
              </div>
              <div className="text-4xl mb-3">{step.emoji}</div>
              <h3 className="text-xl font-black mb-2">{step.title}</h3>
              <p className="text-sm font-medium text-foreground/75 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big CTA banner */}
        <div
          className="rounded-3xl p-8 lg:p-12 text-center mb-8"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--pink-soft)) 0%, oklch(var(--yellow-pale)) 40%, oklch(var(--mint)) 100%)",
          }}
        >
          <div className="text-4xl mb-4" aria-hidden="true">
            🌸✨🌟
          </div>
          <h3 className="text-2xl lg:text-3xl font-black mb-4">
            Ready for your child to bloom?
            <br />
            <span style={{ color: "oklch(var(--sky-accent))" }}>
              Join Our School Family!
            </span>
          </h3>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="rounded-full bg-sky-accent text-white font-bold text-base px-10 py-6 hover:opacity-90 shadow-hero transition-all hover:scale-105"
                data-ocid="admissions.open_modal_button"
              >
                🎒 Apply for Admission
              </Button>
            </DialogTrigger>
            <DialogContent
              className="max-w-lg rounded-3xl"
              data-ocid="admissions.dialog"
            >
              <DialogHeader>
                <DialogTitle className="text-xl font-black text-center">
                  🌸 Admission Inquiry Form
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName" className="font-bold text-sm">
                      Parent Name *
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Your name"
                      value={form.parentName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, parentName: e.target.value }))
                      }
                      className="mt-1 rounded-xl"
                      data-ocid="admissions.input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childName" className="font-bold text-sm">
                      Child's Name *
                    </Label>
                    <Input
                      id="childName"
                      placeholder="Child's name"
                      value={form.childName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, childName: e.target.value }))
                      }
                      className="mt-1 rounded-xl"
                      data-ocid="admissions.input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="font-bold text-sm">Child's Age *</Label>
                    <Select
                      value={form.childAge}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, childAge: v }))
                      }
                    >
                      <SelectTrigger
                        className="mt-1 rounded-xl"
                        data-ocid="admissions.select"
                      >
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((age) => (
                          <SelectItem key={age} value={String(age)}>
                            {age} {age === 1 ? "year" : "years"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-bold text-sm">Program *</Label>
                    <Select
                      value={form.programInterest}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, programInterest: v }))
                      }
                    >
                      <SelectTrigger
                        className="mt-1 rounded-xl"
                        data-ocid="admissions.select"
                      >
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Toddler">
                          Toddler (18 months – 2 yrs)
                        </SelectItem>
                        <SelectItem value="Pre-Nursery">
                          Pre-Nursery (2–3 yrs)
                        </SelectItem>
                        <SelectItem value="Nursery">
                          Nursery (3–4 yrs)
                        </SelectItem>
                        <SelectItem value="LKG">LKG (4–5 yrs)</SelectItem>
                        <SelectItem value="UKG">UKG (5–6 yrs)</SelectItem>
                        <SelectItem value="Day Care">Day Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="admPhone" className="font-bold text-sm">
                    Phone *
                  </Label>
                  <Input
                    id="admPhone"
                    type="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="mt-1 rounded-xl"
                    data-ocid="admissions.input"
                  />
                </div>
                <div>
                  <Label htmlFor="admEmail" className="font-bold text-sm">
                    Email *
                  </Label>
                  <Input
                    id="admEmail"
                    type="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="mt-1 rounded-xl"
                    data-ocid="admissions.input"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-sky-accent text-white font-bold py-5 hover:opacity-90 transition-all"
                  data-ocid="admissions.submit_button"
                >
                  🌸 Submit Application
                </Button>
                <p className="text-xs text-center text-foreground/50 font-medium">
                  This will open your email app to send directly to
                  buddingbloomsschool@gmail.com
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
