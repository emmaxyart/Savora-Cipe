
import { Recipe, Category, Collection } from "@/types";

export const mockRecipes: Recipe[] = [
  {
    id: "grilled-salmon-bowl",
    title: "Grilled Salmon Power Bowl",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    difficulty: "Medium",
    rating: 4.8,
    ingredients: [
      "2 salmon fillets",
      "1 cup quinoa, cooked",
      "1 avocado, sliced",
      "1 cup cherry tomatoes, halved",
      "2 cups baby spinach",
      "2 tbsp olive oil",
      "1 lemon, juiced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season salmon fillets with salt, pepper, and a drizzle of olive oil.",
      "Grill salmon for about 4 minutes per side until cooked through.",
      "Arrange quinoa, spinach, tomatoes, and avocado in a bowl.",
      "Place grilled salmon on top.",
      "Drizzle with olive oil and lemon juice."
    ],
    tags: ["High Protein", "Gluten-Free", "Healthy", "Fish"],
    category: "Main Dish",
    nutritionInfo: {
      calories: 450,
      protein: 35,
      carbs: 30,
      fat: 22
    }
  },
  {
    id: "chocolate-chip-cookies",
    title: "Classic Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2400",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 24,
    difficulty: "Easy",
    rating: 4.9,
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup brown sugar, packed",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups semi-sweet chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Combine flour, baking soda, and salt in a small bowl.",
      "Beat butter, granulated sugar, and brown sugar in a large mixer bowl.",
      "Add eggs one at a time, then vanilla, and beat until creamy.",
      "Gradually beat in flour mixture.",
      "Stir in chocolate chips.",
      "Drop rounded tablespoons onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Let cool on baking sheets for 2 minutes, then transfer to wire racks."
    ],
    tags: ["Dessert", "Baking", "Cookies", "Kid-Friendly"],
    category: "Dessert"
  },
  {
    id: "vegetarian-buddha-bowl",
    title: "Vegetarian Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2400",
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 2,
    difficulty: "Easy",
    rating: 4.7,
    ingredients: [
      "1 sweet potato, cubed",
      "1 cup chickpeas, drained and rinsed",
      "1 cup quinoa, cooked",
      "1 avocado, sliced",
      "1 cup kale, chopped",
      "1/2 cup red cabbage, sliced",
      "1/4 cup tahini",
      "1 lemon, juiced",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss sweet potato cubes in olive oil, salt, and pepper.",
      "Roast sweet potatoes for 25-30 minutes until tender.",
      "Arrange quinoa, chickpeas, sweet potatoes, kale, cabbage, and avocado in a bowl.",
      "Mix tahini with lemon juice and a splash of water to create a dressing.",
      "Drizzle dressing over the bowl."
    ],
    tags: ["Vegetarian", "Vegan", "Plant-Based", "Healthy", "Gluten-Free"],
    category: "Main Dish",
    nutritionInfo: {
      calories: 550,
      protein: 18,
      carbs: 65,
      fat: 26
    }
  }
];

export const mockCategories: Category[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "☕",
    recipeCount: 42
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: "🥪",
    recipeCount: 38
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: "🍲",
    recipeCount: 56
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
    recipeCount: 28
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    icon: "🥗",
    recipeCount: 35
  },
  {
    id: "quick-easy",
    name: "Quick & Easy",
    icon: "⏱️",
    recipeCount: 20
  }
];

export const mockCollections: Collection[] = [
  {
    id: "summer-grilling",
    name: "Summer Grilling",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2400",
    recipeCount: 12
  },
  {
    id: "weeknight-dinners",
    name: "Weeknight Dinners",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2400",
    recipeCount: 18
  },
  {
    id: "holiday-baking",
    name: "Holiday Baking",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=2400",
    recipeCount: 15
  },
  {
    id: "healthy-meal-prep",
    name: "Healthy Meal Prep",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2400",
    recipeCount: 10
  }
];
