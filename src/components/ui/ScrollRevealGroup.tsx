"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (
      !group ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]", group);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 28, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none restart reverse",
            },
          },
        );
      });
    }, group);

    return () => context.revert();
  }, []);

  return (
    <div className={className} ref={groupRef}>
      {children}
    </div>
  );
}
