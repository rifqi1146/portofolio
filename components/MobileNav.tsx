"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { House as LuHouse, UserRound as LuUserRound, Folder as LuFolder, Mail as LuMail } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/", icon: LuHouse },
    { name: "About", href: "/about", icon: LuUserRound },
    { name: "Projects", href: "/projects", icon: LuFolder },
    { name: "Contact", href: "/contact", icon: LuMail },
  ];

  // Pre-warm primary route chunks in background for instant mobile transitions
  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router]);

  return (
    <>
      {/* Top Mobile Bar: Brand & Theme Toggle */}
      <header className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/60 px-4 py-3 transition-colors touch-pan-y">
        <div className="flex items-center justify-between gap-2 max-w-5xl mx-auto">
          {/* Brand */}
          <Link
            href="/"
            prefetch={true}
            className="font-bold tracking-tight text-lg text-foreground flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 group-hover:scale-110 transition-transform" />
            <span>Rifqy`s Corner.</span>
          </Link>

          {/* Theme Toggle */}
          <div className="scale-90 origin-right">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Floating Bottom Minimalist Glass Pill Navigation */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none px-3 flex justify-center"
        style={{
          paddingBottom: "max(1rem, calc(0.6rem + env(safe-area-inset-bottom, 0px)))",
        }}
      >
        <nav
          aria-label="Mobile Navigation"
          className="pointer-events-auto relative w-[min(calc(100vw-24px),320px)] h-[52px] px-1.5 py-1 rounded-full bg-white/85 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.55)] flex items-center justify-between gap-0.5 min-[360px]:gap-1 transition-all touch-pan-y"
        >
          {/* Subtle liquid glass specular highlight on top curve */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-zinc-400/20 dark:via-white/20 to-transparent"
          />

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
                className={`group flex-1 min-w-0 h-full flex items-center justify-center gap-1 min-[375px]:gap-1.5 px-1 min-[360px]:px-1.5 py-1 rounded-full transition-all duration-200 active:scale-95 select-none ${
                  isActive
                    ? "bg-zinc-900/10 dark:bg-white/[0.14] text-foreground font-medium border border-zinc-900/10 dark:border-white/10 shadow-xs"
                    : "text-muted hover:text-foreground active:bg-zinc-100/50 dark:active:bg-white/5 opacity-75 hover:opacity-100 border border-transparent"
                }`}
              >
                <Icon
                  size={16.5}
                  className={`transition-colors duration-200 shrink-0 ${
                    isActive ? "text-foreground" : "text-muted group-hover:text-foreground"
                  }`}
                />
                <span
                  className={`text-[10px] min-[360px]:text-[11px] font-medium leading-none tracking-tight whitespace-nowrap transition-colors duration-200 ${
                    isActive ? "text-foreground font-semibold" : "text-muted group-hover:text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
