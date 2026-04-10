"use client";

import dynamic from "next/dynamic";

const LiveMap = dynamic(() => import("@/components/cape/live-map").then((module) => module.LiveMap), {
  ssr: false,
  loading: () => <div className="chapter-card h-[20rem] animate-pulse bg-white/30 sm:h-[24rem]" />,
});

export function LiveMapFrame({ condensed = false }: { condensed?: boolean }) {
  return <LiveMap condensed={condensed} />;
}
