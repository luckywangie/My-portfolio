import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 relative border-t border-white/5 mt-12 flex flex-col md:flex-row justify-between items-center bg-background/50 backdrop-blur-sm">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} <span className="text-primary font-medium">LuckyWangie</span>. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
