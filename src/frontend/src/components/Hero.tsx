import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const barHeights = [
  { pos: "mon", h: 40 },
  { pos: "tue", h: 55 },
  { pos: "wed", h: 35 },
  { pos: "thu", h: 70 },
  { pos: "fri", h: 60 },
  { pos: "sat", h: 80 },
  { pos: "sun", h: 65 },
];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone 1 - back */}
      <div
        className="absolute -right-4 top-8 w-44 rounded-2xl border border-border overflow-hidden"
        style={{ background: "oklch(14% 0.01 220)" }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(78% 0.15 85)" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(78% 0.2 145)" }}
          />
          <span className="ml-2 text-[10px] text-muted-foreground">
            Owner Dashboard
          </span>
        </div>
        <div className="p-3 space-y-2">
          <div className="text-[10px] text-muted-foreground">Revenue</div>
          <div className="text-primary font-bold text-base">₹48,200</div>
          <div className="flex items-end gap-1 h-10">
            {barHeights.map(({ pos, h }) => (
              <div
                key={pos}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    pos === "sat"
                      ? "oklch(83% 0.18 158)"
                      : "oklch(83% 0.18 158 / 0.35)",
                }}
              />
            ))}
          </div>
          <div className="space-y-1">
            {["Members", "Bookings"].map((l) => (
              <div key={l} className="flex justify-between text-[9px]">
                <span className="text-muted-foreground">{l}</span>
                <span className="text-foreground font-medium">
                  {l === "Members" ? "124" : "38"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone 2 - front */}
      <div
        className="relative z-10 w-52 rounded-2xl border border-primary/30 overflow-hidden glow-green-sm"
        style={{ background: "oklch(12% 0.008 160)" }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(78% 0.15 85)" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(78% 0.2 145)" }}
          />
          <span className="ml-2 text-[10px] text-muted-foreground">
            User App
          </span>
        </div>
        <div className="p-3 space-y-2.5">
          <div
            className="rounded-lg p-2"
            style={{
              background: "oklch(83% 0.18 158 / 0.1)",
              border: "1px solid oklch(83% 0.18 158 / 0.25)",
            }}
          >
            <div className="text-[9px] text-muted-foreground">Next Session</div>
            <div className="text-[11px] font-semibold text-foreground">
              Yoga — Tue 7:00 AM
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] text-muted-foreground">Activity</div>
            <svg
              viewBox="0 0 100 32"
              className="w-full"
              preserveAspectRatio="none"
              aria-label="Activity chart"
              role="img"
            >
              <title>Activity chart</title>
              <polyline
                points="0,28 15,22 30,26 45,14 60,18 75,8 90,12 100,6"
                fill="none"
                stroke="oklch(83% 0.18 158)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,28 15,22 30,26 45,14 60,18 75,8 90,12 100,6 100,32 0,32"
                fill="oklch(83% 0.18 158 / 0.1)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="space-y-1">
            {["Payments", "Points"].map((l) => (
              <div key={l} className="flex justify-between text-[9px]">
                <span className="text-muted-foreground">{l}</span>
                <span className="text-primary font-semibold">
                  {l === "Payments" ? "✓ Paid" : "420 pts"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-radial overflow-hidden pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Launching 2026
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-foreground">
            Custom Apps for{" "}
            <span className="text-primary text-glow">Local Businesses</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            We build powerful, affordable apps tailored for gyms, salons,
            clinics, shops, and coaching centers — so you can focus on running
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={scrollToContact}
              className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 text-base animate-glow-pulse hover:brightness-110 transition-all"
              data-ocid="hero.primary_button"
            >
              Get Your App <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border-border text-muted-foreground hover:text-foreground hover:border-primary/40 px-8 py-3 text-base transition-all"
              data-ocid="hero.secondary_button"
            >
              See How It Works
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-2">
            {["Gyms", "Salons", "Clinics", "Shops"].map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground">
                ✓ {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
