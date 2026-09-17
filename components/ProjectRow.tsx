import Link from "next/link";
import { Project } from "@/lib/projects";
import { ArrowUpRight as LuArrowUpRight } from "lucide-react";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={true}
      className="group relative block py-8 md:py-10 px-4 md:px-6 rounded-2xl border-b border-border/70 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.99]"
    >
      {/* Subtle left active bar on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-6 bottom-6 w-1 bg-foreground rounded-full opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
      />

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
        <div className="flex items-start gap-4 md:gap-8 flex-1">
          {/* Project Number */}
          <span className="font-mono text-sm md:text-base font-semibold text-muted group-hover:text-foreground transition-colors duration-300 pt-1">
            {project.number}
          </span>

          {/* Project Title & Content */}
          <div className="space-y-3 flex-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1.5 flex items-center gap-3">
              <span>{project.title}</span>
            </h3>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            {/* Technologies list */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs md:text-sm font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-muted-dark dark:text-muted border border-border/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View Action Link */}
        <div className="flex items-center gap-1.5 text-sm md:text-base font-semibold text-muted group-hover:text-foreground transition-colors duration-300 md:self-center pl-8 md:pl-0">
          <span>View Project</span>
          <LuArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
