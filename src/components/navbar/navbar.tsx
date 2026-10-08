"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Where to Buy", href: "#where-to-buy" },
  { label: "Our Story", href: "#our-story" },
  { label: "Governance", href: "#governance" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-[16px] z-30 flex items-start justify-between gap-[16px] px-[24px] sm:top-[24px] sm:px-[48px] xl:top-[32px] xl:px-[64px]">
      <Link
        aria-label="Bonte Pure home"
        className="relative block h-[66px] w-[118px] shrink-0 sm:h-[78px] sm:w-[140px] xl:h-[92px] xl:w-[164px]"
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          alt="Bonte Pure"
          className="object-contain"
          fill
          sizes="(max-width: 768px) 128px, 164px"
          src="/brand/bonte-pure-logo-shifted-right.png"
        />
      </Link>

      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        className="mt-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] shadow-lg xl:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <Image src="/icons/menu.svg" alt="" width={22} height={22} />
      </button>

      <nav
        aria-label="Primary navigation"
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute right-[24px] top-full z-30 mt-[12px] w-[min(280px,calc(100vw-48px))] flex-col rounded-[24px] bg-white px-[20px] py-[8px] font-sans text-[#111827] shadow-xl sm:right-[48px] xl:static xl:mt-0 xl:flex xl:min-h-[30px] xl:w-[560px] xl:min-w-0 xl:flex-row xl:items-center xl:justify-between xl:gap-[24px] xl:rounded-[24px] xl:px-[28px] xl:py-[10px] xl:shadow-none`}
        id="primary-navigation"
      >
        <Link
          className="flex min-h-[40px] items-center gap-[6px] border-b border-black/10 font-sans text-[18px] font-normal tracking-[0.02em] xl:min-h-0 xl:border-0"
          href="#naturals"
          onClick={() => setMenuOpen(false)}
        >
          Shop
          <Image src="/icons/arrow-down.svg" alt="" width={17} height={17} />
        </Link>
        {links.map((link) => (
          <Link
            className="flex min-h-[40px] items-center border-b border-black/10 font-sans text-[18px] font-normal tracking-[0.02em] transition-opacity hover:opacity-60 xl:min-h-0 xl:border-0"
            href={link.href}
            key={link.label}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex items-center gap-[16px] xl:gap-[20px]">
          <span aria-hidden="true" className="hidden h-9 w-px bg-[#d9d9d9] xl:block" />
          <Link
            aria-label="Shopping bag"
            className="flex min-h-11 items-center xl:min-h-0"
            href="#cart"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/icons/shopping-basket.svg" alt="" width={22} height={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
