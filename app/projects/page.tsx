import { projects } from "@/lib/projects";
import ProjectRow from "@/components/ProjectRow";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl py-4">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-border/70">
        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Projects
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Beberapa project dan eksplorasi yang saya buat selama proses belajar di bidang software development, server, dan networking.
          </p>
        </Reveal>
      </div>

      {/* Typography-Driven Project List (NO IMAGES) */}
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 80}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
