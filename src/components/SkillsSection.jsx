import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Database, Layout, Terminal, Wrench } from "lucide-react";

const skills = [
  // Frontend
  { name: "React", category: "frontend", icon: Code2, level: "Expert" },
  { name: "Next.js", category: "frontend", icon: Layout, level: "Advanced" },
  { name: "TypeScript", category: "frontend", icon: Code2, level: "Advanced" },
  { name: "Tailwind CSS", category: "frontend", icon: Layout, level: "Expert" },
  { name: "HTML/CSS", category: "frontend", icon: Layout, level: "Expert" },

  // Backend
  { name: "Node.js", category: "backend", icon: Terminal, level: "Advanced" },
  { name: "Python", category: "backend", icon: Code2, level: "Intermediate" },
  { name: "PostgreSQL", category: "backend", icon: Database, level: "Intermediate" },
  { name: "MongoDB", category: "backend", icon: Database, level: "Advanced" },
  { name: "GraphQL", category: "backend", icon: Database, level: "Intermediate" },

  // Tools
  { name: "Git", category: "tools", icon: Wrench, level: "Expert" },
  { name: "Docker", category: "tools", icon: Wrench, level: "Intermediate" },
  { name: "Figma", category: "tools", icon: Layout, level: "Advanced" },
];

const categories = [
  { id: "all", label: "All Tech" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "DevOps & Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools and technologies I use to build scalable digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
