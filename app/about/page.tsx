import Reveal from "@/components/Reveal";
import { GraduationCap as LuGraduationCap, Code as LuCode } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiSqlite,
  SiLinux,
  SiGit,
  SiVercel,
} from "@/components/icons/TechIcons";

export default function AboutPage() {
  const techStack = [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#EAB308] dark:text-[#F7DF1E]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100" },
    { name: "React", icon: SiReact, color: "text-[#0284C7] dark:text-[#61DAFB]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    { name: "SQLite", icon: SiSqlite, color: "text-[#003B57] dark:text-[#38BDF8]" },
    { name: "Linux", icon: SiLinux, color: "text-[#E5A900] dark:text-[#FCC624]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Vercel", icon: SiVercel, color: "text-zinc-900 dark:text-zinc-100" },
  ];

  return (
    <div className="max-w-3xl py-4">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-border/70">
        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            About
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed mb-6">
            Akhmad Rifqy Al Muzanzi, 18 tahun, mahasiswa Teknik Informatika di Universitas STEKOM, berdomisili di Semarang.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Saya belajar programming lewat project dan eksperimen sendiri, dengan ketertarikan pada web development, Linux, server, dan networking.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-12 pt-2">
        {/* Education Section */}
        <section>
          <Reveal delay={250}>
            <div className="flex items-center gap-2 mb-6">
              <LuGraduationCap className="text-foreground" size={19} />
              <h2 className="text-xs font-mono font-bold tracking-widest text-muted uppercase">
                Education
              </h2>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-border/80">
              <h3 className="font-bold text-xl text-foreground">
                Universitas STEKOM
              </h3>
              <p className="text-muted text-sm mt-1">
                Program Studi Teknik Informatika
              </p>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <span className="text-xs font-mono font-medium text-muted">
                  2026 — sekarang
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Technologies Section */}
        <section>
          <Reveal delay={250}>
            <div className="flex items-center gap-2 mb-6">
              <LuCode className="text-foreground" size={19} />
              <h2 className="text-xs font-mono font-bold tracking-widest text-muted uppercase">
                Technologies
              </h2>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-zinc-100/90 dark:bg-zinc-800/80 border border-border/70 cursor-default select-none transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5"
                  >
                    <Icon size={18} className={`shrink-0 ${tech.color}`} />
                    <span className="text-foreground">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
