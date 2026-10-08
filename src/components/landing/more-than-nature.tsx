import Image from "next/image";

const values = [
  {
    label: "100% Ghanaian",
    image: "/landing/more-than-nature/ghanaian-harvest.webp",
    alt: "Ghanaian farmers holding freshly harvested cocoa pods",
  },
  {
    label: "Female Owned",
    image: "/landing/more-than-nature/female-owned.webp",
    alt: "A smiling woman farmer standing in a cocoa farm",
  },
  {
    label: "Socially Conscious",
    image: "/landing/more-than-nature/ethical-harvest.webp",
    alt: "A farmer carefully opening a cocoa pod by hand",
  },
  {
    label: "Top Quality",
    image: "/landing/more-than-nature/coconut-quality.webp",
    alt: "Coconuts growing on a palm tree in Ghana",
  },
];

export default function MoreThanNature() {
  return (
    <section
      aria-labelledby="more-than-nature-title"
      className="relative isolate min-h-[100vh] overflow-hidden bg-[#3F2D2D] px-[24px] py-[64px] text-white sm:px-[48px]"
      id="more-than-nature"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[#FFFFFF1A] [mask-image:url('/landing/shared/e-logo.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:110%_110%]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <header className="pt-[64px] text-center lg:pt-[150px]">
          <h2
            className="font-sans text-[40px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[52px]"
            id="more-than-nature-title"
          >
            More Than Nature.
            <br />
            Rooted in Ghana.
          </h2>
          <p className="mx-auto mt-[20px] max-w-[560px] font-display text-[14px] leading-[1.4] tracking-[0.035em] text-white/90 sm:text-[16px]">
            Bonte Pure celebrates Ghana’s natural richness through local
            harvests, women-led communities, and a commitment to thoughtful,
            high-quality products.
          </p>
        </header>

        <div className="mt-[96px] grid grid-cols-2 gap-[16px] sm:gap-[20px] lg:mt-[180px] lg:grid-cols-4">
          {values.map((value) => (
            <article
              className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-[#4B2927]"
              key={value.label}
            >
              <Image
                alt={value.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1023px) 45vw, 240px"
                src={value.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10"
              />
              <h3 className="absolute inset-x-[8px] bottom-[12px] text-center font-display text-[13px] font-medium tracking-[0.025em] text-white sm:bottom-[14px] sm:text-[15px]">
                {value.label}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
