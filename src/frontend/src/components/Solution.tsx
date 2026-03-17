import { useFadeIn } from "@/hooks/useFadeIn";
import { Bell, LayoutDashboard, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    desc: "Full control over bookings, revenue, staff, and analytics from one place.",
  },
  {
    icon: Smartphone,
    title: "User-Facing App",
    desc: "A sleek app for your clients to book, pay, and stay engaged with your brand.",
  },
  {
    icon: Zap,
    title: "Automated Payments",
    desc: "Collect payments on time, every time — with reminders and instant receipts.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Automated WhatsApp and push alerts keep clients coming back consistently.",
  },
];

const barData = [
  { month: "jan", h: 45 },
  { month: "feb", h: 60 },
  { month: "mar", h: 42 },
  { month: "apr", h: 75 },
  { month: "may", h: 65 },
  { month: "jun", h: 88 },
  { month: "jul", h: 70 },
  { month: "aug", h: 92 },
  { month: "sep", h: 80 },
  { month: "oct", h: 95 },
  { month: "nov", h: 78 },
  { month: "dec", h: 100 },
];

function DashboardMock() {
  return (
    <div
      className="rounded-2xl border border-border overflow-hidden"
      style={{ background: "oklch(12% 0.008 210)" }}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive" />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "oklch(78% 0.15 85)" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "oklch(78% 0.2 145)" }}
        />
        <span className="mx-auto text-xs text-muted-foreground">
          Gnucifer Dashboard — Elite Fitness Studio
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          { label: "Members", value: "248" },
          { label: "Revenue", value: "₹1.2L" },
          { label: "Bookings", value: "94" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-3 border border-border"
            style={{ background: "oklch(16% 0.01 210)" }}
          >
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
            <div className="text-base font-bold text-primary mt-0.5">
              {s.value}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div
          className="rounded-xl p-3 border border-border"
          style={{ background: "oklch(16% 0.01 210)" }}
        >
          <div className="text-[10px] text-muted-foreground mb-2">
            Monthly Revenue
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {barData.map(({ month, h }) => (
              <div
                key={month}
                className="flex-1 rounded-sm transition-all"
                style={{
                  height: `${h}%`,
                  background:
                    month === "dec"
                      ? "oklch(83% 0.18 158)"
                      : "oklch(83% 0.18 158 / 0.3)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { name: "Aarav Singh", plan: "Pro Plan", status: "Active" },
            { name: "Priya Mehta", plan: "Starter", status: "Renew" },
            { name: "Karan Nair", plan: "Pro Plan", status: "Active" },
          ].map((m) => (
            <div
              key={m.name}
              className="flex items-center justify-between px-3 py-2 rounded-lg border border-border text-[11px]"
              style={{ background: "oklch(14% 0.01 220)" }}
            >
              <span className="text-foreground font-medium">{m.name}</span>
              <span className="text-muted-foreground">{m.plan}</span>
              <span
                className={`font-semibold ${m.status === "Active" ? "text-primary" : "text-yellow-400"}`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Solution() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className="section-fade py-24"
      style={{ background: "oklch(10% 0.009 180)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            The Solution
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            The Gnucifer Platform
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A complete digital infrastructure built specifically for your type
            of business.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
