import Hero from "@/components/landing/hero";
import GrownInGhana from "@/components/landing/grown-in-ghana";
import ProductsOne from "@/components/landing/products-one";
import MoreThanNature from "@/components/landing/more-than-nature";
import Stories from "@/components/landing/stories";
import Accessories from "@/components/landing/accessories";
import Ritual from "@/components/landing/ritual";
import Crafted from "@/components/landing/crafted";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <GrownInGhana />
      <ProductsOne />
      <MoreThanNature />
      <Stories />
      <Accessories />
      <Ritual />
      <Crafted />
      <Footer />
    </main>
  );
}
