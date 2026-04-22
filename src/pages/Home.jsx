import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
import MarketplaceSection from "../components/MarketplaceSection";
import ProductsSection from "../components/ProductsSection";
import ExperienceSection from "../components/ExperienceSection";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto w-full bg-gray-100">
      <HeroSection onOpenShop={() => navigate("/shop")} />
      <BrandSection />
      <MarketplaceSection onOpenShop={() => navigate("/shop")} />
      <ProductsSection onOpenShop={() => navigate("/shop")} />
      <ExperienceSection onOpenShop={() => navigate("/shop")} />
    </main>
  );
}
