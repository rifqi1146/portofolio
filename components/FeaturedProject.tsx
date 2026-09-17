import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6 mb-20 group">
      <div className="flex items-baseline gap-4">
        <span className="text-muted text-sm font-medium">{project.number}</span>
        <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
      </div>
      
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#E8E6E1]">
        {/* Hapus placeholder div ini ketika Anda sudah meletakkan gambar di folder public/projects/ */}
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-2">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-col md:items-end gap-6">
          <p className="text-sm text-muted font-medium tracking-wide">
            {project.technologies.join(" · ")}
          </p>
          <Link 
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:opacity-80 transition-opacity"
          >
            View Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}