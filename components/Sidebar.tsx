"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { House as LuHouse, UserRound as LuUserRound, Folder as LuFolder, Mail as LuMail } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/", icon: LuHouse },
    { name: "About", href: "/about", icon: LuUserRound },
    { name: "Projects", href: "/projects", icon: LuFolder },
    { name: "Contact", href: "/contact", icon: LuMail },
  ];

  // Pre-warm primary route chunks in background so first navigation is 100% instantaneous
  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router]);

  return (
    <aside className="hidden md:flex flex-col w-[260px] h-screen fixed left-0 top-0 border-r border-border/80 p-8 justify-between z-40 bg-background/95 backdrop-blur-md transition-colors duration-300">
      <div>
        {/* Brand / Header */}
        <Link href="/" prefetch={true} className="block group">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-xl font-bold tracking-tight text-foreground transition-colors">
              Rifqy`s Corner
            </span>
          </div>
          <p className="text-xs text-muted font-normal leading-relaxed pl-4">
            Informatics Engineering.
          </p>
        </Link>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800/80 text-foreground font-semibold"
                    : "text-muted hover:text-foreground hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40 font-medium"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  />
                  <span>{item.name}</span>
                </div>

                {/* Active Indicator Dot with smooth scale-in motion */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white animate-scale-in"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer & Theme Switcher */}
      <div className="pt-6 border-t border-border/70 flex items-center justify-between">
        <span className="text-xs text-muted font-medium">Theme</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
