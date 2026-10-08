import Image from "next/image";

export default function Crafted() {
  return (
    <section
      aria-labelledby="crafted-title"
      className="relative isolate flex h-[400px] items-center justify-center overflow-hidden text-center text-[#FFFFC7] sm:h-screen"
      id="crafted"
    >
      <Image
        alt="Bonte Pure natural ingredients and products arranged in colorful columns"
        className="object-fill"
        fill
        sizes="100vw"
        src="/landing/crafted/crafted.png"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#00000099]" />
      <div className="relative z-10 flex flex-col items-center px-[24px]">
        <p className="max-w-[360px] font-display text-[12px] tracking-[0.08em] text-white sm:max-w-none sm:text-[16px]">
          [ Crafted in Ghana. Shared With The World ]
        </p>
        <h2
          className="mt-[14px] max-w-[360px] font-sans text-[34px] font-medium uppercase leading-[0.98] tracking-[0.025em] sm:mt-[24px] sm:max-w-none sm:text-[72px] sm:leading-[0.95] lg:text-[92px]"
          id="crafted-title"
        >
         authentic, Natural goodness
        </h2>
        <a
          className="mt-[28px] inline-flex min-h-[46px] items-center bg-[#9D7474] px-[28px] font-sans text-[15px] font-medium text-white transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-[200px] sm:min-h-[52px]"
          href="#products-one"
        >
          Shop Naturals
        </a>
      </div>
    </section>
  );
}
