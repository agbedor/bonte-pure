"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../navbar/navbar";
import { useLandingIntroActive } from "./landing-intro-context";
import { heroSlides } from "./hero-slides";

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const introActive = useLandingIntroActive();
  const heroRef = useRef<HTMLElement>(null);
  const activeSlide = activeStep;

  useEffect(() => {
    if (introActive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [introActive]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (introActive || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealTargets = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]", hero);
    const reveal = gsap.fromTo(
      revealTargets,
      { autoAlpha: 0, y: 24, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
      },
    );

    return () => {
      reveal.kill();
    };
  }, [introActive]);

  return (
    <section
      ref={heroRef}
      aria-label="Bonte Pure natural products"
      className="relative isolate h-screen min-h-[680px] w-full overflow-hidden bg-[#27221f] text-white"
    >
      {heroSlides.map((slide, index) => (
        <Image
          key={`${slide.src}-${index}`}
          src={slide.src}
          alt={index === activeSlide ? slide.alt : ""}
          aria-hidden={index !== activeSlide}
          fill
          sizes="100vw"
          preload={index === 0}
          className={`pointer-events-none object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#00000099]"
      />

      <Navbar />

      <div className="absolute inset-x-0 bottom-[32px] z-10 flex flex-col items-start justify-between gap-[24px] px-[24px] sm:bottom-[40px] sm:px-[40px] md:flex-row md:items-end md:gap-[28px] md:px-[64px]">
        <h1
          data-hero-reveal
          className="max-w-[720px] text-balance font-sans text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[64px] md:text-[76px]"
        >
          Crafted in Ghana.
          <br />
          Made from Natural
          <br />
          Goodness.
        </h1>

        <Link
          data-hero-reveal
          className="inline-flex h-[50px] min-w-[180px] items-center justify-center rounded-[8px] bg-[#731717] px-[24px] font-display text-[18px] font-normal tracking-[0.015em] text-white transition-colors hover:bg-[#5d1013] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="#naturals"
        >
          Shop Naturals
        </Link>
      </div>

      <div
        aria-label="Choose hero image"
        className="absolute left-[24px] right-[24px] top-[112px] z-20 flex w-auto gap-[8px] sm:left-[40px] sm:right-[48px] md:left-auto md:right-[64px] md:top-[100px] md:w-[560px] md:gap-[12px]"
        data-hero-reveal
        role="group"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={`${slide.src}-${index}`}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={activeStep === index}
            className="group h-4 flex-1 cursor-pointer py-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setActiveStep(index)}
            type="button"
          >
            <span
              className={`block h-[7px] w-full rounded-full transition-colors duration-300 ${
                activeStep === index ? "bg-white" : "bg-white/65 group-hover:bg-white/85"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
