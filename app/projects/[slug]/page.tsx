import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import {
  ArrowLeft as LuArrowLeft,
  ArrowUpRight as LuArrowUpRight,
  Check as LuCheck,
} from "lucide-react";
import { FaGithub } from "@/components/icons/SocialIcons";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  // Find next project for smooth navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="max-w-4xl py-4 pb-24">
      {/* Back Button */}
      <Reveal>
        <Link
          href="/projects"
          prefetch={true}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground mb-10 transition-colors group"
        >
          <LuArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to Projects</span>
        </Link>
      </Reveal>

      {/* Header Info */}
      <div className="mb-12 pb-8 border-b border-border/70">
        <Reveal delay={50}>
          <span className="font-mono text-sm font-semibold text-muted block mb-3">
            {project.number} — Project Details
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8">
            {project.shortDescription}
          </p>
        </Reveal>

        {/* Tech Badges & Action Links */}
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-border/50">
            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs md:text-sm font-medium px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-foreground border border-border/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 text-sm font-medium shadow-xs transition-colors"
                >
                  <span>Live Demo</span>
                  <LuArrowUpRight size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg liquid-glass-interactive text-sm font-medium text-foreground hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <FaGithub size={15} />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main Visual Image if available */}
      {project.image && (
        <Reveal delay={250}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/80 bg-zinc-100 dark:bg-zinc-900 shadow-glass dark:shadow-glass-dark mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      )}

      {/* Detailed Overview & Features */}
      <div className="grid md:grid-cols-12 gap-12 pt-4">
        {/* Overview */}
        <div className="md:col-span-7 space-y-6">
          <Reveal delay={300}>
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>Overview</span>
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mt-4">
              {project.description}
            </p>
          </Reveal>
        </div>

        {/* Key Features */}
        <div className="md:col-span-5 space-y-4">
          <Reveal delay={350}>
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>Features</span>
            </h2>
            <ul className="space-y-3 mt-4">
              {project.features ? (
                project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm md:text-base text-muted"
                  >
                    <LuCheck
                      size={16}
                      className="text-foreground mt-1 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-sm text-muted">Fitur dalam pengembangan.</li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Next Project Footer Bar */}
      {nextProject && (
        <Reveal delay={400}>
          <div className="mt-20 pt-8 border-t border-border/70 flex items-center justify-between">
            <Link
              href="/projects"
              prefetch={true}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              ← Back to Overview
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              prefetch={true}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline group"
            >
              <span>Next: {nextProject.title}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      )}
    </article>
  );
}
