
import { Recipe } from "@/types";
import RecipeCard from "./RecipeCard";

// Sample trending recipes data
const trendingRecipes: Recipe[] = [
  {
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
    category: "dinner"
  },
  {
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
    category: "lunch"
  },
  {
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
    category: "desserts"
  }
];

export default function TrendingRecipes() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Trending Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
