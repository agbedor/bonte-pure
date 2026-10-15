"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Shea Butter",
    image: "/landing/grown-in-ghana/shea-product.png",
    alt: "Bonte Pure shea butter in a decorated cream jar",
    width: 1696,
    height: 2528,
  },
  {
    name: "Coconut Oil",
    image: "/products/bonte-coconut-oil.png",
    alt: "Bonte Pure coconut oil",
    width: 2392,
    height: 5528,
  },
  {
    name: "Cocoa Butter",
    image: "/products/bonte-cocoa-butter.webp",
    alt: "Bonte Pure cocoa butter",
    width: 1985,
    height: 3090,
  },
];

export default function GrownInGhana() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateProduct = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrolled = Math.max(0, -section.getBoundingClientRect().top);
        const scrollStep = Math.max(window.innerHeight, 1);
        setActiveProduct(Math.min(products.length - 1, Math.floor(scrolled / scrollStep)));
      });
    };

    updateProduct();
    window.addEventListener("scroll", updateProduct, { passive: true });
    window.addEventListener("resize", updateProduct);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProduct);
      window.removeEventListener("resize", updateProduct);
    };
  }, []);

  const isCreamStage = activeProduct === 1;

  return (
    <section
      aria-labelledby="grown-in-ghana-title"
      className="relative h-[400svh]"
      id="grown-in-ghana"
      ref={sectionRef}
    >
      <div
        className={`sticky top-0 isolate flex h-svh items-center overflow-hidden px-[24px] py-[64px] text-[#E8DEB0] transition-colors duration-700 sm:px-[48px] ${
          isCreamStage ? "bg-[#D6D4A0]" : "bg-[#731717]"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 transition-colors duration-700 [mask-image:url('/landing/shared/e-logo.svg')] [mask-position:center_-30px] [mask-repeat:no-repeat] [mask-size:200%_80%] ${
            isCreamStage ? "bg-[#731717]" : "bg-[#D6D4A0]"
          }`}
        />

        <div className="relative mx-auto h-[720px] w-full max-w-none sm:h-[900px] lg:h-[1000px]">
          {products.map((product, index) => (
            <Image
              alt={product.alt}
              aria-hidden={activeProduct !== index}
              className={`absolute left-1/2 top-[300px] z-10 h-[300px] w-auto max-w-none -translate-x-1/2 object-contain transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none sm:top-[220px] sm:h-[500px] lg:top-[300px] lg:h-[600px] ${
                activeProduct === index ? "scale-100 opacity-100" : "scale-[0.94] opacity-0"
              }`}
              key={product.name}
              height={product.height}
              priority={index === 0}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 600px"
              src={product.image}
              width={product.width}
            />
          ))}

          <h2
            className={`absolute inset-x-0 bottom-0 z-20 w-full bg-clip-text px-[8px] text-center font-sans text-[40px] font-semibold leading-[1] text-transparent transition-all duration-700 sm:text-[72px] lg:text-[80px] xl:whitespace-nowrap xl:text-[88px] 2xl:text-[112px] ${
              isCreamStage
                ? "bg-[linear-gradient(180deg,#731717_0%,#7317171A_100%)]"
                : "bg-[linear-gradient(180deg,#D6D4A0_0%,#D6D4A01A_100%)]"
            }`}
            id="grown-in-ghana-title"
          >
            Grown Naturally in Ghana
          </h2>
        </div>
      </div>
    </section>
  );
}
