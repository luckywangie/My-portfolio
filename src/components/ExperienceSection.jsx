import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        period: "2023 - Present",
        description: "Leading a team of 5 developers in building scalable microservices. Improved system performance by 40% and reduced deployment time by 60%.",
        technologies: ["React", "Node.js", "AWS"]
    },
    {
        role: "Frontend Developer",
        company: "Creative Digital Agency",
        period: "2021 - 2023",
        description: "Developed award-winning websites for high-profile clients. Implemented complex animations and interactive 3D elements.",
        technologies: ["Vue.js", "Three.js", "GSAP"]
    },
    {
        role: "Junior Web Developer",
        company: "StartUp Inc",
        period: "2020 - 2021",
        description: "Collaborated on the development of the company's flagship product. Assisted in migrating legacy code to modern React patterns.",
        technologies: ["React", "Redux", "SASS"]
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-32 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
                        Professional <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My career path and the valuable experience I've gained along the way.
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5 border-4 border-background z-10 hidden md:block"></div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold font-heading">{exp.role}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                            <Calendar size={14} className="mr-2" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                                        <Briefcase size={16} />
                                        {exp.company}
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
