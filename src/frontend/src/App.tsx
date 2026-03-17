import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
