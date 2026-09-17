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
    <div className="max-w-4xl py-4 flex flex-col justify-center min-h-[70vh]">
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

      {/* Contact Cards in Liquid Glass (3 Items: Email, GitHub, WhatsApp) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactConfig.map((item, idx) => {
          const Icon = iconMap[item.id];
          const isExternal = item.id !== "email";
          return (
            <Reveal key={item.id} delay={200 + idx * 70}>
              <a
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative flex flex-col justify-between p-6 rounded-2xl liquid-glass border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/40 dark:hover:bg-zinc-800/30 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 min-h-[160px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:scale-105 transition-all duration-200">
                    <Icon size={19} />
                  </div>
                  <LuArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted font-medium mt-1">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
