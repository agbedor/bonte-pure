"use client";

import Image from "next/image";
import gsap from "gsap";
import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { LandingIntroContext } from "./landing-intro-context";
import { heroSlides } from "./hero-slides";

const loaderSlides = heroSlides.slice(0, 4);
const loaderCardDuration = 1.3;
const loaderCardStartGap = 0.22;
const loaderStackHoldDuration = 0.55;
const loaderCardExitDuration = 0.32;
const loaderCardExitGap = 0.12;
const loaderFirstCardExitOffset = loaderCardExitGap * (loaderSlides.length - 1);
const loaderCardsReadyAt =
  0.04 + (loaderSlides.length - 1) * loaderCardStartGap + loaderCardDuration;
const loaderCardExitStartAt = loaderCardsReadyAt + loaderStackHoldDuration;
const loaderTimeToTinyBox =
  loaderCardExitStartAt +
  Math.max(
    loaderCardExitDuration + (loaderSlides.length - 2) * loaderCardExitGap,
    loaderFirstCardExitOffset + loaderCardExitDuration,
  );

export default function LandingIntro({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    const scrollToTop = () => window.scrollTo(0, 0);

    window.history.scrollRestoration = "manual";
    scrollToTop();
    window.addEventListener("pageshow", scrollToTop);

    return () => {
      window.removeEventListener("pageshow", scrollToTop);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader || !active) return;

    window.scrollTo(0, 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => {
        setActive(false);
      });
      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let cancelled = false;
    let timelineStarted = false;
    let decodeFallback: number | undefined;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>("[data-loader-card]", loader);
      const scrim = loader.querySelector<HTMLElement>("[data-loader-scrim]");
      const leftText = loader.querySelector<HTMLElement>("[data-loader-left]");
      const rightText = loader.querySelector<HTMLElement>("[data-loader-right]");

      gsap.set(cards, {
        autoAlpha: 0,
        scale: 0.001,
        rotation: 0,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });

      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          setActive(false);
        },
      });

      cards.forEach((card, index) => {
        timeline.to(
          card,
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 9,
            duration: loaderCardDuration,
            ease: "power1.inOut",
          },
          0.04 + index * loaderCardStartGap,
        );
      });

      timeline
        .to({}, { duration: loaderStackHoldDuration }, loaderCardsReadyAt)
        .to(
          cards.slice(1).reverse(),
          {
            autoAlpha: 0,
            scale: 0.001,
            duration: loaderCardExitDuration,
            stagger: loaderCardExitGap,
            ease: "power2.in",
          },
          loaderCardExitStartAt,
        )
        .to(
          cards[0],
          {
            scale: 0.02,
            duration: loaderCardExitDuration,
            ease: "power2.in",
          },
          loaderCardExitStartAt + loaderFirstCardExitOffset,
        )
        .to({}, { duration: 0.25 }, loaderTimeToTinyBox)
        .to(
          [leftText, rightText],
          {
            autoAlpha: 0,
            x: (index) => (index === 0 ? -48 : 48),
            duration: 0.5,
            ease: "power2.in",
          },
          ">",
        )
        .to(
          scrim,
          { autoAlpha: 0.6, duration: 0.35, ease: "power1.inOut" },
          "<",
        )
        .to(
          cards[0],
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            borderRadius: 0,
            duration: 1.1,
            ease: "power2.inOut",
          },
          "<",
        );

      const firstImage = loader.querySelector("img");
      const startTimeline = () => {
        if (cancelled || timelineStarted) return;
        timelineStarted = true;
        if (decodeFallback !== undefined) window.clearTimeout(decodeFallback);
        timeline.play();
      };

      decodeFallback = window.setTimeout(startTimeline, 650);
      if (!firstImage || typeof firstImage.decode !== "function") {
        startTimeline();
      } else {
        void firstImage.decode().catch(() => undefined).then(startTimeline);
      }
    }, loader);

    return () => {
      cancelled = true;
      if (decodeFallback !== undefined) window.clearTimeout(decodeFallback);
      context.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <LandingIntroContext.Provider value={active}>
      {children}
      {active && (
        <div
          ref={loaderRef}
          aria-hidden="true"
          className="fixed inset-0 z-[100] overflow-hidden bg-[#731717] text-white"
        >
          <div
            data-loader-left
            className="absolute left-[5vw] top-1/2 z-10 max-w-[15vw] -translate-y-1/2 font-display text-[clamp(16px,2.2vw,32px)] leading-[0.95] tracking-[-0.04em] sm:left-[2vw] sm:max-w-[20vw]"
          >
            Bonte Pure
          </div>
          <div
            data-loader-right
            className="absolute right-[5vw] top-1/2 z-10 max-w-[15vw] -translate-y-1/2 text-right font-sans text-[clamp(12px,1.1vw,16px)] font-medium uppercase leading-[1.2] tracking-[0.14em] sm:right-[2vw] sm:max-w-[20vw]"
          >
            Est. ©2015
          </div>

          {loaderSlides.map((slide, index) => (
            <div
              key={`loader-${slide.src}`}
              data-loader-card
              className="absolute left-1/2 top-1/2 aspect-[1.12] overflow-hidden rounded-[2px] opacity-0"
              style={{
                width: "min(40vw, 360px, calc(36vh * 1.12))",
                height: "min(35.7vw, 321px, 36vh)",
                zIndex: index + 1,
              }}
            >
              <Image
                alt=""
                className="object-cover object-center"
                fill
                loading="eager"
                sizes="(max-width: 640px) 40vw, 360px"
                src={slide.src}
              />
              {index === 0 && (
                <div
                  data-loader-scrim
                  className="pointer-events-none absolute inset-0 bg-black opacity-0"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </LandingIntroContext.Provider>
  );
}
