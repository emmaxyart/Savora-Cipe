
import { Link } from "react-router-dom";
import { Recipe } from "@/types";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export default function RecipeCard({ recipe, className }: RecipeCardProps) {
  return (
    <motion.div 
      className={cn("recipe-card group", className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/recipes/${recipe.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full w-8 h-8"
            onClick={(e) => {
              e.preventDefault();
              console.log("Saving recipe:", recipe.id);
              // In a real app, we would toggle saved state
            }}
          >
            <Bookmark size={16} className="text-gray-700" />
          </Button>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/recipes/${recipe.id}`} className="block">
          <h3 className="font-semibold text-lg mb-2 hover:text-savora-500 transition-colors">{recipe.title}</h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-sm text-gray-500">{recipe.prepTime + recipe.cookTime} mins</span>
          </div>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{recipe.difficulty}</span>
        </div>

        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
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
          <span className="ml-2 text-sm font-medium">{recipe.rating.toFixed(1)}</span>
        </div>
      </div>
    </motion.div>
  );
}
