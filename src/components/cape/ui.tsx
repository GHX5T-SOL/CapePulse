import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", compact && "gap-2")}>
      <div className="glass-panel refractive-border relative flex size-11 items-center justify-center rounded-full">
        <svg
          aria-hidden="true"
          className="size-7 text-[#08141f]"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.7" />
          <path d="M13 23.5H35" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path
            d="M14 30.5C20.5 28.4 25.5 24.6 30.5 18.5C32.2 16.5 34.8 16.6 35 19.5C35.3 24.7 30.4 31 20.5 34"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="31.7" cy="15.6" r="2.2" fill="#00A3E6" />
        </svg>
      </div>
      <div>
        <p className="font-heading text-lg font-semibold tracking-tight text-foreground">CapePulse</p>
        {!compact ? <p className="section-tag mt-0.5">Cape Town, personally orchestrated.</p> : null}
      </div>
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  actions,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  actions?: ReactNode;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-tag">{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>
      {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
    </div>
  );
}

export function HighlightCard({
  title,
  detail,
  media,
  href,
  stat,
}: {
  title: string;
  detail: string;
  media: string;
  href?: string;
  stat?: string;
}) {
  const content = (
    <Card className="glass-panel overflow-hidden rounded-[2rem] border-white/70 bg-white/30 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        <Image alt={title} className="h-full w-full object-cover" fill sizes="(min-width: 1024px) 33vw, 100vw" src={media} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08141F]/55 via-transparent to-transparent" />
        {stat ? <Badge className="absolute left-4 top-4 bg-white/80 text-foreground hover:bg-white/80">{stat}</Badge> : null}
      </div>
      <CardHeader className="gap-3">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-6 text-muted-foreground">{detail}</CardDescription>
      </CardHeader>
      {href ? (
        <CardContent>
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            Open journey
            <ArrowRightIcon className="size-4" />
          </div>
        </CardContent>
      ) : null}
    </Card>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

export function ActionPair({
  primaryHref,
  secondaryHref,
  primaryLabel,
  secondaryLabel,
}: {
  primaryHref: string;
  secondaryHref: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <>
      <Link className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-5")} href={primaryHref}>
        {primaryLabel}
      </Link>
      <Link
        className={cn(
          buttonVariants({ size: "lg", variant: "outline" }),
          "h-11 rounded-full bg-white/35 text-foreground hover:bg-white/50"
        )}
        href={secondaryHref}
      >
        {secondaryLabel}
      </Link>
    </>
  );
}
