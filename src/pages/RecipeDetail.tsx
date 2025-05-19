
import { useParams } from "react-router-dom";
import { Recipe } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Clock, Bookmark, Heart, Share, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Sample recipe data - in a real app, this would come from an API or database
const recipeData: Record<string, Recipe> = {
  "creamy-garlic-pasta": {
    id: "creamy-garlic-pasta",
    title: "Creamy Garlic Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646659b?q=80&w=1080",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: "Easy",
    rating: 4.8,
    ingredients: [
      "8 oz fettuccine pasta",
      "3 tbsp butter",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook pasta according to package directions. Reserve 1/2 cup pasta water before draining.",
      "In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
      "Reduce heat to medium-low and add heavy cream. Simmer for 3-4 minutes until it starts to thicken slightly.",
      "Add cooked pasta to the sauce and toss to coat. Add parmesan cheese and stir until melted and creamy.",
      "If sauce is too thick, add a splash of reserved pasta water to reach desired consistency.",
      "Season with salt and pepper to taste. Garnish with fresh parsley before serving."
    ],
    tags: ["pasta", "italian", "comfort food", "vegetarian"],
    category: "dinner",
    author: "Jane Doe",
    nutritionInfo: {
      calories: 450,
      protein: 12,
      carbs: 48,
      fat: 25
    }
  },
  "grilled-salmon-bowl": {
    id: "grilled-salmon-bowl",
    title: "Grilled Salmon Bowl",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1080",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    difficulty: "Medium",
    rating: 4.9,
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 tbsp olive oil",
      "1 tsp paprika",
      "1 cup cooked quinoa",
      "1 avocado, sliced",
      "1 cucumber, diced",
      "Cherry tomatoes, halved",
      "Lemon wedges",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat grill or pan to medium-high heat.",
      "Brush salmon with olive oil and season with paprika, salt, and pepper.",
      "Grill salmon for 4-5 minutes per side until cooked through.",
      "Divide cooked quinoa between two bowls.",
      "Top with grilled salmon, sliced avocado, diced cucumber, and halved cherry tomatoes.",
      "Serve with lemon wedges and additional seasoning if desired."
    ],
    tags: ["seafood", "healthy", "high-protein", "gluten-free"],
    category: "lunch",
    author: "John Smith",
    nutritionInfo: {
      calories: 420,
      protein: 32,
      carbs: 28,
      fat: 22
    }
  },
  "chocolate-lava-cake": {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1080",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    ingredients: [
      "4 oz semi-sweet chocolate",
      "1/2 cup unsalted butter",
      "1 cup powdered sugar",
      "2 whole eggs",
      "2 egg yolks",
      "6 tbsp all-purpose flour",
      "Vanilla ice cream for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter and lightly flour four 6-oz ramekins.",
      "Melt chocolate and butter in the microwave or in a double boiler until smooth.",
      "Whisk in powdered sugar until well blended. Add eggs and egg yolks and whisk until combined.",
      "Stir in flour until just combined. Divide batter evenly among prepared ramekins.",
      "Place ramekins on a baking sheet and bake for 12-14 minutes until sides are firm but centers are soft.",
      "Let stand for 1 minute, then carefully run a knife around the edges and invert onto dessert plates.",
      "Serve immediately with vanilla ice cream."
    ],
    tags: ["dessert", "chocolate", "baking", "indulgent"],
    category: "desserts",
    author: "Sarah Johnson",
    nutritionInfo: {
      calories: 380,
      protein: 6,
      carbs: 42,
      fat: 24
    }
  }
};

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  
  // Get recipe data
  const recipe = id ? recipeData[id] : null;
  
  if (!recipe) {
    return (
      <div>
        <Navbar />
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Recipe Not Found</h2>
            <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleToggleIngredient = (ingredient: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  const handleSave = () => {
    toast.success("Recipe saved to your collection!");
  };

  const handleShare = () => {
    // In a real app, we would implement actual sharing functionality
    toast.success("Share link copied to clipboard!");
  };

  return (
    <div>
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-savora-500">Home</a> {" / "}
          <a href={`/categories/${recipe.category}`} className="hover:text-savora-500">
            {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
          </a> {" / "}
          <span>{recipe.title}</span>
        </div>
        
        {/* Recipe Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill={star <= Math.floor(recipe.rating) ? "currentColor" : "none"}
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={star <= Math.floor(recipe.rating) ? "text-yellow-400" : "text-gray-300"}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <span className="text-lg font-medium">{recipe.rating.toFixed(1)}</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                <span>{recipe.author || "Unknown Chef"}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{recipe.difficulty}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Clock size={20} className="mx-auto mb-1 text-savora-500" />
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-medium">{recipe.prepTime} min</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Clock size={20} className="mx-auto mb-1 text-savora-500" />
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-medium">{recipe.cookTime} min</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mx-auto mb-1 text-savora-500"
                >
                  <path d="M17 8c0 4.5-2.5 8-7 8s-7-3.5-7-8 2.5-8 7-8 7 3.5 7 8Z"></path>
                  <path d="M17 8c0 4.5 2.5 8 7 8s7-3.5 7-8-2.5-8-7-8-7 3.5-7 8Z"></path>
                  <path d="M10 21c0-2.2 3.6-4 8-4s8 1.8 8 4"></path>
                </svg>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            
            <div className="flex gap-3 mb-6">
              <Button onClick={handleSave} variant="outline" className="flex items-center gap-2">
                <Bookmark size={16} /> Save
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share size={16} /> Share
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Heart size={16} className="text-red-500" />
              </Button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Nutrition (per serving)</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <p className="text-lg font-medium">{recipe.nutritionInfo?.calories || "N/A"}</p>
                  <p className="text-xs text-gray-500">Calories</p>
                </div>
                <div>
                  <p className="text-lg font-medium">{recipe.nutritionInfo?.protein || "N/A"}g</p>
                  <p className="text-xs text-gray-500">Protein</p>
                </div>
                <div>
                  <p className="text-lg font-medium">{recipe.nutritionInfo?.carbs || "N/A"}g</p>
                  <p className="text-xs text-gray-500">Carbs</p>
                </div>
                <div>
                  <p className="text-lg font-medium">{recipe.nutritionInfo?.fat || "N/A"}g</p>
                  <p className="text-xs text-gray-500">Fat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Checkbox 
                      id={`ingredient-${index}`}
                      checked={checkedIngredients[ingredient] || false}
                      onCheckedChange={() => handleToggleIngredient(ingredient)}
                      className="mt-1"
                    />
                    <label 
                      htmlFor={`ingredient-${index}`} 
                      className={`cursor-pointer ${checkedIngredients[ingredient] ? 'line-through text-gray-400' : ''}`}
                    >
                      {ingredient}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <Separator className="mb-4" />
              <ol className="space-y-6">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="bg-savora-100 text-savora-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <a 
                key={tag} 
                href={`/tags/${tag}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
