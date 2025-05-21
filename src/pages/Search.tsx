
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchRecipes } from "@/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Recipe } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search function
  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await searchRecipes(searchTerm);
      setRecipes(response || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };

  // Initial search when page loads
  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">Search Recipes</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search for recipes, ingredients, or cuisines" 
              className="pl-10 py-6 focus-visible:ring-savora-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-savora-500 hover:bg-savora-600 text-white"
            >
              Search
            </Button>
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-savora-500"></div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-lg">
                {recipes.length > 0 
                  ? `Found ${recipes.length} recipe${recipes.length === 1 ? '' : 's'} for "${query}"` 
                  : query ? `No recipes found for "${query}"` : 'Enter a search term above'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
