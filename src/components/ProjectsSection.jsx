import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Amazon Auto Link",
    description: "A high-performance landing page application engineered with React and Tailwind CSS. Features optimized asset loading and responsive design patterns.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "MoringaDesk Analytics",
    description: "Interactive dashboard with real-time data visualization.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack solution with secure payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Task Management API",
    description: "Robust REST API for task scheduling and team collaboration.",
    image: "/projects/project1.png", // Placeholder
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    className: "md:col-span-1 md:row-span-1",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              A curated collection of projects that demonstrate my ability to solve complex problems with elegant code.
            </p>
          </div>
          <a href="https://github.com/luckywangie" target="_blank" rel="noreferrer" className="magnetic-btn group">
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, key) => (
            <div
              key={key}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20",
                project.className
              )}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full bg-black/50 text-white backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2 max-w-md">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <a
                        href={project.githubUrl}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demoUrl}
                        className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors shadow-lg shadow-primary/20"
                        aria-label="View Demo"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
