"use client";

import dynamic from "next/dynamic";

const LiveMap = dynamic(() => import("@/components/cape/live-map").then((module) => module.LiveMap), {
  ssr: false,
  loading: () => <div className="chapter-card h-[24rem] animate-pulse bg-white/30" />,
});

export function LiveMapFrame({ condensed = false }: { condensed?: boolean }) {
  return <LiveMap condensed={condensed} />;
}
