"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";

const BIG: Array<[string, string]> = [
  ["About", "#about"],
  ["Training", "#training"],
  ["Services", "#services"],
  ["Our Practices", "#experiences"],
  ["Community", "#community"],
];
const SMALL: Array<[string, string]> = [
  ["Gallery", "#gallery"],
  ["FAQ", "#faq"],
  ["Plan Your Visit", "#enquire"],
];

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // One timeline built once. Open plays it, close reverses it —
  // no teardown per toggle, so rapid taps never jank.
  useEffect(() => {
    if (!root.current) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          root.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.32, ease: "power2.out" },
          0
        )
        .fromTo(
          ".menu-big-link",
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            stagger: 0.055,
            ease: "power3.out",
          },
          0.06
        )
        .fromTo(
          ".menu-small-link",
          { y: 14, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.035,
            ease: "power3.out",
          },
          0.28
        )
        .fromTo(
          ".menu-fade",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, ease: "power2.out" },
          0.4
        );
      if (reduced) tl.current.timeScale(100);
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    if (open) tl.current.timeScale(1).play();
    else tl.current.timeScale(1.5).reverse();
  }, [open ]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 bg-cream text-ink flex-col invisible"
    >
      <div className="flex items-start justify-between px-4 md:px-8 pt-4 md:pt-5">
        <span className="label pt-1 opacity-0">Enquire</span>
        <span className="text-center leading-none">
          <span className="block font-display text-[17px] tracking-[0.14em] uppercase">
            Chicken
          </span>
          <span className="block font-display text-[17px] tracking-[0.14em] uppercase">
            Addis
          </span>
        </span>
        <button
          onClick={onClose}
          className="label pt-1 hover:opacity-60 transition-opacity cursor-pointer"
        >
          Close
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 md:px-12 pt-10 md:pt-16 pb-16">
        <ul className="space-y-1 md:space-y-2">
          {BIG.map(([item, href]) => (
            <li key={item}>
              <a
                href={href}
                onClick={onClose}
                className="menu-big-link block text-[13vw] md:text-[64px]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-10 md:mt-14 space-y-4 md:space-y-5">
          {SMALL.map(([item, href]) => (
            <li key={item}>
              <a
                href={href}
                onClick={onClose}
                className="menu-small-link block text-[19px] md:text-[22px] font-body hover:opacity-60 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-fade mt-14 text-[13px] leading-relaxed opacity-70 max-w-xs">
          <p>Bishoftu Road, Addis Ababa, Ethiopia</p>
          <p className="mt-1">Daily tips on TikTok & YouTube, in Amharic.</p>
          <a href="#enquire" onClick={onClose} className="mt-3 inline-flex items-center gap-2 underline">
            Enquire about Round 124
            <ArrowRight size={14} weight="regular" />
          </a>
        </div>
      </nav>
    </div>
  );
}
