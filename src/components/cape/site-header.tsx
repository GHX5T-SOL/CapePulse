"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

import { LogoMark } from "@/components/cape/ui";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full px-3 py-3 sm:px-4">
      <div className="page-shell">
        <div className="glass-panel refractive-border flex items-center justify-between rounded-full px-4 py-3">
          <Link href="/">
            <LogoMark compact />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-white/20 p-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                  href={item.href}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="glass-strong absolute inset-0 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link className={cn(buttonVariants(), "hidden rounded-full px-4 lg:inline-flex")} href="/book">
              Start your journey
            </Link>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon-sm" className="rounded-full lg:hidden" />}>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent className="w-[88vw] max-w-sm rounded-l-[2rem] border-white/80 bg-white/92 p-6">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-3">
                  <LogoMark />
                  <div className="flex flex-col gap-2 pt-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-base font-medium",
                          pathname === item.href ? "glass-strong" : "bg-muted/60"
                        )}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
