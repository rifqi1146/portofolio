import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-12 gap-8 py-12 border-t border-border group">
      <div className="md:col-span-4 flex flex-col gap-2">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-muted text-sm">{project.number}</span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        <p className="text-muted text-sm font-medium mb-4">
          {project.technologies.join(" · ")}
        </p>
        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          View Project <ArrowRight size={16} />
        </Link>
      </div>

      <div className="md:col-span-8 flex flex-col gap-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#E8E6E1]">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <p className="text-lg text-charcoal/80">
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
}