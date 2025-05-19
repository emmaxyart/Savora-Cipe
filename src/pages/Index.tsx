
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendingRecipes from "@/components/TrendingRecipes";
import CollectionSection from "@/components/CollectionSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <TrendingRecipes />
      <CollectionSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
