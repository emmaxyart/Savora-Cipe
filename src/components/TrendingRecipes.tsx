
import { Recipe } from "@/types";
import RecipeCard from "./RecipeCard";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { motion } from "framer-motion";

interface TrendingRecipesProps {
  recipes: Recipe[];
}

export default function TrendingRecipes({ recipes }: TrendingRecipesProps) {
  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Trending Recipes
        </motion.h2>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
