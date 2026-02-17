import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-[1.1] animate-slide-up">
            Building <br />
            <span className="text-reveal">Digital Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I'm Lucky Wangie, a Full Stack Developer crafting sophisticated web applications.
            I blend structural design with powerful engineering to create impactful digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="#projects" className="magnetic-btn group">
              View Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:wangiemamati@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual - Code Card / Bento Mockup */}
        <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>

            {/* Main Card */}
            <div className="absolute inset-4 bg-card border border-border rounded-2xl shadow-2xl p-6 flex flex-col gap-4 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">Developer.jsx</div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-purple-500">const</span>
                  <span className="text-yellow-500">Developer</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-muted-foreground">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-500">name:</span>
                  <span className="text-green-500"> "Lucky Wangie"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-500">role:</span>
                  <span className="text-green-500"> "Full Stack Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-500">skills:</span>
                  <span className="text-muted-foreground"> [</span>
                </div>
                <div className="pl-8">
                  <span className="text-green-500">"React"</span>,
                  <span className="text-green-500"> "Node.js"</span>,
                  <span className="text-green-500"> "TypeScript"</span>
                </div>
                <div className="pl-4 text-muted-foreground">],</div>
                <div className="pl-4">
                  <span className="text-blue-500">status:</span>
                  <span className="text-green-500"> "Open to work"</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-8 top-20 bg-card border border-border p-4 rounded-xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="font-bold">React</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                  <div className="font-bold">Expert</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-20 bg-card border border-border p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <span className="font-bold">99%</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                  <div className="font-bold">Reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
