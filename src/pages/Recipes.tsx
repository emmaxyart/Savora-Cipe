
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { mockRecipes } from "@/data/mockData";
import { Recipe } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];
  const timeRange = [0, 60]; // Min and max time in minutes

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Recipes</h1>
            <p className="text-gray-600 mb-4">Discover our collection of delicious recipes</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <select 
              className="px-3 py-2 border rounded-md text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="time-asc">Cooking Time (Low to High)</option>
              <option value="time-desc">Cooking Time (High to Low)</option>
            </select>
            
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              <SlidersHorizontal size={16} />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filters */}
          <Collapsible 
            open={isFiltersOpen} 
            onOpenChange={setIsFiltersOpen}
            className="md:hidden w-full mb-6"
          >
            <CollapsibleContent>
              <Card className="p-4">
                <FiltersContent />
              </Card>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Desktop Filters */}
          <div className="hidden md:block w-full max-w-xs">
            <Card className="p-4 sticky top-24">
              <FiltersContent />
            </Card>
          </div>
          
          {/* Recipe Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="px-8">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

// Extracted filter content for reuse in both mobile and desktop views
function FiltersContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Difficulty</h3>
        <div className="space-y-2">
          {["Easy", "Medium", "Hard"].map((difficulty) => (
            <div key={difficulty} className="flex items-center">
              <Checkbox id={`difficulty-${difficulty.toLowerCase()}`} />
              <label 
                htmlFor={`difficulty-${difficulty.toLowerCase()}`}
                className="ml-2 text-sm"
              >
                {difficulty}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-4">Dietary Preferences</h3>
        <div className="space-y-2">
          {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"].map((diet) => (
            <div key={diet} className="flex items-center">
              <Checkbox id={`diet-${diet.toLowerCase()}`} />
              <label 
                htmlFor={`diet-${diet.toLowerCase()}`}
                className="ml-2 text-sm"
              >
                {diet}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-4">Cooking Time</h3>
        <Slider defaultValue={[30]} max={120} step={5} className="mb-6" />
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">0 min</span>
          <span className="text-xs text-gray-500">120 min</span>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Healthy", "Quick"].map((tag) => (
            <div 
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-4">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="link" className="w-full mt-2">Reset All</Button>
      </div>
    </div>
  );
}
