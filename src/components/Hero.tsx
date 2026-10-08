"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [lite, setLite] = useState(false);

  // Data-saver or small screens get the poster frame instead of the
  // 2.5MB autoplaying video — same look, fraction of the bytes.
  useLayoutEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData || window.matchMedia("(max-width: 768px)").matches) {
      setLite(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-video",
        { scale: 1.18 },
        { scale: 1, duration: 2.2, ease: "power2.out" },
        0
      );
      tl.fromTo(
        ".hero-line",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.3, stagger: 0.12 },
        0.25
      );
      tl.fromTo(
        ".hero-fade",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
        0.9
      );
    }, root);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      if (y < h * 1.2) {
        gsap.to(".hero-inner", {
          y: y * 0.28,
          opacity: 1 - y / (h * 1.1),
          overwrite: "auto",
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={root} id="top" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-moss text-paper">
      <div className="absolute inset-0">
        {lite ? (
          <Image
            src="/layers-grass.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-video h-full w-full object-cover"
          />
        ) : (
          <video
            className="hero-video h-full w-full object-cover"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/layers-grass.jpg"
            disablePictureInPicture
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />
      </div>

      <div className="hero-inner relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="hero-title text-[15.5vw] md:text-[9.5vw] leading-[0.94]">
          <span className="block overflow-hidden">
            <span className="hero-line block">Raise Birds</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">Build Income</span>
          </span>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col items-center">
          <p className="hero-fade max-w-[300px] md:max-w-[260px] text-[13px] md:text-[12.5px] leading-relaxed text-paper/90 md:ml-[34vw] md:text-left">
            A rare opportunity for you to learn, raise and profit from one of
            Ethiopia&apos;s most rewarding farm businesses.
          </p>
          <a href="#training" className="hero-fade btn-explore mt-4 md:ml-[34vw] md:self-start">
            <span>Explore Programs</span>
            <span className="arrow">
              <ArrowRight size={14} weight="regular" />
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-20 pattern-divider" />
    </section>
  );
}
