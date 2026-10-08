import Image from "next/image";

export default function Stories() {
  return (
    <section
      aria-labelledby="stories-title"
      className="bg-white px-[24px] py-[72px] text-[#1F1F1F] sm:px-[48px] sm:py-[96px] lg:px-[64px]"
      id="stories"
    >
      <div className="mx-auto">
        <h2
          className="font-sans text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[48px]"
          id="stories-title"
        >
          Our Story Begins in Ghana.
          <br className="hidden sm:block" /> Our Goodness Goes Beyond.
        </h2>

        <div className="mt-[64px] flex justify-center gap-[12px] sm:mt-[96px] sm:gap-[16px]">
          <div className="relative h-[280px] w-[calc(50%-6px)] max-w-[300px] overflow-hidden rounded-[16px] sm:h-[400px] sm:w-[270px]">
            <Image
              alt="A green hillside in Ghana"
              className="object-cover"
              fill
              sizes="(max-width: 639px) 45vw, 245px"
              src="/landing/stories/ghana-landscape.png"
            />
          </div>
          <div className="relative h-[280px] w-[calc(50%-6px)] max-w-[300px] overflow-hidden rounded-[16px] sm:h-[400px] sm:w-[270px]">
            <Image
              alt="Ghanaian farmers sharing freshly harvested cocoa pods"
              className="object-cover"
              fill
              sizes="(max-width: 639px) 45vw, 245px"
              src="/landing/more-than-nature/ghanaian-harvest.webp"
            />
          </div>
        </div>

        <div className="mt-[24px] grid gap-[24px] border-t border-[#E7E5E2] pt-[24px] text-[#696969] md:grid-cols-[1fr_2.2fr_1fr] md:gap-[32px]">
          <p className="font-display text-[13px]">Our Heritage</p>
          <div className="font-display text-[15px] leading-[1.95] sm:text-[16px]">
            <p>
              Bonte Pure celebrates the richness of Ghana’s natural ingredients
              and the people who bring them to life. From carefully gathered
              shea to cocoa and coconut, every product is rooted in the land
              and crafted with care.
            </p>
            <p className="mt-[14px]">
              We work to share Ghanaian goodness with the world, while honoring
              the communities and traditions behind every harvest.
            </p>
          </div>
          <a
            className="h-fit w-fit border-b border-[#7A4824] pb-[4px] font-display text-[13px] text-[#38322F] md:justify-self-end"
            href="#more-than-nature"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
