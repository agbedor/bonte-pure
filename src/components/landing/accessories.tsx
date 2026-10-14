"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CURTAIN_COLUMNS = 12;
const CURTAIN_STAGGER_MS = 24;
const CURTAIN_DURATION_MS = 1000;

const accessories = [
  {
    name: "Woven Bag",
    image: "/landing/accessories/woven-bag.png",
    alt: "Handwoven Ghanaian tote bag",
  },
  {
    name: "Waist Beads",
    image: "/landing/accessories/waist-beads.png",
    alt: "Traditional Ghanaian waist beads",
  },
  {
    name: "Kente Tie",
    image: "/landing/accessories/kente-bow-tie.png",
    alt: "Colorful Kente bow tie",
  },
  {
    name: "Bracelets",
    image: "/landing/accessories/bead-bracelets.png",
    alt: "Handmade Krobo bead bracelets",
  },
  {
    name: "Cowries",
    image: "/landing/accessories/cowries.png",
    alt: "Natural cowrie shells",
  },
  {
    name: "Purse",
    image: "/landing/accessories/print-purse.png",
    alt: "African print utility purse",
  },
  {
    name: "Net Sponge",
    image: "/landing/accessories/net-sponge.png",
    alt: "Traditional Ghanaian net sponge",
  },
];

export default function Accessories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [curtainDirection, setCurtainDirection] = useState(1);
  const activeAccessory = accessories[activeIndex];
  const selectedIndex = pendingIndex ?? activeIndex;
  const pendingAccessory = pendingIndex === null ? null : accessories[pendingIndex];

  function selectAccessory(index: number) {
    const currentSelection = pendingIndex ?? activeIndex;
    if (index === currentSelection) return;

    if (index === activeIndex) {
      setPendingIndex(null);
      setCurtainOpen(false);
      return;
    }

    setCurtainDirection(index > activeIndex ? 1 : -1);
    setCurtainOpen(false);
    setPendingIndex(index);
  }

  useEffect(() => {
    if (pendingIndex === null) return;

    let openFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      openFrame = window.requestAnimationFrame(() => setCurtainOpen(true));
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(openFrame);
    };
  }, [pendingIndex]);

  useEffect(() => {
    if (pendingIndex === null || !curtainOpen) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion
      ? 0
      : CURTAIN_DURATION_MS + CURTAIN_STAGGER_MS * (CURTAIN_COLUMNS - 1) + 20;
    const timeout = window.setTimeout(() => {
      setActiveIndex(pendingIndex);
      setPendingIndex(null);
      setCurtainOpen(false);
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [pendingIndex, curtainOpen]);

  return (
    <section
      aria-labelledby="accessories-title"
      className="relative isolate flex min-h-[760px] min-h-screen items-center overflow-hidden bg-[#201A17] text-white"
      id="accessories"
    >
      <Image
        alt={activeAccessory.alt}
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={activeAccessory.image}
      />
      {pendingAccessory && (
        <div aria-hidden="true" className="absolute inset-0 z-0">
          {Array.from({ length: CURTAIN_COLUMNS }, (_, index) => {
            const delayIndex = curtainDirection > 0 ? index : CURTAIN_COLUMNS - index - 1;

            return (
              <div
                className="absolute inset-y-0 overflow-hidden transition-[clip-path] duration-[1000ms] ease-[cubic-bezier(0.3,0.9,0.1,1)] motion-reduce:transition-none"
                key={`${pendingIndex}-${index}`}
                style={{
                  left: `${(index / CURTAIN_COLUMNS) * 100}%`,
                  width: `${100 / CURTAIN_COLUMNS}%`,
                  clipPath: curtainOpen
                    ? "inset(0 0 0 0)"
                    : curtainDirection > 0
                      ? "inset(0 100% 0 0)"
                      : "inset(0 0 0 100%)",
                  transitionDelay: `${delayIndex * CURTAIN_STAGGER_MS}ms`,
                }}
              >
                <div
                  className="absolute inset-y-0"
                  style={{
                    left: `${-index * 100}%`,
                    width: `${CURTAIN_COLUMNS * 100}%`,
                  }}
                >
                  <Image
                    alt=""
                    className="object-cover object-center"
                    fill
                    sizes="100vw"
                    src={pendingAccessory.image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(18,13,11,0.94)_0%,rgba(18,13,11,0.75)_38%,rgba(18,13,11,0.16)_100%)]"
      />
      <div className="relative z-10 flex min-h-[760px] w-full flex-col justify-between px-[24px] py-[32px] sm:px-[48px] sm:py-[44px] lg:min-h-screen lg:px-[64px] lg:py-[56px]">
        <div className="flex items-center justify-between">
          <h2
            className="font-sans text-[16px] font-medium tracking-[0.08em] sm:text-[18px]"
            id="accessories-title"
          >
            Accessories
          </h2>

        </div>

        <nav aria-label="Accessories collection" className="my-[48px]" id="accessory-index">
          <ul className="space-y-[10px] sm:space-y-5">
            {accessories.map((accessory, index) => (
              <li key={accessory.name}>
                <button
                  aria-pressed={selectedIndex === index}
                  className={`block text-left font-sans text-[38px] leading-[1.12] tracking-[-0.035em] transition-colors duration-300 sm:text-[58px] lg:text-[76px] ${
                    selectedIndex === index ? "text-white" : "text-white/35 hover:text-white/75"
                  }`}
                  onFocus={() => selectAccessory(index)}
                  onMouseEnter={() => selectAccessory(index)}
                  onClick={() => selectAccessory(index)}
                  type="button"
                >
                  {accessory.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p aria-live="polite" className="font-display text-[13px] tracking-[0.08em] text-white/80">
          {String(selectedIndex + 1).padStart(2, "0")} / {String(accessories.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
