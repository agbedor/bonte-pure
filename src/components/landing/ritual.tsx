"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const rituals = [
  {
    name: "Shea Butter",
    image: "/landing/more-than-nature/female-owned.webp",
    imageAlt: "A woman working with Ghanaian shea products",
    product: "/products/bonte-shea-butter.webp",
    productAlt: "Bonte Pure shea butter",
  },
  {
    name: "Cocoa Butter",
    image: "/landing/hero/kente-bag.png",
    imageAlt: "A Ghanaian woven bag in warm sunlight",
    product: "/products/bonte-cocoa-butter.webp",
    productAlt: "Bonte Pure cocoa butter",
  },
  {
    name: "Coconut Oil",
    image: "/landing/more-than-nature/ethical-harvest.webp",
    imageAlt: "Ethically harvested ingredients in Ghana",
    product: "/products/bonte-coconut-oil.png",
    productAlt: "Bonte Pure coconut oil",
  },
    {
    name: "Woven Bags",
    image: "/landing/hero/cowries.png",
    imageAlt: "A Ghanaian woven bag in warm sunlight",
    product: "/products/bonte-black-soap.png",
    productAlt: "Bonte Pure cocoa butter",
  },
  {
    name: "Black Soap",
    image: "/landing/hero/hero-2.jpg",
    imageAlt: "Ethically harvested ingredients in Ghana",
    product: "/products/bonte-cocoa-butter.webp",
    productAlt: "Bonte Pure coconut oil",
  },
];

export default function Ritual() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 1);
    setCanScrollRight(track.scrollLeft < maxScrollLeft - 1);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scrollCards(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-ritual-card]");
    const gap = 16;
    track.scrollBy({
      left: direction * ((card?.offsetWidth ?? 420) + gap),
      behavior: "smooth",
    });
  }

  return (
    <section
      aria-labelledby="ritual-title"
      className="overflow-hidden bg-[#731717] px-[24px] py-[64px] text-white sm:px-[48px] sm:py-[80px] lg:flex lg:h-[1000px] lg:items-center lg:px-0 lg:py-[64px] lg:pl-[64px]"
      id="ritual"
    >
      <div className="mx-auto flex h-full w-full flex-col gap-[40px] lg:flex-row lg:items-center lg:gap-[48px]">
        <div className="flex shrink-0 flex-col lg:h-[692px] lg:w-[34%] lg:justify-between lg:self-auto">
          <div>
            <h2
              className="font-sans text-[48px] font-medium leading-[1] tracking-[-0.035em] sm:text-[64px] lg:text-[68px]"
              id="ritual-title"
            >
              Join the Ritual
            </h2>
            <div className="mt-[36px] flex gap-[16px] lg:mt-[140px]">
              <button
                aria-label="Scroll to previous ritual"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-white text-[#351A19] transition-colors hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                disabled={!canScrollLeft}
                onClick={() => scrollCards(-1)}
                type="button"
              >
                <Chevron direction="left" />
              </button>
              <button
                aria-label="Scroll to next ritual"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-white text-[#202020] transition-colors hover:bg-[#F0E9E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                disabled={!canScrollRight}
                onClick={() => scrollCards(1)}
                type="button"
              >
                <Chevron direction="right" />
              </button>
            </div>
          </div>

          <div className="max-w-[460px] lg:pb-[8px]">
            <p className="font-display text-[16px] leading-[1.4] tracking-[0.045em] sm:text-[17px]">
              Bring a little natural goodness into your everyday. Discover thoughtful
              essentials made with Ghanaian ingredients and care.
            </p>
            <a
              className="mt-[36px] inline-flex min-h-[56px] items-center rounded-[8px] bg-white px-[32px] font-sans text-[16px] font-medium tracking-[0.025em] text-[#202020] transition-colors hover:bg-[#F0E9E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="#products-one"
            >
              Explore Our Products
            </a>
          </div>
        </div>

        <div
          aria-label="Products in the ritual"
          className="flex min-w-0 snap-x snap-mandatory gap-[16px] overflow-x-auto scroll-smooth pb-[4px] pr-[24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pr-[48px] lg:h-[692px] lg:flex-1 lg:pr-[64px]"
          ref={trackRef}
          role="region"
        >
          {rituals.map((ritual) => (
            <article
              className="relative h-[560px] w-[min(78vw,420px)] shrink-0 snap-start overflow-hidden rounded-[20px] sm:h-[680px] sm:w-[420px] lg:h-[692px] lg:w-[420px]"
              data-ritual-card
              key={ritual.name}
            >
              <Image
                alt={ritual.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 639px) 78vw, 420px"
                src={ritual.image}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-[24px] left-[24px] flex h-[84px] w-[80px] items-center justify-center overflow-hidden rounded-[13px] bg-[#731717] p-[9px] shadow-lg sm:bottom-[26px] sm:left-[26px]">
                <Image
                  alt={ritual.productAlt}
                  className="object-contain p-[10px]"
                  fill
                  sizes="84px"
                  src={ritual.product}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
