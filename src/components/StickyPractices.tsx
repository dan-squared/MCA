"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

const ITEMS = [
  {
    n: "01",
    label: "Hands-On Training",
    title:
      "Shelter, feed and flock health, taught with real birds.",
    body: "Morning and evening rounds with your trainer. You handle chicks, mix feed and spot sickness early, in small groups under strict hygiene.",
  },
  {
    n: "02",
    label: "Poultry Finance",
    title: "Know what each egg costs and what each tray earns.",
    body: "Track every birr from chick to market tray. You leave with a pricing sheet, a cost tracker and a loan-ready business plan.",
  },
  {
    n: "03",
    label: "Egg Production",
    title: "Steady layers, clean grading, buyers waiting.",
    body: "Light, feed and collection rhythms that keep yields high. Breed choice and winter feeding covered, so laying never surprises you.",
  },
  {
    n: "04",
    label: "Cages & Equipment",
    title: "See every housing system working before you spend a birr.",
    body: "Deep-litter, free-range and modern cages stand side by side in our demo yard. Touch the feeders, drinkers and ventilation, then choose.",
  },
  {
    n: "05",
    label: "Content & Community",
    title: "Daily Amharic videos that make farming plain.",
    body: "Breed guides, disease spotting and market tips, filmed in the yard and free to all. Hundreds of lessons, one Habesha farming community.",
  },
];

export function StickyPractices() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experiences" className="px-4 md:px-8 pt-20 md:pt-28">
      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        <p className="reveal label md:col-span-4">Our Practices</p>
        <div className="md:col-span-7 md:col-start-6">
          <p className="reveal editorial-large text-[24px] md:text-[30px] max-w-[720px]">
            What we do — five hands-on practices covering training, finance,
            eggs, equipment and community.
          </p>
          <p className="reveal body-copy mt-6 max-w-[520px] opacity-90">
            One round covers all five. You learn by doing.
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-12">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-ink/15">
              {ITEMS.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.label} className="reveal border-b border-ink/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 md:gap-6 py-6 md:py-7 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="label opacity-50 tabular-nums w-8 shrink-0">
                        {it.n}
                      </span>
                      <span className="font-display text-[22px] md:text-[30px] leading-[1.1] flex-1 transition-opacity group-hover:opacity-60">
                        {it.label}
                      </span>
                      <span
                        className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "bg-ink text-cream border-ink"
                            : "border-ink/20 group-hover:bg-ink group-hover:text-cream group-hover:border-ink"
                        }`}
                      >
                        <Plus
                          size={15}
                          weight="regular"
                          className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 md:pb-10 md:pl-14 max-w-[620px]">
                          <p className="editorial-large text-[19px] md:text-[22px] leading-snug opacity-90">
                            {it.title}
                          </p>
                          <p className="body-copy mt-4 opacity-85">{it.body}</p>
                          <a
                            href="#enquire"
                            className="pill mt-6 hover:opacity-70 transition-opacity"
                          >
                            Discover More
                            <Plus size={13} weight="bold" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
