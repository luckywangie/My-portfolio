import { Briefcase, Code, User, Download, ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">
                Crafting Digital <span className="text-primary">Experiences</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a year of experience in web development and graphics design, I specialize
              in creating responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="magnetic-btn group">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Wangie_Mamati_Resume.pdf"
                download
                className="px-6 py-3 rounded-full border border-border bg-card text-foreground hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:shadow-lg"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Creating responsive websites and web applications with modern frameworks."
              },
              {
                icon: User,
                title: "UI/UX Design",
                description: "Designing intuitive user interfaces and seamless user experiences."
              },
              {
                icon: Briefcase,
                title: "Project Management",
                description: "Leading projects from conception to completion with agile methodologies."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg mb-2 font-heading">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
