"use client";

import { ArrowRight } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer id="enquire" className="bg-moss text-cream">
      <div className="px-4 md:px-8 pt-16 md:pt-24 pb-8">
        <p className="label !text-cream/70">Enquire — Round 124 now enrolling</p>
        <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.95] mt-6 uppercase">
          Start your
          <br />
          flock today
        </h2>
        <div className="grid md:grid-cols-12 gap-10 mt-10 md:mt-16">
          <form
            className="md:col-span-5 flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              required
              placeholder="Full name"
              className="bg-transparent border-b border-cream/30 py-3 text-[15px] placeholder:text-cream/50 outline-none focus:border-cream"
            />
            <input
              required
              placeholder="Phone (Telegram)"
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
          <div className="md:col-span-3 md:col-start-10 text-[14px] leading-loose">
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
  );
}
