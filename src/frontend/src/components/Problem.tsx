import { useFadeIn } from "@/hooks/useFadeIn";
import {
  CreditCard,
  FileSpreadsheet,
  Globe,
  MessageCircleWarning,
} from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Manual Management",
    desc: "Spreadsheets, paper registers, and WhatsApp notes lead to lost data and wasted hours every week.",
  },
  {
    icon: MessageCircleWarning,
    title: "WhatsApp Chaos",
    desc: "Client messages flood personal phones with no structure, history, or professional tracking.",
  },
  {
    icon: CreditCard,
    title: "Missed Payments",
    desc: "No automated billing means chasing clients manually, losing revenue, and hurting cash flow.",
  },
  {
    icon: Globe,
    title: "No Digital Presence",
    desc: "Competitors with apps attract and retain more customers. Staying offline means falling behind.",
  },
];

export function Problem() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      className="section-fade py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            The Problem
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            The Local Business Challenge
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Running a local business is hard enough. Outdated tools make it
            harder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_oklch(83%_0.18_158_/_0.12)] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
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
