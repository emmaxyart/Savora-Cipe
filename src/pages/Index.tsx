
import { useEffect, useState } from "react";
import { Recipe } from "@/types";
import { getRandomRecipes } from "@/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrendingRecipes from "@/components/TrendingRecipes";
import CategorySection from "@/components/CategorySection";
import CollectionSection from "@/components/CollectionSection";
import { Skeleton } from "@/components/ui/skeleton";

export default function Index() {
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipes = await getRandomRecipes(6);
        setFeaturedRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {isLoading ? (
          <div className="container-custom py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Trending Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="recipe-card">
                  <Skeleton className="w-full aspect-[4/3]" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <TrendingRecipes recipes={featuredRecipes} />
        )}
        
        <CategorySection />
        <CollectionSection />
      </main>
      <Footer />
    </div>
  );
}
