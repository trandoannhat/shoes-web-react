import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";
import Services from "./../components/home/Services";
import BestSeller from "./../components/home/BestSeller";
import BannerSale from "../components/home/BannerSale";
import ProductGrid from "../components/home/ProductGrid";

function Home() {
  return (
    <div className="space-y-16 text-center">
      <Hero />
      <Services />
      <FeaturedCategories />
      <BestSeller />
      <BannerSale />
      <ProductGrid />
    </div>
  );
}

export default Home;
