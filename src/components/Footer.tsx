"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const root = useRef<HTMLElement>(null);
  const [spacer, setSpacer] = useState(0);

  // Footer reveal: the footer is fixed behind the page and the content
  // slides up over it like a curtain. The spacer holds its place in flow
  // so the page can scroll far enough to unveil it fully.
  useLayoutEffect(() => {
    const measure = () => setSpacer(root.current?.offsetHeight ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // Parallax: headline drifts up slower than the scroll, content follows
      gsap.fromTo(
        ".footer-title",
        { y: 90 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".footer-rise",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div aria-hidden className="pointer-events-none relative z-10" style={{ height: spacer }} />
      <footer ref={root} id="enquire" className="fixed inset-x-0 bottom-0 z-0 bg-moss text-cream overflow-hidden">
      <div className="px-4 md:px-8 pt-16 md:pt-24 pb-8">
        <p className="label !text-cream/70">Enquire — Round 124 now enrolling</p>
        <h2 className="footer-title font-display text-[12vw] md:text-[7vw] leading-[0.95] mt-6 uppercase">
          Start your
          <br />
          flock today
        </h2>
        <div className="grid md:grid-cols-12 gap-10 mt-10 md:mt-16">
          <form
            className="footer-rise md:col-span-5 flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="enquire-name">Full name</label>
            <input
              id="enquire-name"
              required
              autoComplete="name"
              placeholder="Full name"
              aria-label="Full name"
              className="bg-transparent border-b border-cream/30 py-3 text-[15px] placeholder:text-cream/50 outline-none focus:border-cream"
            />
            <label className="sr-only" htmlFor="enquire-phone">Phone (Telegram)</label>
            <input
              id="enquire-phone"
              required
              autoComplete="tel"
              placeholder="Phone (Telegram)"
              aria-label="Phone (Telegram)"
              className="bg-transparent border-b border-cream/30 py-3 text-[15px] placeholder:text-cream/50 outline-none focus:border-cream"
            />
            <select
              className="bg-transparent border-b border-cream/30 py-3 text-[15px] outline-none text-cream/90"
              defaultValue="Beginner's Foundation"
            >
              <option className="text-black">Beginner&apos;s Foundation</option>
              <option className="text-black">Scale-Up Mastery</option>
              <option className="text-black">Egg supply partnership</option>
              <option className="text-black">Cages & equipment</option>
              <option className="text-black">Finance advisory</option>
            </select>
            <button className="btn-explore mt-4 self-start" type="submit">
              <span>Request a call back</span>
              <span className="arrow">
                <ArrowRight size={14} weight="regular" />
              </span>
            </button>
            <p className="text-[12px] text-cream/60 mt-2">
              We reply on Telegram within one working day. Training in Amharic.
            </p>
          </form>
          <div className="md:col-span-3 md:col-start-7 text-[14px] leading-loose">
            <p className="label !text-cream/60 mb-3">Visit</p>
            <p>Bishoftu Road, Addis Ababa</p>
            <p>Open yard daily 8:00 — 17:00</p>
            <p className="mt-4">hello@chickenaddis.et</p>
            <p>+251 91 000 0000</p>
          </div>
          <div className="footer-rise md:col-span-3 md:col-start-10 text-[14px] leading-loose">
            <p className="label !text-cream/60 mb-3">Follow the flock</p>
            {["TikTok", "YouTube", "Telegram", "Instagram"].map(
              (s) => (
                <a key={s} href="#top" className="block hover:opacity-60 transition-opacity">
                  {s} ↗
                </a>
              )
            )}
          </div>
        </div>
        <div className="border-t border-cream/20 mt-14 pt-5 label !text-cream/60 text-center">
          <span>© 2026 Chicken Addis Poultry Co. All rights reserved.</span>
        </div>
      </div>
      </footer>
    </>
  );
}
