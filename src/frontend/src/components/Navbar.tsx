import { Button } from "@/components/ui/button";
import { FlaskConical, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          data-ocid="nav.link"
        >
          <FlaskConical className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg tracking-tight">
            Gnucifer Labs
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {["features", "industries", "contact"].map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-muted-foreground hover:text-foreground capitalize transition-colors"
              data-ocid="nav.link"
            >
              {id === "features"
                ? "Features"
                : id === "industries"
                  ? "Industries"
                  : "Contact"}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-primary text-primary-foreground font-semibold px-5 animate-glow-pulse hover:brightness-110 transition-all"
            data-ocid="nav.primary_button"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 flex flex-col gap-4">
          {["features", "industries", "contact"].map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-muted-foreground hover:text-foreground capitalize text-left transition-colors"
            >
              {id === "features"
                ? "Features"
                : id === "industries"
                  ? "Industries"
                  : "Contact"}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-primary text-primary-foreground font-semibold w-fit px-5"
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
