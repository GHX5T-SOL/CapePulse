import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/cape/site-footer";
import { SiteHeader } from "@/components/cape/site-header";
import { LeoLionDock } from "@/components/cape/leo-lion";
import { Toaster } from "@/components/ui/sonner";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capepulse.vercel.app"),
  title: {
    default: "CapePulse | Cape Town, personally orchestrated.",
    template: "%s | CapePulse",
  },
  description:
    "CapePulse is a premium Cape Town experience hub blending private tours, live city discovery, AI concierge demos, and discreet VIP logistics.",
  openGraph: {
    title: "CapePulse",
    description:
      "The bright liquid-glass Cape Town travel platform for private journeys, social discovery, and AI-powered planning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${instrumentSans.variable} ${plexMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip">
          <div className="ambient-orb ambient-orb-a" />
          <div className="ambient-orb ambient-orb-b" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <LeoLionDock />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
