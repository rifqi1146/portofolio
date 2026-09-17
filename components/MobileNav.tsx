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
    <header className="md:hidden sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/80 px-4 py-3 transition-colors touch-pan-y">
      <div className="flex items-center justify-between gap-2">
        {/* Brand */}
        <Link href="/" prefetch={true} className="font-bold tracking-tight text-lg text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <span>Rifqy`s Corner.</span>
        </Link>

        {/* Theme Toggle (2-Mode Light/Dark) */}
        <div className="scale-90 origin-right">
          <ThemeToggle />
        </div>
      </div>

      {/* Navigation links with icons */}
      <nav className="w-full flex items-center justify-between pt-2.5 pb-0.5 text-xs font-medium touch-pan-y">
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
              className={`flex items-center gap-1.5 px-2.5 min-[390px]:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 active:scale-[0.96] ${
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-800 text-foreground font-semibold"
                  : "text-muted hover:text-foreground active:bg-zinc-100/60 dark:active:bg-zinc-800/50"
              }`}
            >
              <Icon
                size={14}
                className={`transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted"}`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
