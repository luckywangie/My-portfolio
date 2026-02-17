import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection("#" + current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
          isScrolled ? "w-[90%] md:w-auto" : "w-[95%] md:w-auto"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg",
            isScrolled && "shadow-xl border-primary/20"
          )}
        >
          <a
            className="text-xl font-bold font-heading tracking-tighter flex items-center gap-2 mr-8"
            href="#hero"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              L
            </div>
            <span className="hidden md:block">LuckyWangie</span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  activeSection === item.href
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex ml-8">
            <a href="#contact" className="magnetic-btn text-sm px-6 py-2">
              Let's Talk
            </a>
          </div>

          {/* mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile nav menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        )}
      >
        <div className="flex flex-col space-y-6 text-center w-full max-w-xs">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "text-2xl font-heading font-medium py-3 border-b border-border/50 transition-all duration-300",
                activeSection === item.href ? "text-primary border-primary" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 magnetic-btn w-full"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};
