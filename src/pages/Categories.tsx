
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCategories, mockRecipes } from "@/data/mockData";
import RecipeCard from "@/components/RecipeCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(mockCategories[0]?.id || "");
  
  // Filter recipes based on the active category
  const categoryRecipes = mockRecipes.filter(
    recipe => recipe.category.toLowerCase() === activeCategory || 
              recipe.tags.some(tag => tag.toLowerCase() === activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-3">Recipe Categories</h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Browse our recipes by category to find exactly what you're looking for
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {mockCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className={`p-6 cursor-pointer transition-all hover:shadow-md ${
                    activeCategory === category.id ? 'bg-savora-500 text-white' : 'bg-white'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className={`text-sm mt-1 ${
                      activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {category.recipeCount} recipes
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            {mockCategories.find(c => c.id === activeCategory)?.name || "All"} Recipes
          </h2>
          <Button variant="outline">Filter</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryRecipes.length > 0 ? (
            categoryRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-4">No recipes found in this category.</p>
              <Button onClick={() => setActiveCategory(mockCategories[0]?.id || "")}>
                View All Categories
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
