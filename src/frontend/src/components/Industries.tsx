import { useFadeIn } from "@/hooks/useFadeIn";
import {
  Dumbbell,
  GraduationCap,
  Scissors,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    icon: Dumbbell,
    name: "Gyms & Fitness",
    desc: "Membership management, class scheduling, and trainer assignments.",
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    desc: "Appointment booking, stylist profiles, and loyalty rewards.",
  },
  {
    icon: ShoppingBag,
    name: "Retail Shops",
    desc: "Inventory tracking, customer orders, and digital receipts.",
  },
  {
    icon: Stethoscope,
    name: "Clinics & Healthcare",
    desc: "Patient records, appointment slots, and prescription history.",
  },
  {
    icon: GraduationCap,
    name: "Coaching Centers",
    desc: "Batch management, fee collection, and attendance tracking.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafes",
    desc: "Table reservations, digital menu, and order management.",
  },
];

export function Industries() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="industries"
      ref={ref}
      className="section-fade py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Industries
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Tailored for Your Industry
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We don't build generic apps. Every solution is crafted around the
            specific workflows of your business type.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ icon: Icon, name, desc }, i) => (
            <div
              key={name}
              className="group p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_oklch(83%_0.18_158_/_0.12)] transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
              data-ocid={`industries.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
