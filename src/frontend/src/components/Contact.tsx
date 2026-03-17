import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const ref = useFadeIn<HTMLElement>();
  const { mutate, isPending } = useSubmitContactForm();
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.businessName || !form.phoneNumber) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent! We'll be in touch soon.");
        setForm({ name: "", businessName: "", phoneNumber: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-fade py-24"
      style={{ background: "oklch(10% 0.009 180)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Get Started
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Elevate Your Business?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Tell us about your business and we'll design the perfect app for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl border border-border bg-card"
            data-ocid="contact.panel"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-foreground">
                Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your full name"
                className="bg-input border-border focus:border-primary focus:ring-primary/30 rounded-xl"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-sm text-foreground">
                Business Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="businessName"
                value={form.businessName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, businessName: e.target.value }))
                }
                placeholder="e.g. Elite Fitness Studio"
                className="bg-input border-border focus:border-primary focus:ring-primary/30 rounded-xl"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm text-foreground">
                Phone <span className="text-primary">*</span>
              </Label>
              <Input
                id="phone"
                value={form.phoneNumber}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phoneNumber: e.target.value }))
                }
                placeholder="+91 98765 43210"
                className="bg-input border-border focus:border-primary focus:ring-primary/30 rounded-xl"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm text-foreground">
                Tell us about your business
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Describe your business type, current challenges, and what you'd like in your app..."
                rows={4}
                className="bg-input border-border focus:border-primary focus:ring-primary/30 rounded-xl resize-none"
                data-ocid="contact.textarea"
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-primary text-primary-foreground font-semibold py-3 text-base animate-glow-pulse hover:brightness-110 transition-all"
              data-ocid="contact.submit_button"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Get Your App"
              )}
            </Button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                We build apps that work for you
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gnucifer Labs specializes in creating custom digital solutions
                for local businesses across India. From concept to launch in
                weeks, not months — with ongoing support.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "gnuciferlabs@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7404082180" },
                { icon: MapPin, label: "Location", value: "Jind, Haryana" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium text-foreground">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-muted-foreground">
                💡{" "}
                <span className="text-foreground font-medium">
                  Free consultation:
                </span>{" "}
                We'll analyze your business and propose a solution at no cost.
                No commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
