
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "@/services/api";
import { Recipe } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, Users, ChefHat, Star, ArrowLeft, Printer, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const recipeData = await getRecipeById(id);
        setRecipe(recipeData);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container-custom">
            <Skeleton className="h-8 w-48 mb-8" />
            <Skeleton className="w-full aspect-[16/9] rounded-xl mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Skeleton className="h-10 w-3/4 mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-8" />
              </div>
              <div>
                <Skeleton className="h-8 w-1/2 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-2" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
            <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/recipes")}>Browse All Recipes</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            Back
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-[40vh] object-cover rounded-xl mb-8"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-savora-500" />
                    <span>{recipe.totalTime} mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-savora-500" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat size={18} className="text-savora-500" />
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-savora-500" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {recipe.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                  <ol className="space-y-4 ml-6 list-decimal">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="text-gray-700">{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="flex gap-3 mb-8">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Printer size={16} />
                    Print
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark size={16} />
                    Save
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-savora-500 mt-1">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {recipe.nutritionInfo && (
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Nutrition Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 text-sm">Calories</p>
                        <p className="font-medium">{recipe.nutritionInfo.calories} kcal</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Protein</p>
                        <p className="font-medium">{recipe.nutritionInfo.protein}g</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Carbs</p>
                        <p className="font-medium">{recipe.nutritionInfo.carbs}g</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Fat</p>
                        <p className="font-medium">{recipe.nutritionInfo.fat}g</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
