"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StickyPractices } from "@/components/StickyPractices";
import { Faq } from "@/components/Faq";

gsap.registerPlugin(ScrollTrigger);

function useReveals(root: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        if (el.closest(".stagger-group")) return;
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
      // Card grids enter as a group with a light stagger
      gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
        const items = group.querySelectorAll(".reveal, .reveal-img");
        gsap.fromTo(
          items,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 85%" },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".reveal-img").forEach((el) => {
        if (el.closest(".stagger-group")) return;
        gsap.fromTo(
          el,
          { clipPath: "inset(8% 6% 8% 6%)", scale: 0.98 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".reveal-img").forEach((el) => {
        const img = el.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
      // Quote: scrubbed word-by-word reveal, the page's emotional peak
      const words = gsap.utils.toArray<HTMLElement>(".quote-word");
      if (words.length) {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: {
              trigger: ".quote-block",
              start: "top 80%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          }
        );
      }
      // Stats count up once when they enter
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals) + suffix;
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [root]);
}

const QUOTE =
  "Nowhere in Ethiopia can the warmth of community and the quality of poultry training be remotely compared to Chicken Addis in any aspect and it is hands down the most remarkable place I have ever farmed in.";

function Card({
  src,
  badge,
  caption,
  ratio = "aspect-[3/4]",
}: {
  src: string;
  badge: string;
  caption: string;
  ratio?: string;
}) {
  return (
    <figure className="group">
      <div className={`reveal-img img-frame relative ${ratio}`}>
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-img object-cover scale-[1.12]"
        />
        <span className="pill absolute left-3 top-3">{badge}</span>
      </div>
      <figcaption className="reveal mt-3 font-display text-[17px] leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}

export function Sections() {
  const root = useRef<HTMLDivElement>(null);
  useReveals(root);

  return (
    <div ref={root}>
      {/* ---------- INTRO ---------- */}
      <section id="about" className="px-4 md:px-8 pt-10 md:pt-16">
        <p className="reveal label">Golden Abundance</p>
        <p className="reveal editorial-large text-olive text-[32px] md:text-[56px] leading-[1.04] mt-6 max-w-[1200px]">
          Two training farms and three service lines on the Addis to Bishoftu
          poultry belt. 123 rounds of classes so far.
        </p>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mt-12 md:mt-16 items-start">
          <p className="reveal body-copy max-w-[300px] opacity-90 md:col-span-3">
            Farmers and flocks do well together. Our graduates sell eggs
            across Addis Ababa and Bishoftu.
          </p>
          <div className="reveal-img img-frame relative aspect-[3/4] md:col-span-5">
            <Image
              src="/layers-grass.jpg"
              alt="Layers grazing on green pasture"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover scale-[1.12]"
            />
          </div>
          <div className="reveal-img img-frame relative aspect-[3/4] md:col-span-4">
            <Image
              src="/cosmos_1316326017.jpg"
              alt="Close portrait of a Habesha rooster"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover scale-[1.12]"
            />
          </div>
        </div>
      </section>

      {/* ---------- TRAINING ---------- */}
      <section id="training" className="px-4 md:px-8 pt-20 md:pt-28">
        <div className="grid md:grid-cols-12 gap-8">
          <p className="reveal label md:col-span-4">Training & Education</p>
          <p className="reveal editorial-large text-olive text-[26px] md:text-[40px] leading-[1.1] md:col-span-7 md:col-start-6">
            Hands-on training in shelter building, feed formulas and flock
            health — from backyard coops to commercial layers.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <p className="reveal label">Courses</p>
          <p className="reveal body-copy mt-6 text-[16px] leading-relaxed max-w-[400px]">
            Beginners and working farmers train in the same yard. You build
            shelter, mix feed and handle chicks.
          </p>
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 mt-8 stagger-group">
            <Card
              src="/coop-run.jpg"
              badge="Round 123 · Live"
              caption="Beginner's Foundation — Shelter, Feed & Hygiene"
            />
            <Card
              src="/layers-close.jpg"
              badge="Hands-On · 21 Days"
              caption="Scale-Up Mastery — Layers, Yields & Flock Health"
            />
            <Card
              src="/chick-flower.jpg"
              badge="Round 124 · Coming Soon"
              caption="Breeders' Camp — Cross-Breeds & Hatchery Craft"
            />
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="px-4 md:px-8 pt-20 md:pt-28">
        <p className="reveal label">Farm Services</p>
        <p className="reveal body-copy mt-6 text-[16px] leading-relaxed max-w-[400px]">
          We sell eggs daily, build modern cages and equipment, and help with
          pricing and startup loans.
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 mt-8 stagger-group">
          <Card
            src="/eggs-grading.jpg"
            badge="Daily Supply"
            caption="Egg Production — Layers, Grading & Commercial Supply"
          />
          <Card
            src="/modern-coop.jpg"
            badge="Modern Systems"
            caption="Cages & Equipment — Housing, Feeders & Infrastructure"
          />
          <Card
            src="/hoop-house.jpg"
            badge="Loans + Pricing"
            caption="Poultry Finance — Costing, Pricing & Startup Loans"
          />
        </div>
        <div className="reveal flex flex-wrap gap-3 mt-10 items-center justify-end">
          <a href="#enquire" className="btn-explore">
            <span>Plan Your Visit</span>
            <span className="arrow">
              <ArrowRight size={14} weight="regular" />
            </span>
          </a>
        </div>
      </section>

      {/* ---------- PRACTICES ---------- */}
      <StickyPractices />

      {/* ---------- STORY ---------- */}
      <section id="community" className="px-4 md:px-8 pt-20 md:pt-28">
        <div className="grid md:grid-cols-12 gap-8">
          <p className="reveal label md:col-span-4">Our Story</p>
          <div className="md:col-span-7 md:col-start-6">
            <p className="reveal editorial-large text-[24px] md:text-[30px]">
              With roots in Addis markets and Bishoftu farms, our story is
              teaching neighbors to raise birds.
            </p>
            <p className="reveal body-copy mt-6 max-w-[520px] opacity-90">
              We film everything we teach. Daily videos on breeds, layers and
              chick care grew a backyard coop into classrooms and supply lines
              serving hundreds of graduates.
            </p>
            <div className="reveal grid grid-cols-3 gap-6 mt-10 border-t border-ink/15 pt-6">
              {[
                ["123", "Rounds taught", "123", "0", ""],
                ["2.4k", "Farmers graduated", "2.4", "1", "k"],
                ["18k", "Eggs graded daily", "18", "0", "k"],
              ].map(([label, sub, target, decimals, suffix]) => (
                <div key={sub}>
                  <p
                    className="font-display text-[30px] md:text-[40px] leading-none"
                    data-count={target}
                    data-decimals={decimals}
                    data-suffix={suffix}
                  >
                    {label}
                  </p>
                  <p className="label mt-2 opacity-70">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FULL BLEED ---------- */}
      <section className="px-0 md:px-8 pt-20 md:pt-28">
        <div className="reveal-img img-frame relative aspect-[4/3] md:aspect-[21/9]">
          <Image
            src="/cosmos_1968213960.webp"
            alt="Chickens feeding in the farm run"
            fill
            sizes="100vw"
            className="object-cover scale-[1.12]"
          />
        </div>
      </section>

      {/* ---------- QUOTE ---------- */}
      <section className="px-4 md:px-8 py-20 md:py-28 text-center">
        <blockquote className="quote-block editorial-large text-olive text-[30px] md:text-[54px] leading-[1.1] max-w-[1100px] mx-auto">
          &ldquo;{QUOTE.split(" ").map((w, i, arr) => (
            <span key={i}>
              <span className="quote-word">{w}</span>
              {i < arr.length - 1 ? " " : ""}
            </span>
          ))}&rdquo;
        </blockquote>
        <p className="reveal label mt-8">
          Meseret Haile, <span className="opacity-60">Commercial Farmer — Round 118</span>
        </p>
      </section>

      {/* ---------- FAQ ---------- */}
      <Faq />
    </div>
  );
}
