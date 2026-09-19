import { Mail as LuMail, ArrowUpRight as LuArrowUpRight } from "lucide-react";
import { FaGithub, FaWhatsapp } from "@/components/icons/SocialIcons";
import Reveal from "@/components/Reveal";
import { contactConfig } from "@/lib/contact";

const iconMap = {
  email: LuMail,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl py-4 md:py-8 flex flex-col md:justify-center md:min-h-[65vh]">
      {/* Main Title */}
      <Reveal delay={100}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Let&apos;s talk.
        </h1>
      </Reveal>

      {/* Message */}
      <Reveal delay={150}>
        <p className="text-lg sm:text-xl md:text-2xl text-muted font-light leading-relaxed max-w-xl mb-12">
          Ada ide, pertanyaan, atau sesuatu yang ingin dibangun bareng?
        </p>
      </Reveal>

      {/* Contact Cards (Email, GitHub, WhatsApp) */}
      <Reveal delay={200}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactConfig.map((item) => {
            const Icon = iconMap[item.id];
            const isExternal = item.id !== "email";
            return (
              <a
                key={item.id}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40 active:border-zinc-600 dark:active:border-zinc-400 active:bg-zinc-200/40 dark:active:bg-zinc-800/70 md:hover:-translate-y-0.5 transition-colors md:transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-300 min-h-[160px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-foreground group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700/80 group-hover:text-zinc-950 dark:group-hover:text-white md:group-hover:scale-105 transition-all duration-200">
                    <Icon size={19} />
                  </div>
                  <LuArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-foreground dark:group-hover:text-white transition-all duration-200 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted font-medium mt-1">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
