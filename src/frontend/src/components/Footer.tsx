import { FlaskConical } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-foreground">
          <FlaskConical className="w-4 h-4 text-primary" />
          <span className="font-bold">Gnucifer Labs</span>
          <span className="text-muted-foreground text-sm ml-2">
            — Apps for Local Businesses
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          {["Features", "Industries", "Contact"].map((link) => (
            <button
              type="button"
              key={link}
              onClick={() =>
                document
                  .getElementById(link.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {year} Gnucifer Labs. Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
