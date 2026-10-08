"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sections } from "@/components/Sections";
import { Footer } from "@/components/Footer";

const MenuOverlay = dynamic(
  () => import("@/components/MenuOverlay").then((m) => m.MenuOverlay),
  { ssr: false }
);

export function SiteShell() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="relative z-10 flex flex-col flex-1 bg-cream text-ink font-body shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <SiteHeader onMenu={() => setMenu(true)} />
        <MenuOverlay open={menu} onClose={() => setMenu(false)} />
        <main className="flex-1">
          <Hero />
          <Sections />
        </main>
      </div>
      <Footer />
    </>
  );
}
