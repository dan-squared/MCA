"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/Header";
import { MenuOverlay } from "@/components/MenuOverlay";
import { Hero } from "@/components/Hero";
import { Sections } from "@/components/Sections";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex flex-col flex-1 bg-cream text-ink font-body">
      <SiteHeader onMenu={() => setMenu(true)} />
      <MenuOverlay open={menu} onClose={() => setMenu(false)} />
      <main className="flex-1">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
