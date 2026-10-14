import Image from "next/image";

const linkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Shop", href: "#products-one" },
      { label: "Our Story", href: "#stories" },
      { label: "Accessories", href: "#accessories" },
      { label: "Our Impact", href: "#more-than-nature" },
      { label: "Join the Ritual", href: "#ritual" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Shipping", href: "#shipping" },
      { label: "Refunds", href: "#refunds" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

const products = [
  {
    name: "Cocoa butter",
    src: "/landing/footer/cocoa-butter.png",
    className: "bottom-[-18px] right-[135px] z-0 w-[145px] sm:bottom-[-45px] sm:right-[190px] sm:w-[220px] md:bottom-[-55px] md:right-[250px] md:w-[310px]",
  },
  {
    name: "Black soap",
    src: "/landing/footer/black-soap.png",
    className: "bottom-[-14px] right-[-14px] z-10 w-[145px] sm:bottom-[-30px] sm:right-[-20px] sm:w-[220px] md:bottom-[-34px] md:right-[-28px] md:w-[310px]",
  },
  {
    name: "Cocoa beans",
    src: "/landing/footer/cocoa-beans.png",
    className: "bottom-[-4px] right-[48px] z-20 w-[145px] sm:bottom-[-10px] sm:right-[60px] sm:w-[220px] md:bottom-[-12px] md:right-[85px] md:w-[310px]",
  },
  {
    name: "Coconut",
    src: "/landing/footer/coconut.png",
    className: "bottom-[-55px] right-[84px] z-30 w-[145px] sm:bottom-[-70px] sm:right-[105px] sm:w-[220px] md:bottom-[-85px] md:right-[145px] md:w-[310px]",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative min-h-[980px] overflow-hidden bg-[#D6D4A0] px-[24px] py-[48px] text-white sm:min-h-[1000px] sm:px-[48px] sm:py-[64px] md:min-h-[760px] md:py-[96px] lg:px-[64px]"
      id="footer"
    >
      <div className="relative z-40 grid grid-cols-2 gap-x-[32px] gap-y-[44px] sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-[56px]">
        {linkGroups.map((group) => (
          <nav aria-label={group.title} key={group.title}>
            <h2 className="mb-[24px] font-sans text-[20px] font-medium sm:text-[24px]">
              {group.title}
            </h2>
            <ul className="space-y-[14px]">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="font-display text-[15px] transition-opacity hover:opacity-70 sm:text-[17px]"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="mb-[24px] font-sans text-[20px] font-medium sm:text-[24px]">
            Contact
          </h2>
          <p className="font-display text-[15px] leading-[1.7] sm:text-[17px]">
            Questions about our products or your order? Get in touch.
          </p>
        </div>

        <div>
          <h2 className="mb-[24px] font-sans text-[20px] font-medium sm:text-[24px]">
            Made in Ghana
          </h2>
          <p className="font-display text-[15px] leading-[1.7] sm:text-[17px]">
            Natural goodness, thoughtfully made.
          </p>
        </div>

        <div>
          <h2 className="mb-[24px] font-sans text-[20px] font-medium sm:text-[24px]">
            Follow Us
          </h2>
          <ul className="space-y-[14px] font-display text-[15px] sm:text-[17px]">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[340px] max-w-full sm:h-[340px] sm:w-[450px] md:h-[480px] md:w-[650px]"
      >
        {products.map((product) => (
          <Image
            alt=""
            className={`absolute h-auto max-h-[470px] object-contain ${product.className}`}
            key={product.name}
            height={1600}
            src={product.src}
            width={1600}
            sizes="(max-width: 639px) 250px, 310px"
          />
        ))}
      </div>

      <div className="relative z-40 mt-[72px] pb-[260px] sm:mt-[84px] sm:pb-[340px] md:absolute md:bottom-[42px] md:left-[48px] md:mt-0 md:pb-0 lg:left-[64px]">
        <p className="font-display text-[14px] sm:text-[16px]">
          © 2026 Bonte Pure. All rights reserved.
        </p>
        <Image
          alt="Bonte Pure — Natural Goodness"
          className="mt-[14px] h-auto w-[180px] object-contain object-left sm:mt-[20px] sm:w-[240px] md:mt-[28px] md:w-[360px]"
          height={800}
          src="/brand/bonte-pure-logo-shifted-right.png"
          width={1200}
        />
      </div>
    </footer>
  );
}
