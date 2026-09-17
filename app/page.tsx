import Link from "next/link";
import { ArrowRight as LuArrowRight } from "lucide-react";
import { FaGithub } from "@/components/icons/SocialIcons";
import { projects } from "@/lib/projects";
import ProjectRow from "@/components/ProjectRow";
import Reveal from "@/components/Reveal";

export default function Home() {
  const selectedProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col gap-24 md:gap-32 py-4">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-[65vh]">
        {/* Main Headline */}
        <Reveal delay={100}>
          <h1 className="text-[42px] sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-foreground leading-[1.05] sm:leading-[1.0] mb-6">
            BUILD<br />
            AND LEARN.
          </h1>
        </Reveal>

        {/* Subtitle / Bio */}
        <Reveal delay={150}>
          <div className="mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90">
              Informatics student at Universitas STEKOM.
            </p>
          </div>
        </Reveal>

        {/* Philosophy / Motto */}
        <Reveal delay={200}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-light mb-12 max-w-2xl leading-relaxed">
            &ldquo;Project, experiments, and things I&apos;ve learned.&rdquo;
          </p>
        </Reveal>

        {/* Call to Actions */}
        <Reveal delay={250}>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/projects"
              prefetch={true}
              className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.98]"
            >
              <span>View Projects</span>
              <LuArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://github.com/rifqi1146"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-border hover:border-zinc-400 dark:hover:border-zinc-600 px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-foreground transition-all duration-200 group"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Projects Section */}
      <section className="relative">
        <Reveal>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-border/70">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                PROJECTS
              </h2>
            </div>
            <Link
              href="/projects"
              prefetch={true}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-foreground transition-colors group"
            >
              <span>All Projects</span>
              <LuArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        {/* Typography-driven Project List (NO IMAGES) */}
        <div className="flex flex-col">
          {selectedProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 100}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </div>

        {/* Mobile View All Projects Link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/projects"
            prefetch={true}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline"
          >
            <span>View All Projects</span>
            <LuArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
