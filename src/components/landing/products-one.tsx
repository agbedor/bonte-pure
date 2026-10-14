import Image from "next/image";

const products = [
  {
    name: "Black Soap",
    detail: "Samina Tuntum",
    size: "500g",
    image: "/products/bonte-black-soap.png",
    backImage: "/products/bonte-black-soap-back.png",
    alt: "Bonte Pure Samina Tuntum black soap box",
    price: "GHS 100.00",
  },
  {
    name: "Coconut Oil",
    detail: "Pure Coconut",
    size: "250g",
    image: "/products/bonte-coconut-oil.png",
    backImage: "/products/bonte-coconut-oil-back.png",
    alt: "Bonte Pure coconut oil jar",
    price: "GHS 200.00",
  },
  {
    name: "Shea Butter",
    detail: "Northern",
    size: "120g",
    image: "/products/bonte-shea-butter.webp",
    backImage: "/products/bonte-shea-butter-back.png",
    alt: "Bonte Pure Northern shea butter jar",
    price: "GHS 130.00",
  },
  {
    name: "Cocoa Butter",
    detail: "Akan",
    size: "250g",
    image: "/products/bonte-cocoa-butter.webp",
    backImage: "/products/bonte-cocoa-butter-back.png",
    alt: "Bonte Pure Akan cocoa butter package",
    price: "GHS 157.00",
  },
];

export default function ProductsOne() {
  return (
    <section
      aria-labelledby="products-one-title"
      className="bg-white px-[24px] py-[96px] text-[#202020] sm:px-[48px] sm:py-[128px] lg:px-[64px]"
      id="products-one"
    >
      <div className="mx-auto">
        <div className="mb-[44px] grid items-end gap-[24px] md:mb-[72px] md:grid-cols-[0.85fr_1fr_auto] md:gap-[48px]">
          <h2
            className="max-w-[420px] font-sans text-[42px] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-[68px]"
            id="products-one-title"
          >
            Our Finest Naturals
          </h2>
          <p className="max-w-[640px] pb-[6px] font-display text-[16px] leading-[1.45] tracking-[0.035em] text-[#6F6D6B] sm:text-[19px]">
            From nourishing butters to everyday essentials, explore our natural
            collection made with care in Ghana.
          </p>
          <a
            className="w-fit border-b border-[#202020] pb-[5px] font-sans text-[18px] tracking-[0.035em] transition-opacity hover:opacity-60"
            href="#products-one"
          >
            Shop All
          </a>
        </div>

        <div
          aria-label="Product collection"
          className="flex snap-x snap-mandatory gap-[16px] overflow-x-auto scroll-smooth pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:gap-[28px] md:overflow-visible md:pb-0 md:grid-cols-2 xl:grid-cols-4"
          role="region"
        >
          {products.map((product) => (
            <article
              className="group relative flex h-[560px] w-[min(78vw,420px)] shrink-0 snap-start flex-col items-center rounded-[24px] bg-[#731717] px-[14px] pb-[30px] pt-[16px] text-white md:h-auto md:min-h-[560px] md:w-auto md:shrink md:snap-none"
              key={product.name}
            >
              <span className="absolute left-[14px] top-[14px] rounded-full border border-white px-[17px] py-[6px] font-display text-[15px] leading-[1]">
                {product.size}
              </span>

              <div className="mb-[24px] mt-[50px] text-center">
                <h3 className="font-sans text-[25px] font-medium leading-[1.15] sm:text-[28px]">
                  {product.name}
                </h3>
                <p className="mt-[5px] font-display text-[18px] leading-[1.2] sm:text-[20px]">
                  {product.detail}
                </p>
              </div>

              <div className="relative h-[270px] w-full overflow-hidden rounded-[22px] bg-[#874242]">
                <Image
                  alt={product.alt}
                  className="object-contain p-[14px] transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
                  fill
                  sizes="(max-width: 767px) 78vw, (max-width: 1279px) 50vw, 25vw"
                  src={product.image}
                />
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-contain p-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  fill
                  sizes="(max-width: 767px) 78vw, (max-width: 1279px) 50vw, 25vw"
                  src={product.backImage}
                />
              </div>

              <button
                className="mt-[24px] rounded-[14px] bg-[#874242] px-[20px] py-[12px] font-display text-[16px] tracking-[0.025em] transition-colors hover:bg-[#9A5B58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                type="button"
              >
                Add Basket
              </button>
              <p className="mt-[20px] font-display text-[15px] leading-[1.2] sm:text-[18px]">
                {product.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
