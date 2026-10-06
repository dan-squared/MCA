"use client";

import { useEffect, useState } from "react";

export function SiteHeader({ onMenu }: { onMenu: () => void }) {
  const [overHero, setOverHero] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setOverHero(y < window.innerHeight * 0.8);
      if (y < 80) {
        setVisible(true);
      } else if (y > lastY + 4) {
        setVisible(false);
      } else if (y < lastY - 4) {
        setVisible(true);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${overHero ? "text-paper" : "text-ink"}`}
      style={{ background: "transparent" }}
    >
      <div className="flex items-start justify-between px-4 md:px-8 pt-4 md:pt-5 pb-4">
        <a
          href="#enquire"
          className="label hover:opacity-60 transition-opacity pt-1"
        >
          Enquire
        </a>
        <a href="#top" className="text-center leading-none select-none">
          <span className="block font-display text-[17px] md:text-[19px] tracking-[0.14em] uppercase">
            Chicken
          </span>
          <span className="block font-display text-[17px] md:text-[19px] tracking-[0.14em] uppercase">
            Addis
          </span>
          <span className="block text-[8px] md:text-[9px] tracking-[0.32em] uppercase mt-1 opacity-80">
            Poultry Co.
          </span>
        </a>
        <button
          onClick={onMenu}
          className="label pt-1 hover:opacity-60 transition-opacity cursor-pointer"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
