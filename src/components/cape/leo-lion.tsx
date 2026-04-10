"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { BotMessageSquareIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { Mesh } from "three";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { liveCheckIns, siteMetrics, tours } from "@/lib/site-data";

function LionModel() {
  const head = useMemo(() => ({ current: null as Mesh | null }), []);

  useFrame((state) => {
    if (!head.current) {
      return;
    }

    head.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.28;
    head.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.18} speed={1.2}>
      <group position={[0, -0.15, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#d19a45" />
        </mesh>
        <mesh position={[0, 0.05, -0.05]} ref={(node) => (head.current = node)}>
          <sphereGeometry args={[0.66, 32, 32]} />
          <meshStandardMaterial color="#f3bf67" />
        </mesh>
        <mesh position={[0, 0.04, -0.56]}>
          <sphereGeometry args={[0.34, 24, 24]} />
          <meshStandardMaterial color="#f4d18d" />
        </mesh>
        <mesh position={[-0.55, 0.48, -0.12]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#d19a45" />
        </mesh>
        <mesh position={[0.55, 0.48, -0.12]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#d19a45" />
        </mesh>
        <mesh rotation={[1.2, 0, 0]}>
          <torusGeometry args={[1.1, 0.28, 16, 48]} />
          <meshStandardMaterial color="#9a5a1b" />
        </mesh>
        <mesh position={[-0.22, 0.14, -0.72]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#08141F" />
        </mesh>
        <mesh position={[0.22, 0.14, -0.72]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#08141F" />
        </mesh>
        <mesh position={[0, -0.1, -0.88]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#08141F" />
        </mesh>
      </group>
    </Float>
  );
}

function LeoCanvas() {
  return (
    <Canvas camera={{ fov: 36, position: [0, 0, 5.6] }}>
      <ambientLight intensity={1.4} />
      <directionalLight intensity={1.8} position={[4, 4, 4]} />
      <directionalLight intensity={0.8} position={[-3, -2, 3]} color="#7FE4C3" />
      <LionModel />
    </Canvas>
  );
}

export function LeoLionDock() {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    setCanRender3D(Boolean(gl) && !reducedMotion);
  }, []);

  return (
    <Dialog>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          className="glass-panel max-w-[14rem] rounded-[1.7rem] px-4 py-3 text-sm leading-6 text-foreground shadow-[0_20px_60px_rgba(8,20,31,0.18)]"
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Hi, I&apos;m Leo the Lion. What adventure are we planning today?
        </motion.div>
        <DialogTrigger className="group glass-strong relative flex h-[6.5rem] w-[6.5rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 shadow-[0_24px_80px_rgba(8,20,31,0.2)]">
          {canRender3D ? (
            <div className="absolute inset-0">
              <LeoCanvas />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFB547] via-[#F4D18D] to-[#7FE4C3]">
              <span className="font-heading text-4xl text-[#08141F]">L</span>
            </div>
          )}
          <div className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground">
            Leo
          </div>
        </DialogTrigger>
      </div>
      <DialogContent className="max-h-[88svh] overflow-y-auto rounded-[2rem] border-white/80 bg-white/92 p-0 backdrop-blur-xl sm:max-w-3xl">
        <DialogHeader className="border-b border-foreground/8 px-6 py-5">
          <DialogTitle className="text-2xl">Leo&apos;s CapePulse concierge</DialogTitle>
          <DialogDescription>
            Demoing the PDF playbook: lead qualification, itinerary support, quote logic, human handoff, and compliance-aware concierge behavior.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <Tabs defaultValue="plan">
            <TabsList className="mb-4">
              <TabsTrigger value="plan">Plan</TabsTrigger>
              <TabsTrigger value="city">Live city</TabsTrigger>
              <TabsTrigger value="trust">Trust</TabsTrigger>
            </TabsList>
            <TabsContent value="plan" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="chapter-card">
                  <div className="flex items-center gap-3">
                    <SparklesIcon className="size-5 text-[#00A3E6]" />
                    <p className="font-semibold">Best next move</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Based on live demand and the guest mix from the plan, I&apos;d start with the Peninsula Signal Drive, then hand off into a sunset
                    dinner or padel plan depending on energy.
                  </p>
                </div>
                <div className="chapter-card">
                  <div className="flex items-center gap-3">
                    <BotMessageSquareIcon className="size-5 text-[#2F6B4F]" />
                    <p className="font-semibold">Human handoff summary</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Date flexibility, pickup zone, group makeup, mobility notes, and preferred pace are captured. Sensitive data stays outside chat.
                  </p>
                </div>
              </div>
              <div className="chapter-card">
                <p className="section-tag">Suggested journeys</p>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {tours.slice(0, 3).map((tour) => (
                    <div key={tour.slug} className="rounded-[1.4rem] border border-foreground/8 bg-white/60 p-4">
                      <p className="font-medium">{tour.name}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{tour.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="city" className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                {liveCheckIns.slice(0, 2).map((checkIn) => (
                  <div key={checkIn.id} className="chapter-card">
                    <p className="font-medium">{checkIn.location}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{checkIn.vibe}</p>
                  </div>
                ))}
              </div>
              <div className="chapter-card">
                <p className="section-tag">Live signals</p>
                <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {siteMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.4rem] border border-foreground/8 bg-white/60 p-3">
                      <p className="font-heading text-2xl">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="trust" className="space-y-4">
              <div className="chapter-card">
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
                  <p className="font-semibold">POPIA and WhatsApp guardrails</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li>Never ask for full card details, ID numbers, passport scans, or sensitive health history in chat.</li>
                  <li>Always present a human takeover path for uncertain operational decisions or special requests.</li>
                  <li>Final quotes stay caveated until availability, route conditions, and partner constraints are checked by a human.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
