"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "@phosphor-icons/react";

const QA = [
  {
    q: "What are the key differences between the Foundation, Scale-Up and Breeders' courses?",
    a: "Foundation is for beginners: shelter, feed and flock health. Scale-Up adds layers, yields and costing for working farms. Breeders' Camp covers cross-breeds and hatchery craft.",
  },
  {
    q: "How can I decide which course will suit me best?",
    a: "Never raised birds? Start with Foundation. Keeping 50 or more? Join Scale-Up. Planning a hatchery? Talk to us about Breeders' Camp.",
  },
  {
    q: "Which programs are best suited to families or youth groups?",
    a: "Foundation suits families learning together. Youth groups get discounted seats and a shared demo coop to copy at home.",
  },
  {
    q: "How many farmers can each cohort accommodate at full occupancy?",
    a: "24 farmers per round, kept small on purpose. Rounds repeat monthly, now enrolling Round 124.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 md:px-8 pb-20 md:pb-28">
      <div className="grid md:grid-cols-12 gap-8">
        <h2 className="font-display text-[32px] md:text-[40px] leading-[1.05] md:col-span-4">
          Choosing the right course or coop
        </h2>
        <div className="md:col-span-7 md:col-start-6">
          <div className="border-t border-ink/15">
            {QA.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[19px] md:text-[22px] leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 mt-1 inline-flex h-7 w-7 items-center justify-center rounded-[4px] transition-colors ${
                        isOpen ? "bg-ink text-cream" : "bg-ink/10 text-ink"
                      }`}
                    >
                      <Plus
                        size={14}
                        weight="bold"
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
                      <p className="body-copy pb-8 max-w-[520px] opacity-85">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="font-display text-[30px] md:text-[38px] leading-tight mt-12 md:mt-16">
            Do you need some advice?
          </h3>
          <a href="#enquire" className="btn-explore mt-6">
            <span>Contact us</span>
            <span className="arrow">
              <ArrowRight size={14} weight="regular" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
