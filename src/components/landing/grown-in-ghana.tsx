import Image from "next/image";

export default function GrownInGhana() {
  return (
    <section
      aria-labelledby="grown-in-ghana-title"
      className="relative isolate flex h-[800px] items-center overflow-hidden bg-[#3F2D2D] px-[24px] py-[64px] text-[#E8DEB0] sm:h-auto sm:min-h-screen sm:px-[48px]"
      id="grown-in-ghana"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[#D6D4A0] [mask-image:url('/landing/shared/e-logo.svg')] [mask-position:center_-30px] [mask-repeat:no-repeat] [mask-size:200%_80%]"
      />

      <div className="relative mx-auto h-[720px] w-full max-w-none sm:h-[900px] lg:h-[1000px]">
        <Image
          alt="Bonte Pure shea butter in a decorated cream jar"
          className="absolute left-1/2 top-[300px] z-10 h-[300px] w-auto max-w-none -translate-x-1/2 object-contain sm:top-[220px] sm:h-[500px] lg:top-[300px] lg:h-[600px]"
          height={900}
          priority={false}
          src="/landing/grown-in-ghana/shea-product.png"
          width={600}
        />

        <h2
          className="absolute inset-x-0 bottom-0 z-20 w-full bg-[linear-gradient(180deg,#D6D4A0_0%,#D6D4A01A_100%)] bg-clip-text px-[8px] text-center font-sans text-[40px] font-semibold leading-[1] text-transparent sm:text-[72px] lg:text-[80px] xl:whitespace-nowrap xl:text-[88px] 2xl:text-[112px]"
          id="grown-in-ghana-title"
        >
          Grown Naturally in Ghana
        </h2>
      </div>
    </section>
  );
}
