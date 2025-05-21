import { Recipe, Category } from "@/types";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Helper function to convert TheMealDB meal to our Recipe type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertMealToRecipe = (meal: any): Recipe => {
  // Extract ingredients and measures
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure.trim() + " " : ""}${ingredient.trim()}`);
    }
  }

  // Extract instructions
  const instructions = meal.strInstructions
    .split(/\r\n|\r|\n/)
    .filter((step: string) => step.trim() !== "");

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    prepTime: 15, // Not provided by API, using default
    cookTime: 30, // Not provided by API, using default
    totalTime: 45, // Not provided by API, using default
    servings: 4, // Not provided by API, using default
    difficulty: "Medium", // Not provided by API, using default
    rating: 4.5, // Not provided by API, using default
    ingredients,
    instructions,
    tags: meal.strTags ? meal.strTags.split(',') : [],
    category: meal.strCategory,
    nutritionInfo: {
      calories: 0, // Not provided by API
      protein: 0, // Not provided by API
      carbs: 0, // Not provided by API
      fat: 0 // Not provided by API
    }
  };
};

// Get random recipes
export const getRandomRecipes = async (count = 10): Promise<Recipe[]> => {
  const recipes: Recipe[] = [];
  
  // TheMealDB only returns one random meal at a time, so we need to make multiple requests
  for (let i = 0; i < count; i++) {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      const data = await response.json();
      
      if (data.meals && data.meals.length > 0) {
        const recipe = convertMealToRecipe(data.meals[0]);
        recipes.push(recipe);
      }
    } catch (error) {
      console.error("Error fetching random recipe:", error);
    }
  }
  
  return recipes;
};

// Get recipe by ID
export const getRecipeById = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    
    if (data.meals && data.meals.length > 0) {
      return convertMealToRecipe(data.meals[0]);
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    return null;
  }
};

// Search recipes by name
export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await response.json();
    
    if (data.meals) {
      return data.meals.map(convertMealToRecipe);
    }
    
    return [];
  } catch (error) {
    console.error("Error searching recipes:", error);
    return [];
  }
};

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    const data = await response.json();
    
    if (data.categories) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.categories.map((category: any) => ({
        id: category.strCategory.toLowerCase(),
        name: category.strCategory,
        icon: "🍽️", // API doesn't provide icons
        recipeCount: 0 // We'll need to fetch this separately
      }));
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Get recipes by category
export const getRecipesByCategory = async (category: string): Promise<Recipe[]> => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();
    
    if (data.meals) {
      // The filter endpoint only returns basic meal info, so we need to fetch details for each meal
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recipePromises = data.meals.map(async (meal: any) => {
        const detailResponse = await fetch(`${BASE_URL}/lookup.php?i=${meal.idMeal}`);
        const detailData = await detailResponse.json();
        
        if (detailData.meals && detailData.meals.length > 0) {
          return convertMealToRecipe(detailData.meals[0]);
        }
        
        return null;
      });
      
      const recipes = await Promise.all(recipePromises);
      return recipes.filter((recipe): recipe is Recipe => recipe !== null);
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching recipes by category:", error);
    return [];
  }
};